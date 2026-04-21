import { Button } from "@/components/ui/button";
import type {
    FieldArrayWithId,
    FieldErrors,
    UseFieldArrayRemove,
    UseFieldArrayUpdate,
    UseFormRegister,
} from "react-hook-form";
import type { ProjectFormInput } from "../schemas/project-form.schema";
import { ProjectImageUploadButton } from "./ProjectImageUploadButton";

type ProjectScreenshotFieldProps = {
    field: FieldArrayWithId<ProjectFormInput, "screenshots", "id">;
    index: number;
    total: number;
    projectSlug: string;
    register: UseFormRegister<ProjectFormInput>;
    errors: FieldErrors<ProjectFormInput>;
    remove: UseFieldArrayRemove;
    update: UseFieldArrayUpdate<ProjectFormInput, "screenshots">;
    onMoveUp: () => void;
    onMoveDown: () => void;
};

export function ProjectScreenshotField({
    field,
    index,
    total,
    projectSlug,
    register,
    errors,
    remove,
    update,
    onMoveUp,
    onMoveDown,
}: ProjectScreenshotFieldProps) {
    const screenshotErrors = errors.screenshots?.[index];

    return (
        <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-white">
                    Screenshot #{index + 1}
                </h3>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={onMoveUp}
                        disabled={index === 0}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 disabled:opacity-40"
                    >
                        Up
                    </button>

                    <button
                        type="button"
                        onClick={onMoveDown}
                        disabled={index === total - 1}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 disabled:opacity-40"
                    >
                        Down
                    </button>

                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="rounded-full border border-rose-400/20 bg-rose-300/[0.08] px-3 py-1 text-xs text-rose-200"
                    >
                        Remove
                    </button>
                </div>
            </div>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="flex-1">
                    {field.url ? (
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
                            <img
                                src={field.url}
                                alt={field.alt || `Screenshot ${index + 1}`}
                                className="h-40 w-full rounded-xl object-cover"
                            />
                        </div>
                    ) : (
                        <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-sm text-white/35">
                            No screenshot selected
                        </div>
                    )}
                </div>

                <ProjectImageUploadButton
                    projectSlug={projectSlug}
                    kind="screenshot"
                    buttonLabel="Upload file"
                    onUploaded={(publicUrl) => {
                        update(index, {
                            url: publicUrl,
                            alt: field.alt,
                            sortOrder: index,
                        });
                    }}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1fr_120px]">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/75">
                        URL or path
                    </label>
                    <input
                        {...register(`screenshots.${index}.url`)}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                    />
                    {screenshotErrors?.url?.message && (
                        <p className="text-xs text-rose-300">
                            {screenshotErrors.url.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/75">
                        Alt text
                    </label>
                    <input
                        {...register(`screenshots.${index}.alt`)}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                    />
                    {screenshotErrors?.alt?.message && (
                        <p className="text-xs text-rose-300">
                            {screenshotErrors.alt.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/75">
                        Order
                    </label>
                    <input
                        type="number"
                        {...register(`screenshots.${index}.sortOrder`)}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                    />
                    {screenshotErrors?.sortOrder?.message && (
                        <p className="text-xs text-rose-300">
                            {screenshotErrors.sortOrder.message}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}
