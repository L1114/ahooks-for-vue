<script setup>
import { mockFetch } from "../api.js";
// import { useRequest, test } from "ahooks-for-vue";

import useRequest from "../../../../lib/useRequest/useRequest";
// console.log("useRequest: ", useRequest(mockFetch, {}));

// console.log("Demo2: ", Demo2);

const { loading, data, run } = useRequest(mockFetch, {});
</script>
<template>
  <div>
    <button @click="() => run(6)">请求获取随机数</button>
    {{ loading ? "loading..." : "" }} <br />
    data: {{ data }}<br />
    <!-- test: {{ test }} <br /> -->
    <!-- test2: {{ test2 && test2.data }}
    <br />
    state: {{ state && state.data }} -->
  </div>
</template>
<style></style>
