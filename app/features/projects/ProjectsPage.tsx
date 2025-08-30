import { Page } from "~/components/Page"
import { ProjectsList } from "./components/ProjectsList"
import { projectList } from "./projectList"

export function ProjectsPage() {
    const title = "Projects"
    return (
        <Page headerTitle={title} className="pb-10">
            <ProjectsList projects={Object.values(projectList)} />
        </Page>
    )
}
