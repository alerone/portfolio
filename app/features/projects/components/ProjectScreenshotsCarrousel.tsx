import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetURL } from "@/utils/assets";
import type { ProjectScreenshot } from "@/content/content-types";

type ProjectScreenshotsCarouselProps = {
    screenshots: ProjectScreenshot[];
    title?: string;
};

export function ProjectScreenshotsCarousel({
    screenshots,
    title = "Project screenshots",
}: ProjectScreenshotsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const safeScreenshots = useMemo(
        () => screenshots.filter((shot) => shot?.src?.trim()),
        [screenshots]
    );

    if (safeScreenshots.length === 0) return null;

    const current = safeScreenshots[currentIndex];
    const hasMultiple = safeScreenshots.length > 1;

    function goToPrevious() {
        setCurrentIndex((prev) =>
            prev === 0 ? safeScreenshots.length - 1 : prev - 1
        );
    }

    function goToNext() {
        setCurrentIndex((prev) =>
            prev === safeScreenshots.length - 1 ? 0 : prev + 1
        );
    }

    function goTo(index: number) {
        setCurrentIndex(index);
    }

    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                    <p className="eyebrow mb-2">Visuals</p>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                        {title}
                    </h3>
                </div>

                <div className="text-sm text-white/55">
                    {currentIndex + 1} / {safeScreenshots.length}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/25">
                    <div className="flex min-h-[320px] items-center justify-center p-4 md:min-h-[420px] xl:min-h-[500px]">
                        <img
                            src={assetURL(current.src)}
                            alt={current.alt}
                            className="max-h-[280px] w-full rounded-2xl object-contain md:max-h-[380px] xl:max-h-[460px]"
                            loading="lazy"
                        />
                    </div>

                    {hasMultiple && (
                        <>
                            <button
                                type="button"
                                onClick={goToPrevious}
                                aria-label="Previous screenshot"
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/55 p-2 text-white/90 transition hover:bg-black/75"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={goToNext}
                                aria-label="Next screenshot"
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/55 p-2 text-white/90 transition hover:bg-black/75"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </>
                    )}
                </div>

                <p className="text-sm text-white/60">{current.alt}</p>

                {hasMultiple && (
                    <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
                        {safeScreenshots.map((shot, index) => {
                            const isActive = index === currentIndex;

                            return (
                                <button
                                    key={`${shot.src}-${index}`}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`Open screenshot ${index + 1}`}
                                    className={[
                                        "shrink-0 overflow-hidden rounded-2xl border transition",
                                        "h-20 w-20 md:h-24 md:w-24",
                                        isActive
                                            ? "border-white/40 bg-white/[0.06]"
                                            : "border-white/10 bg-white/[0.02] hover:border-white/20",
                                    ].join(" ")}
                                >
                                    <img
                                        src={assetURL(shot.src)}
                                        alt={shot.alt}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
