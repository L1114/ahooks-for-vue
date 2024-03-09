import { Service, Options, Plugin } from "./type";
import useRequestImplement from "./useRequestImplement";
import useThrottlePlugin from "./plugins/useThrottlePlugin";
import useDebouncePlugin from "./plugins/useDebouncePlugin";

const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[]
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useThrottlePlugin,
    useDebouncePlugin,
  ] as Plugin<TData, TParams>[]);
};

export default useRequest;
