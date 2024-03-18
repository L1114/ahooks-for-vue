<script setup>
import { mockFetchFast } from "@/api";
import { useRequest } from "ahooks-for-vue";

const {
  loading: loading1,
  data: data1,
  run: run1,
} = useRequest(mockFetchFast, {
  loadingDelay: 500,
});
const {
  loading: loading2,
  data: data2,
  run: run2,
} = useRequest(mockFetchFast, {});
const set = (v) => {
  run1();
  run2();
};
</script>
<template>
  <div>
    <button @click="() => set()">run</button>
    <br />
    <br />
    data1: {{ loading1 ? "loading..." : data1 }}
    <br />
    <br />
    data2: {{ loading2 ? "loading..." : data2 }}
  </div>
</template>
<style></style>
