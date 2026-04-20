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

export async function createProject(values: ProjectFormValues): Promise<Project> {
    const payload = toDbPayload(values);

    const { data, error } = await supabase
        .from("projects")
        .insert(payload)
        .select("slug")
        .single();

    if (error) throw error;

    const project = await fetchProjectBySlug(data.slug);
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
        .select("slug")
        .single();

    if (error) throw error;

    const project = await fetchProjectBySlug(data.slug);
    if (!project) {
        throw new Error("Project updated but could not be fetched afterwards.");
    }

    return project;
}
