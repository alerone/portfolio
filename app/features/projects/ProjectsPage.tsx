import { useMemo, useState } from "react";
import { Page } from "@/components/Page";
import { ProjectsList } from "./components/ProjectsList";
import { ProjectFilters } from "./components/ProjectFilters";
import { useProjects } from "./hooks/useProjects";
import { useTechnologies } from "@/hooks/useTechnologies";

export function ProjectsPage() {
    const { projects, isLoading, error } = useProjects();
    const { technologies } = useTechnologies();

    const [status, setStatus] = useState("");
    const [language, setLanguage] = useState("");
    const [technology, setTechnology] = useState("");
    const [role, setRole] = useState("");
    const [featuredOnly, setFeaturedOnly] = useState(false);

    const technologyBySlug = useMemo(() => {
        return new Map(technologies.map((tech) => [tech.slug, tech]));
    }, [technologies]);

    const statuses = useMemo(() => {
        return [...new Set(projects.map((project) => project.status))];
    }, [projects]);

    const roles = useMemo(() => {
        return [
            ...new Set(
                projects
                    .map((project) => project.role)
                    .filter((projectRole): projectRole is NonNullable<typeof projectRole> =>
                        Boolean(projectRole)
                    )
            ),
        ];
    }, [projects]);

    const filterLanguages = useMemo(() => {
        const slugs = [
            ...new Set(projects.flatMap((project) => project.languages ?? [])),
        ];

        return slugs
            .map((slug) => technologyBySlug.get(slug))
            .filter((tech): tech is NonNullable<typeof tech> => Boolean(tech))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [projects, technologyBySlug]);

    const filterTechnologies = useMemo(() => {
        const languageSlugs = new Set(
            projects.flatMap((project) => project.languages ?? [])
        );

        const slugs = [
            ...new Set(projects.flatMap((project) => project.technologies)),
        ].filter((slug) => !languageSlugs.has(slug));

        return slugs
            .map((slug) => technologyBySlug.get(slug))
            .filter((tech): tech is NonNullable<typeof tech> => Boolean(tech))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [projects, technologyBySlug]);

    const featuredProjects = useMemo(() => {
        return projects.filter((project) => project.featured);
    }, [projects]);

    const hasActiveFilters = Boolean(
        status || language || technology || role || featuredOnly
    );

    const filteredProjects = useMemo(() => {
        return projects
            .filter((project) => {
                if (status && project.status !== status) return false;
                if (language && !(project.languages ?? []).includes(language)) return false;
                if (technology && !project.technologies.includes(technology)) return false;
                if (role && project.role !== role) return false;
                if (featuredOnly && !project.featured) return false;

                return true;
            })
            .sort((a, b) => {
                if (a.status === "in_progress" && b.status !== "in_progress") return -1;
                if (a.status !== "in_progress" && b.status === "in_progress") return 1;

                return 0;
            });
    }, [projects, status, language, technology, role, featuredOnly]);

    const clearFilters = () => {
        setStatus("");
        setLanguage("");
        setTechnology("");
        setRole("");
        setFeaturedOnly(false);
    };

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
                            language={language}
                            technology={technology}
                            role={role}
                            featuredOnly={featuredOnly}
                            statuses={statuses}
                            languages={filterLanguages}
                            technologies={filterTechnologies}
                            roles={roles}
                            resultCount={filteredProjects.length}
                            hasActiveFilters={hasActiveFilters}
                            onStatusChange={setStatus}
                            onLanguageChange={setLanguage}
                            onTechnologyChange={setTechnology}
                            onRoleChange={setRole}
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

                            <ProjectsList technologies={technologies} projects={featuredProjects} featured />
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

                        {filteredProjects.length > 0 ? (
                            <ProjectsList technologies={technologies} projects={filteredProjects} />

                        ) : (
                            <EmptyProjectsState onClear={clearFilters} />
                        )}
                    </section>
                </>
            )}
        </Page>
    );
}

function EmptyProjectsState({ onClear }: { onClear: () => void }) {
    return (
        <div className="surface w-full max-w-3xl rounded-[28px] p-8 text-center">
            <p className="eyebrow mb-3">No matches</p>

            <h3 className="text-xl font-semibold tracking-tight text-white">
                No projects found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/65">
                There are no projects matching the selected filters. Try removing
                some filters or clearing the search.
            </p>

            <button
                type="button"
                onClick={onClear}
                className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
                Clear filters
            </button>
        </div>
    );
}
