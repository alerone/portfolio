import { useMemo, useState } from "react";
import { Page } from "@/components/Page";
import { ProjectsList } from "./components/ProjectsList";
import { ProjectFilters } from "./components/ProjectFilters";
import { getTechnologyBySlug } from "@/content/technologies";
import { useProjects } from "./hooks/useProjects";

export function ProjectsPage() {
    const { projects, isLoading, error } = useProjects();

    const [status, setStatus] = useState("");
    const [technology, setTechnology] = useState("");
    const [featuredOnly, setFeaturedOnly] = useState(false);

    const statuses = useMemo(() => {
        return [...new Set(projects.map((project) => project.status))];
    }, [projects]);

    const filterTechnologies = useMemo(() => {
        const slugs = [...new Set(projects.flatMap((project) => project.technologies))];

        return slugs
            .map((slug) => getTechnologyBySlug(slug))
            .filter((technology): technology is NonNullable<typeof technology> => Boolean(technology))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [projects]);

    const featuredProjects = useMemo(() => {
        return projects.filter((project) => project.featured);
    }, [projects]);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            if (status && project.status !== status) return false;
            if (technology && !project.technologies.includes(technology)) return false;
            if (featuredOnly && !project.featured) return false;
            return true;
        });
    }, [projects, status, technology, featuredOnly]);

    const clearFilters = () => {
        setStatus("");
        setTechnology("");
        setFeaturedOnly(false);
    };

    const hasActiveFilters = Boolean(status || technology || featuredOnly);

    return (
        <Page
            eyebrow="Selected work"
            headerTitle="Projects"
            description="A mix of backend, systems, mobile and experimental work."
            className="flex flex-col items-center gap-8 pb-10"
        >
            {isLoading && (
                <div className="w-full max-w-3xl text-white/65">
                    Loading projects...
                </div>
            )}

            {error && (
                <div className="w-full max-w-3xl text-rose-300">
                    Error loading projects: {error}
                </div>
            )}

            {!isLoading && !error && (
                <>
                    <div className="w-full max-w-3xl">
                        <ProjectFilters
                            status={status}
                            technology={technology}
                            featuredOnly={featuredOnly}
                            statuses={statuses}
                            technologies={filterTechnologies}
                            resultCount={filteredProjects.length}
                            onStatusChange={setStatus}
                            onTechnologyChange={setTechnology}
                            onFeaturedOnlyChange={setFeaturedOnly}
                            onClear={clearFilters}
                        />
                    </div>

                    {!hasActiveFilters && featuredProjects.length > 0 && (
                        <section className="w-full flex flex-col items-center gap-4">
                            <div className="w-full max-w-3xl text-center">
                                <p className="eyebrow mb-2">Highlights</p>
                                <h2 className="section-title">Featured projects</h2>
                            </div>
                            <ProjectsList projects={featuredProjects} featured />
                        </section>
                    )}

                    <section className="w-full flex flex-col items-center gap-4">
                        <div className="w-full max-w-3xl text-center">
                            <p className="eyebrow mb-2">
                                {hasActiveFilters ? "Filtered view" : "Archive"}
                            </p>
                            <h2 className="section-title">
                                {hasActiveFilters ? "Matching projects" : "All projects"}
                            </h2>
                        </div>

                        <ProjectsList projects={filteredProjects} />
                    </section>
                </>
            )}
        </Page>
    );
}
