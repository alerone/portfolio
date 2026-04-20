export function assetURL(path: string) {
    if (/^https?:\/\//i.test(path)) return path;

    const cleanPath = path.replace(/^\/+/, "");
    return `${import.meta.env.BASE_URL}${cleanPath}`;
}
