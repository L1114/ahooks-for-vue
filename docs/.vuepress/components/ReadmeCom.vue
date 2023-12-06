<script setup>
import README from "../../../README.md?raw";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const renderedMarkdown = md.render(README);
console.log("renderedMarkdown: ", renderedMarkdown);
// import code from '@/config/code.md?raw'
</script>
<template>
  <div class="vue-md" v-html="renderedMarkdown"></div>
</template>
<style></style>
