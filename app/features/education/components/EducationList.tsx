import type { EducationItem } from "@/content/content-types";
import { EducationCard } from "./EducationCard";

export function EducationList({ education }: { education: EducationItem[] }) {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            {education.map((item) => (
                <EducationCard key={item.slug} education={item} />
            ))}
        </div>
    );
}
