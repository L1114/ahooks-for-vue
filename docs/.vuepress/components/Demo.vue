<script setup>
import { ref, h, defineComponent, defineAsyncComponent, computed } from "vue";
// import UseRequestDemo from "./useRequest/useRequestDemo.vue";
const UseRequestDemo = () => import("./useRequest/useRequestDemo.vue");

console.log("UseRequestDemo: ", UseRequestDemo);

const componentPath = ref(null);
const props = defineProps({
  data: { type: String, default: "111" },
});

// const Comp = defineComponent({
//   component: (await import("../api.vue")).default,
// });
// console.log("Comp", Comp);

// // const AsyncComp = defineComponent(() => {
// //   import("../api.vue");
// // });
// const AsyncComp = defineAsyncComponent(() => import("../api.vue"));
// console.log("AsyncComp: ", AsyncComp);

// import { ref, h } from 'vue'

// const Comp = defineComponent((props) => {
//   // 就像在 <script setup> 中一样使用组合式 API
//   const count = ref(0);

//   return () => {
//     // 渲染函数或 JSX
//     return h(UseRequestDemo);
//   };
// });

const Comp = defineComponent(
  (props) => {
    // 就像在 <script setup> 中一样使用组合式 API
    return () => {
      // 渲染函数或 JSX
      return h("div", { class: "demoWrapper" }, [h(UseRequestDemo)]);
    };
  },
  // 其他选项，例如声明 props 和 emits。
  {
    props: {
      /* ... */
    },
  }
);
</script>
<template>
  <div>Demo.vue111</div>
  <Comp />
  <!-- <AsyncComp /> -->
  <!-- <component :is="dynamicComponent" /> -->
</template>
<style></style>
