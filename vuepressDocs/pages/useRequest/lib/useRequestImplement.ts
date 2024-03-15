import { Service, Options, Plugin } from "./type";
import Fetch from "./Fetch";
import { toRef } from "vue-demi";

const useRequestImplement = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = []
) => {
  const fetchInstance = new Fetch(service, options, () => {}, []);
  fetchInstance.pluginImpls = plugins.map((p) => p(fetchInstance, options));

  return {
    // loading: toRef(fetchInstance.state, "loading"),
    loading: toRef(fetchInstance.state, "loading"),
    data: toRef(fetchInstance.state, "data"),
    error: toRef(fetchInstance.state, "error"),
    params: toRef(fetchInstance.state, "params"),
    // test: fetchInstance.test,
    // test2: fetchInstance.test2,

    cancel: fetchInstance.cancel.bind(fetchInstance),
    refresh: fetchInstance.refresh.bind(fetchInstance),
    refreshAsync: fetchInstance.refreshAsync.bind(fetchInstance),
    run: fetchInstance.run.bind(fetchInstance),
    runAsync: fetchInstance.runAsync.bind(fetchInstance),
    mutate: fetchInstance.mutate.bind(fetchInstance),
  };
};
export default useRequestImplement;
