import { useRef, useState } from "react";
import { uploadProjectImage, type ProjectImageKind } from "@/lib/storage/project-images";

type ProjectImageUploadButtonProps = {
    projectSlug: string;
    kind: ProjectImageKind;
    onUploaded: (publicUrl: string) => void;
    buttonLabel?: string;
    className?: string;
    accept?: string;
};

export function ProjectImageUploadButton({
    projectSlug,
    kind,
    onUploaded,
    buttonLabel = "Upload image",
    className = "inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.08]",
    accept = "image/*",
}: ProjectImageUploadButtonProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            setError(null);

            const publicUrl = await uploadProjectImage(file, projectSlug || "draft", kind);
            onUploaded(publicUrl);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed");
        } finally {
            setIsUploading(false);

            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className={className}
            >
                {isUploading ? "Uploading..." : buttonLabel}
            </button>

            <input
                ref={inputRef}
                type="file"
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
            />

            {error && <p className="text-xs text-rose-300">{error}</p>}
        </div>
    );
}
