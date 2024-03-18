import { Plugin } from "../type";

import { onMounted, onUnmounted, watch, Ref, ref } from "vue-demi";
import { toRawData } from "../../../utils/index";

interface cacheItem {
  // cacheKey: string;
  data: any;
  params: any[];
  time: number;
}
type CacheObject = { [cacheKey: string]: cacheItem | undefined };
let cacheObject: CacheObject = {};

const useCachePlugin: Plugin<any, any[]> = (
  fetchInstance,
  { cacheKey, cacheTime = 300000, staleTime = 0, setCache, getCache }
) => {
  return {
    onBefore: () => {
      if (!cacheKey) return {};

      if (typeof getCache === "function") {
        return { data: getCache(), returnNow: true };
      }
      const { data, time } = cacheObject[cacheKey] || {};
      //是否有数据缓存且未过期
      const isCacheTimeExpired = () => {
        if (cacheTime !== -1 || !time) return false;
        if (Date.now() - time > cacheTime) return true;
        return false;
      };
      //是否数据过时了,需要再发起重新请求
      const isStaled = () => {
        if (!time) return true;
        return Date.now() - time > staleTime;
      };

      if (isCacheTimeExpired()) {
        cacheObject[cacheKey] = undefined;
      } else {
        fetchInstance.mutate(data);
      }
      if (!isStaled()) {
        // console.log("isStaled(): ", isStaled());
        return { data: data, returnNow: true };
      }
      return {};
    },
    onSuccess: (data, params) => {
      if (!cacheKey || !data) return;
      if (typeof setCache === "function") {
        return setCache(data);
      }
      cacheObject[cacheKey] = {
        time: Date.now(),
        params: params,
        data,
      };
    },
  };
};

const clearCache = (cacheKey: string | string[]) => {
  if (typeof cacheKey === "string") {
    return (cacheObject[cacheKey] = undefined);
  }
  if (Array.isArray(cacheKey)) {
    return cacheKey.forEach((key) => {
      cacheObject[key] = undefined;
    });
  }
  return !cacheKey && (cacheObject = {});
};
export { useCachePlugin, clearCache };
