import type { WorkExperience } from "../types/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList({ experiences }: { experiences: WorkExperience[] }) {
    return (
        <div className="flex flex-col w-full px-2 xl:max-w-lg gap-4">
            {experiences.length > 0 && experiences.map((experience: WorkExperience) => (
                <ExperienceCard key={experience.id} experience={experience} />
            ))}
        </div>
    )
}
