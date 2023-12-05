import { defineClientConfig } from "@vuepress/client";
const modules = import.meta.glob("./components/**/*.vue");
import { defineComponent, h } from "vue";
const list = Object.entries(modules)
  .map(([key, value]) => {
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
  })
  .filter(Boolean);
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    list.forEach(async ([key, value]) => {
      const component = (await value())?.default;
      if (key && component) {
        const Comp = defineComponent((props) => {
          // 就像在 <script setup> 中一样使用组合式 API
          return () => {
            // 渲染函数或 JSX
            return h("div", { class: "demoWrapper", name: key }, [
              h(component),
            ]);
          };
        });
        app.component(key, Comp);
      }
    });
  },
  setup() {},
  rootComponents: [],
});
