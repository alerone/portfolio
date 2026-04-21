import type { ExperienceItem } from "@/content/content-types";
import type { ExperienceFormValues } from "@/features/admin/experience/schemas/experience-form.schema";
import { supabase } from "@/lib/supabase";
import { fetchExperienceBySlug } from "@/lib/api/experience";

function toDbPayload(values: ExperienceFormValues) {
    return {
        slug: values.slug,
        company_name: values.companyName,
        company_url: values.companyUrl || null,
        company_icon: values.companyIcon || null,
        date_start: values.dateStart,
        date_end: values.dateEnd || null,
        status: values.status,
        description: values.description,
        keywords: values.keywords.map((keyword) => keyword.value),
        sort_order: values.sortOrder,
    };
}

export async function createExperience(values: ExperienceFormValues): Promise<ExperienceItem> {
    const { data, error } = await supabase
        .from("experience")
        .insert(toDbPayload(values))
        .select("slug")
        .single();

    if (error) throw error;

    const item = await fetchExperienceBySlug(data.slug as string);
    if (!item) {
        throw new Error("Experience created but could not be fetched afterwards.");
    }

    return item;
}

export async function updateExperience(
    currentSlug: string,
    values: ExperienceFormValues
): Promise<ExperienceItem> {
    const { data, error } = await supabase
        .from("experience")
        .update(toDbPayload(values))
        .eq("slug", currentSlug)
        .select("slug")
        .single();

    if (error) throw error;

    const item = await fetchExperienceBySlug(data.slug as string);
    if (!item) {
        throw new Error("Experience updated but could not be fetched afterwards.");
    }

    return item;
}
