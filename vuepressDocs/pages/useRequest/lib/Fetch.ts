import { FetchState, Service, Options, Subscribe, PluginReturn } from "./type";
import { reactive, toRaw } from "vue-demi";

export default class Fetch<TData, TParams extends any[]> {
  count: number = 0;
  state: FetchState<TData, TParams> = reactive({
    loading: false,
    data: undefined,
    error: undefined,
    params: undefined,
  });
  pluginImpls: PluginReturn<TData, TParams>[] = [];
  lastFetchTime: number = 0;
  loadingDelayTimer: ReturnType<typeof setTimeout> | undefined = undefined;
  constructor(
    public serviceRef: Service<TData, TParams>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: any[] // public initState: Partial<FetchState<TData, TParams>>
  ) {
    this.options = options || {};
    let params = options.defaultParams || [];
    // @ts-ignore
    this.state.params = Array.isArray(params) ? params : [params];
  }

  setLoading(v: boolean) {
    const loadingDelay = Number(this.options.loadingDelay) || 0;
    if (v) {
      this.loadingDelayTimer = setTimeout(() => {
        this.state.loading = true;
      }, loadingDelay);
    } else {
      clearTimeout(this.loadingDelayTimer);
      this.state.loading = false;
    }
  }
  getRawParams() {
    return toRaw(this.state.params) || [];
  }
  formatResult(res: any) {
    let data = res;
    try {
      data = this.options.formatResult ? this.options.formatResult(res) : res;
    } catch (error) {
      console.log("error :>> ", error);
    }
    return data;
  }

  userOptionsHook(hookName: keyof typeof this.options, ...rest: any) {
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
    const {
      stopNow = false,
      returnNow,
      data,
    } = this.pluginsLifecycleHook("onBefore", params);
    if (stopNow) {
      return new Promise(() => {});
    }

    if (returnNow) {
      return Promise.resolve(data);
    }
    try {
      this.state.params = params;
      this.userOptionsHook("onBefore", params);
      this.setLoading(true);
      this.lastFetchTime = Date.now();

      this.pluginsLifecycleHook("onRequest", params);
      const res = await this.serviceRef(...params);

      if (currentCount !== this.count) {
        return new Promise(() => {});
      }

      this.state.data = this.formatResult(res);
      this.state.error = undefined;
      this.setLoading(false);
      this.userOptionsHook("onSuccess", res, params);
      this.userOptionsHook("onFinally", res, params);
      this.pluginsLifecycleHook("onSuccess", res, params);
      this.pluginsLifecycleHook("onFinally", res, params);

      return res;
    } catch (error: any) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.setLoading(false);
      this.state.error = error;

      this.userOptionsHook("onError", params, undefined, error);
      this.userOptionsHook("onFinally", params, undefined, error);
      this.pluginsLifecycleHook("onError", params, undefined, error);
      this.pluginsLifecycleHook("onFinally", params, undefined, error);

      throw error;
    }
  }

  cancel() {
    this.count++;
    this.setLoading(false);
    // this.state.error = undefined;
    this.pluginsLifecycleHook("onCancel");
  }

  mutate(value: TData) {
    this.state.data = value;
  }

  refresh() {
    // @ts-ignore
    this.run(...this.getRawParams());
  }
  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...this.getRawParams());
  }
}
