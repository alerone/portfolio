import type { Project } from "@/content/content-types";
import { fetchProjects } from "@/lib/api/projects";
import { useEffect, useState } from "react";

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setIsLoading(true);
                const data = await fetchProjects();
                if (!cancelled) {
                    setProjects(data);
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
        load()

        return () => {
            cancelled = true;
        }
    }, [])

    return { projects, isLoading, error }
}
