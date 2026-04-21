import type {
    FieldArrayWithId,
    FieldErrors,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    UseFormRegister,
} from "react-hook-form";
import type { EducationFormInput } from "../schemas/education-form.schema";
import { Button } from "@/components/ui/button";

type ListName = "honors" | "highlights";

type EducationTextListEditorProps = {
    title: string;
    fields: FieldArrayWithId<EducationFormInput, ListName, "id">[];
    register: UseFormRegister<EducationFormInput>;
    errors: FieldErrors<EducationFormInput>;
    append: UseFieldArrayAppend<EducationFormInput, ListName>;
    remove: UseFieldArrayRemove;
    name: ListName;
    addLabel: string;
};

export function EducationTextListEditor({
    title,
    fields,
    register,
    errors,
    append,
    remove,
    name,
    addLabel,
}: EducationTextListEditorProps) {
    const listErrors = errors[name];

    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <p className="eyebrow mb-2">Metadata</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        {title}
                    </h2>
                </div>

                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => append({ value: "" })}
                >
                    {addLabel}
                </Button>
            </div>

            {fields.length === 0 ? (
                <p className="text-sm text-white/55">No items yet.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {fields.map((field, index) => {
                        const fieldError = listErrors?.[index]?.value?.message;

                        return (
                            <div
                                key={field.id}
                                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-start"
                            >
                                <input
                                    {...register(`${name}.${index}.value`)}
                                    className="w-full flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="min-h-10 rounded-full border border-rose-400/20 bg-rose-300/[0.08] px-3 py-2 text-xs text-rose-200"
                                >
                                    Remove
                                </button>

                                {fieldError && (
                                    <p className="text-xs text-rose-300">{fieldError}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
