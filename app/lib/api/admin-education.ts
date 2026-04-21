import type { EducationItem } from "@/content/content-types";
import type { EducationFormValues } from "@/features/admin/education/schemas/education-form.schema";
import { supabase } from "@/lib/supabase";
import { fetchEducationBySlug } from "@/lib/api/education";

function toDbPayload(values: EducationFormValues) {
    return {
        slug: values.slug,
        title: values.title,
        institution: values.institution,
        institution_url: values.institutionUrl || null,
        institution_icon: values.institutionIcon || null,
        date_start: values.dateStart,
        date_end: values.dateEnd || null,
        status: values.status,
        grade: values.grade || null,
        description: values.description || null,
        honors: values.honors,
        highlights: values.highlights,
        sort_order: values.sortOrder,
    };
}

export async function createEducation(values: EducationFormValues): Promise<EducationItem> {
    const { data, error } = await supabase
        .from("education")
        .insert(toDbPayload(values))
        .select("slug")
        .single();

    if (error) throw error;

    const item = await fetchEducationBySlug(data.slug as string);
    if (!item) {
        throw new Error("Education created but could not be fetched afterwards.");
    }

    return item;
}

export async function updateEducation(
    currentSlug: string,
    values: EducationFormValues
): Promise<EducationItem> {
    const { data, error } = await supabase
        .from("education")
        .update(toDbPayload(values))
        .eq("slug", currentSlug)
        .select("slug")
        .single();

    if (error) throw error;

    const item = await fetchEducationBySlug(data.slug as string);
    if (!item) {
        throw new Error("Education updated but could not be fetched afterwards.");
    }

    return item;
}
