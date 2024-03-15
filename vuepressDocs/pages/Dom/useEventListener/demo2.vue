<script setup>
import { useEventListener } from "ahooks-for-vue";
import { ref } from "vue";
const key = ref("");
const { restart, stop } = useEventListener("keydown", (ev) => {
  key.value = ev.key;
});
</script>
<template>
  <div>Your press key is :{{ key }}</div>

  <br />
  <br />
  <button @click="restart">重新开始监听</button>-<button @click="stop">
    移除监听
  </button>
</template>
<style></style>
