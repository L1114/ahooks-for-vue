import { Plugin } from "../type";

import { onMounted, onUnmounted, watch, Ref, isRef, ref } from "vue-demi";
const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { manual, ready = ref(true) }
) => {
  let stopNow = false;
  onMounted(() => {
    const _ready = isRef(ready) ? ready.value : !!ready;
    stopNow = !_ready;
    if (!manual && _ready) {
      fetchInstance.run(...fetchInstance.getRawParams());
    }
  });
  onUnmounted(() => {
    fetchInstance.cancel();
    stopWatch();
  });
  const stopWatch = watch(ready as Ref<boolean>, (newV, oldV) => {
    stopNow = !newV;
    // console.log("stopNow: ", stopNow);
    // console.log("manual :>> ", manual);
    // console.log("fetchInstance :>> ", fetchInstance);
    // console.log("newV, oldV: ", newV, oldV);
    if (!manual && newV) {
      fetchInstance.run(...fetchInstance.getRawParams());
    }
  });
  return {
    onBefore: () => {
      return { stopNow };
    },
  };
};
export default useAutoRunPlugin;
