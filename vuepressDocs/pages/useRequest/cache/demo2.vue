<script setup>
import { ref } from "vue";
import StaleTime from "./StaleTime.vue";
const show = ref(false);
const set = () => {
  show.value = !show.value;
};
</script>
<template>
  <div>
    <button @click="set">show / hidden</button>
    <br /><br />
    <StaleTime v-if="show" />
  </div>
</template>
<style></style>
