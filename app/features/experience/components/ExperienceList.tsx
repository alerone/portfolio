import type { ExperienceItem } from "@/content/content-types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList({ experiences }: { experiences: ExperienceItem[] }) {
    return (
        <div className="flex flex-col w-full px-2 xl:max-w-lg 2xl:max-w-xl gap-4">
            {experiences.length > 0 && experiences.map((experience) => (
                <ExperienceCard key={experience.slug} experience={experience} />
            ))}
        </div>
    )
}
