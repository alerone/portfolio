import { supabase } from "@/lib/supabase";

const BUCKET = "portfolio-assets";

function sanitizeFilename(filename: string) {
    return filename
        .normalize("NFKD")
        .replace(/[^\w.-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function buildPath(folder: string, filename: string) {
    const ext = filename.includes(".") ? filename.split(".").pop() : "";
    const base = filename.replace(/\.[^/.]+$/, "");
    const safeBase = sanitizeFilename(base || "file");
    const safeExt = sanitizeFilename(ext || "");
    const unique = crypto.randomUUID();

    return safeExt
        ? `${folder}/${safeBase}-${unique}.${safeExt}`
        : `${folder}/${safeBase}-${unique}`;
}

export async function uploadPortfolioAsset(
    file: File,
    folder: string
): Promise<{ path: string; publicUrl: string }> {
    const path = buildPath(folder, file.name);

    const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type || undefined,
        });

    if (error) throw error;

    const { data } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(path);

    return {
        path,
        publicUrl: data.publicUrl,
    };
}

export async function deletePortfolioAsset(pathOrPublicUrl: string) {
    let path = pathOrPublicUrl;

    const marker = `/storage/v1/object/public/${BUCKET}/`;
    const markerIndex = pathOrPublicUrl.indexOf(marker);

    if (markerIndex >= 0) {
        path = pathOrPublicUrl.slice(markerIndex + marker.length);
    }

    const { error } = await supabase.storage
        .from(BUCKET)
        .remove([path]);

    if (error) throw error;
}
