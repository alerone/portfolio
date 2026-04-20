import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { uploadPortfolioAsset } from "@/lib/storage";

type ScreenshotUploadButtonProps = {
    projectSlug: string;
    onUploaded: (publicUrl: string) => void;
};

export function ScreenshotUploadButton({
    projectSlug,
    onUploaded,
}: ScreenshotUploadButtonProps) {
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
                `projects/${projectSlug || "draft"}/screenshots`
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
        <div className="flex flex-col gap-2">
            <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
                {isUploading ? "Uploading..." : "Upload file"}
            </Button>

            <input
                ref={inputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/svg+xml"
                className="hidden"
                onChange={handleFileChange}
            />

            {error && <p className="text-xs text-rose-300">{error}</p>}
        </div>
    );
}
