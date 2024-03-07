<script setup>
import { mockFetchFast } from "@/api";
import { useRequest } from "ahooks-for-vue";

const { loading, data, run } = useRequest(mockFetchFast, {
  throttleWait: 2000,
  manual: true,
  // throttleTrailing: false,
});
</script>
<template>
  <div>
    <input type="text" @input="run" />
    <br />
    data:{{ loading ? "loading..." : data }}
  </div>
</template>
<style></style>
