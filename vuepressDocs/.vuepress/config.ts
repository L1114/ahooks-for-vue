import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
// import vue from "@vitejs/plugin-vue";

// import { myPlugin, vitePlugin, markdownPlugin } from "./myPlugin.js";

// console.log("import.meta.url", import.meta.url);
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
const alias = path.resolve(__dirname, "../pages");
// const aliasApi = path.resolve(__dirname, "../pages/api.js");

const lib = path.resolve(__dirname, "../../lib/main.ts");
const logo = "./logo.png";
export default defineUserConfig({
  lang: "zh-CN",
  title: `${process.env.npm_package_version}`,
  description: "vue版本的ahooks库",
  plugins: [searchPlugin()],
  head: [["link", { rel: "icon", href: logo }]],
  base: "/ahooks-for-vue/",
  theme: defaultTheme({
    logo,
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: "Github",
        link: "https://github.com/L1114/ahooks-for-vue",
      },
      // // NavbarGroup
      // {
      //   text: "Group",
      //   children: ["/group/foo.md", "/group/bar.md"],
      // },
      // // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
    sidebarDepth: 0,

    sidebar: [
      {
        text: "指南",
        link: "/README.md",
      },
      {
        text: "useRequest",
        link: "/pages/useRequest/quick/readme.md",
        children: [
          // {
          //   text: "指南2",
          //   link: "/pages/useRequest/useRequest-quick.md",
          // },
          "/pages/useRequest/quick",
          "/pages/useRequest/basic",
          "/pages/useRequest/throttle",
          "/pages/useRequest/debounce",
          "/pages/useRequest/ready",
        ],
      },
    ],
  }),
  dest: path.resolve(__dirname, "../../docs"),
  //  `${__dirname}/documents`,
  alias: {
    "ahooks-for-vue": lib,
    "@": alias,
    // vue: "vue-demi",
    // aliasApi
  },
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
