<script setup>
import { useFocusWithin } from "ahooks-for-vue";
import { ref } from "vue";

const domRef = ref(null);
const { isFocusWithin, stop, restart } = useFocusWithin(domRef);
</script>
<template>
  <div>
    <div
      ref="domRef"
      :style="{
        padding: '32px',
        backgroundColor: isFocusWithin ? 'red' : '',
        border: '1px solid gray',
        userSelect: 'none',
      }"
    >
      <label :style="{ display: 'block' }"> First Name: <input /> </label><br />
      <label :style="{ display: 'block', marginTop: 16 }">
        Last Name: <input />
      </label>
    </div>
    <p>isFocusWithin: {{ isFocusWithin }}</p>
    <button @click="restart">重新开始监听</button>
    -
    <button @click="stop">移除监听</button>
  </div>
</template>
<style></style>
