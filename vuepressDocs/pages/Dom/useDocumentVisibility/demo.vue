<script setup>
import { useDocumentVisibility } from "ahooks-for-vue";
import { ref } from "vue";
const list = ref([]);
const documentVisibility = useDocumentVisibility((v) => {
  list.value.push(v);
});
</script>
<template>
  <div>documentVisibility-history: {{ list.join(",") }}</div>
  当前状态:{{ documentVisibility }}
</template>
<style></style>
