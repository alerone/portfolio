import { isOwnerDevice } from "@/utils/visitor-notifications";
import { useEffect } from "react";
import { useLocation } from "react-router";

const NOTIFICATION_STORAGE_KEY = "portfolio:last-visit-notification";
const NOTIFICATION_COOLDOWN_MS = 1000 * 60 * 30;

function shouldSkipNotification() {
    if (typeof window === "undefined") return true;

    const isBot =
        /bot|crawler|spider|crawling|preview|facebookexternalhit|whatsapp|telegrambot/i.test(
            navigator.userAgent
        );
    if (isOwnerDevice()) return true;

    if (isBot) return true;

    const lastNotification = window.localStorage.getItem(
        NOTIFICATION_STORAGE_KEY
    );

    if (!lastNotification) return false;

    const lastTimestamp = Number(lastNotification);

    if (Number.isNaN(lastTimestamp)) return false;

    return Date.now() - lastTimestamp < NOTIFICATION_COOLDOWN_MS;
}

function markNotificationSent() {
    window.localStorage.setItem(NOTIFICATION_STORAGE_KEY, String(Date.now()));
}

export function useTelegramVisitNotification() {
    const location = useLocation();

    useEffect(() => {
        const functionsUrl = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;

        if (!functionsUrl) return;
        if (shouldSkipNotification()) return;

        const controller = new AbortController();

        async function notifyVisit() {
            try {
                const path = `${location.pathname}${location.search}${location.hash}`;

                const response = await fetch(`${functionsUrl}/notify-visit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal: controller.signal,
                    body: JSON.stringify({
                        path,
                        title: document.title,
                        referrer: document.referrer,
                        language: navigator.language,
                        timezone:
                            Intl.DateTimeFormat().resolvedOptions().timeZone,
                        screen: `${window.screen.width}x${window.screen.height}`,
                    }),
                });

                if (response.ok) {
                    markNotificationSent();
                }
            } catch {
                // Una notificación fallida no debe romper el portfolio.
            }
        }

        notifyVisit();

        return () => {
            controller.abort();
        };
    }, [location.pathname, location.search, location.hash]);
}
