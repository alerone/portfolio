import { Icon } from "@/components/Icon";
import { getLogo } from "@/resources/logos";
import type { Technology } from "@/content/content-types";
import { LevelGauge } from "./LevelGauge";

export function TechCard({ technology }: { technology: Technology }) {
    const cardContent = (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                        {technology.icon && (
                            <div className="shrink-0 rounded-xl bg-white/[0.08] p-2">
                                <Icon
                                    icon={getLogo(technology.icon as never)}
                                    height={20}
                                    width={20}
                                />
                            </div>
                        )}

                        <div className="min-w-0">
                            <h2 className="text-base xl:text-lg font-semibold text-white">
                                {technology.name}
                            </h2>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <LevelGauge level={technology.level} />
                    </div>
                </div>

                <p className="text-sm text-white/72">
                    {technology.description}
                </p>

                {technology.keywords && technology.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technology.keywords.map((keyword) => (
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
        "surface mx-auto flex w-full flex-col gap-4 rounded-[24px] p-5 transition duration-200 hover:bg-white/[0.06] hover:border-white/16";

    if (!technology.url) {
        return <article className={className}>{cardContent}</article>;
    }

    return (
        <a
            className={className}
            href={technology.url}
            target="_blank"
            rel="noreferrer"
        >
            {cardContent}
        </a>
    );
}
