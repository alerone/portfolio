import type { Technology } from "@/content/content-types";
import { Icon } from "./Icon";
import { getLogo } from "@/resources/logos";

type TechBadgeProps = {
    technology: Pick<Technology, "slug" | "name" | "url" | "icon">
}

export function TechnologyBadge({ technology }: TechBadgeProps) {
    const content = technology.icon ? (
        <Icon
            iconFirst
            width={20}
            height={20}
            icon={getLogo(technology.icon)}
            label={technology.name} />
    ) : (
        <span>
            {technology.name}
        </span>
    )

    if (!technology.url) {
        return <span className="inline-flex hover:scale-95 transition-all duration-200 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 items-center opacity-90 px-2 py-1 rounded-lg shadow-sm">
            {content}
        </span>
    }

    return (
        <a className="inline-flex hover:scale-95 transition-all duration-200 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
            max-w-auto items-center opacity-90 px-2 py-1 rounded-lg shadow-sm"
            href={technology.url}
            target="_blank"
            rel="noreferrer"
        >
            {content}
        </a>
    )
}
