import { Icon } from "~/components/Icon";
import { getSVGResource } from "~/resources/resources";
import type { WorkExperience, WorkStatus } from "../types/experience";
import { dateDiff, formatDateRange } from "~/utils/date";

const statusBG: Record<WorkStatus, string> = {
    "intern": "bg-sky-500",
    "employee": "bg-emerald-500",
}

export function ExperienceCard({ experience }: { experience: WorkExperience }) {
    return (
        <a
            key={experience.id}
            className="flex hover:scale-105 transition-all duration-200 flex-col p-4 bg-primary-700 rounded-lg"
            href={experience.company?.href}
            target="_blank"
            rel="noreferrer"
        >
            <div className="px-2 flex items-center justify-between">
                {experience.company && experience.company.icon &&
                    <>
                        <Icon icon={getSVGResource(experience.company.icon)} height={100} width={150} />
                        <p className={`bg-primary-400 font-semibold text-md px-2 rounded-lg ${statusBG[experience.status]}`}>{experience.status}</p>
                    </>
                }
            </div>
            <h2 className="text-white whitespace-nowrap font-semibold text-lg mb-1">{experience.company?.name}</h2>
            <div className="flex flex-row gap-2 mb-4">
                <p className="bg-primary-600 opacity-80 px-2 rounded-lg text-white text-sm">{formatDateRange(experience.dateStart, experience.dateEnd)}</p>
                <p className="bg-primary-600 opacity-80 px-2 rounded-lg  text-white text-sm">{dateDiff(experience.dateStart, experience.dateEnd)}</p>
            </div>
            <p className="text-white text-md mb-4">{experience.description}</p>
            {experience.keywords && experience.keywords.length > 0 &&
                <div className="gap-2 flex flex-row overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide max-h-[40px]">
                    {experience.keywords.map((keyword: string) => (
                        <span className="opacity-70 bg-gradient-to-tr font-bold from-primary-600 via-primary-300 to-primary-600 shadow-sm py-1 px-2 rounded-lg text-sm text-slate-100">{keyword}</span>
                    ))}
                </div>
            }
        </a>
    )
}
