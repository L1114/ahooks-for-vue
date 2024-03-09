import debounce from "lodash/debounce";
import { Plugin } from "../type";
// import type Fetch from "./Fetch";
import type { DebounceSettings } from "lodash";

const useDebouncePlugin: Plugin<any, any[]> = (
  fetchInstance,
  { debounceWait, debounceLeading, debounceTrailing, debounceMaxWait }
) => {
  let runAsyncDebounce: any = null;
  // debugger;
  const options: DebounceSettings = {};

  if (debounceLeading !== undefined) {
    options.leading = debounceLeading;
  }
  if (debounceTrailing !== undefined) {
    options.trailing = debounceTrailing;
  }
  if (debounceMaxWait !== undefined) {
    options.maxWait = debounceMaxWait;
  }

  if (debounceWait !== undefined && debounceWait > 0) {
    const originRunAsync = fetchInstance.runAsync.bind(fetchInstance);
    runAsyncDebounce = debounce(
      (cb) => {
        cb();
      },
      debounceWait,
      options
    );
    fetchInstance.runAsync = (...args) => {
      return new Promise<void>((resolve, reject) => {
        runAsyncDebounce(() => {
          originRunAsync?.(...args)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      });
    };
  }

  return {
    onCancel: () => {
      runAsyncDebounce?.cancel();
    },
  };
};
export default useDebouncePlugin;
