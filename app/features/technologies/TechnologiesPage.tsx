import { Page } from "@/components/Page";
import { TechList } from "./components/TechList";
import { getVisibleTechnologies } from "@/content/technologies";

export function TechnologiesPage() {
    const title = "Technologies"
    return (
        <>
            <Page headerTitle={title} className="pb-10">
                <TechList technologies={getVisibleTechnologies()} />
            </Page>
        </>
    )
}
