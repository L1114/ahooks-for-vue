<script setup>
import { mockFetch } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref, watch } from "vue";
const ready = ref(false);

const { loading, data, run } = useRequest(mockFetch, {
  ready,
  manual: true,
});

const set = (v) => {
  ready.value = v;
};
</script>
<template>
  <div>
    <button @click="() => set(true)">set ready true</button>
    -
    <button @click="() => set(false)">set ready false</button>
    - ready:{{ ready }} <br /><br />
    data: {{ loading ? "loading..." : data }} <br /><br />
    <button @click="() => run()">请求数据</button>
  </div>
</template>
<style></style>
