import type { WorkExperience } from "./types/experience";

export const experienceList: Record<string, WorkExperience> = {
    "iti": {
        id: "b7ad774f-2b8b-4260-a116-46d9ce7729c7",
        company: {
            name: "Instituto Tecnológico de Investigación",
            icon: "iti",
            href: "https://www.iti.es/"
        },
        dateStart: new Date(2024, 1, 12),
        dateEnd: new Date(2024, 7, 26),
        status: "intern",
        description: "At ITI, I interned on a personnel application for the company's intranet. During this time, I learned a lot about how GitHub and Git work, worked on both the backend and frontend, and learned some technologies from the world of web development.",
        keywords: ["React", "git", "github", "CI/CD", "issues", "typescript"]
    }
}


