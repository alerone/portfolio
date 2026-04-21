import { supabase } from "@/lib/supabase";
import type { EducationItem, EducationStatus } from "@/content/content-types";

type EducationRow = {
    slug: string;
    title: string;
    institution: string;
    institution_url: string | null;
    institution_icon: string | null;
    date_start: string;
    date_end: string | null;
    status: EducationStatus;
    grade: string | null;
    honors: string[] | null;
    highlights: string[] | null;
    description: string | null;
    sort_order: number;
};

function mapEducation(row: EducationRow): EducationItem {
    return {
        slug: row.slug,
        title: row.title,
        institution: row.institution,
        institutionUrl: row.institution_url ?? undefined,
        institutionIcon: (row.institution_icon ?? "upv") as EducationItem["institutionIcon"],
        dateStart: row.date_start,
        dateEnd: row.date_end ?? undefined,
        status: row.status,
        grade: row.grade ?? undefined,
        honors: row.honors ?? [],
        highlights: row.highlights ?? [],
        description: row.description ?? undefined,
    };
}

export async function fetchEducation(): Promise<EducationItem[]> {
    const { data, error } = await supabase
        .from("education")
        .select(`
      slug,
      title,
      institution,
      institution_url,
      institution_icon,
      date_start,
      date_end,
      status,
      grade,
      honors,
      highlights,
      description,
      sort_order
    `)
        .order("sort_order", { ascending: true });

    if (error) throw error;

    return (data as EducationRow[]).map(mapEducation);
}

export async function fetchEducationBySlug(slug: string): Promise<EducationItem | null> {
    const items = await fetchEducation();
    return items.find((item) => item.slug === slug) ?? null;
}
