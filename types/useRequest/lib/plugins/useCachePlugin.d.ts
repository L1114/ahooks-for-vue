import { Plugin } from "../type";
declare const useCachePlugin: Plugin<any, any[]>;
declare const clearCache: (cacheKey: string | string[]) => void | {};
export { useCachePlugin, clearCache };
