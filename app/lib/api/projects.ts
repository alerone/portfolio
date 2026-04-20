import { supabase } from "@/lib/supabase";
import type { Project } from "@/content/content-types";

type ProjectRow = {
    id: number;
    slug: string;
    name: string;
    summary: string;
    description: string | null;
    github_url: string | null;
    live_url: string | null;
    image_url: string | null;
    status: Project["status"];
    category: Project["category"] | null;
    role: Project["role"] | null;
    featured: boolean;
    sort_order: number;
    project_screenshots: {
        url: string;
        alt: string;
        sort_order: number;
    }[] | null;
    project_technologies: {
        is_language: boolean;
        sort_order: number;
        technologies: {
            slug: string;
        } | {
            slug: string;
        }[] | null;
    }[] | null;
};

function normalizeTechnologySlug(
    tech: { slug: string } | { slug: string }[] | null
): string | null {
    if (!tech) return null;
    if (Array.isArray(tech)) return tech[0]?.slug ?? null;
    return tech.slug;
}

function mapProject(row: ProjectRow): Project {
    const relations = [...(row.project_technologies ?? [])].sort(
        (a, b) => a.sort_order - b.sort_order
    );

    const languages = relations
        .filter((item) => item.is_language)
        .map((item) => normalizeTechnologySlug(item.technologies))
        .filter((slug): slug is string => Boolean(slug));

    const technologies = relations
        .filter((item) => !item.is_language)
        .map((item) => normalizeTechnologySlug(item.technologies))
        .filter((slug): slug is string => Boolean(slug));

    const screenshots = [...(row.project_screenshots ?? [])]
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((shot) => ({
            src: shot.url,
            alt: shot.alt,
        }));

    return {
        slug: row.slug,
        name: row.name,
        summary: row.summary,
        description: row.description ?? undefined,
        githubUrl: row.github_url ?? undefined,
        liveUrl: row.live_url ?? undefined,
        image: row.image_url ?? undefined,
        status: row.status,
        category: row.category ?? undefined,
        role: row.role ?? undefined,
        technologies,
        languages,
        screenshots: screenshots.length ? screenshots : undefined,
        featured: row.featured,
    };
}

async function fetchProjectsRaw(): Promise<Project[]> {
    const { data, error } = await supabase
        .from("projects")
        .select(`
      id,
      slug,
      name,
      summary,
      description,
      github_url,
      live_url,
      image_url,
      status,
      category,
      role,
      featured,
      sort_order,
      project_screenshots (
        url,
        alt,
        sort_order
      ),
      project_technologies (
        is_language,
        sort_order,
        technologies (
          slug
        )
      )
    `)
        .order("sort_order", { ascending: true });

    if (error) throw error;
    return (data as ProjectRow[]).map(mapProject);
}

export async function fetchProjects(): Promise<Project[]> {
    return fetchProjectsRaw();
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
    const projects = await fetchProjectsRaw();
    return projects.find((project) => project.slug === slug) ?? null;
}

export async function fetchRelatedProjects(
    project: Project,
    limit = 3
): Promise<Project[]> {
    const projects = await fetchProjectsRaw();

    return projects
        .filter((candidate) => candidate.slug !== project.slug)
        .map((candidate) => {
            const sharedTechnologies = candidate.technologies.filter((tech) =>
                project.technologies.includes(tech)
            ).length;

            return {
                project: candidate,
                score: sharedTechnologies + (candidate.featured ? 0.25 : 0),
            };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.project);
}
