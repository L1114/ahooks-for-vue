import { Plugin } from "../type";

import { onMounted, onUnmounted, watch, Ref, isRef } from "vue-demi";
const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { manual, ready }
) => {
  let stopNow = false;
  onMounted(() => {
    const _ready =
      ready === undefined ? true : isRef(ready) ? ready.value : !!ready;
    if (!manual && _ready) {
      fetchInstance.run(...(fetchInstance.state.params || []));
    }
  });
  onUnmounted(() => {
    fetchInstance.cancel();
  });
  watch(ready as Ref<boolean>, (newV, oldV) => {
    stopNow = !newV;
    // console.log("stopNow: ", stopNow);
    // console.log("manual :>> ", manual);
    // console.log("fetchInstance :>> ", fetchInstance);
    // console.log("newV, oldV: ", newV, oldV);
    if (!manual && newV) {
      fetchInstance.run(...(fetchInstance.state.params || []));
    }
  });
  return {
    onBefore: () => {
      return { stopNow };
    },
  };
};
export default useAutoRunPlugin;
