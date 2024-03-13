<script setup>
import { mockFetchFast, mockFetchError } from "@/api";
import { useRequest } from "ahooks-for-vue";

const { loading, data, cancel, run } = useRequest(mockFetchFast, {
  pollingInterval: 3000,
  // pollingErrorRetryCount: 10,
  // pollingWhenHidden: false,
});
const set = (v) => {
  v ? run() : cancel();
};
</script>
<template>
  <div>
    <button @click="() => set(true)">start</button>
    -
    <button @click="() => set(false)">stop</button>
    data: {{ loading ? "loading..." : data }}
  </div>
</template>
<style></style>
