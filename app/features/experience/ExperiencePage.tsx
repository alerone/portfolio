import { Page } from "@/components/Page";
import { ExperienceList } from "./components/ExperienceList";
import { useExperience } from "@/hooks/useExperience";

export function ExperiencePage() {
    const { experience, isLoading, error } = useExperience();
    return (
        <Page
            eyebrow="Trajectory"
            headerTitle="Experience"
            description="Professional experience and the environments where I’ve grown as a developer."
            className="pb-10"
        >
            {isLoading && (
                <div className="mx-auto w-full max-w-3xl text-white/65">
                    Loading experience...
                </div>
            )}

            {error && (
                <div className="mx-auto w-full max-w-3xl text-rose-300">
                    Error loading experience: {error}
                </div>
            )}

            {!isLoading && !error && (
                <ExperienceList experiences={experience} />
            )}
        </Page>
    );
}
