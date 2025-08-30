import type { Technology } from "~/types/technology";
import { Icon } from "./Icon";
import { getSVGResource } from "~/resources/resources";

export function TechnologyBadge({ technology }: { technology: Pick<Technology, "id" | "name" | "href" | "icon"> }) {
    return (
        <a className="inline-flex hover:scale-95 transition-all duration-200 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
            max-w-auto items-center opacity-90 px-2 py-1 rounded-lg shadow-sm"
            href={technology.href}
            target="_blank"
            rel="noreferrer"
        >
            {technology.icon ?
                <Icon iconFirst width={20} height={20} icon={getSVGResource(technology.icon)} label={technology.name} /> :
                <span>
                    {technology.name}
                </span>
            }
        </a>
    )
}
