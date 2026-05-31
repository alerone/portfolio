import { AdminGuard } from "@/components/AdminGuard";
import { useEducation } from "@/hooks/useEducation";
import { useExperience } from "@/hooks/useExperience";
import { useTechnologies } from "@/hooks/useTechnologies";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { AdminLayout } from "../AdminLayout";
import { buildResumeData } from "./resume-data";
import { ResumePreview } from "./components/ResumePreview";
import { useState } from "react";
import type { ResumeLanguage } from "./resume-types";

export function AdminResumePage() {
    const [lang, setLang] = useState<ResumeLanguage>("en");

    const {
        projects,
        isLoading: projectsLoading,
        error: projectsError,
    } = useProjects();

    const {
        technologies,
        isLoading: technologiesLoading,
        error: technologiesError,
    } = useTechnologies();

    const {
        experience,
        isLoading: experienceLoading,
        error: experienceError,
    } = useExperience();

    const {
        education,
        isLoading: educationLoading,
        error: educationError,
    } = useEducation();

    const isLoading =
        projectsLoading ||
        technologiesLoading ||
        experienceLoading ||
        educationLoading;

    const error =
        projectsError ||
        technologiesError ||
        experienceError ||
        educationError;

    const resume = buildResumeData({
        lang,
        projects,
        technologies,
        experience,
        education,
    });

    return (
        <AdminGuard>
            <AdminLayout title="CV">
                <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Resume preview
                        </h2>
                        <p className="mt-1 text-sm text-white/60">
                            Preview and export your generated CV.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setLang("en")}
                            className={[
                                "rounded-full px-3 py-1.5 text-sm font-medium transition",
                                lang === "en"
                                    ? "bg-white text-neutral-950"
                                    : "border border-white/10 text-white/70 hover:bg-white/[0.08]",
                            ].join(" ")}
                        >
                            EN
                        </button>

                        <button
                            type="button"
                            onClick={() => setLang("es")}
                            className={[
                                "rounded-full px-3 py-1.5 text-sm font-medium transition",
                                lang === "es"
                                    ? "bg-white text-neutral-950"
                                    : "border border-white/10 text-white/70 hover:bg-white/[0.08]",
                            ].join(" ")}
                        >
                            ES
                        </button>

                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>

                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading resume data...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading resume data: {error}
                    </section>
                )}

                {!isLoading && !error && (
                    <div className="resume-print-root overflow-x-auto pb-10">
                        <ResumePreview resume={resume} lang={lang} />
                    </div>
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
