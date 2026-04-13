import type { LogoKey } from "@/resources/logos";

export type ProjectStatus = "completed" | "planned" | "in_progress"
export type WorkStatus = "intern" | "employee"
export type SkillLevel = 0 | 1 | 2 | 3 | 4

export type Project = {
    slug: string;
    name: string;
    summary: string;
    description?: string;
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    status: ProjectStatus;
    technologies: string[];
    featured?: boolean;
}

export type ExperienceItem = {
    slug: string;
    companyName: string;
    companyUrl?: string;
    companyIcon: LogoKey;
    dateStart: string;
    dateEnd: string;
    status: WorkStatus;
    description: string;
    keywords?: string[];
}

export type Technology = {
    slug: string;
    name: string;
    description: string;
    url?: string;
    icon?: LogoKey;
    level: SkillLevel;
    keywords?: string[];
    visible?: boolean;
}
