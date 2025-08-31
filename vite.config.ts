import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const BASE = process.env.REACT_ROUTER_ENV === "prod" ? "/portfolio/" : "/";
export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    base: '/portfolio/', // Importante: nombre de tu repositorio
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Asegura que los assets se referencien correctamente
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    // Para desarrollo local (opcional)
    server: {
        port: 3000,
        open: true
    }
})
