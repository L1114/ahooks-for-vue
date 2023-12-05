<script setup lang="ts">
import { useRequest } from "../../../lib/useRequest/index";
console.log("useRequest1", useRequest);

// import * as test from "../../../lib/test/index";
// console.log("test: ", test);
const mockFetch: any = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};
// console.log("useRequest", useRequest);

const { runAsync, loading, data } = useRequest(mockFetch, {});

// runAsync();
</script>
<template>
  <div>
    <div>Demo 请求获取随机数</div>
    data: {{ data }}
    <br />
    loading状态:{{ loading }}
  </div>
</template>
<style></style>
