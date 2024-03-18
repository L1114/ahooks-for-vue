<script setup>
import { mockFetchData } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref } from "vue";

const { loading, data, run } = useRequest(mockFetchData, {
  cacheKey: "Article-1",
  staleTime: 5000,
});
const show = ref(false);
</script>
<template>
  <div>
    loading: {{ loading }}<br /><br />
    time: {{ data?.time }}<br /><br />
    data: {{ data?.data }}<br />
  </div>
</template>
<style></style>
