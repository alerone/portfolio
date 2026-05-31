import type { ResumeData } from "../resume-types";
import { ResumeSection } from "./ResumeSection";

type ResumeExperienceProps = {
    experience: ResumeData["experience"];
    title: string;
};

export function ResumeExperience({ experience, title }: ResumeExperienceProps) {
    if (experience.length === 0) return null;

    return (
        <ResumeSection title={title}>
            <div className="grid gap-1.5">
                {experience.map((item) => (
                    <article key={item.companyName} className="break-inside-avoid">
                        <div className="flex items-baseline justify-between gap-3">
                            <div>
                                <h4 className="text-[13px] font-extrabold leading-tight text-neutral-900">
                                    Full-Stack Developer Intern
                                </h4>
                                <p className="text-[9.5px] leading-tight text-neutral-700">
                                    {item.companyName}
                                </p>
                            </div>

                            <p className="shrink-0 text-[10px] font-bold text-neutral-800">
                                {item.period}
                            </p>
                        </div>

                        <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-[1.25] text-neutral-800">
                            <li>{item.description}</li>
                        </ul>

                        {item.keywords.length > 0 && (
                            <p className="mt-0.5 text-[9.5px] font-medium text-neutral-700">
                                {item.keywords.join(" · ")}
                            </p>
                        )}
                    </article>
                ))}
            </div>
        </ResumeSection>
    );
}
