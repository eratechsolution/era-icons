import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [{
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extensions: ['.css']
    })
  ]
}, {
  input: 'lib/index.d.ts',
  output: [{ file: 'lib/index.d.ts', format: 'es' }],
  plugins: [dts()],
  external: [/\.css$/]
}];