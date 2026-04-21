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
import { ProjectScreenshotField } from "@/features/projects/components/ProjectScreenshotField";

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
                    {fields.map((field, index) => (
                        <ProjectScreenshotField
                            key={field.id}
                            field={field}
                            index={index}
                            total={fields.length}
                            projectSlug={projectSlug}
                            register={register}
                            errors={errors}
                            remove={remove}
                            update={update}
                            onMoveUp={() => moveScreenshot(index, -1)}
                            onMoveDown={() => moveScreenshot(index, 1)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
