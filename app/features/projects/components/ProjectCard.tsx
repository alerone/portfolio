import { Link } from "react-router";
import { getTechnologyBySlug } from "@/content/technologies";
import type { Project, ProjectStatus } from "@/content/content-types";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { getLogo } from "@/resources/logos";
import { IconA } from "@/components/IconA";
import { ExternalLink, Star } from "lucide-react";
import { assetURL } from "@/utils/assets";
import { FeaturedStar } from "@/components/FeaturedStar";

type ProjectCardProps = {
    project: Project;
};

const bgFromStatus: Record<ProjectStatus, string> = {
    completed: "from-emerald-600 to-emerald-500",
    in_progress: "from-amber-600 to-amber-500",
    planned: "from-indigo-600 to-indigo-400",
};

const statusLabel: Record<ProjectStatus, string> = {
    completed: "Finished",
    in_progress: "Work in progress",
    planned: "Planned",
};

export function ProjectCard({ project }: ProjectCardProps) {
    const github = getLogo("github").icon;

    return (
        <article className="bg-primary-700 rounded-lg p-4 flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between mb-4 gap-4">
                <Link
                    to={`/projects/${project.slug}`}
                    className="gap-4 flex items-center min-w-0 hover:opacity-90 transition-opacity"
                >
                    {project.image && (
                        <img
                            src={assetURL(project.image)}
                            alt={project.name}
                            height={60}
                            width={60}
                            loading="lazy"
                            className="rounded-md shadow-md"
                        />
                    )}

                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold text-white truncate">{project.name}</h2>
                            {project.featured && <FeaturedStar />}
                        </div>
                        <p className="text-sm opacity-70">View details</p>
                    </div>
                </Link>

                <div
                    className="flex flex-row gap-3 items-center shrink-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    {project.githubUrl && <IconA href={project.githubUrl} icon={github} />}
                    {project.liveUrl && (
                        <IconA
                            href={project.liveUrl}
                            icon={<ExternalLink />}
                            bg="bg-primary-500"
                        />
                    )}
                </div>
            </div>

            <span
                className={`bg-gradient-to-r inline-block w-fit shadow-lg text-sm ${bgFromStatus[project.status]} rounded-lg px-2 py-1`}
            >
                {statusLabel[project.status]}
            </span>

            <p className="opacity-90 xl:mb-0 mb-4 text-white">{project.summary}</p>

            {project.technologies.length > 0 && (
                <div className="flex flex-row flex-wrap gap-2">
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
        </article>
    );
}
