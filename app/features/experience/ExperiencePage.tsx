import { Page } from "@/components/Page";
import { ExperienceList } from "./components/ExperienceList";
import { experience } from "@/content/experience";

export function ExperiencePage() {
    return (
        <Page
            eyebrow="Trajectory"
            headerTitle="Experience"
            description="Professional experience and the environments where I’ve grown as a developer."
            className="pb-10"
        >
            <ExperienceList experiences={experience} />
        </Page>
    );
}
