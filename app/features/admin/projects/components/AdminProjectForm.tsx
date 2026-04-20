import { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Project, Technology } from "@/content/content-types";
import {
    projectFormSchema,
    type ProjectFormInput,
    type ProjectFormValues,
} from "../schemas/project-form.schema";
import { Button } from "@/components/ui/button";
import { ProjectTechnologySelector } from "./ProjectTechnologySelector";
import { ProjectScreenshotsEditor } from "./ProjectScreenshotsEditor";
import { ProjectImageUploader } from "./ProjectImageUploader";

type AdminProjectFormProps = {
    initialProject?: Project | null;
    technologiesCatalog: Technology[];
    submitLabel: string;
    onSubmit: (values: ProjectFormValues) => Promise<void>;
};

export function AdminProjectForm({
    initialProject,
    technologiesCatalog,
    submitLabel,
    onSubmit,
}: AdminProjectFormProps) {
    const [formError, setFormError] = useState<string | null>(null);

    const defaultValues = useMemo<ProjectFormInput>(
        () => ({
            slug: initialProject?.slug ?? "",
            name: initialProject?.name ?? "",
            summary: initialProject?.summary ?? "",
            description: initialProject?.description ?? "",
            githubUrl: initialProject?.githubUrl ?? "",
            liveUrl: initialProject?.liveUrl ?? "",
            image: initialProject?.image ?? "",
            status: initialProject?.status ?? "completed",
            category: initialProject?.category,
            role: initialProject?.role,
            featured: initialProject?.featured ?? false,
            sortOrder: 0,
            languages: initialProject?.languages ?? [],
            technologies: initialProject?.technologies ?? [],
            screenshots:
                initialProject?.screenshots?.map((screenshot, index) => ({
                    url: screenshot.src,
                    alt: screenshot.alt,
                    sortOrder: index,
                })) ?? [],
        }),
        [initialProject]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        setValue,
        control,
    } = useForm<ProjectFormInput, unknown, ProjectFormValues>({
        resolver: zodResolver(projectFormSchema),
        defaultValues,
    });

    const {
        fields: screenshotFields,
        append: appendScreenshot,
        remove: removeScreenshot,
        move: moveScreenshot,
        update: updateScreenshot,
    } = useFieldArray({
        control,
        name: "screenshots",
    });

    const selectedLanguages = watch("languages");
    const selectedTechnologies = watch("technologies");
    const currentSlug = watch("slug");
    const currentImage = watch("image");

    const languageOptions = useMemo(
        () =>
            technologiesCatalog.filter((technology) =>
                ["go", "python", "typescript", "javascript", "kotlin"].includes(
                    technology.slug
                )
            ),
        [technologiesCatalog]
    );

    const stackOptions = useMemo(
        () =>
            technologiesCatalog.filter(
                (technology) => !languageOptions.some((lang) => lang.slug === technology.slug)
            ),
        [technologiesCatalog, languageOptions]
    );

    function toggleInArray(field: "languages" | "technologies", slug: string) {
        const current = watch(field);
        const next = current!.includes(slug)
            ? current!.filter((item) => item !== slug)
            : [...current!, slug];

        setValue(field, next, {
            shouldDirty: true,
            shouldValidate: true,
        });
    }

    async function submit(values: ProjectFormValues) {
        try {
            setFormError(null);

            const normalizedValues: ProjectFormValues = {
                ...values,
                screenshots: values.screenshots.map((screenshot, index) => ({
                    ...screenshot,
                    sortOrder: index,
                })),
            };

            await onSubmit(normalizedValues);
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Could not save project");
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
            <section className="surface rounded-[28px] p-5 xl:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Slug" error={errors.slug?.message}>
                        <input
                            {...register("slug")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Name" error={errors.name?.message}>
                        <input
                            {...register("name")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="GitHub URL" error={errors.githubUrl?.message}>
                        <input
                            {...register("githubUrl")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Live URL" error={errors.liveUrl?.message}>
                        <input
                            {...register("liveUrl")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Image URL or path" error={errors.image?.message}>
                        <input
                            {...register("image")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Sort order" error={errors.sortOrder?.message}>
                        <input
                            type="number"
                            {...register("sortOrder")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Status" error={errors.status?.message}>
                        <select
                            {...register("status")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="completed">Finished</option>
                            <option value="in_progress">Work in progress</option>
                            <option value="planned">Planned</option>
                        </select>
                    </Field>

                    <Field label="Category" error={errors.category?.message}>
                        <select
                            {...register("category")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="">No category</option>
                            <option value="backend">Backend</option>
                            <option value="fullstack">Full-stack</option>
                            <option value="mobile">Mobile</option>
                            <option value="systems">Systems</option>
                            <option value="frontend">Frontend</option>
                            <option value="ai">AI</option>
                            <option value="cli">CLI</option>
                            <option value="game">Game</option>
                        </select>
                    </Field>

                    <Field label="Role" error={errors.role?.message}>
                        <select
                            {...register("role")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="">No role</option>
                            <option value="personal">Personal</option>
                            <option value="academic">Academic</option>
                            <option value="tfg">TFG</option>
                            <option value="tfm">TFM</option>
                            <option value="course">Course</option>
                            <option value="internship">Internship</option>
                            <option value="team">Team</option>
                        </select>
                    </Field>
                </div>

                <div className="mt-4">
                    <Field label="Summary" error={errors.summary?.message}>
                        <textarea
                            {...register("summary")}
                            rows={4}
                            className="min-h-[110px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>
                </div>

                <div className="mt-4">
                    <Field label="Description" error={errors.description?.message}>
                        <textarea
                            {...register("description")}
                            rows={12}
                            className="min-h-[260px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>
                </div>

                <label className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
                    <input type="checkbox" {...register("featured")} />
                    Featured project
                </label>
            </section>

            <ProjectImageUploader
                currentValue={currentImage}
                projectSlug={currentSlug}
                onUploaded={(publicUrl) => {
                    setValue("image", publicUrl, {
                        shouldDirty: true,
                        shouldValidate: true,
                    });
                }}
            />

            <ProjectTechnologySelector
                title="Languages"
                description="Select the main programming languages used in the project."
                technologies={languageOptions}
                selectedSlugs={selectedLanguages}
                onToggle={(slug) => toggleInArray("languages", slug)}
            />

            <ProjectTechnologySelector
                title="Stack"
                description="Select the main tools, frameworks and services used in the project."
                technologies={stackOptions}
                selectedSlugs={selectedTechnologies}
                onToggle={(slug) => toggleInArray("technologies", slug)}
            />

            <ProjectScreenshotsEditor
                projectSlug={currentSlug}
                fields={screenshotFields}
                register={register}
                errors={errors}
                append={appendScreenshot}
                remove={removeScreenshot}
                move={moveScreenshot}
                update={updateScreenshot}
            />

            {formError && (
                <div className="rounded-2xl border border-rose-400/20 bg-rose-300/[0.08] px-4 py-3 text-sm text-rose-200">
                    {formError}
                </div>
            )}

            <div className="flex justify-end">
                <Button type="submit" size="lg">
                    {isSubmitting ? "Saving..." : submitLabel}
                </Button>
            </div>
        </form>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/75">{label}</label>
            {children}
            {error && <p className="text-xs text-rose-300">{error}</p>}
        </div>
    );
}
