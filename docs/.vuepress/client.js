import { defineClientConfig } from "@vuepress/client";
const modules = import.meta.glob("./components/**/*.vue");
// import Demo from "./components/Demo.vue";
// console.log("Demo: ", Demo);
// import "./components/**/*.vue";
const data = [];
const dataRes = [];

import { defineComponent, h } from "vue";
const list = Object.entries(modules)
  .map(([key, value]) => {
    const fn = () => {
      const regex = /\/([a-zA-Z0-9_-]+)\.vue$/;
      const match = key?.match(regex);
      const fileName = match && match[1];
      // console.log("fileName: ", fileName);
      if (fileName) {
        if (fileName.charAt(0).toUpperCase() !== fileName.charAt(0)) {
          console.error("组件名首字母需要大写:", key);
        }
        return [fileName, value];
      }
    };
    return fn();
  })
  .filter(Boolean);
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // console.log("app._context.components", app._context.components);
    const fn = new Promise((resolve, reject) => {
      list.forEach(async ([key, value], i) => {
        const component = (await value())?.default;
        if (key && component) {
          const Comp = defineComponent(
            (props) => {
              // 就像在 <script setup> 中一样使用组合式 API

              return () => {
                // 渲染函数或 JSX
                return h("div", { class: "demoWrapper" }, [h(component)]);
              };
            },
            // 其他选项，例如声明 props 和 emits。
            {
              name: key,
            }
          );
          console.log("key, Comp", key, Comp);
          app.component(key, Comp);
        } else {
          console.warn("key, component", key, component);
        }
        if (i === list.length - 1) {
          setTimeout(() => {
            resolve();
          }, 100);
        }
      });
    });
    return fn;
  },
  setup() {},
  rootComponents: [],
});

// console.log("Module", Module);
