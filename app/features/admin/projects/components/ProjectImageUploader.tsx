import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { uploadPortfolioAsset } from "@/lib/storage";

type ProjectImageUploaderProps = {
    currentValue: string | undefined;
    projectSlug: string;
    onUploaded: (publicUrl: string) => void;
};

export function ProjectImageUploader({
    currentValue,
    projectSlug,
    onUploaded,
}: ProjectImageUploaderProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            setError(null);

            const { publicUrl } = await uploadPortfolioAsset(
                file,
                `projects/${projectSlug || "draft"}/cover`
            );

            onUploaded(publicUrl);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed");
        } finally {
            setIsUploading(false);
            if (inputRef.current) inputRef.current.value = "";
        }
    }

    return (
        <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3">
                <h3 className="text-sm font-semibold text-white">Project image</h3>
                <p className="mt-1 text-xs text-white/55">
                    Upload a cover image or keep using a manual path/URL.
                </p>
            </div>

            {currentValue && (
                <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
                    <img
                        src={currentValue}
                        alt="Project cover preview"
                        className="h-32 w-full rounded-xl object-cover"
                    />
                </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
                <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
                    {isUploading ? "Uploading..." : "Upload image"}
                </Button>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            {error && <p className="mt-3 text-xs text-rose-300">{error}</p>}
        </section>
    );
}
