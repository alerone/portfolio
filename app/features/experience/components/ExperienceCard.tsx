import { Icon } from "@/components/Icon";
import type { ExperienceItem, WorkStatus } from "@/content/content-types";
import { getLogo } from "@/resources/logos";
import { dateDiff, formatDateRange } from "@/utils/date";

const statusBG: Record<WorkStatus, string> = {
    intern: "from-sky-600 to-sky-500",
    employee: "from-emerald-600 to-emerald-500",
};

export function ExperienceCard({ experience }: { experience: ExperienceItem }) {
    const start = new Date(experience.dateStart);
    const end = new Date(experience.dateEnd);

    const content = (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                            <Icon
                                icon={getLogo(experience.companyIcon as never)}
                                height={34}
                                width={52}
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-base xl:text-lg font-semibold text-white">
                                {experience.companyName}
                            </h2>
                        </div>
                    </div>

                    <span
                        className={`bg-gradient-to-r ${statusBG[experience.status]} rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm`}
                    >
                        {experience.status}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        {formatDateRange(start, end)}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        {dateDiff(start, end)}
                    </span>
                </div>

                <p className="text-sm text-white/72">{experience.description}</p>

                {experience.keywords && experience.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {experience.keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );

    const className =
        "surface mx-auto flex w-full flex-col rounded-[24px] p-5 transition duration-200 hover:bg-white/[0.06] hover:border-white/16";

    if (!experience.companyUrl) {
        return <article className={className}>{content}</article>;
    }

    return (
        <a
            className={className}
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
        >
            {content}
        </a>
    );
}
