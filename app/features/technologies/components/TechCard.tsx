import { Icon } from "@/components/Icon";
import { getLogo } from "@/resources/logos";
import type { Technology } from "@/content/content-types";
import { LevelGauge } from "./LevelGauge";

export function TechCard({ technology }: { technology: Technology }) {
    const cardContent = (
        <>
            <div className="flex items-center gap-3 justify-between">
                <div className="flex flex-row gap-3 items-center">
                    {technology.icon && (
                        <Icon
                            icon={getLogo(technology.icon as never)}
                            height={24}
                            width={24}
                        />
                    )}
                    <h2 className="text-white whitespace-nowrap font-semibold text-lg">
                        {technology.name}
                    </h2>
                </div>

                {technology.keywords && technology.keywords.length > 0 && (
                    <div className="gap-2 flex flex-row overflow-x-auto whitespace-nowrap max-w-full max-h-[40px]">
                        {technology.keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="opacity-85 bg-primary-600 py-1 px-2 rounded-lg text-sm text-slate-100"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <p className="text-white text-md">{technology.description}</p>
            <LevelGauge level={technology.level} />
        </>
    );

    if (!technology.url) {
        return (
            <article className="flex hover:scale-105 transition-all duration-200 flex-col gap-4 p-3 bg-primary-700 rounded-lg">
                {cardContent}
            </article>
        );
    }

    return (
        <a
            className="flex hover:scale-105 transition-all duration-200 flex-col gap-4 p-3 bg-primary-700 rounded-lg"
            href={technology.url}
            target="_blank"
            rel="noreferrer"
        >
            {cardContent}
        </a>
    );
}
