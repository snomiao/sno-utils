// // rollup.config.js
// import typescript from '@rollup/plugin-typescript';

// export default {
//   input: 'src/index.ts',
//   output: {
//     dir: 'output',
//     format: 'cjs'
//   },
//   dir: '',
//   plugins: [typescript()]
// };

// import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
    input: "lib/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
        },
        {
            file: pkg.module,
            format: "es",
        },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],

    plugins: [
        // typescript({
        //   // typescript: require('typescript'),
        // }),
    ],
};
// export default {
//   input: 'src/index.ts',
//   output: [
//     {
//       file: pkg.main,
//       format: 'cjs',
//     },
//     {
//       file: pkg.module,
//       format: 'es',
//     },
//   ],
//   external: [
//     ...Object.keys(pkg.dependencies || {}),
//     ...Object.keys(pkg.peerDependencies || {}),
//   ],

//   plugins: [
//     typescript({
//       typescript: require('typescript'),
//     }),
//   ],
// }
