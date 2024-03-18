import { Plugin } from "../type";
import useDocumentVisibility from "../../../Dom/useDocumentVisibility/lib/index";
import { onUnmounted, computed } from "vue-demi";
import { toRawData } from "../../../utils/index";

const usePollingPlugin: Plugin<any, any[]> = (
  fetchInstance,
  {
    pollingInterval: _pollingInterval,
    pollingWhenHidden: _pollingWhenHidden = true,
    pollingErrorRetryCount: _pollingErrorRetryCount = -1,
  }
) => {
  const pollingInterval = computed(() => {
    return toRawData(_pollingInterval);
  });
  const pollingErrorRetryCount = computed(() => {
    return toRawData(_pollingErrorRetryCount);
  });
  const pollingWhenHidden = computed(() => {
    return toRawData(_pollingWhenHidden);
  });

  // setInterval(() => {}, 1000);

  let disabledPolling = false;
  let errorCount = 0;
  let timer: ReturnType<typeof setTimeout>;
  const stopPolling = (v?: boolean) => {
    v && (disabledPolling = v);
    clearTimeout(timer);
  };
  const originRun = fetchInstance.run.bind(fetchInstance);

  useDocumentVisibility((v) => {
    if (pollingWhenHidden.value) return;
    if (v === "visible" && !disabledPolling) {
      return startPolling(fetchInstance.getRawParams());
    } else {
      stopPolling();
    }
  });

  fetchInstance.run = (...params) => {
    // const params = _params?.length ? _params : fetchInstance.getRawParams();
    originRun(...params);
    startPolling(params);
  };

  const startPolling = (params: any[]) => {
    stopPolling();
    disabledPolling = false;

    if (!Number(pollingInterval.value) || Number(pollingInterval.value) <= 0) {
      return {};
    }
    timer = setTimeout(() => {
      fetchInstance.run(...(params || []));
      // fetchInstance.refresh()
    }, pollingInterval.value);
  };
  onUnmounted(() => stopPolling(true));
  return {
    // onBefore() {},
    onError: () => {
      errorCount++;
      if (
        pollingErrorRetryCount.value !== undefined &&
        pollingErrorRetryCount.value !== -1 &&
        errorCount >= pollingErrorRetryCount.value
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
