import { uploadPortfolioAsset } from "@/lib/storage";

export type ProjectImageKind = "cover" | "screenshot";

function sanitizeSegment(value: string) {
    return value.trim().replace(/[^a-zA-Z0-9-_]/g, "-");
}

export function buildProjectImagePath(projectSlug: string, kind: ProjectImageKind) {
    const safeSlug = sanitizeSegment(projectSlug || "draft");

    if (kind === "cover") {
        return `projects/${safeSlug}/cover`;
    }

    return `projects/${safeSlug}/screenshots`;
}

export async function uploadProjectImage(
    file: File,
    projectSlug: string,
    kind: ProjectImageKind
) {
    const path = buildProjectImagePath(projectSlug, kind);
    const { publicUrl } = await uploadPortfolioAsset(file, path);
    return publicUrl;
}
