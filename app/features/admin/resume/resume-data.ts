import type { EducationItem, ExperienceItem, Project, Technology } from "@/content/content-types";
import type { ResumeData, ResumeLanguage, ResumeProfile } from "./resume-types";

const MAX_SKILLS_PER_GROUP = 8;

const profile: ResumeProfile = {
    fullName: "Álvaro López Álvarez",
    headline: {
        en: "Computer science student focused on software engineering, backend development and distributed systems.",
        es: "Estudiante de Ingeniería Informática centrado en ingeniería del software, desarrollo backend y sistemas distribuidos."
    },
    phone: "+34 640764553",
    githubUrl: "https://github.com/alerone",
    linkedinUrl: "https://www.linkedin.com/in/alvarolopez-dev/",
    portfolioUrl: "https://alerone.github.io/portfolio",
    location: "Valencia, Spain",
    email: "alvaro.lopez.dev@gmail.com",
    image: "images/profile.jpg",
    summary: {
        en: "Computer Science graduate and Master's student with practical experience building full-stack, backend, mobile and distributed systems projects. Interested in clean architecture, scalable services, cybersecurity and applied software engineering.",
        es: "Graduado en Ingeniería Informática y estudiante de máster con experiencia práctica desarrollando proyectos full-stack, backend, móviles y sistemas distribuidos. Interesado en arquitectura limpia, servicios escalables, ciberseguridad e ingeniería del software aplicada.",
    },
}

function formatPeriod(dateStart: string, dateEnd?: string) {
    const startYear = new Date(dateStart).getFullYear()
    const endYear = dateEnd ? new Date(dateEnd).getFullYear() : "present"

    return `${startYear} - ${endYear}`
}

type BuildResumeDataInput = {
    lang: ResumeLanguage,
    projects: Project[],
    technologies: Technology[],
    experience: ExperienceItem[],
    education: EducationItem[]
}

export function buildResumeData({
    projects,
    technologies,
    experience,
    education
}: BuildResumeDataInput): ResumeData {
    return {
        profile,
        skills: buildSkills(technologies),
        projects: buildProjects(projects, technologies),
        experience: buildExperience(experience),
        education: buildEducation(education),
    }
}

import type {
    TechnologyKind,
} from "@/content/content-types";
import type { LocalizedText } from "./resume-types";

const skillLabels: Record<TechnologyKind | "other", LocalizedText> = {
    language: {
        en: "Programming Languages",
        es: "Lenguajes de programación",
    },
    framework: {
        en: "Frameworks",
        es: "Frameworks",
    },
    library: {
        en: "Libraries",
        es: "Librerías",
    },
    service: {
        en: "Services",
        es: "Servicios",
    },
    platform: {
        en: "Platforms",
        es: "Plataformas",
    },
    tool: {
        en: "Tools",
        es: "Herramientas",
    },
    other: {
        en: "Other",
        es: "Otros",
    },
};

const skillOrder: (TechnologyKind | "other")[] = [
    "language",
    "framework",
    "library",
    "service",
    "platform",
    "tool",
    "other",
];

function buildSkills(technologies: Technology[]) {
    return skillOrder
        .map((kind) => {
            const items = technologies
                .filter((technology) => technology.visible !== false)
                .filter((technology) => (technology.kind ?? "other") === kind)
                .sort((a, b) => b.level - a.level)
                .map((technology) => technology.name)
                .slice(0, MAX_SKILLS_PER_GROUP);

            return {
                label: skillLabels[kind],
                items,
            };
        })
        .filter((group) => group.items.length > 0);
}

function buildProjects(
    projects: Project[],
    technologies: Technology[],
    lang: ResumeLanguage
) {
    const technologyNameBySlug = new Map(
        technologies.map((technology) => [technology.slug, technology.name])
    );

    return projects
        .filter((project) => project.featuredInResume)
        .map((project) => {
            const bullets = project.resumeBullets?.[lang] ?? [];

            return {
                name: project.name,
                role: project.resumeRole?.[lang],
                bullets: bullets.length > 0 ? bullets : [project.summary],
                technologies: project.technologies.map(
                    (technologySlug) =>
                        technologyNameBySlug.get(technologySlug) ?? technologySlug
                ),
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
            };
        });
}

function buildExperience(experience: ExperienceItem[]) {
    return experience.map((item) => ({
        companyName: item.companyName,
        period: formatPeriod(item.dateStart, item.dateEnd),
        description: item.description,
        keywords: item.keywords ?? [],
    }));
}

function buildEducation(education: EducationItem[]) {
    return education.map((item) => ({
        title: item.title,
        institution: item.institution,
        period: formatPeriod(item.dateStart, item.dateEnd),
        description: undefined,
        highlights: item.highlights ?? [],
    }));
}


