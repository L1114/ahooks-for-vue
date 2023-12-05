import { ref } from "vue-demi";
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
    manual = true,
    onBefore,
    onSuccess,
    onError,
    onFinally,
    throttleWait = 0,
    throttleTrailing = false,
  }
) => {
  const data = ref(dataFilter(null));
  const loading = ref(false);
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

    return new Promise((resolve, reject) => {
      const onErrorFn = (e: any) => {
        reject(e);
        onError?.(e);
      };
      // clearTimeout(throttleTimer);
      onBefore?.();
      loading.value = true;
      lastFetchTime = Date.now();
      (async () => {
        try {
          const response = await api(runAsyncParams || defaultParams).catch(
            (err: any) => {
              onErrorFn(err);
            }
          );

          const value = dataFilter(response.data);
          data.value = value;
          resolve(value);
          onSuccess?.(value);
        } catch (e) {
          error.value = e;
          onErrorFn(e);
        } finally {
          loading.value = false;
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

  !manual && runAsync();

  const res = {
    data,
    loading,
    error,
    runAsync,
  };
  return res;
};
