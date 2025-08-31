import type { Config } from "@react-router/dev/config";

const BASE = process.env.REACT_ROUTER_ENV === "prod" ? "/portfolio" : "/";

export default {
    ssr: false,
    basename: BASE,
} satisfies Config;
