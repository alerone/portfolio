import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Technology } from "@/content/content-types";
import {
    technologyFormSchema,
    type TechnologyFormInput,
    type TechnologyFormValues,
} from "../schemas/technology-form.schema";
import { Button } from "@/components/ui/button";
import { getLogoOptions, getLogo } from "@/resources/logos";
import { Icon } from "@/components/Icon";

type TechnologyFormProps = {
    initialTechnology?: Technology | null;
    submitLabel: string;
    onSubmit: (values: TechnologyFormValues) => Promise<void>;
};

export function TechnologyForm({
    initialTechnology,
    submitLabel,
    onSubmit,
}: TechnologyFormProps) {
    const [formError, setFormError] = useState<string | null>(null);

    const defaultValues = useMemo<TechnologyFormInput>(
        () => ({
            slug: initialTechnology?.slug ?? "",
            name: initialTechnology?.name ?? "",
            description: initialTechnology?.description ?? "",
            url: initialTechnology?.url ?? "",
            icon: initialTechnology?.icon ?? "",
            level: initialTechnology?.level ?? 0,
            visible: initialTechnology?.visible ?? true,
        }),
        [initialTechnology]
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<TechnologyFormInput, unknown, TechnologyFormValues>({
        resolver: zodResolver(technologyFormSchema),
        defaultValues,
    });

    const selectedIcon = watch("icon");
    const selectedLogo = getLogo(selectedIcon);

    async function submit(values: TechnologyFormValues) {
        try {
            setFormError(null);
            await onSubmit(values);
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Could not save technology");
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

                    <Field label="URL" error={errors.url?.message}>
                        <input
                            {...register("url")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        />
                    </Field>

                    <Field label="Level" error={errors.level?.message}>
                        <select
                            {...register("level")}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value={0}>Very Basic</option>
                            <option value={1}>Basic</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Advanced</option>
                            <option value={4}>Expert</option>
                        </select>
                    </Field>

                    <Field label="Icon" error={errors.icon?.message}>
                        <select
                            {...register("icon")}
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

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-white/75">Preview</label>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 min-h-[50px] flex items-center">
                            {selectedLogo ? (
                                <Icon icon={selectedLogo} height={20} width={20} label={selectedIcon} iconFirst />
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

                <label className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
                    <input type="checkbox" {...register("visible")} />
                    Visible in public technologies page
                </label>
            </section>

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
