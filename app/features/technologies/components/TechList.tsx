import type { Technology } from "@/content/content-types";
import { TechCard } from "./TechCard";

export function TechList({ technologies }: { technologies: Technology[] }) {
    const list = [...technologies].sort((a, b) => b.level - a.level);

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            {list.map((tech: Technology) => (
                <TechCard key={tech.slug} technology={tech} />
            ))}
        </div>
    );
}
