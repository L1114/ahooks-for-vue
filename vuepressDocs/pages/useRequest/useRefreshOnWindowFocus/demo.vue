<script setup>
import { mockFetch } from "@/api";
import { useRequest } from "ahooks-for-vue";
import { ref } from "vue";

const refreshOnWindowFocus = ref(true);

const { loading, data } = useRequest(mockFetch, {
  refreshOnWindowFocus,
  focusTimespan: 5000,
});
const set = (v) => {
  refreshOnWindowFocus.value = v;
};
</script>
<template>
  <div>
    <button type="text" @click="() => set(true)">
      set refreshOnWindowFocus true
    </button>
    -
    <button type="text" @click="() => set(false)">
      set refreshOnWindowFocus false
    </button>
    -- {{ refreshOnWindowFocus }} <br /><br />

    fetch data:{{ loading ? "loading..." : data }}
  </div>
</template>
<style></style>
