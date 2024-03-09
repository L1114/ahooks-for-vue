import throttle from "lodash/throttle";
import { Plugin } from "../type";
// import type Fetch from "./Fetch";
import type { ThrottleSettings } from "lodash";

const useThrottlePlugin: Plugin<any, any[]> = (
  fetchInstance,
  { throttleWait, throttleLeading, throttleTrailing }
) => {
  const options: ThrottleSettings = {};
  let runAsyncThrottle: any = null;
  if (throttleLeading !== undefined) {
    options.leading = throttleLeading;
  }
  if (throttleTrailing !== undefined) {
    options.trailing = throttleTrailing;
  }

  if (throttleWait !== undefined && throttleWait > 0) {
    const originRunAsync = fetchInstance.runAsync.bind(fetchInstance);
    const runAsyncThrottle = throttle(
      (cb) => {
        cb();
      },
      throttleWait,
      options
    );
    fetchInstance.runAsync = (...args) => {
      return new Promise<void>((resolve, reject) => {
        runAsyncThrottle(() => {
          originRunAsync?.(...args)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      });
    };
  }

  return {
    onCancel: () => {
      runAsyncThrottle?.cancel();
    },
  };
};
export default useThrottlePlugin;
