import { FetchState, Service, Options, Subscribe } from "./type";
export default class Fetch<TData, TParams extends any[]> {
    serviceRef: Service<TData, TParams>;
    options: Options<TData, TParams>;
    subscribe: Subscribe;
    initState: any[];
    count: number;
    state: FetchState<TData, TParams>;
    constructor(serviceRef: Service<TData, TParams>, options: Options<TData, TParams>, subscribe: Subscribe, initState: any[]);
    run(...params: TParams | []): void;
    runAsync(...params: TParams | []): Promise<TData>;
    cancel(): void;
    mutate(value: TData): void;
    refresh(): void;
    refreshAsync(): void;
}