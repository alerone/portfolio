import { z } from "zod";
import { getLogoKeys } from "@/resources/logos";

const logoKeys = getLogoKeys();

export const technologyFormSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
    name: z.string().trim().min(1, "Name is required"),
    description: z.string().trim().min(1, "Description is required"),
    url: z.url("Invalid URL").trim().optional().or(z.literal("")),
    icon: z
        .string()
        .trim()
        .optional()
        .or(z.literal(""))
        .refine((value) => !value || logoKeys.includes(value as (typeof logoKeys)[number]), {
            message: "Invalid icon key",
        }),
    level: z.coerce.number().int().min(0).max(4),
    visible: z.boolean(),
});

export type TechnologyFormInput = z.input<typeof technologyFormSchema>;
export type TechnologyFormValues = z.output<typeof technologyFormSchema>;
