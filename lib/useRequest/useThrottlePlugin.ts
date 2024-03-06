import throttle from "lodash/throttle";
import { Plugin } from "./type";
// import type Fetch from "./Fetch";
import type { ThrottleSettings } from "lodash";

const useThrottlePlugin: Plugin<any, any[]> = (
  fetchInstance,
  { throttleWait, throttleLeading, throttleTrailing }
) => {
  const options: ThrottleSettings = {};

  if (throttleLeading !== undefined) {
    options.leading = throttleLeading;
  }
  if (throttleTrailing !== undefined) {
    options.trailing = throttleTrailing;
  }
  if (throttleWait !== undefined && throttleWait > 0) {
    const originRunAsync = fetchInstance.runAsync.bind(fetchInstance);
    const runAsync = throttle(originRunAsync, throttleWait, options);
    fetchInstance.runAsync = runAsync.bind(fetchInstance);
  }

  return {};
};
export default useThrottlePlugin;
