import type { ResumeData } from "../resume-types";
import { ResumeSection } from "./ResumeSection";

type ResumeEducationProps = {
    education: ResumeData["education"];
    title: string;
};

export function ResumeEducation({ education, title }: ResumeEducationProps) {
    if (education.length === 0) return null;

    return (
        <ResumeSection title={title}>
            <div className="grid gap-1.5">
                {education.map((item) => (
                    <article
                        key={`${item.title}-${item.institution}`}
                        className="break-inside-avoid"
                    >
                        <div className="flex items-baseline justify-between gap-3">
                            <h4 className="text-[13px] font-extrabold leading-tight text-neutral-900">
                                {item.title}
                            </h4>

                            <p className="shrink-0 text-[10px] font-medium text-neutral-700">
                                {item.period}
                            </p>
                        </div>

                        <p className="text-[9.5px] leading-tight text-neutral-700">
                            {item.institution}
                        </p>

                        {item.highlights.length > 0 && (
                            <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-[1.25] text-neutral-800">
                                {item.highlights.slice(0, 2).map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </article>
                ))}
            </div>
        </ResumeSection>
    );
}
