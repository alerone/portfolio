import type { Project } from "@/content/content-types";
import { fetchProjectBySlug, fetchRelatedProjects } from "@/lib/api/projects";
import { useEffect, useState } from "react";

export function useProjectDetail(slug?: string) {
    const [project, setProject] = useState<Project | null>(null)
    const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false;
        async function load() {
            if (!slug) {
                setProject(null);
                setRelatedProjects([]);
                setIsLoading(false)
                return
            }

            try {
                setIsLoading(true)
                const currentProject = await fetchProjectBySlug(slug)
                if (!currentProject) {
                    if (!cancelled) {
                        setProject(null)
                        setRelatedProjects([]);
                        setIsLoading(false)
                    }
                    return
                }

                const related = await fetchRelatedProjects(currentProject, 3)

                if (!cancelled) {
                    setProject(currentProject)
                    setRelatedProjects(related)
                    setError(null)
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Unknown error")
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false)
                }
            }
        }

        load()

        return () => { cancelled = true }
    }, [slug])

    return { project, relatedProjects, isLoading, error }
}
