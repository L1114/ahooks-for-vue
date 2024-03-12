<script setup>
import { useEventListener } from "ahooks-for-vue";
import { ref } from "vue";
const num = ref(1);
const domRef = ref(null);
useEventListener(
  "click",
  () => {
    num.value += 1;
  },
  {
    target: domRef,
  }
);
</script>
<template>
  <div class="a">
    <button ref="domRef">click:{{ num }}</button>
  </div>
</template>
<style></style>
