import type { ResumeData, ResumeLanguage } from "../resume-types";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeProjects } from "./ResumeProjects";
import { ResumeSection } from "./ResumeSection";
import { ResumeSkills } from "./ResumeSkills";

type ResumePreviewProps = {
    resume: ResumeData;
    lang: ResumeLanguage;
};

const labels = {
    en: {
        summary: "Professional profile",
        skills: "Technical skills",
        projects: "Featured projects",
        experience: "Professional experience",
        education: "Academic background",
    },
    es: {
        summary: "Perfil profesional",
        skills: "Habilidades técnicas",
        projects: "Proyectos destacados",
        experience: "Experiencia profesional",
        education: "Formación académica",
    },
} satisfies Record<ResumeLanguage, Record<string, string>>;

export function ResumePreview({ resume, lang }: ResumePreviewProps) {
    const t = labels[lang];

    return (
        <article className="resume-page mx-auto w-full max-w-[210mm] bg-white px-9 py-7 text-neutral-950 shadow-2xl print:shadow-none">
            <ResumeHeader profile={resume.profile} lang={lang} />

            <div className="mt-3 grid gap-2.5">
                <ResumeSection title={t.summary}>
                    <p className="text-[11px] leading-[1.35] text-neutral-800">
                        {resume.profile.summary[lang]}
                    </p>
                </ResumeSection>

                <ResumeSkills skills={resume.skills} title={t.skills} lang={lang} />

                <ResumeProjects projects={resume.projects} title={t.projects} />

                <ResumeExperience
                    experience={resume.experience}
                    title={t.experience}
                />

                <ResumeEducation education={resume.education} title={t.education} />
            </div>
        </article>
    );
}
