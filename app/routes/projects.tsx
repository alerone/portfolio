import { ProjectsPage } from "~/features/projects/ProjectsPage";
import type { Route } from "./+types/projects";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Projects - Portfolio" },
        { name: "projects", content: "All the projects I've worked on!" },
    ];
}

export default function Projects() {
    return <ProjectsPage />
}

