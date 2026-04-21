import { z } from "zod";
import { getLogoKeys } from "@/resources/logos";

const logoKeys = getLogoKeys();

export const educationStatusSchema = z.enum(["completed", "in_progress"]);

export const educationFormSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
    title: z.string().trim().min(1, "Title is required"),
    institution: z.string().trim().min(1, "Institution is required"),
    institutionUrl: z.url("Invalid URL").trim().optional().or(z.literal("")),
    institutionIcon: z
        .string()
        .trim()
        .optional()
        .or(z.literal(""))
        .refine((value) => !value || logoKeys.includes(value as (typeof logoKeys)[number]), {
            message: "Invalid icon key",
        }),
    dateStart: z.string().min(1, "Start date is required"),
    dateEnd: z.string().optional().or(z.literal("")),
    status: educationStatusSchema,
    grade: z.string().trim().optional().or(z.literal("")),
    description: z.string().trim().optional().or(z.literal("")),
    honors: z.array(z.string().trim().min(1, "Field is required")).default([]),
    highlights: z.array(z.string().trim().min(1, "Field is required")).default([]),
    sortOrder: z.coerce.number().int().min(0, "Must be 0 or higher"),
});

export type EducationFormInput = z.input<typeof educationFormSchema>;
export type EducationFormValues = z.output<typeof educationFormSchema>;
