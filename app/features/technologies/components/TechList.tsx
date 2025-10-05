import type { Technology } from "~/types/technology";
import { TechCard } from "./TechCard";

export function TechList({ technologies }: { technologies: Technology[] }) {
    const list = technologies.sort((t1, t2) => t2.level - t1.level)
    return (
        <div className="flex flex-col max-w-[23rem] xl:max-w-md 2xl:max-w-lg gap-4">
            {list.length > 0 && list.map((tech: Technology) => (
                <TechCard key={tech.id} technology={tech} />
            ))}
        </div>
    )
}
