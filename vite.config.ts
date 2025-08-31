import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const BASE = process.env.REACT_ROUTER_ENV === "prod" ? "/portfolio/" : "/";

export default defineConfig({
    base: BASE,
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
