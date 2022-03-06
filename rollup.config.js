import pkg from "./package.json";
import { defineConfig } from "rollup";
export default defineConfig({
    input: pkg.main,
    experimentalTopLevelAwait: true,
    output: [
        {
            file: pkg.cjs,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
        {
            file: pkg.umd,
            name: "snoUtils",
            format: "umd",
            sourcemap: true,
        },
        {
            file: pkg.iife,
            format: "iife",
            sourcemap: true,
        },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [],
});
