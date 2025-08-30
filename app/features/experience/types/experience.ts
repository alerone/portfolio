import type { Company } from "./company"

export type WorkStatus = "intern" | "employee"
export type WorkExperience = {
    id: string,
    company?: Company,
    dateStart: Date,
    dateEnd: Date,
    status: WorkStatus,
    keywords: string[],
    description: string
}
