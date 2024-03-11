<script setup>
import { mockFetch } from "@/api";
import { useRequest } from "ahooks-for-vue";

const { loading, data, run } = useRequest(mockFetch, {
  onFinally: () => {},
});
</script>
<template>
  <div>
    <button @click="() => run()">请求获取随机数</button>
    {{ loading ? "loading..." : "" }} <br />
    data: {{ data }}<br />
  </div>
</template>
<style></style>
