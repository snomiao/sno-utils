import pkg from "./package.json";
export default {
    input: "lib/index.js",
    output: [
        {
            file: pkg.main,
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
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [],
};
