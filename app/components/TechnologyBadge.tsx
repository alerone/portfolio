import type { Technology } from "@/content/content-types";
import { Icon } from "./Icon";
import { getLogo } from "@/resources/logos";

type TechBadgeProps = {
    technology: Pick<Technology, "slug" | "name" | "url" | "icon">;
};

export function TechnologyBadge({ technology }: TechBadgeProps) {
    const content = technology.icon ? (
        <Icon
            iconFirst
            width={16}
            height={16}
            icon={getLogo(technology.icon)}
            label={technology.name}
        />
    ) : (
        <span>{technology.name}</span>
    );

    const className =
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/[0.07]";

    if (!technology.url) {
        return <span className={className}>{content}</span>;
    }

    return (
        <a
            className={className}
            href={technology.url}
            target="_blank"
            rel="noreferrer"
        >
            {content}
        </a>
    );
}
