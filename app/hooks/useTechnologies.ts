import { useEffect, useState } from "react";
import type { Technology } from "@/content/content-types";
import { fetchTechnologies } from "@/lib/api/technologies";

export function useTechnologies() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setIsLoading(true);
                const data = await fetchTechnologies();

                if (!cancelled) {
                    setTechnologies(data);
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
    }, []);

    return { technologies, isLoading, error };
}
