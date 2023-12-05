import { defineConfig } from "vite";
// const path = require("path");
import path from "path";
import copy from "rollup-plugin-copy";
import legacy from "@vitejs/plugin-legacy";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
// import babel from 'vite-plugin-babel';

export default defineConfig({
  // publicDir: "./",
  base: "app/",
  plugins: [
    // legacy({
    //   // modernPolyfills: [
    //   //   /* ... */
    //   // ],
    //   // renderLegacyChunks: false,
    // }),
  ],
  optimizeDeps: {
    // include: [],
    exclude: ["vue-demi"],
  },
  build: {
    // target: "es2015",
    minify: true,
    lib: {
      entry: path.resolve("./lib/main.ts"),
      name: "pxhooks",
    },
    outDir: "packages",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue-demi"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: "Vue",
        // },
      },
      plugins: [
        resolve(),
        babel({ babelHelpers: "bundled" }),

        // copy({
        //   targets: [{ src: "lib", dest: path.resolve("./dist/") }],
        //   verbose: true, // 设置为true可在控制台显示复制的详细信息
        // }),
      ],
    },
  },
});
