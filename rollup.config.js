import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve"; // js이외의 확장자(ts, tsx) 파일을 불러오기 위해서 사용 또는 packages.json의 dependencies를 사용하는 용도
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs", //CommonJs
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm", //ES Modules
        sourcemap: true,
      },
    ],

    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],

    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
