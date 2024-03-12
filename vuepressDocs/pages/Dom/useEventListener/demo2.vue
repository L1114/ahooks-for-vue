<script setup>
import { useEventListener } from "ahooks-for-vue";
import { ref } from "vue";
const key = ref("");
useEventListener("keydown", (ev) => {
  key.value = ev.key;
});
</script>
<template>
  <div>Your press key is :{{ key }}</div>
</template>
<style></style>
