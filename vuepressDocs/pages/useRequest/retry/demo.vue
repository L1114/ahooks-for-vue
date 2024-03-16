<script setup>
import { mockFetchError } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref } from "vue";

const retryCount = ref(100);
const retryInterval = ref(2000);
const { loading, data, run } = useRequest(mockFetchError, {
  retryCount,
  retryInterval,
});
</script>
<template>
  <div>
    <button type="button" @click="run">run</button>

    <button type="button" @click="() => (retryCount = 100)">
      set retryCount
    </button>
    <button type="button" @click="() => (retryInterval = -1)">
      set retryInterval
    </button>
    <br />
    data:{{ loading ? "loading..." : data }}
  </div>
</template>
<style></style>
