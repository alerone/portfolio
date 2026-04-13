import { Page } from "@/components/Page"
import { ExperienceList } from "./components/ExperienceList"
import { experience } from "@/content/experience"

export function ExperiencePage() {
    const title = "Experience"
    return (
        <Page headerTitle={title} className="pb-10">
            <ExperienceList experiences={experience} />
        </Page>
    )
}
