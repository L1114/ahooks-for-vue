import { FetchState, Service, Options, Subscribe, PluginReturn } from "./type";
export default class Fetch<TData, TParams extends any[]> {
    serviceRef: Service<TData, TParams>;
    options: Options<TData, TParams>;
    subscribe: Subscribe;
    initState: any[];
    count: number;
    state: FetchState<TData, TParams>;
    pluginImpls: PluginReturn<TData, TParams>[];
    constructor(serviceRef: Service<TData, TParams>, options: Options<TData, TParams>, subscribe: Subscribe, initState: any[]);
    getRawParams(): TParams | never[];
    userOptionsHook(hookName: keyof typeof this.options, ...rest: any): void;
    pluginsLifecycleHook(hookName: keyof PluginReturn<TData, TParams>, ...rest: any[]): any;
    run(...params: TParams): void;
    runAsync(...params: TParams): Promise<TData>;
    cancel(): void;
    mutate(value: TData): void;
    refresh(): void;
    refreshAsync(): Promise<TData>;
}
