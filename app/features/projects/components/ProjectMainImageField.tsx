import { ProjectImageUploadButton } from "./ProjectImageUploadButton";

type ProjectMainImageFieldProps = {
    value: string;
    error?: string;
    projectSlug: string;
    onChange: (value: string) => void;
    onUploaded: (value: string) => void;
};

export function ProjectMainImageField({
    value,
    error,
    projectSlug,
    onChange,
    onUploaded,
}: ProjectMainImageFieldProps) {
    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="eyebrow mb-2">Media</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        Main image
                    </h2>
                    <p className="mt-1 text-sm text-white/55">
                        Paste an image URL/path or upload a file for the project card and detail page.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="https://... or /storage/path"
                        className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                    />

                    <ProjectImageUploadButton
                        projectSlug={projectSlug}
                        kind="cover"
                        onUploaded={onUploaded}
                        buttonLabel="Upload image"
                    />
                </div>

                {error && <p className="text-xs text-rose-300">{error}</p>}

                {value && (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
                        <img
                            src={value}
                            alt={projectSlug || "Project image preview"}
                            className="h-32 w-32 rounded-xl border border-white/10 bg-white/[0.04] object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
