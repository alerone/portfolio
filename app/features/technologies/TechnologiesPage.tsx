import { Page } from "@/components/Page";
import { TechList } from "./components/TechList";
import { getVisibleTechnologies } from "@/content/technologies";

export function TechnologiesPage() {
    return (
        <Page
            eyebrow="Stack"
            headerTitle="Technologies"
            description="Tools and technologies I’ve used across academic work, personal projects and product-focused builds."
            className="pb-10"
        >
            <TechList technologies={getVisibleTechnologies()} />
        </Page>
    );
}
