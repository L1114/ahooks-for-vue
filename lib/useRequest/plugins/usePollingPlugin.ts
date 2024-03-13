import { Plugin } from "../type";

import { onMounted, onUnmounted, watch, Ref, isRef, ref } from "vue-demi";
const usePollingPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { pollingInterval, pollingWhenHidden, pollingErrorRetryCount = -1 }
) => {
  debugger;
  if (!pollingInterval || pollingInterval <= 0) {
    return {};
  }
  let errorCount = 0;
  let timer: ReturnType<typeof setTimeout>;
  const stopPolling = () => clearTimeout(timer);
  const originRun = fetchInstance.run.bind(fetchInstance);

  fetchInstance.run = (...params) => {
    stopPolling();
    originRun(...params);
    timer = setTimeout(() => {
      originRun(...params);
    }, pollingInterval);
  };

  // const startPolling = () => {
  //   stopPolling();
  // };
  // startPolling();
  return {
    // onBefore() {},
    onError: () => {
      errorCount++;
      if (
        pollingErrorRetryCount !== undefined &&
        pollingErrorRetryCount !== -1 &&
        errorCount >= pollingErrorRetryCount
      ) {
        stopPolling();
      }
    },
    onSuccess: () => {
      errorCount = 0;
    },
    onCancel() {
      stopPolling();
    },
  };
};
export default usePollingPlugin;
