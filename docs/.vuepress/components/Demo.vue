<script setup lang="ts">
import { useRequest } from "../../../lib/useRequest/index";
console.log("useRequest1", useRequest);

import { mockFetch } from "./api.js";
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
