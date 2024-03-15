import { Plugin } from "../type";
// import type Fetch from "./Fetch";
import useDocumentVisibility from "../../../Dom/useDocumentVisibility/lib/index";
import useFocusWithin from "../../../Dom/useFocusWithin/lib/index";
import { toRawData } from "../../../utils/index";

import { watch, isRef } from "vue-demi";

const useRefreshOnWindowFocusPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { refreshOnWindowFocus, focusTimespan = 5000 }
) => {
  const runFetch = () => {
    // console.log("runFetch: ");
    if (Date.now() - fetchInstance.lastFetchTime > toRawData(focusTimespan)) {
      fetchInstance.refresh();
    }
  };
  let stopUseDocumentVisibility = () => {};
  let stopUseFocusWithin = () => {};
  const stopAll = () => {
    stopUseDocumentVisibility();
    stopUseFocusWithin();
  };
  let startAll = () => {
    // console.log("startAll: ");
    stopAll();
    stopUseDocumentVisibility = useDocumentVisibility((v) => {
      if (v === "visible") {
        runFetch();
      }
    }).stop;
    stopUseFocusWithin = useFocusWithin(() => window, {
      onFocus: () => {
        runFetch();
      },
      focusin: "focus",
      focusout: "blur",
    }).stop;
  };

  if (toRawData(refreshOnWindowFocus)) {
    startAll();
  }
  watch(
    [refreshOnWindowFocus, focusTimespan].filter((e) => isRef(e)),
    ([v]) => {
      v || v === undefined ? startAll() : stopAll();
    }
  );
  return {
    onCancel: () => {
      // runAsyncThrottle?.cancel();
      stopAll();
    },
  };
};
export default useRefreshOnWindowFocusPlugin;
