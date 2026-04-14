import { Link } from "react-router";
import type { Project } from "@/content/content-types";
import { Page } from "@/components/Page";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { getTechnologyBySlug } from "@/content/technologies";
import { getRelatedProjects } from "@/content/projects";
import { assetURL } from "@/utils/assets";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getLogo } from "@/resources/logos";
import { IconA } from "@/components/IconA";
import { FeaturedStar } from "@/components/FeaturedStar";
import ReactMarkdown from "react-markdown"

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
        <Page headerTitle={project.name} className="pb-10 flex-col gap-8">
            <section className="w-full max-w-4xl px-2 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-700 hover:bg-primary-600 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to projects
                    </Link>

                    <div className="flex items-center gap-3 flex-wrap">
                        {project.githubUrl && (
                            <IconA href={project.githubUrl} icon={github} />
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-500 hover:bg-primary-400 transition-colors"
                            >
                                <ExternalLink size={18} />
                                Live demo
                            </a>
                        )}
                    </div>
                </div>

                <article className="bg-primary-800 rounded-xl p-6 flex flex-col gap-6 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {project.image && (
                            <div className="w-full md:w-44 lg:w-52 shrink-0">
                                <img
                                    src={assetURL(project.image)}
                                    alt={project.name}
                                    className="w-full aspect-square object-cover rounded-xl shadow-md bg-primary-700"
                                />
                            </div>
                        )}

                        <div className="flex-1 flex self-stretch justify-between flex-col gap-4 min-w-0">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-2xl font-bold leading-tight">{project.name}</h2>

                                    <span
                                        className={`bg-gradient-to-r ${statusClasses[project.status]} rounded-lg px-3 py-1 text-sm font-medium shadow-md`}
                                    >
                                        {statusLabel[project.status]}
                                    </span>

                                    {project.featured && (
                                        <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 bg-primary-700 text-sm">
                                            <FeaturedStar />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="text-base opacity-90 leading-7">
                                    {project.summary}
                                </p>
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
                    </div>
                    {project.description && (
                        <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold">About this project</h3>
                            <ProjectDescription description={project.description} />
                        </div>
                    )}
                </article>
            </section>

            {
                relatedProjects.length > 0 && (
                    <section className="w-full max-w-4xl px-2 flex flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold">Related projects</h2>
                            <p className="text-sm opacity-80">
                                Other projects that share similar technologies.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {relatedProjects.map((relatedProject) => (
                                <Link
                                    key={relatedProject.slug}
                                    to={`/projects/${relatedProject.slug}`}
                                    className="bg-primary-700 rounded-xl p-4 hover:scale-[0.99] transition-transform flex flex-col gap-3"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="font-semibold">{relatedProject.name}</h3>
                                        {relatedProject.featured && (
                                            <FeaturedStar />
                                        )}
                                    </div>

                                    <p className="text-sm opacity-85">{relatedProject.summary}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )
            }
        </Page >
    );
}

function ProjectDescription({ description }: { description: string }) {
    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 text-indigo-200">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-6 mb-3 text-indigo-200">{children}</h2>
                ),
                p: ({ children }) => (
                    <p className="leading-relaxed mb-4 text-slate-200">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-outside ml-5 mb-4 space-y-2 marker:text-indigo-400 text-slate-200">
                        {children}
                    </ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-inside marker:font-bold marker:text-indigo-300 space-y-2 text-white/90">
                        {children}
                    </ol>
                ),
                li: ({ children }) => <li className="pl-2">{children}</li>
            }}
            >{description}</ReactMarkdown>
        </div>

    )
}
