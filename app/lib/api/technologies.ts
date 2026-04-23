import { supabase } from "@/lib/supabase";
import type { Technology } from "@/content/content-types";

type TechnologyRow = {
    slug: string;
    name: string;
    description: string;
    url: string | null;
    icon_key: string | null;
    level: 0 | 1 | 2 | 3 | 4;
    visible: boolean;
    kind: Technology["kind"] | null;
};

function mapTechnology(row: TechnologyRow): Technology {
    return {
        slug: row.slug,
        name: row.name,
        description: row.description,
        url: row.url ?? undefined,
        icon: (row.icon_key as Technology["icon"]) ?? undefined,
        level: row.level,
        visible: row.visible,
        kind: row.kind ?? "tool",
    };
}

export async function fetchTechnologies(): Promise<Technology[]> {
    const { data, error } = await supabase
        .from("technologies")
        .select("slug, name, description, url, icon_key, level, visible, kind")
        .order("name", { ascending: true });

    if (error) throw error;

    return (data as TechnologyRow[]).map(mapTechnology);
}
