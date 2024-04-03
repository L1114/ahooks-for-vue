import { FetchState, Service, Options, Subscribe, PluginReturn } from "./type";
export default class Fetch<TData, TParams extends any[]> {
    serviceRef: Service<TData, TParams>;
    options: Options<TData, TParams>;
    subscribe: Subscribe;
    initState: any[];
    count: number;
    state: FetchState<TData, TParams>;
    pluginImpls: PluginReturn<TData, TParams>[];
    lastFetchTime: number;
    loadingDelayTimer: ReturnType<typeof setTimeout> | undefined;
    constructor(serviceRef: Service<TData, TParams>, options: Options<TData, TParams>, subscribe: Subscribe, initState: any[]);
    setLoading(v: boolean): void;
    getRawParams(): TParams | never[];
    formatResult(res: any): any;
    userOptionsHook(hookName: keyof typeof this.options, ...rest: any): void;
    pluginsLifecycleHook(hookName: keyof PluginReturn<TData, TParams>, ...rest: any[]): any;
    run(...params: TParams): void;
    runAsync(...params: TParams): Promise<TData>;
    cancel(): void;
    mutate(value: TData): void;
    refresh(): void;
    refreshAsync(): Promise<TData>;
}
