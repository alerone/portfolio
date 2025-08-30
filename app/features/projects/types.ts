import type { TechKey } from "~/resources/techList";

export type ProjectStatus = "Work in progress" | "Finished" | "Future work"

export type Project = {
    id: string,
    name: string,
    githubHref: string,
    webHref?: string,
    summary: string,
    description: string,
    image?: string,
    status: ProjectStatus
    technologies: TechKey[]
}
