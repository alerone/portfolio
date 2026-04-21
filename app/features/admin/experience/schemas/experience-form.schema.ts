import { z } from "zod";
import { getLogoKeys } from "@/resources/logos";

const logoKeys = getLogoKeys();

export const workStatusSchema = z.enum(["intern", "employee"]);

export const experienceKeywordSchema = z.object({
    value: z.string().trim().min(1, "Keyword is required"),
});

export const experienceFormSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
    companyName: z.string().trim().min(1, "Company name is required"),
    companyUrl: z.url("Invalid URL").trim().optional().or(z.literal("")),
    companyIcon: z
        .string()
        .trim()
        .optional()
        .or(z.literal(""))
        .refine((value) => !value || logoKeys.includes(value as (typeof logoKeys)[number]), {
            message: "Invalid icon key",
        }),
    dateStart: z.string().min(1, "Start date is required"),
    dateEnd: z.string().optional().or(z.literal("")),
    status: workStatusSchema,
    description: z.string().trim().min(1, "Description is required"),
    keywords: z.array(experienceKeywordSchema).default([]),
    sortOrder: z.coerce.number().int().min(0, "Must be 0 or higher"),
});

export type ExperienceFormInput = z.input<typeof experienceFormSchema>;
export type ExperienceFormValues = z.output<typeof experienceFormSchema>;
