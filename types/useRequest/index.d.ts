import { Service, Options, Plugin } from "./type";
declare const useRequest: <TData, TParams extends any[]>(service: Service<TData, TParams>, options?: Options<TData, TParams> | undefined, plugins?: Plugin<TData, TParams>[] | undefined) => {
    loading: import("vue").Ref<boolean>;
    data: import("@vue/shared").IfAny<TData | undefined, import("vue").Ref<TData | undefined>, [TData | undefined] extends [import("vue").Ref<any>] ? import("vue").Ref<any> & TData : import("vue").Ref<TData | undefined>>;
    error: import("vue").Ref<Error | undefined>;
    params: import("@vue/shared").IfAny<TParams | undefined, import("vue").Ref<TParams | undefined>, [TParams | undefined] extends [import("vue").Ref<any>] ? import("vue").Ref<any> & TParams : import("vue").Ref<TParams | undefined>>;
    cancel: () => void;
    refresh: () => void;
    refreshAsync: () => Promise<TData>;
    run: (...params: TParams) => void;
    runAsync: (...params: TParams) => Promise<TData>;
    mutate: (value: TData) => void;
};
export default useRequest;
