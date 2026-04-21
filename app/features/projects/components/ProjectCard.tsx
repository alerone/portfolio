import { Link } from "react-router";
import { getTechnologyBySlug } from "@/content/technologies";
import type {
    Project,
    ProjectCategory,
    ProjectRole,
    ProjectStatus,
} from "@/content/content-types";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { getLogo } from "@/resources/logos";
import { IconA } from "@/components/IconA";
import { ExternalLink } from "lucide-react";
import { assetURL } from "@/utils/assets";
import { FeaturedStar } from "@/components/FeaturedStar";

type ProjectCardProps = {
    project: Project;
    featured?: boolean;
};

const statusLabel: Record<ProjectStatus, string> = {
    completed: "Finished",
    in_progress: "Work in progress",
    planned: "Planned",
};

const statusClasses: Record<ProjectStatus, string> = {
    completed: "from-emerald-600/90 to-emerald-500/90 text-white",
    in_progress: "from-amber-600/90 to-amber-500/90 text-white",
    planned: "from-indigo-600/90 to-indigo-400/90 text-white",
};

const categoryLabel: Record<ProjectCategory, string> = {
    backend: "Backend",
    fullstack: "Full-stack",
    mobile: "Mobile",
    systems: "Systems",
    frontend: "Frontend",
    ai: "AI",
    cli: "CLI",
    game: "Game",
};

const roleLabel: Record<ProjectRole, string> = {
    personal: "Personal",
    academic: "Academic",
    tfg: "TFG",
    tfm: "TFM",
    course: "Course",
    internship: "Internship",
    team: "Team",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
    const github = getLogo("github")!.icon;

    const languageItems = (project.languages ?? [])
        .map((slug) => getTechnologyBySlug(slug))
        .filter(Boolean)
        .slice(0, featured ? 3 : 2);

    const extraTechnologyItems = project.technologies
        .filter((slug) => !(project.languages ?? []).includes(slug))
        .map((slug) => getTechnologyBySlug(slug))
        .filter(Boolean)
        .slice(0, featured ? 3 : 2);

    const hasBottomSection =
        languageItems.length > 0 || (featured && extraTechnologyItems.length > 0);

    return (
        <article
            className={[
                "surface h-full rounded-[22px] border border-white/10 transition duration-200",
                "hover:bg-white/[0.06] hover:border-white/16",
                featured ? "p-4 xl:p-5" : "p-4",
            ].join(" ")}
        >
            <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span
                                className={`bg-gradient-to-r ${statusClasses[project.status]} rounded-full px-2.5 py-1 text-[11px] font-medium shadow-sm`}
                            >
                                {statusLabel[project.status]}
                            </span>

                            {project.category && (
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/68">
                                    {categoryLabel[project.category]}
                                </span>
                            )}

                            {project.role && (
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/68">
                                    {roleLabel[project.role]}
                                </span>
                            )}

                            {project.featured && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/75">
                                    <FeaturedStar />
                                    Featured
                                </span>
                            )}
                        </div>

                        <div className="flex items-start gap-3">
                            {project.image && (
                                <img
                                    src={assetURL(project.image)}
                                    alt={project.name}
                                    loading="lazy"
                                    className="mt-0.5 h-12 w-12 shrink-0 rounded-lg border border-white/10 bg-primary-700 object-cover"
                                />
                            )}

                            <div className="min-w-0 flex-1">
                                <Link to={`/projects/${project.slug}`} className="block">
                                    <h2 className="text-base font-semibold tracking-tight text-white xl:text-lg">
                                        {project.name}
                                    </h2>
                                </Link>

                                <p className="mt-2 text-sm leading-6 text-white/70">
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
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

                {hasBottomSection && (
                    <div className="mt-auto flex flex-col gap-3 pt-4">
                        {languageItems.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                                    Languages
                                </span>
                                {languageItems.map((language) =>
                                    language ? (
                                        <TechnologyBadge
                                            key={language.slug}
                                            technology={language}
                                        />
                                    ) : null
                                )}
                            </div>
                        )}

                        {featured && extraTechnologyItems.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                                    Stack
                                </span>
                                {extraTechnologyItems.map((technology) =>
                                    technology ? (
                                        <TechnologyBadge
                                            key={technology.slug}
                                            technology={technology}
                                        />
                                    ) : null
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
