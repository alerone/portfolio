import { useEffect, useState } from "react";
import type { Project } from "@/content/content-types";
import { fetchProjectBySlug } from "@/lib/api/projects";

export function useAdminProject(slug?: string) {
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(Boolean(slug));
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            if (!slug) {
                setProject(null);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const data = await fetchProjectBySlug(slug);

                if (!cancelled) {
                    setProject(data);
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

    return { project, isLoading, error };
}
