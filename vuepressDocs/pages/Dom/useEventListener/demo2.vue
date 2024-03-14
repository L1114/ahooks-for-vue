<script setup>
import { useEventListener } from "ahooks-for-vue";
import { ref } from "vue";
const key = ref("");
const { add, remove } = useEventListener("keydown", (ev) => {
  key.value = ev.key;
});
</script>
<template>
  <div>Your press key is :{{ key }}</div>

  <br />
  <br />
  <button @click="add">重新开始监听add</button>-<button @click="remove">
    移除监听remove
  </button>
</template>
<style></style>
