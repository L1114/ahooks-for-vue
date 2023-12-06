<script setup>
import { mockFetch } from "../api.js";
import { useRequest, test } from "pxhooks";
console.log("test: ", test());
// console.log("Demo2: ", Demo2);

const { loading, data } = useRequest(mockFetch, {});
</script>
<template>
  <div>
    请求获取随机数 {{ loading ? "loading..." : "" }} <br />
    data: {{ data }}
    <br />
  </div>
</template>
<style></style>
