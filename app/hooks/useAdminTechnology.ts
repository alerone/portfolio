import { useEffect, useState } from "react";
import type { Technology } from "@/content/content-types";
import { fetchTechnologyBySlug } from "@/lib/api/admin-technologies";

export function useAdminTechnology(slug?: string) {
    const [technology, setTechnology] = useState<Technology | null>(null);
    const [isLoading, setIsLoading] = useState(Boolean(slug));
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            if (!slug) {
                setTechnology(null);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const data = await fetchTechnologyBySlug(slug);

                if (!cancelled) {
                    setTechnology(data);
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

    return { technology, isLoading, error };
}
