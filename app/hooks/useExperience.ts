import { useEffect, useState } from "react";
import type { ExperienceItem } from "@/content/content-types";
import { fetchExperience } from "@/lib/api/experience";

export function useExperience() {
    const [experience, setExperience] = useState<ExperienceItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setIsLoading(true);
                const data = await fetchExperience();

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
    }, []);

    return { experience, isLoading, error };
}
