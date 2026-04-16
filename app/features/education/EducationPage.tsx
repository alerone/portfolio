import { Page } from "@/components/Page";
import { education } from "@/content/education";
import { EducationList } from "./components/EducationList";

export function EducationPage() {
    return (
        <Page
            eyebrow="Academic background"
            headerTitle="Education"
            description="My formal academic path, including completed studies and current postgraduate work."
            className="pb-10"
        >
            <EducationList education={education} />
        </Page>
    );
}
