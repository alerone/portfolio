const OWNER_DEVICE_KEY = "portfolio:is-owner-device";

export function markAsOwner() {
    localStorage.setItem(OWNER_DEVICE_KEY, "true");
}

export function unmarkAsOwner() {
    localStorage.removeItem(OWNER_DEVICE_KEY);
}

export function isOwnerDevice() {
    if (typeof window == "undefined") return false;
    return localStorage.getItem(OWNER_DEVICE_KEY) === "true";
}
