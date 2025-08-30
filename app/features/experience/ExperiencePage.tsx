import { Page } from "~/components/Page"
import { ExperienceList } from "./components/ExperienceList"
import { experienceList } from "./experienceList"

export function ExperiencePage() {
    const title = "Experience"
    return (
        <Page headerTitle={title} className="pb-10">
            <ExperienceList experiences={Object.values(experienceList)} />
        </Page>
    )
}
