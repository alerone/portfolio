import { useEffect, useState } from "react";
import type { EducationItem } from "@/content/content-types";
import { fetchEducation } from "@/lib/api/education";

export function useEducation() {
    const [education, setEducation] = useState<EducationItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setIsLoading(true);
                const data = await fetchEducation();

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
    }, []);

    return { education, isLoading, error };
}
