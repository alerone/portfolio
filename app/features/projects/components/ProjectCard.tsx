import { getTechnology } from "~/resources/techList"
import type { Project, ProjectStatus } from "../types"
import { TechnologyBadge } from "~/components/TechnologyBadge"
import { getSVGResource } from "~/resources/resources"
import { IconA } from "~/components/IconA"

type ProjectCardProps = {
    project: Project
    onCardClick?: (project: Project) => void
}

const bgFromStatus: Record<ProjectStatus, string> = {
    "Work in progress": "from-amber-600 to-amber-500",
    "Future work": "from-indigo-600 to-indigo-400",
    "Finished": "from-emerald-600 to-emerald-500"
}
export function ProjectCard({ project, onCardClick = () => { } }: ProjectCardProps) {
    const github = getSVGResource("github").icon
    return (<div
        key={project.id}
        className="bg-primary-700 rounded-lg p-4 flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between mb-4 ">
            <div className="gap-4 flex items-center">
                {project.image &&
                    <img
                        src={project.image}
                        height={60}
                        width={60}
                        loading="lazy"
                        className="rounded-md shadow-md"
                    />
                }
                <h2 className="text-lg font-semibold text-white">{project.name}</h2>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <IconA href={project.githubHref} icon={github} />
                {project.webHref &&
                    <IconA href={project.webHref} icon={getSVGResource("goToWebIcon").icon} bg="bg-primary-500" />
                }
            </div>
        </div>
        <span className={`bg-gradient-to-r inline-block w-fit shadow-lg text-sm ${bgFromStatus[project.status]} rounded-lg px-2 py-1`}>{project.status}</span>
        <p className="opacity-90 xl:mb-0 mb-4 text-white">{project.summary}</p>
        {project.technologies && project.technologies.length > 0 &&
            <div className="flex flex-row flex-wrap gap-2">
                {project.technologies.map((techKey) => (
                    <TechnologyBadge technology={getTechnology(techKey)} />
                ))}
            </div>
        }
    </div>
    )
}
