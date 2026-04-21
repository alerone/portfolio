import { Page } from "@/components/Page";
import { TechList } from "./components/TechList";
import { getVisibleTechnologies } from "@/content/technologies";
import { useTechnologies } from "@/hooks/useTechnologies";

export function TechnologiesPage() {
    const { technologies, isLoading, error } = useTechnologies()
    return (

        <Page
            eyebrow="Stack"
            headerTitle="Technologies"
            description="Tools and technologies I’ve used across academic work, personal projects and product-focused builds."
            className="pb-10"
        >
            {isLoading && (
                <div className="w-full max-w-3xl text-white/65">
                    Loading technologies...
                </div>
            )}

            {error && (
                <div className="w-full max-w-3xl text-rose-300">
                    Error loading technologies: {error}
                </div>
            )}


            {!isLoading && !error && (
                <>
                    <TechList technologies={technologies} />
                </>
            )}
        </Page>
    );
}
