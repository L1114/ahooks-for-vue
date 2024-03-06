import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

// import { myPlugin, vitePlugin, markdownPlugin } from "./myPlugin.js";

// console.log("import.meta.url", import.meta.url);
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
const alias = path.resolve(__dirname, "./components");

const lib = path.resolve(__dirname, "../../lib/main.ts");
// console.log("alias: ", alias);
// import logo from "./pxlogo.jpg";
const logo = "./logo.png";
// "https://images-kefu.pxb7.com/backstage/20231201/20231201174721_33444.jpg";
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
        text: "useRequest",
        link: "/md/test.md",
        children: [
          "/useRequest-quick.md",
          "/useRequest-basic.md",
          "/useRequest-throttle",
        ],
      },
      // 字符串 - 页面文件路径
      // "/test/",
    ],
  }),
  dest: path.resolve(__dirname, "../../docs"),
  //  `${__dirname}/documents`,
  alias: {
    "ahooks-for-vue": lib,
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
