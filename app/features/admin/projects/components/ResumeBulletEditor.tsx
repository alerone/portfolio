import {
    useWatch,
    type Control,
    type FieldPath,
    type UseFormRegister,
    type UseFormSetValue,
} from "react-hook-form";
import type { ProjectFormInput } from "../schemas/project-form.schema";

type BulletFieldName = "resumeBulletsEn" | "resumeBulletsEs";

type ResumeBulletEditorProps = {
    label: string;
    name: BulletFieldName;
    control: Control<ProjectFormInput>;
    register: UseFormRegister<ProjectFormInput>;
    setValue: UseFormSetValue<ProjectFormInput>;
};

export function ResumeBulletEditor({
    label,
    name,
    control,
    register,
    setValue,
}: ResumeBulletEditorProps) {
    const bullets = useWatch({
        control,
        name,
    }) ?? [];

    function addBullet() {
        setValue(name, [...bullets, ""], {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    }

    function removeBullet(indexToRemove: number) {
        setValue(
            name,
            bullets.filter((_, index) => index !== indexToRemove),
            {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
            }
        );
    }

    return (
        <div className="grid gap-2">
            <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-white/75">
                    {label}
                </span>

                <button
                    type="button"
                    onClick={addBullet}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                >
                    Add bullet
                </button>
            </div>

            {bullets.length === 0 && (
                <p className="rounded-2xl border border-dashed border-white/10 px-3 py-3 text-sm text-white/45">
                    No resume bullets yet.
                </p>
            )}

            <div className="grid gap-2">
                {bullets.map((_, index) => {
                    const fieldName =
                        `${name}.${index}` as FieldPath<ProjectFormInput>;

                    return (
                        <div key={`${name}-${index}`} className="flex gap-2">
                            <textarea
                                {...register(fieldName)}
                                rows={2}
                                placeholder="Write a short, impact-oriented resume bullet..."
                                className="min-h-16 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.06]"
                            />

                            <button
                                type="button"
                                onClick={() => removeBullet(index)}
                                className="rounded-2xl border border-white/10 px-3 text-xs text-white/60 transition hover:bg-rose-500/10 hover:text-rose-200"
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
