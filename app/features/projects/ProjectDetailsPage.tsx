import { Link } from "react-router";
import type { Project } from "@/content/content-types";
import { Page } from "@/components/Page";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { getTechnologyBySlug } from "@/content/technologies";
import { getRelatedProjects } from "@/content/projects";
import { assetURL } from "@/utils/assets";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FeaturedStar } from "@/components/FeaturedStar";
import ReactMarkdown from "react-markdown";
import { getLogo } from "@/resources/logos";
import { IconA } from "@/components/IconA";
import { ProjectScreenshotsCarousel } from "./components/ProjectScreenshotsCarrousel";
import { MarkdownRender } from "@/components/MarkdownRender";

type ProjectDetailPageProps = {
    project: Project;
};

const statusLabel = {
    completed: "Finished",
    in_progress: "Work in progress",
    planned: "Planned",
} as const;

const statusClasses = {
    completed: "from-emerald-600 to-emerald-500",
    in_progress: "from-amber-600 to-amber-500",
    planned: "from-indigo-600 to-indigo-400",
} as const;

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
    const relatedProjects = getRelatedProjects(project, 3);
    const github = getLogo("github").icon;

    return (
        <Page
            eyebrow="Project detail"
            headerTitle={project.name}
            description="A closer look at one of my selected works."
            className="flex flex-col items-center gap-8 pb-10"
        >
            <section className="w-full max-w-3xl">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.08] hover:text-white"
                >
                    <ArrowLeft size={16} />
                    Back to projects
                </Link>
            </section>

            <section className="w-full max-w-3xl">
                <article className="surface rounded-[28px] p-6 xl:p-7">
                    <div className="mb-1 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                            <div className="min-w-0 flex-1">
                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <span
                                        className={`bg-gradient-to-r ${statusClasses[project.status]} rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm`}
                                    >
                                        {statusLabel[project.status]}
                                    </span>

                                    {project.featured && (
                                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
                                            <FeaturedStar />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-2xl xl:text-3xl font-semibold tracking-tight text-white">
                                    {project.name}
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 xl:text-base">
                                    {project.summary}
                                </p>
                            </div>

                            {project.image && (
                                <div className="shrink-0 md:ml-6">
                                    <img
                                        src={assetURL(project.image)}
                                        alt={project.name}
                                        className="h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.04] object-cover shadow-sm xl:h-28 xl:w-28"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                            {project.githubUrl && (
                                <IconA href={project.githubUrl} icon={github} />
                            )}

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                                >
                                    <ExternalLink size={16} />
                                    Live demo
                                </a>
                            )}
                        </div>

                        {project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((techSlug) => {
                                    const technology = getTechnologyBySlug(techSlug);
                                    if (!technology) return null;

                                    return (
                                        <TechnologyBadge
                                            key={techSlug}
                                            technology={technology}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </article>
            </section>

            {project.description && (
                <section className="w-full max-w-3xl">
                    <div className="surface rounded-[28px] p-6 xl:p-7">
                        <div className="mb-5">
                            <p className="eyebrow mb-2">Overview</p>
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                About this project
                            </h3>
                        </div>

                        <ProjectDescription description={project.description} />
                    </div>
                </section>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
                <section className="w-full max-w-3xl">
                    <ProjectScreenshotsCarousel screenshots={project.screenshots} />
                </section>
            )}

            {relatedProjects.length > 0 && (
                <section className="w-full max-w-3xl">
                    <div className="mb-4 text-center">
                        <p className="eyebrow mb-2">More work</p>
                        <h2 className="section-title">Related projects</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {relatedProjects.map((relatedProject) => (
                            <Link
                                key={relatedProject.slug}
                                to={`/projects/${relatedProject.slug}`}
                                className="surface rounded-[22px] p-4 transition duration-200 hover:border-white/16 hover:bg-white/[0.06]"
                            >
                                <div className="flex h-full flex-col gap-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-sm font-semibold text-white">
                                            {relatedProject.name}
                                        </h3>
                                        {relatedProject.featured && <FeaturedStar />}
                                    </div>

                                    <p className="text-sm leading-6 text-white/65">
                                        {relatedProject.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </Page>
    );
}

function ProjectDescription({ description }: { description: string }) {
    return (
        <div className="max-w-none">
            <MarkdownRender content={description} />
        </div>
    );
}


