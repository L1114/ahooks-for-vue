import { Plugin } from "../type";
// import type Fetch from "./Fetch";
import { watch, isRef, ref } from "vue-demi";

import { toRawData } from "../../../utils/index";

const useErrorRetry: Plugin<any, any[]> = (
  fetchInstance,
  { retryCount: _retryCount = 0, retryInterval: _retryInterval }
) => {
  const executedTryCount = ref(0);
  let hasError = false;

  const getRetryInterval = () => {
    let value = toRawData(_retryInterval);
    value =
      value >= 0
        ? value
        : Math.min(30 * 1000, Math.pow(2, executedTryCount.value + 1) * 1000);
    return value;
  };

  let retryCount = toRawData(_retryCount);
  let retryInterval = getRetryInterval();
  const getEnableTry = () => Number(retryCount) > 0 || retryCount === -1;
  let enableTry = getEnableTry();
  let timer: ReturnType<typeof setTimeout>;

  watch(
    [_retryCount, executedTryCount].filter((e: any) => isRef(e)),
    () => {
      retryCount = toRawData(_retryCount);
      enableTry = getEnableTry();
      retryInterval = getRetryInterval();
      if (!enableTry) {
        clearTimeout(timer);
      }
    }
  );
  watch(
    [_retryInterval].filter((e: any) => isRef(e)),
    () => {
      executedTryCount.value = 0;
      retryInterval = getRetryInterval();
    }
  );
  return {
    onRequest: () => {
      if (hasError && enableTry) {
        executedTryCount.value++;
        console.log(`错误重试:第${executedTryCount.value}次`);
      }
      clearTimeout(timer);
      return {};
    },
    onSuccess: () => {
      executedTryCount.value = 0;
      hasError = false;
    },
    onError: () => {
      hasError = true;
      if (enableTry) {
        if (executedTryCount.value < retryCount || retryCount === -1) {
          console.log("retryInterval :>> ", retryInterval);
          clearTimeout(timer);
          // enableTry = false;
          timer = setTimeout(() => {
            fetchInstance.refresh();
            // enableTry = getEnableTry();
          }, retryInterval);
        }
      }
    },
    onFinally: () => {},
    onCancel: () => {
      clearTimeout(timer);
      enableTry = false;
    },
  };
};
export default useErrorRetry;
