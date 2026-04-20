import { Button } from "@/components/ui/button";
import type {
    FieldArrayWithId,
    UseFieldArrayAppend,
    UseFieldArrayMove,
    UseFieldArrayRemove,
    UseFieldArrayUpdate,
    UseFormRegister,
    FieldErrors,
} from "react-hook-form";
import type { ProjectFormInput } from "../schemas/project-form.schema";
import { ScreenshotUploadButton } from "./ScreenshotUploadButton";

type ProjectScreenshotsEditorProps = {
    projectSlug: string;
    fields: FieldArrayWithId<ProjectFormInput, "screenshots", "id">[];
    register: UseFormRegister<ProjectFormInput>;
    errors: FieldErrors<ProjectFormInput>;
    append: UseFieldArrayAppend<ProjectFormInput, "screenshots">;
    remove: UseFieldArrayRemove;
    move: UseFieldArrayMove;
    update: UseFieldArrayUpdate<ProjectFormInput, "screenshots">;
};

export function ProjectScreenshotsEditor({
    projectSlug,
    fields,
    register,
    errors,
    append,
    remove,
    move,
    update,
}: ProjectScreenshotsEditorProps) {
    function addScreenshot() {
        append({
            url: "",
            alt: "",
            sortOrder: fields.length,
        });
    }

    function moveScreenshot(index: number, direction: -1 | 1) {
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= fields.length) return;
        move(index, targetIndex);
    }

    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <p className="eyebrow mb-2">Visuals</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        Screenshots
                    </h2>
                    <p className="mt-1 text-sm text-white/55">
                        Add image paths, public URLs or upload files directly.
                    </p>
                </div>

                <Button type="button" variant="secondary" onClick={addScreenshot}>
                    Add screenshot
                </Button>
            </div>

            {fields.length === 0 ? (
                <p className="text-sm text-white/55">No screenshots yet.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {fields.map((field, index) => {
                        const screenshotErrors = errors.screenshots?.[index];

                        return (
                            <article
                                key={field.id}
                                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
                            >
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <h3 className="text-sm font-semibold text-white">
                                        Screenshot #{index + 1}
                                    </h3>

                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => moveScreenshot(index, -1)}
                                            disabled={index === 0}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 disabled:opacity-40"
                                        >
                                            Up
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => moveScreenshot(index, 1)}
                                            disabled={index === fields.length - 1}
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

                                <div className="mb-4">
                                    <ScreenshotUploadButton
                                        projectSlug={projectSlug}
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
                    })}
                </div>
            )}
        </section>
    );
}
