import type { Project } from "@/content/content-types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({
    projects,
    featured = false,
}: {
    projects: Project[];
    featured?: boolean;
}) {
    if (featured) {
        return (
            <div className="grid gap-5 xl:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} featured />
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    );
}
