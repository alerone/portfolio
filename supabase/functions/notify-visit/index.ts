const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

const ALLOWED_ORIGINS = new Set([
    "https://alerone.github.io",
    "http://localhost:3000",
    "http://localhost:5173",
]);

function formatDateTime(date = new Date()) {
    return new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }).format(date).replace(",", "");
}

function getCorsHeaders(origin: string | null) {
    const allowedOrigin = origin && ALLOWED_ORIGINS.has(origin)
        ? origin
        : "https://alerone.github.io";

    return {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json",
    };
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

Deno.serve(async (req) => {
    const origin = req.headers.get("origin");
    const corsHeaders = getCorsHeaders(origin);

    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ error: "Method not allowed" }),
            { status: 405, headers: corsHeaders },
        );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return new Response(
            JSON.stringify({ error: "Telegram secrets are not configured" }),
            { status: 500, headers: corsHeaders },
        );
    }

    let body: {
        path?: string;
        title?: string;
        referrer?: string;
        language?: string;
        timezone?: string;
        screen?: string;
    };

    try {
        body = await req.json();
    } catch {
        return new Response(
            JSON.stringify({ error: "Invalid JSON" }),
            { status: 400, headers: corsHeaders },
        );
    }

    const path = body.path ?? "/";
    const title = body.title ?? "Portfolio";
    const referrer = body.referrer || "Direct / unknown";
    const language = body.language ?? "unknown";
    const timezone = body.timezone ?? "unknown";
    const screen = body.screen ?? "unknown";

    const message = [
        "👀 <b>Nueva visita al portfolio</b>",
        "",
        `📄 <b>Página:</b> ${escapeHtml(title)}`,
        `🔗 <b>Ruta:</b> <code>${escapeHtml(path)}</code>`,
        `↩️ <b>Referrer:</b> ${escapeHtml(referrer)}`,
        `🌍 <b>Idioma:</b> ${escapeHtml(language)}`,
        `🕒 <b>Zona horaria:</b> ${escapeHtml(timezone)}`,
        `🖥️ <b>Pantalla:</b> ${escapeHtml(screen)}`,
        "",
        `⏱️ <b>Hora:</b> ${formatDateTime()}`,
    ].join("\n");

    const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: "HTML",
                disable_web_page_preview: true,
            }),
        },
    );

    if (!telegramResponse.ok) {
        const errorText = await telegramResponse.text();

        return new Response(
            JSON.stringify({
                error: "Telegram request failed",
                details: errorText,
            }),
            { status: 502, headers: corsHeaders },
        );
    }

    return new Response(
        JSON.stringify({ ok: true }),
        { status: 200, headers: corsHeaders },
    );
});
