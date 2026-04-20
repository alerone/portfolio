import { z } from "zod";

export const projectStatusSchema = z.enum([
    "completed",
    "planned",
    "in_progress",
]);

export const projectCategorySchema = z.enum([
    "backend",
    "fullstack",
    "mobile",
    "systems",
    "frontend",
    "ai",
    "cli",
    "game",
]);

export const projectRoleSchema = z.enum([
    "personal",
    "academic",
    "tfg",
    "tfm",
    "course",
    "internship",
    "team",
]);

export const projectScreenshotSchema = z.object({
    url: z.string().trim().min(1, "Screenshot URL/path is required"),
    alt: z.string().trim().min(1, "Alt text is required"),
    sortOrder: z.coerce.number().int().min(0, "Must be 0 or higher"),
});

export const projectFormSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
    name: z.string().trim().min(1, "Name is required"),
    summary: z.string().trim().min(1, "Summary is required"),
    description: z.string().trim().optional().or(z.literal("")),
    githubUrl: z.url("Invalid URL").trim().optional().or(z.literal("")),
    liveUrl: z.url("Invalid URL").trim().optional().or(z.literal("")),
    image: z.string().trim().optional().or(z.literal("")),
    status: projectStatusSchema,
    category: projectCategorySchema.optional(),
    role: projectRoleSchema.optional(),
    featured: z.boolean(),
    sortOrder: z.coerce.number().int().min(0, "Must be 0 or higher"),
    languages: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    screenshots: z.array(projectScreenshotSchema).default([]),
});

export type ProjectFormInput = z.input<typeof projectFormSchema>;
export type ProjectFormValues = z.output<typeof projectFormSchema>;
export type ProjectScreenshotFormValue = z.output<typeof projectScreenshotSchema>;
