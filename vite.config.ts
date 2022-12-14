/// <reference types="vitest" />
import { defineConfig } from "vite";
import p from "./package.json";
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            {
                enforce: "pre",
                transform(code, id) {
                    return code.replace(/\/\* @ignore \*\/([^\n]*)/, "");
                },
            },
        ],
        define: {
            __version__: JSON.stringify(p.version),
        },

        build: {
            minify: true,
            lib: {
                entry: "./src/index.ts",
                name: "promptExtractor",
                fileName: "index",
            },
        },
    };
});
