import { useMemo, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { EducationItem } from "@/content/content-types";
import {
    educationFormSchema,
    type EducationFormInput,
    type EducationFormValues,
} from "../schemas/education-form.schema";
import { getLogo } from "@/resources/logos";
import { Icon } from "@/components/Icon";
import { EducationTextListEditor } from "./EducationTextListEditor";
import { SubmitFormButton } from "../../projects/components/SubmitFormButton";
import { SearchableIconSelect } from "../../components/SearchableIconSelect";
import { TagInput } from "../../components/TagInput";

type EducationFormProps = {
    initialEducation?: EducationItem | null;
    submitLabel: string;
    onSubmit: (values: EducationFormValues) => Promise<void>;
};

export function EducationForm({
    initialEducation,
    submitLabel,
    onSubmit,
}: EducationFormProps) {
    const [formError, setFormError] = useState<string | null>(null);

    const defaultValues = useMemo<EducationFormInput>(
        () => ({
            slug: initialEducation?.slug ?? "",
            title: initialEducation?.title ?? "",
            institution: initialEducation?.institution ?? "",
            institutionUrl: initialEducation?.institutionUrl ?? "",
            institutionIcon: initialEducation?.institutionIcon ?? "",
            dateStart: initialEducation?.dateStart ?? "",
            dateEnd: initialEducation?.dateEnd ?? "",
            status: initialEducation?.status ?? "completed",
            grade: initialEducation?.grade ?? "",
            description: initialEducation?.description ?? "",
            honors: initialEducation?.honors ?? [],
            highlights: initialEducation?.highlights ?? [],
            sortOrder: 0,
        }),
        [initialEducation]
    );

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm<EducationFormInput, unknown, EducationFormValues>({
        resolver: zodResolver(educationFormSchema),
        defaultValues,
    });

    const selectedIcon = watch("institutionIcon");
    const selectedLogo = getLogo(selectedIcon);

    async function submit(values: EducationFormValues) {
        try {
            setFormError(null);
            await onSubmit(values);
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Could not save education");
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

                    <Field label="Title" error={errors.title?.message}>
                        <input
                            {...register("title")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Institution" error={errors.institution?.message}>
                        <input
                            {...register("institution")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Institution URL" error={errors.institutionUrl?.message}>
                        <input
                            {...register("institutionUrl")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Status" error={errors.status?.message}>
                        <select
                            {...register("status")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="completed">Completed</option>
                            <option value="in_progress">In progress</option>
                        </select>
                    </Field>

                    <Field label="Grade" error={errors.grade?.message}>
                        <input
                            {...register("grade")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Start date" error={errors.dateStart?.message}>
                        <input
                            type="date"
                            {...register("dateStart")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="End date" error={errors.dateEnd?.message}>
                        <input
                            type="date"
                            {...register("dateEnd")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Institution icon" error={errors.institutionIcon?.message}>
                        <Controller
                            control={control}
                            name="institutionIcon"
                            render={({ field }) => (
                                <SearchableIconSelect
                                    value={field.value ?? ""}
                                    onChange={field.onChange}
                                    emptyLabel="No icon"
                                />
                            )}
                        />
                    </Field>

                    <Field label="Sort order" error={errors.sortOrder?.message}>
                        <input
                            type="number"
                            {...register("sortOrder")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-sm font-medium text-white/75">Icon preview</label>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 min-h-[50px] flex items-center">
                            {selectedLogo ? (
                                <Icon icon={selectedLogo} height={60} width={60} label={selectedIcon} iconFirst />
                            ) : (
                                <span className="text-sm text-white/45">No icon selected</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <Field label="Description" error={errors.description?.message}>
                        <textarea
                            {...register("description")}
                            rows={8}
                            className="min-h-[180px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>
                </div>
            </section>

            <section className="surface rounded-[28px] p-5 xl:p-6">
                <div className="mb-5">
                    <p className="eyebrow mb-2">Metadata</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        Honors
                    </h2>
                </div>

                <Controller
                    control={control}
                    name="honors"
                    render={({ field }) => (
                        <TagInput
                            value={field.value ?? []}
                            onChange={field.onChange}
                            placeholder="Write an honor and press Enter"
                        />
                    )}
                />
            </section>

            <section className="surface rounded-[28px] p-5 xl:p-6">
                <div className="mb-5">
                    <p className="eyebrow mb-2">Metadata</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        Highlights
                    </h2>
                </div>

                <Controller
                    control={control}
                    name="highlights"
                    render={({ field }) => (
                        <TagInput
                            value={field.value ?? []}
                            onChange={field.onChange}
                            placeholder="Write a highlight and press Enter"
                        />
                    )}
                />
            </section>

            {formError && (
                <div className="rounded-2xl border border-rose-400/20 bg-rose-300/[0.08] px-4 py-3 text-sm text-rose-200">
                    {formError}
                </div>
            )}

            <div className="sticky bottom-3 z-20">
                <div className="flex justify-stretch sm:justify-end">
                    <SubmitFormButton message={isSubmitting ? "Saving..." : submitLabel} />
                </div>
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
