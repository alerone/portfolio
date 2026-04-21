import { useEffect, useState } from "react";
import type { EducationItem } from "@/content/content-types";
import { fetchEducationBySlug } from "@/lib/api/education";

export function useAdminEducation(slug?: string) {
    const [education, setEducation] = useState<EducationItem | null>(null);
    const [isLoading, setIsLoading] = useState(Boolean(slug));
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            if (!slug) {
                setEducation(null);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const data = await fetchEducationBySlug(slug);

                if (!cancelled) {
                    setEducation(data);
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

    return { education, isLoading, error };
}
