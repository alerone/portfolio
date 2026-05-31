export type ResumeLanguage = "en" | "es";

export type LocalizedText = {
    en: string;
    es: string;
};

export type ResumeProfile = {
    fullName: string;
    headline: LocalizedText;
    location: string;
    email: string;
    phone?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    portfolioUrl?: string;
    image?: string;
    summary: LocalizedText;
};

export type ResumeData = {
    profile: ResumeProfile;
    skills: {
        label: LocalizedText;
        items: string[];
    }[];
    projects: {
        name: string;
        role?: string;
        bullets: string[];
        technologies: string[];
        githubUrl?: string;
        liveUrl?: string;
    }[];
    experience: {
        companyName: string;
        period: string;
        description: string;
        keywords: string[];
    }[];
    education: {
        title: string;
        institution: string;
        period: string;
        description?: string;
        highlights: string[];
    }[];
};
