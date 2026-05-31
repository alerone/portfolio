import type { ResumeData } from "../resume-types";
import { ResumeSection } from "./ResumeSection";

type ResumeProjectsProps = {
    projects: ResumeData["projects"];
    title: string;
};

export function ResumeProjects({ projects, title }: ResumeProjectsProps) {
    if (projects.length === 0) return null;

    return (
        <ResumeSection title={title}>
            <div className="grid gap-1.5">
                {projects.map((project) => (
                    <article key={project.name} className="break-inside-avoid">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                            <h4 className="text-[13px] font-extrabold leading-tight text-neutral-900">
                                {project.name}
                            </h4>

                            {(project.githubUrl || project.liveUrl) && (
                                <div className="flex gap-1 text-[9px] font-medium text-neutral-600">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="underline"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="underline"
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        {project.role && (
                            <p className="text-[9.5px] italic leading-tight text-neutral-700">
                                {project.role}
                            </p>
                        )}

                        <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-[1.25] text-neutral-800">
                            {project.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </ResumeSection>
    );
}
