import { Icon } from "@/components/Icon";
import { MarkdownRender } from "@/components/MarkdownRender";
import type { EducationItem, EducationStatus } from "@/content/content-types";
import { getLogo } from "@/resources/logos";
import { dateDiff, formatDateRange } from "@/utils/date";
import { EducationHonors } from "./EducationHonors";

const statusClasses: Record<EducationStatus, string> = {
    completed: "from-emerald-600 to-emerald-500",
    in_progress: "from-amber-600 to-amber-500",
};

const statusLabel: Record<EducationStatus, string> = {
    completed: "Completed",
    in_progress: "In progress",
};

export function EducationCard({ education }: { education: EducationItem }) {
    const start = new Date(education.dateStart);
    const end = new Date(education.dateEnd ?? new Date().toISOString());

    return (
        <article className="surface mx-auto flex w-full flex-col rounded-[24px] p-5 transition duration-200 hover:bg-white/[0.06] hover:border-white/16">
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        {education.institutionIcon && (
                            <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                                <Icon
                                    icon={getLogo(education.institutionIcon as never)}
                                    height={70}
                                    width={80}
                                />
                            </div>
                        )}

                        <div className="min-w-0">
                            <h2 className="text-base font-semibold text-white xl:text-lg">
                                {education.title}
                            </h2>

                            {education.institutionUrl ? (
                                <a
                                    href={education.institutionUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 inline-flex text-sm text-white/62 underline decoration-white/15 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                                >
                                    {education.institution}
                                </a>
                            ) : (
                                <p className="mt-1 text-sm text-white/62">{education.institution}</p>
                            )}
                        </div>
                    </div>

                    <span
                        className={`bg-gradient-to-r ${statusClasses[education.status]} rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm`}
                    >
                        {statusLabel[education.status]}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        {formatDateRange(start, end)}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        {education.status === "in_progress" ? "Ongoing" : dateDiff(start, end)}
                    </span>
                </div>

                {education.grade && (
                    <span className="w-fit rounded-lg border border-amber-400/20 bg-amber-200/[0.08] px-3 py-1 text-xs font-bold text-white/65">
                        Grade: {education.grade}
                    </span>
                )}

                {education.description && <MarkdownRender content={education.description} />}

                {education.honors && education.honors.length > 0 && (
                    <EducationHonors honors={education.honors} initialVisibleCount={3} />
                )}

                {education.highlights && education.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {education.highlights.map((highlight) => (
                            <span
                                key={highlight}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                            >
                                {highlight}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
