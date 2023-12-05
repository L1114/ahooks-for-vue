<script setup>
import { useRequest } from "../../../../lib/useRequest/index";
import { mockFetch } from "../api.js";

const { loading, data } = useRequest ? useRequest(mockFetch, {}) : {};
</script>
<template>
  <div>
    请求获取随机数 {{ loading ? "loading..." : "" }} <br />
    data: {{ data }}
    <br />
  </div>
</template>
<style></style>
