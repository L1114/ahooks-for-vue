<script setup>
import { mockFetch } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref, watch } from "vue";

const { loading, data, cancel, run } = useRequest(mockFetch, {
  // pollingInterval: 500,
});
console.log("loading, data, cancel, run :>> ", loading, data, cancel, run);
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
