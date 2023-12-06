import { ref, computed } from "vue-demi";
/**
 *
 * @param {function} api axios请求函数
 * @param {function} dataFilter 返回的数据转换过滤,注意兼容处理报错
 * @param {boolean} manual 手动发起请求 默认为true
 * @returns {
 * data: object 请求返回结果
 * loading: 请求中
 * error: 请求失败error
 * runAsync: 请求方法,返回promise  @param {object} runAsyncParams 请求参数
 * }
 */

interface UseRequestOptions {
  dataFilter?: (v: any) => any;
  defaultParams?: object;
  manual?: boolean;
  onBefore?: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onFinally?: () => void;
  throttleWait?: number;
  throttleTrailing?: boolean;
}

type UseRequestFunction = (api: any, options: UseRequestOptions) => void;

export const useRequest: UseRequestFunction = (
  api: any,
  {
    dataFilter = (v: any) => v,
    defaultParams = {},
    manual,
    onBefore,
    onSuccess,
    onError,
    onFinally,
    throttleWait = 0,
    throttleTrailing = false,
  } = {}
) => {
  const data = ref(dataFilter(null));
  const loadingIds: any = ref([]);
  const error: any = ref(null);
  // let promiseInstance = null;
  let lastFetchTime = 0;
  let throttleTimer: any = null;
  //真正执行请求的函数
  const fetchPromise = (runAsyncParams?: any) => {
    // if (Date.now() - lastFetchTime > throttleWait) {
    //   lastFetchTime = 0;
    // }
    // clearTimeout(initLastFetchTimer);
    // initLastFetchTimer = setTimeout(() => {
    //   lastFetchTime = 0;
    // }, Date.now() - lastFetchTime + 1);
    const id = Math.random();
    return new Promise((resolve, reject) => {
      const onErrorFn = (e: any) => {
        reject(e);
        onError?.(e);
      };
      // clearTimeout(throttleTimer);
      onBefore?.();
      loadingIds.value.push(id);
      lastFetchTime = Date.now();
      (async () => {
        try {
          const response = await api(runAsyncParams || defaultParams).catch(
            (err: any) => {
              onErrorFn(err);
            }
          );
          // console.log("response", response);

          // const value = dataFilter(response.data);
          const value = dataFilter(response);
          data.value = value;
          resolve(value);
          onSuccess?.(value);
        } catch (e) {
          error.value = e;
          onErrorFn(e);
        } finally {
          // loading.value.fi
          let i = loadingIds.value.findIndex((d) => d === id);
          i >= 0 && loadingIds.value.splice(i, 1);
          onFinally?.();
        }
      })();
    });
  };

  const runAsync = (runAsyncParams?: any) => {
    //无节流
    if (!throttleWait || throttleWait <= 0) {
      return fetchPromise(runAsyncParams);
    }
    //有节流并且第一次不执行
    // !throttleLeading && lastFetchTime === 0 && (lastFetchTime = Date.now());
    //节流拦截
    const timeDiff = Date.now() - lastFetchTime;

    if (timeDiff < throttleWait) {
      return new Promise((resolve, reject) => {
        const delay = () => {
          clearTimeout(throttleTimer);
          const timeDiff = Date.now() - lastFetchTime;
          throttleTimer = setTimeout(() => {
            if (timeDiff > throttleWait) {
              fetchPromise(runAsyncParams).then(resolve).catch(reject);
            } else {
              delay();
            }
          }, throttleWait - timeDiff);
        };
        throttleTrailing && delay();
      });
    } else {
      return fetchPromise(runAsyncParams);
    }
  };
  console.log("manual", manual);
  !manual && runAsync();

  const res = {
    data,
    loading: computed(() => loadingIds.value?.length > 0),
    error,
    runAsync,
  };
  return res;
};
export const test = () => {
  console.log("test");
  return "test";
};
