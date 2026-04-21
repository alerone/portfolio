import type { LogoKey } from "@/resources/logos";

export type ProjectStatus = "completed" | "planned" | "in_progress"
export type WorkStatus = "intern" | "employee"
export type SkillLevel = 0 | 1 | 2 | 3 | 4

export type EducationStatus = "completed" | "in_progress"

export type ProjectCategory =
    | "backend"
    | "fullstack"
    | "mobile"
    | "systems"
    | "frontend"
    | "ai"
    | "cli"
    | "game";

export type ProjectRole =
    | "personal"
    | "academic"
    | "tfg"
    | "tfm"
    | "course"
    | "internship"
    | "team";

export type ProjectScreenshot = {
    src: string
    alt: string
}

export type Project = {
    slug: string;
    name: string;
    summary: string;
    description?: string;
    githubUrl?: string;
    screenshots?: ProjectScreenshot[]
    languages?: string[]
    role?: ProjectRole
    category?: ProjectCategory
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
    dateEnd?: string;
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

export type EducationItem = {
    slug: string
    title: string
    institution: string
    institutionUrl?: string
    institutionIcon: LogoKey
    dateStart: string
    dateEnd?: string
    status: EducationStatus
    grade?: string
    honors?: string[]
    highlights?: string[]
    description?: string
}
