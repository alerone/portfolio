import { techList } from "~/resources/techList";
import { TechList } from "./components/TechList";
import { Page } from "~/components/Page";

export function TechnologiesPage() {
    const title = "Technologies"
    return (
        <>
            <Page headerTitle={title} className="pb-10">
                <TechList technologies={Object.values(techList)} />
            </Page>
        </>
    )
}
