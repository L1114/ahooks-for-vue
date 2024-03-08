<script setup lang="ts">
import { mockFetchFast } from "@/api";
import { useRequest } from "ahooks-for-vue";

const { loading, data, run } = useRequest(mockFetchFast, {
  debounceWait: 1000,
  manual: true,
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
