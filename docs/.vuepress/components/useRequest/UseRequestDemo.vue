<script setup lang="ts">
import { watch } from "vue";

// import * as pxhooksCjs from "./dist/pxhooks";
import { useRequest } from "../../../../lib/useRequest/index";
// import { useRequest } from "../../dist/pxhooks"
// console.log("pxhooks: ", pxhooks);
// import { useRequest } from "ahooks-vue";

// import * as ahooksVueEs from "../../dist/ahooks-vue.es";
// console.log("ahooksVueEs: ", ahooksVueEs);
console.log("useRequest: ", useRequest);

// console.log("pxhooksCjs: ", pxhooksCjs);
// import ahooksVueEs from "./dist/ahooks-vue.es.js";
// const packageName = require("ahooks-vue");
// console.log("useRequest: ", useRequest);
// const pxhooksMjs = null;
// console.log("pxhooksMjs: ", pxhooksMjs);

// import { useRequest } from "../../../lib/main";
const mockFetch: any = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: Math.random() });
    }, 1000);
  });
};
const { runAsync, loading, data, run } = useRequest?.(mockFetch, {
  dataFilter: (a) => a,
});
// setTimeout(() => {
//   console.log("data", data, loading);
//   run?.();
//   runAsync?.();
//   console.log("runAsync: ", runAsync);
// }, 3000);

const click = () => {
  console.log("click: ", runAsync);
  runAsync?.().then((res) => {
    // console.log("res2", res);
    // console.log("data", data.value);
    // console.log("loading", loading.value);
  });
};
</script>
<template>
  <div @click="click">
    UseRequestDemo.vue {{ data }} {{ loading ? "loading" : "" }}
  </div>
</template>
<style></style>
