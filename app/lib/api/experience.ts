import { supabase } from "@/lib/supabase";
import type { ExperienceItem, WorkStatus } from "@/content/content-types";

type ExperienceRow = {
    slug: string;
    company_name: string;
    company_url: string | null;
    company_icon: string | null;
    date_start: string;
    date_end: string | null;
    status: WorkStatus;
    description: string;
    keywords: string[] | null;
    sort_order: number;
};

function mapExperience(row: ExperienceRow): ExperienceItem {
    return {
        slug: row.slug,
        companyName: row.company_name,
        companyUrl: row.company_url ?? undefined,
        companyIcon: (row.company_icon ?? "github") as ExperienceItem["companyIcon"],
        dateStart: row.date_start,
        dateEnd: row.date_end ?? undefined,
        status: row.status,
        description: row.description,
        keywords: row.keywords ?? [],
    };
}

export async function fetchExperience(): Promise<ExperienceItem[]> {
    const { data, error } = await supabase
        .from("experience")
        .select(`
      slug,
      company_name,
      company_url,
      company_icon,
      date_start,
      date_end,
      status,
      description,
      keywords,
      sort_order
    `)
        .order("sort_order", { ascending: true });

    if (error) throw error;

    return (data as ExperienceRow[]).map(mapExperience);
}

export async function fetchExperienceBySlug(slug: string): Promise<ExperienceItem | null> {
    const items = await fetchExperience();
    return items.find((item) => item.slug === slug) ?? null;
}
