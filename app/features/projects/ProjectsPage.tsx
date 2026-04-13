import { Page } from "@/components/Page"
import { ProjectsList } from "./components/ProjectsList"
import { projects } from "@/content/projects"

export function ProjectsPage() {
    const title = "Projects"
    return (
        <Page headerTitle={title} className="pb-10">
            <ProjectsList projects={projects} />
        </Page>
    )
}
