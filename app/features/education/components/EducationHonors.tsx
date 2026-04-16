import { useMemo, useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

type EducationHonorsProps = {
    honors?: string[];
    initialVisibleCount?: number;
};

export function EducationHonors({
    honors,
    initialVisibleCount = 4,
}: EducationHonorsProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!honors || honors.length === 0) return null;

    const hasOverflow = honors.length > initialVisibleCount;

    const visibleHonors = useMemo(() => {
        if (isExpanded || !hasOverflow) return honors;
        return honors.slice(0, initialVisibleCount);
    }, [honors, isExpanded, hasOverflow, initialVisibleCount]);

    const hiddenCount = honors.length - visibleHonors.length;

    return (
        <section className="flex flex-col gap-3 rounded-2xl border border-amber-400/15 bg-amber-200/[0.05] p-4">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-200/[0.08] text-amber-300">
                        <Award size={16} />
                    </span>

                    <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-amber-200/60">
                            Academic recognition
                        </p>
                        <h3 className="text-sm font-semibold text-white">
                            Honors / Matrículas de Honor
                        </h3>
                    </div>
                </div>

                {hasOverflow && (
                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-400/15 bg-amber-200/[0.06] px-3 py-1 text-[11px] font-medium text-white/75 transition hover:bg-amber-200/[0.10]"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? (
                            <>
                                Show less
                                <ChevronUp size={14} />
                            </>
                        ) : (
                            <>
                                Show all
                                <ChevronDown size={14} />
                            </>
                        )}
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {visibleHonors.map((honor) => (
                    <span
                        key={honor}
                        className="rounded-full border border-amber-400/20 bg-amber-200/[0.08] px-3 py-1 text-xs text-white/78"
                    >
                        {honor}
                    </span>
                ))}
            </div>

            {!isExpanded && hasOverflow && (
                <p className="text-xs text-white/50">
                    +{hiddenCount} more honors
                </p>
            )}
        </section>
    );
}
