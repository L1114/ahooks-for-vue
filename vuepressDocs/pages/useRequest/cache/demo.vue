<script setup>
import { ref } from "vue";
import Article from "./Article.vue";
const show = ref(false);
const set = () => {
  show.value = !show.value;
};
</script>
<template>
  <div>
    <button @click="set">show / hidden</button>
    <br /><br />
    <Article v-if="show" />
  </div>
</template>
<style></style>
