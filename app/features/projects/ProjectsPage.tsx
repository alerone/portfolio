import { useMemo, useState } from "react";
import { Page } from "@/components/Page";
import { ProjectsList } from "./components/ProjectsList";
import { ProjectFilters } from "./components/ProjectFilters";
import {
    projects,
    getFeaturedProjects,
    getProjectStatuses,
    getProjectTechnologySlugs,
} from "@/content/projects";
import { getTechnologyBySlug } from "@/content/technologies";

export function ProjectsPage() {
    const title = "Projects";

    const [status, setStatus] = useState("");
    const [technology, setTechnology] = useState("");
    const [featuredOnly, setFeaturedOnly] = useState(false);

    const statuses = useMemo(() => getProjectStatuses(), []);
    const filterTechnologies = useMemo(() => {
        return getProjectTechnologySlugs()
            .map((slug) => getTechnologyBySlug(slug))
            .filter((technology): technology is NonNullable<typeof technology> => Boolean(technology))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, []);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            if (status && project.status !== status) return false;
            if (technology && !project.technologies.includes(technology)) return false;
            if (featuredOnly && !project.featured) return false;
            return true;
        });
    }, [status, technology, featuredOnly]);

    const featuredProjects = useMemo(() => {
        return filteredProjects.filter((project) => project.featured);
    }, [filteredProjects]);

    const regularProjects = useMemo(() => {
        return filteredProjects.filter((project) => !project.featured);
    }, [filteredProjects]);

    const clearFilters = () => {
        setStatus("");
        setTechnology("");
        setFeaturedOnly(false);
    };

    const hasActiveFilters = Boolean(status || technology || featuredOnly);
    const hasDefaultFeaturedSection = !hasActiveFilters;

    return (
        <Page headerTitle={title} className="pb-10 flex-col gap-6">
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

            {hasDefaultFeaturedSection && getFeaturedProjects().length > 0 && (
                <section className="w-full xl:max-w-lg 2xl:max-w-xl px-2 flex flex-col gap-4">
                    <div>
                        <h2 className="text-xl font-bold">Featured Projects</h2>
                        <p className="opacity-80 text-sm">
                            A quick selection of the projects that best represent my work.
                        </p>
                    </div>
                    <ProjectsList projects={getFeaturedProjects()} />
                </section>
            )}

            <section className="w-full xl:max-w-lg 2xl:max-w-xl px-2 flex flex-col gap-4">
                <div>
                    <h2 className="text-xl font-bold">
                        {hasActiveFilters ? "Filtered Projects" : "All Projects"}
                    </h2>
                    <p className="opacity-80 text-sm">
                        {filteredProjects.length > 0
                            ? "Browse projects by technology, status, or featured flag."
                            : "No projects match the current filters."}
                    </p>
                </div>

                {hasActiveFilters ? (
                    <ProjectsList projects={filteredProjects} />
                ) : (
                    <ProjectsList projects={projects} />
                )}
            </section>

            {hasActiveFilters && featuredProjects.length > 0 && regularProjects.length > 0 && (
                <section className="w-full xl:max-w-lg 2xl:max-w-xl px-2 flex flex-col gap-4">
                    <div>
                        <h2 className="text-xl font-bold">Featured in results</h2>
                    </div>
                    <ProjectsList projects={featuredProjects} />
                </section>
            )}
        </Page>
    );
}
