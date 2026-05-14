import type { Project, Technology } from "@/content/content-types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList({
    projects,
    technologies,
    featured = false,
}: {
    projects: Project[];
    technologies: Technology[];
    featured?: boolean;
}) {
    return (
        <div className="grid w-full gap-4 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                    technologies={technologies}
                    featured={featured}
                />
            ))}
        </div>
    );
}
