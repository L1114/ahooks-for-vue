import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

import { myPlugin, vitePlugin, markdownPlugin } from "./myPlugin.js";

// console.log("import.meta.url", import.meta.url);
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
console.log("__dirname: ", __dirname);
const alias = path.resolve(__dirname, "./components");
// console.log("alias: ", alias);
// import logo from "./pxlogo.jpg";

export default defineUserConfig({
  lang: "zh-CN",
  title: process.env.npm_package_version,
  description: "螃蟹🦀vue hooks库",
  plugins: [searchPlugin()],
  head: [["link", { rel: "icon", href: "./pxlogo.jpg" }]],
  base: "/vueHooks-docs/",
  theme: defaultTheme({
    logo: "https://images-kefu.pxb7.com/backstage/20231201/20231201174721_33444.jpg",
    home: "./",
    docsDir: "./docs",
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: "Foo",
        link: "/foo/",
      },
      // NavbarGroup
      {
        text: "Group",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
    sidebar: [
      // {
      //   text: "Foo",
      //   link: "/foo/",
      //   children: [
      //     // SidebarItem
      //     {
      //       text: "github",
      //       link: "https://github.com",
      //       children: [],
      //     },
      //     // 字符串 - 页面文件路径
      //     "/foo/bar.md",
      //   ],
      // },
      // {
      //   text: "useRequest",
      //   link: "/useRequest/",
      //   children: ["/useRequest/basic.md"],
      // },
      {
        text: "aaa",
        link: "/",
        children: ["/bbb.md"],
      },
      // 字符串 - 页面文件路径
      "/test/",
    ],
  }),
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@/, path.resolve(__dirname, alias)),
    },
  },

  bundler: viteBundler({
    viteOptions: {
      // plugins: [myPlugin()],
      // base: "/pxapp/",
      build: {
        // outDir: path.join(__dirname, "ddd"),
        // base: "",
      },
    },

    // vuePluginOptions: {
    //   // plugins: [vitePlugin()],
    // },
  }),
});
