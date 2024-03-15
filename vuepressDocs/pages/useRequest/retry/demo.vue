<script setup>
import { mockFetchError } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref } from "vue";

const retryCount = 6;
const { loading, data, run } = useRequest(mockFetchError, {
  retryCount,
  // throttleTrailing: false,
});
</script>
<template>
  <div>
    <button type="button" @click="run">run</button>

    <button type="button" @click="() => (retryCount = 100)">set</button>
    <br />
    data:{{ loading ? "loading..." : data }}
  </div>
</template>
<style></style>
