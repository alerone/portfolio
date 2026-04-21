import { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ExperienceItem } from "@/content/content-types";
import {
    experienceFormSchema,
    type ExperienceFormInput,
    type ExperienceFormValues,
} from "../schemas/experience-form.schema";
import { Button } from "@/components/ui/button";
import { getLogo, getLogoOptions } from "@/resources/logos";
import { Icon } from "@/components/Icon";
import { ExperienceKeywordsEditor } from "./ExperienceKeywordEditor";
import { SubmitFormButton } from "../../projects/components/SubmitFormButton";

type ExperienceFormProps = {
    initialExperience?: ExperienceItem | null;
    submitLabel: string;
    onSubmit: (values: ExperienceFormValues) => Promise<void>;
};

export function ExperienceForm({
    initialExperience,
    submitLabel,
    onSubmit,
}: ExperienceFormProps) {
    const [formError, setFormError] = useState<string | null>(null);

    const defaultValues = useMemo<ExperienceFormInput>(
        () => ({
            slug: initialExperience?.slug ?? "",
            companyName: initialExperience?.companyName ?? "",
            companyUrl: initialExperience?.companyUrl ?? "",
            companyIcon: initialExperience?.companyIcon ?? "",
            dateStart: initialExperience?.dateStart ?? "",
            dateEnd: initialExperience?.dateEnd ?? "",
            status: initialExperience?.status ?? "intern",
            description: initialExperience?.description ?? "",
            keywords: (initialExperience?.keywords ?? []).map((keyword) => ({ value: keyword })),
            sortOrder: 0,
        }),
        [initialExperience]
    );

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm<ExperienceFormInput, unknown, ExperienceFormValues>({
        resolver: zodResolver(experienceFormSchema),
        defaultValues,
    });

    const {
        fields: keywordFields,
        append: appendKeyword,
        remove: removeKeyword,
    } = useFieldArray({
        control,
        name: "keywords",
    });

    const selectedIcon = watch("companyIcon");
    const selectedLogo = getLogo(selectedIcon);

    async function submit(values: ExperienceFormValues) {
        try {
            setFormError(null);
            await onSubmit(values);
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Could not save experience");
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

                    <Field label="Company name" error={errors.companyName?.message}>
                        <input
                            {...register("companyName")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Company URL" error={errors.companyUrl?.message}>
                        <input
                            {...register("companyUrl")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Status" error={errors.status?.message}>
                        <select
                            {...register("status")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="intern">Intern</option>
                            <option value="employee">Employee</option>
                        </select>
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

                    <Field label="Company icon" error={errors.companyIcon?.message}>
                        <select
                            {...register("companyIcon")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="">No icon</option>
                            {getLogoOptions().map((option) => (
                                <option key={option.key} value={option.key}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
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
                                <Icon icon={selectedLogo} height={22} width={22} label={selectedIcon} iconFirst />
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

            <ExperienceKeywordsEditor
                fields={keywordFields}
                register={register}
                errors={errors}
                append={appendKeyword}
                remove={removeKeyword}
            />

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
