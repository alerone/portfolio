import type { ExperienceItem } from "@/content/content-types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList({ experiences }: { experiences: ExperienceItem[] }) {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            {experiences.map((experience) => (
                <ExperienceCard key={experience.slug} experience={experience} />
            ))}
        </div>
    );
}
