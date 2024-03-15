import { Plugin } from "../type";
// import type Fetch from "./Fetch";
import { watch, computed } from "vue-demi";

import { toRawData } from "../../../utils/index";

const useErrorRetry: Plugin<any, any[]> = (
  fetchInstance,
  { retryCount: _retryCount = 0, retryInterval: _retryInterval = 2000 }
) => {
  let executedTryCount = 0;
  let hasError = false;
  let retryCount = toRawData(_retryCount);
  let retryInterval = toRawData(_retryInterval);
  const getEnableTry = () => Number(retryCount) > 0 || retryCount === -1;
  let enableTry = getEnableTry();
  let timer: ReturnType<typeof setTimeout>;

  watch([_retryCount, _retryInterval], () => {
    retryCount = toRawData(_retryCount);
    retryInterval = toRawData(_retryInterval);
  });
  return {
    onRequest: () => {
      if (hasError && enableTry) {
        executedTryCount++;
        console.log(`错误重试:第${executedTryCount}次`);
      }
      clearTimeout(timer);
      return {};
    },
    onSuccess: () => {
      executedTryCount = 0;
      hasError = false;
    },
    onError: () => {
      hasError = true;
      if (enableTry) {
        if (executedTryCount < retryCount || retryCount === -1) {
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
