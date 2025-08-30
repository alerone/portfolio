import { getTechnology } from "~/resources/techList"
import type { Project, ProjectStatus } from "../types"
import { TechnologyBadge } from "~/components/TechnologyBadge"
import { getSVGResource } from "~/resources/resources"
import { IconButton } from "~/components/IconButton"

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
        className="bg-primary-700 rounded-lg p-4 flex flex-col gap-4">
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
                <p className={`bg-gradient-to-r shadow-lg text-sm ${bgFromStatus[project.status]} rounded-lg px-2 py-1`}>{project.status}</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <IconButton href={project.githubHref} icon={github} />
                {project.webHref &&
                    <IconButton href={project.webHref} icon={getSVGResource("goToWebIcon").icon} bg="bg-primary-500" />
                }
            </div>
        </div>
        <p className="opacity-90 text-white">{project.summary}</p>
        {project.technologies && project.technologies.length > 0 &&
            <div className="flex flex-row gap-2">
                {project.technologies.map((techKey) => (
                    <TechnologyBadge technology={getTechnology(techKey)} />
                ))}
            </div>
        }
    </div>
    )
}
