import { FetchState, Service, Options, Subscribe } from "./type";
import { reactive } from "vue-demi";

export default class Fetch<TData, TParams extends any[]> {
  count: number = 0;
  state: FetchState<TData, TParams> = reactive({
    loading: false,
    data: undefined,
    error: undefined,
    params: undefined,
  });

  constructor(
    public serviceRef: Service<TData, TParams>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: any[] // public initState: Partial<FetchState<TData, TParams>>
  ) {
    this.options = options || {};
  }
  lifecycleHook(hookName: string, ...rest: any): void {
    const hook = (this.options &&
      this.options[hookName as keyof typeof this.options]) as Function;
    hook && hook(...rest);
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

    try {
      this.state.params = params;
      this.lifecycleHook("onBefore", params);
      this.state.loading = true;
      const res = await this.serviceRef(...params);
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.state.data = res;
      this.state.error = undefined;
      this.state.loading = false;
      this.lifecycleHook("onSuccess", params, res);
      this.lifecycleHook("onFinally", params, res, undefined);

      return res;
    } catch (error: any) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.lifecycleHook("onError", params, undefined, error);
      this.lifecycleHook("onFinally", params, undefined, error);
      this.state.loading = false;
      this.state.error = error;
      throw error;
    }
  }

  cancel() {
    this.count++;
    this.state.loading = false;
    // this.state.error = undefined;
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
