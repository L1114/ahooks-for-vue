import { Service, Options, Plugin } from "./type";
declare const useRequestImplement: <TData, TParams extends any[]>(service: Service<TData, TParams>, options?: Options<TData, TParams>, plugins?: Plugin<TData, TParams>[]) => {
    loading: import("vue-demi").Ref<boolean>;
    data: import("@vue/shared").IfAny<TData | undefined, import("vue-demi").Ref<TData | undefined>, [TData | undefined] extends [import("vue-demi").Ref<any>] ? import("vue-demi").Ref<any> & TData : import("vue-demi").Ref<TData | undefined>>;
    error: import("vue-demi").Ref<Error | undefined>;
    params: import("@vue/shared").IfAny<TParams | undefined, import("vue-demi").Ref<TParams | undefined>, [TParams | undefined] extends [import("vue-demi").Ref<any>] ? import("vue-demi").Ref<any> & TParams : import("vue-demi").Ref<TParams | undefined>>;
    cancel: () => void;
    refresh: () => void;
    refreshAsync: () => Promise<TData>;
    run: (...params: TParams) => void;
    runAsync: (...params: TParams) => Promise<TData>;
    mutate: (value: TData) => void;
};
export default useRequestImplement;
