import type { Config } from "@react-router/dev/config";

const isProd = process.env.REACT_ROUTER_ENV === "prod";

export default {
    ssr: false,
    basename: isProd ? "/portfolio" : "/",
} satisfies Config;
