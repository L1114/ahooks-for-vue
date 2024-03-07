import { FetchState, Service, Options, Subscribe } from "./type";
import { reactive } from "vue-demi";

export default class Fetch<TData, TParams extends any[]> {
  count: number = 0;
  state: FetchState<TData, TParams> = reactive({
    loading: false,
    data: undefined,
    error: undefined,
    params: [],
  });

  constructor(
    public serviceRef: Service<TData, TParams>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: any[] // public initState: Partial<FetchState<TData, TParams>>
  ) {
    // this.state = {
    //   ...this.state,
    //   loading: !options.manual,
    //   ...initState,
    // };
    // this.state.data = undefined;
    // this.state.error = undefined;
    // this.state.loading = false;
  }
  run(...params: TParams | []) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error);
      }
    });
  }
  async runAsync(...params: TParams | []): Promise<TData> {
    this.count++;
    const currentCount = this.count;

    try {
      this.state.loading = true;
      this.state.params = params;
      const res = await this.serviceRef(...params);
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
      this.state.data = res;
      this.state.error = undefined;
      this.state.loading = false;
      return res;
    } catch (error: any) {
      if (currentCount !== this.count) {
        return new Promise(() => {});
      }
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
    this.run(...(this.state.params || []));
  }
  refreshAsync() {
    this.runAsync(...(this.state.params || []));
  }
}
