import { Page } from "@/components/Page";
import { EducationList } from "./components/EducationList";
import { useEducation } from "@/hooks/useEducation";

export function EducationPage() {
    const { education, isLoading, error } = useEducation();

    return (
        <Page
            eyebrow="Academic background"
            headerTitle="Education"
            description="My formal academic path, including completed studies and current postgraduate work."
            className="pb-10"
        >
            {isLoading && (
                <div className="mx-auto w-full max-w-3xl text-white/65">
                    Loading education...
                </div>
            )}

            {error && (
                <div className="mx-auto w-full max-w-3xl text-rose-300">
                    Error loading education: {error}
                </div>
            )}

            {!isLoading && !error && (
                <EducationList education={education} />
            )}
        </Page>
    );
}
