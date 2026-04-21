import type {
    FieldArrayWithId,
    FieldErrors,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    UseFormRegister,
} from "react-hook-form";
import type { ExperienceFormInput } from "../schemas/experience-form.schema";
import { Button } from "@/components/ui/button";

type ExperienceKeywordsEditorProps = {
    fields: FieldArrayWithId<ExperienceFormInput, "keywords", "id">[];
    register: UseFormRegister<ExperienceFormInput>;
    errors: FieldErrors<ExperienceFormInput>;
    append: UseFieldArrayAppend<ExperienceFormInput, "keywords">;
    remove: UseFieldArrayRemove;
};

export function ExperienceKeywordsEditor({
    fields,
    register,
    errors,
    append,
    remove,
}: ExperienceKeywordsEditorProps) {
    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <p className="eyebrow mb-2">Metadata</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        Keywords
                    </h2>
                </div>

                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => append({ value: "" })}
                >
                    Add keyword
                </Button>
            </div>

            {fields.length === 0 ? (
                <p className="text-sm text-white/55">No keywords yet.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {fields.map((field, index) => {
                        const fieldError = errors.keywords?.[index]?.value?.message;

                        return (
                            <div
                                key={field.id}
                                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                            >
                                <input
                                    {...register(`keywords.${index}.value`)}
                                    className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="rounded-full border border-rose-400/20 bg-rose-300/[0.08] px-3 py-2 text-xs text-rose-200"
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
