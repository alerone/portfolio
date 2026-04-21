import { useEffect, useState } from "react";
import type { ExperienceItem } from "@/content/content-types";
import { fetchExperienceBySlug } from "@/lib/api/experience";

export function useAdminExperience(slug?: string) {
    const [experience, setExperience] = useState<ExperienceItem | null>(null);
    const [isLoading, setIsLoading] = useState(Boolean(slug));
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            if (!slug) {
                setExperience(null);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const data = await fetchExperienceBySlug(slug);

                if (!cancelled) {
                    setExperience(data);
                    setError(null);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Unknown error");
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, [slug]);

    return { experience, isLoading, error };
}
