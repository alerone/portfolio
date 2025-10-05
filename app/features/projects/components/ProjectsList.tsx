import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col px-2 w-full xl:max-w-lg 2xl:max-w-xl gap-4">
            {projects.length > 0 && projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}
