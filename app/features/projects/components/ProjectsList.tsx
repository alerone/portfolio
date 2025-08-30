import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col max-w-lg gap-4">
            {projects.length > 0 && projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}
