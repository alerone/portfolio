import { supabase } from "@/lib/supabase";
import type { Technology } from "@/content/content-types";
import type { TechnologyFormValues } from "@/features/admin/technologies/schemas/technology-form.schema";
import { fetchTechnologies } from "@/lib/api/technologies";

function toDbPayload(values: TechnologyFormValues) {
    return {
        slug: values.slug,
        name: values.name,
        description: values.description,
        url: values.url || null,
        icon_key: values.icon || null,
        level: values.level,
        visible: values.visible,
    };
}

export async function fetchTechnologyBySlug(slug: string): Promise<Technology | null> {
    const technologies = await fetchTechnologies();
    return technologies.find((technology) => technology.slug === slug) ?? null;
}

export async function createTechnology(values: TechnologyFormValues): Promise<Technology> {
    const { data, error } = await supabase
        .from("technologies")
        .insert(toDbPayload(values))
        .select("slug")
        .single();

    if (error) throw error;

    const technology = await fetchTechnologyBySlug(data.slug as string);
    if (!technology) {
        throw new Error("Technology created but could not be fetched afterwards.");
    }

    return technology;
}

export async function updateTechnology(
    currentSlug: string,
    values: TechnologyFormValues
): Promise<Technology> {
    const { data, error } = await supabase
        .from("technologies")
        .update(toDbPayload(values))
        .eq("slug", currentSlug)
        .select("slug")
        .single();

    if (error) throw error;

    const technology = await fetchTechnologyBySlug(data.slug as string);
    if (!technology) {
        throw new Error("Technology updated but could not be fetched afterwards.");
    }

    return technology;
}
