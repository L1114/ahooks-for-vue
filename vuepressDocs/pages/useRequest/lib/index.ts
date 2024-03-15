import { Service, Options, Plugin } from "./type";
import useRequestImplement from "./useRequestImplement";
import useThrottlePlugin from "./plugins/useThrottlePlugin";
import useDebouncePlugin from "./plugins/useDebouncePlugin";
import useAutoRunPlugin from "./plugins/useAutoRunPlugin";
import usePollingPlugin from "./plugins/usePollingPlugin";

const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[]
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useThrottlePlugin,
    useDebouncePlugin,
    useAutoRunPlugin,
    usePollingPlugin,
  ] as Plugin<TData, TParams>[]);
};

export default useRequest;
