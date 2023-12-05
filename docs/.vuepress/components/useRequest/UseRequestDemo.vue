<script setup lang="ts">
import { useRequest } from "../../../../lib/useRequest/index";
console.log("useRequest: ", useRequest);
const mockFetch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};
const { runAsync, loading, data } = useRequest ? useRequest(mockFetch, {}) : {};
runAsync();
</script>
<template>
  <div>
    <div>请求获取随机数</div>
    data: {{ data }}
    <br />
    loading状态:{{ loading }}
  </div>
</template>
<style></style>
