import { FetchState, Service, Options, Subscribe, PluginReturn } from "./type";
import { reactive } from "vue-demi";

export default class Fetch<TData, TParams extends any[]> {
  count: number = 0;
  state: FetchState<TData, TParams> = reactive({
    loading: false,
    data: undefined,
    error: undefined,
    params: undefined,
  });
  pluginImpls: PluginReturn<TData, TParams>[] = [];

  constructor(
    public serviceRef: Service<TData, TParams>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: any[] // public initState: Partial<FetchState<TData, TParams>>
  ) {
    this.options = options || {};
  }
  fetchLifecycleHook(hookName: keyof typeof this.options, ...rest: any) {
    const hook = (this.options && this.options[hookName]) as Function;
    hook && hook(...rest);
  }
  pluginsLifecycleHook(
    hookName: keyof PluginReturn<TData, TParams>,
    ...rest: any[]
  ) {
    const r = this.pluginImpls
      .map((i) => (i[hookName] as Function)?.(...rest))
      .filter(Boolean);
    return Object.assign({}, ...r);
  }

  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error);
      }
    });
  }
  async runAsync(...params: TParams): Promise<TData> {
    this.count++;
    const currentCount = this.count;
    const { stopNow = false } = this.pluginsLifecycleHook("onBefore", params);
    if (stopNow) {
      return new Promise(() => {});
    }
    try {
      this.state.params = params;
      this.fetchLifecycleHook("onBefore", params);
      this.state.loading = true;
      const res = await this.serviceRef(...params);
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.pluginsLifecycleHook("onBefore", params);
      this.state.data = res;
      this.state.error = undefined;
      this.state.loading = false;
      this.fetchLifecycleHook("onSuccess", params, res);
      this.fetchLifecycleHook("onFinally", params, res);
      this.pluginsLifecycleHook("onSuccess", params, res);
      this.pluginsLifecycleHook("onFinally", params, res);

      return res;
    } catch (error: any) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.fetchLifecycleHook("onError", params, undefined, error);
      this.fetchLifecycleHook("onFinally", params, undefined, error);
      this.pluginsLifecycleHook("onError", params, undefined, error);
      this.pluginsLifecycleHook("onFinally", params, undefined, error);

      this.state.loading = false;
      this.state.error = error;
      throw error;
    }
  }

  cancel() {
    this.count++;
    this.state.loading = false;
    // this.state.error = undefined;
    this.pluginsLifecycleHook("onCancel");
  }

  mutate(value: TData) {
    this.state.data = value;
  }

  refresh() {
    // @ts-ignore
    this.run(...(this.state.params || []));
  }
  refreshAsync() {
    // @ts-ignore
    this.runAsync(...(this.state.params || []));
  }
}
