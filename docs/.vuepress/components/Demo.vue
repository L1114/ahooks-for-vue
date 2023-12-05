<script setup lang="ts">
import * as useRequest from "../../../lib/useRequest/index";
console.log("useRequest1", useRequest);

const mockFetch: any = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};
// console.log("useRequest", useRequest);

const { runAsync, loading, data } = {};

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
