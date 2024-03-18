import { Plugin } from "../type";

import { onMounted, onUnmounted, watch, Ref, ref } from "vue-demi";
import { toRawData } from "../../../utils/index";

const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { manual, ready = ref(true) }
) => {
  let stopNow = false;
  onMounted(() => {
    const _ready = toRawData(ready);
    stopNow = !_ready;
    if (!manual && _ready) {
      fetchInstance.refresh();
    }
  });
  onUnmounted(() => {
    fetchInstance.cancel();
    stopWatch();
  });
  const stopWatch = watch(ready as Ref<boolean>, (newV) => {
    stopNow = !toRawData(ready);
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
