import pkg from "./package.json";
export default {
    input: pkg.main,
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
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [],
};
