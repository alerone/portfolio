export type DbProjectStatus = "completed" | "planned" | "in_progress";
export type DbProjectCategory =
    | "backend"
    | "fullstack"
    | "mobile"
    | "systems"
    | "frontend"
    | "ai"
    | "cli"
    | "game";

export type DbProjectRole =
    | "personal"
    | "academic"
    | "tfg"
    | "tfm"
    | "course"
    | "internship"
    | "team";

export type DbProjectRow = {
    id: number;
    slug: string;
    name: string;
    summary: string;
    description: string | null;
    github_url: string | null;
    live_url: string | null;
    image_url: string | null;
    status: DbProjectStatus;
    category: DbProjectCategory | null;
    role: DbProjectRole | null;
    featured: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
};
