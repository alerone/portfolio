import path from "path";
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isProd = process.env.REACT_ROUTER_ENV === "prod";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    base: isProd ? "/portfolio/" : "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./app"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
