import { supabase } from "@/lib/supabase";
import type { ProjectFormValues } from "@/features/admin/projects/schemas/project-form.schema";
import type { Project } from "@/content/content-types";
import { fetchProjectBySlug } from "@/lib/api/projects";

function toDbPayload(values: ProjectFormValues) {
    return {
        slug: values.slug,
        name: values.name,
        summary: values.summary,
        description: values.description || null,
        github_url: values.githubUrl || null,
        live_url: values.liveUrl || null,
        image_url: values.image || null,
        status: values.status,
        category: values.category ?? null,
        role: values.role ?? null,
        featured: values.featured,
        sort_order: values.sortOrder,
    };
}

async function replaceProjectTechnologies(projectId: number, values: ProjectFormValues) {
    const allSlugs = [...values.languages, ...values.technologies];

    const { error: deleteError } = await supabase
        .from("project_technologies")
        .delete()
        .eq("project_id", projectId);

    if (deleteError) throw deleteError;

    if (allSlugs.length === 0) return;

    const { data: techRows, error: techError } = await supabase
        .from("technologies")
        .select("id, slug")
        .in("slug", allSlugs);

    if (techError) throw techError;

    const techIdBySlug = new Map(
        (techRows ?? []).map((row) => [row.slug as string, row.id as number])
    );

    const inserts = [
        ...values.languages.map((slug, index) => ({
            project_id: projectId,
            technology_id: techIdBySlug.get(slug),
            is_language: true,
            sort_order: index,
        })),
        ...values.technologies.map((slug, index) => ({
            project_id: projectId,
            technology_id: techIdBySlug.get(slug),
            is_language: false,
            sort_order: index,
        })),
    ].filter((row) => row.technology_id != null);

    if (inserts.length === 0) return;

    const { error: insertError } = await supabase
        .from("project_technologies")
        .insert(inserts);

    if (insertError) throw insertError;
}

async function replaceProjectScreenshots(projectId: number, values: ProjectFormValues) {
    const { error: deleteError } = await supabase
        .from("project_screenshots")
        .delete()
        .eq("project_id", projectId);

    if (deleteError) throw deleteError;

    if (values.screenshots.length === 0) return;

    const inserts = values.screenshots.map((screenshot, index) => ({
        project_id: projectId,
        url: screenshot.url,
        alt: screenshot.alt,
        sort_order: Number.isFinite(screenshot.sortOrder)
            ? screenshot.sortOrder
            : index,
    }));

    const { error: insertError } = await supabase
        .from("project_screenshots")
        .insert(inserts);

    if (insertError) throw insertError;
}

export async function createProject(values: ProjectFormValues): Promise<Project> {
    const payload = toDbPayload(values);

    const { data, error } = await supabase
        .from("projects")
        .insert(payload)
        .select("id, slug")
        .single();

    if (error) throw error;

    const projectId = data.id as number;
    const slug = data.slug as string;

    await replaceProjectTechnologies(projectId, values);
    await replaceProjectScreenshots(projectId, values);

    const project = await fetchProjectBySlug(slug);
    if (!project) {
        throw new Error("Project created but could not be fetched afterwards.");
    }

    return project;
}

export async function updateProject(
    currentSlug: string,
    values: ProjectFormValues
): Promise<Project> {
    const payload = toDbPayload(values);

    const { data, error } = await supabase
        .from("projects")
        .update(payload)
        .eq("slug", currentSlug)
        .select("id, slug")
        .single();

    if (error) throw error;

    const projectId = data.id as number;
    const slug = data.slug as string;

    await replaceProjectTechnologies(projectId, values);
    await replaceProjectScreenshots(projectId, values);

    const project = await fetchProjectBySlug(slug);
    if (!project) {
        throw new Error("Project updated but could not be fetched afterwards.");
    }

    return project;
}
