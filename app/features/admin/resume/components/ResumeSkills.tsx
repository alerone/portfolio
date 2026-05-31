import type { ResumeData, ResumeLanguage } from "../resume-types";
import { ResumeSection } from "./ResumeSection";

type ResumeSkillsProps = {
    skills: ResumeData["skills"];
    title: string;
    lang: ResumeLanguage;
};

export function ResumeSkills({ skills, title, lang }: ResumeSkillsProps) {
    if (skills.length === 0) return null;

    return (
        <ResumeSection title={title}>
            <ul className="list-disc space-y-0.5 pl-4 text-[11px] leading-[1.25] text-neutral-800">
                {skills.map((group) => (
                    <li key={group.label.en}>
                        <strong>{group.label[lang]}:</strong>{" "}
                        {group.items.join(", ")}.
                    </li>
                ))}
            </ul>
        </ResumeSection>
    );
}
