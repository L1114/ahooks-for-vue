import { Plugin } from "../type";
import useDocumentVisibility from "../../../Dom/useDocumentVisibility/lib/index";
import { onUnmounted } from "vue-demi";

const usePollingPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { pollingInterval, pollingWhenHidden = true, pollingErrorRetryCount = -1 }
) => {
  if (!pollingInterval || pollingInterval <= 0) {
    return {};
  }
  let disabledPolling = false;
  let errorCount = 0;
  let timer: ReturnType<typeof setTimeout>;
  const stopPolling = (v?: boolean) => {
    v && (disabledPolling = v);
    clearTimeout(timer);
  };
  const originRun = fetchInstance.run.bind(fetchInstance);
  if (!pollingWhenHidden) {
    useDocumentVisibility((v) => {
      if (v === "visible" && !disabledPolling) {
        return startPolling(fetchInstance.getRawParams());
      } else {
        stopPolling();
      }
    });
  }

  fetchInstance.run = (..._params) => {
    const params = _params?.length ? _params : fetchInstance.getRawParams();
    originRun(...params);
    startPolling(params);
  };

  const startPolling = (params: any[]) => {
    stopPolling();
    disabledPolling = false;
    timer = setTimeout(() => {
      fetchInstance.run(...(params || []));
      // fetchInstance.refresh()
    }, pollingInterval);
  };
  onUnmounted(() => stopPolling(true));
  return {
    // onBefore() {},
    onError: () => {
      errorCount++;
      if (
        pollingErrorRetryCount !== undefined &&
        pollingErrorRetryCount !== -1 &&
        errorCount >= pollingErrorRetryCount
      ) {
        stopPolling(true);
      }
    },
    onSuccess: () => {
      errorCount = 0;
    },
    onCancel() {
      stopPolling(true);
    },
  };
};
export default usePollingPlugin;
