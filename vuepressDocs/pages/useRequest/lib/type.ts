import type Fetch from "./Fetch";
import { Ref } from "vue";

// export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;

export type Service<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>;

export interface FetchState<TData, TParams extends any[]> {
  loading: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
  // test?: Ref<TData | undefined>;
}

export interface Options<TData, TParams extends any[]> {
  manual?: boolean;

  onBefore?: (params: TParams) => void;
  onSuccess?: (data: TData, params: TParams) => void;
  onError?: (e: Error, params: TParams) => void;
  formatResult?: (res: any) => TData;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;

  defaultParams?: TParams;
  // refreshDeps
  //   refreshDeps?: DependencyList;
  refreshDepsAction?: () => void;

  // loading delay
  loadingDelay?: number;

  // polling
  pollingInterval?: Ref<number> | number;
  pollingWhenHidden?: Ref<boolean> | boolean;
  pollingErrorRetryCount?: Ref<number> | number;

  // refresh on window focus
  refreshOnWindowFocus?: Ref<boolean> | boolean;
  focusTimespan?: Ref<number> | number;

  // debounce
  debounceWait?: number;
  debounceLeading?: boolean;
  debounceTrailing?: boolean;
  debounceMaxWait?: number;

  // throttle
  throttleWait?: number;
  throttleLeading?: boolean;
  throttleTrailing?: boolean;

  // cache
  cacheKey?: string;
  cacheTime?: number;
  staleTime?: number;
  setCache?: (data: TData) => void;
  getCache?: () => TData | undefined;

  // retry
  retryCount?: Ref<number> | number;
  retryInterval?: Ref<number> | number;

  // ready
  ready?: Ref<boolean>;
}

export type Subscribe = () => void;
export interface PluginReturn<TData, TParams extends any[]> {
  onBefore?: (params: TParams) =>
    | ({
        stopNow?: boolean;
        returnNow?: boolean;
        returnData?: any;
      } & Partial<FetchState<TData, TParams>>)
    | void;

  onRequest?: (
    service: Service<TData, TParams>,
    params: TParams
  ) => {
    servicePromise?: Promise<TData>;
  };

  onSuccess?: (data: TData, params: TParams) => void;
  onError?: (e: Error, params: TParams) => void;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
  onCancel?: () => void;
  onMutate?: (data: TData) => void;
}
export type Plugin<TData, TParams extends any[]> = {
  (
    fetchInstance: Fetch<TData, TParams>,
    options: Options<TData, TParams>
  ): PluginReturn<TData, TParams>;
  onInit?: (
    options: Options<TData, TParams>
  ) => Partial<FetchState<TData, TParams>>;
};

export interface Result<TData, TParams extends any[]> {
  loading: boolean;
  data?: TData;
  error?: Error;
  params: TParams;
  cancel: Fetch<TData, TParams>["cancel"];
  refresh: Fetch<TData, TParams>["refresh"];
  refreshAsync: Fetch<TData, TParams>["refreshAsync"];
  run: Fetch<TData, TParams>["run"];
  runAsync: Fetch<TData, TParams>["runAsync"];
  mutate: Fetch<TData, TParams>["mutate"];
}
