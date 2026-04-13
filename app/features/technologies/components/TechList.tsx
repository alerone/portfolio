import type { Technology } from "@/content/content-types";
import { TechCard } from "./TechCard";

export function TechList({ technologies }: { technologies: Technology[] }) {
    const list = [...technologies].sort((a, b) => b.level - a.level)
    return (
        <div className="flex flex-col max-w-[23rem] xl:max-w-md 2xl:max-w-lg gap-4">
            {list.length > 0 && list.map((tech: Technology) => (
                <TechCard key={tech.slug} technology={tech} />
            ))}
        </div>
    )
}
