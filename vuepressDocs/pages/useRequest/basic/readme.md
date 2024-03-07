# 基础用法

这一小节我们会介绍 `useRequest` 最核心，最基础的能力，也就是 `useRequest` 内核的能力。

## 默认请求

默认情况下，`useRequest` 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 `loading` , `data` , `error` 等状态。

```js
const { data, error, loading } = useRequest(service);
```

<useRequest-basic-demo />

::: details 点击查看代码

@[code vue](./demo.vue)

:::

### Result

| 参数         | 说明                                                                                                     | 类型                                     |
| ------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| data         | service 返回的数据                                                                                       | `TData` \| `undefined`                   |
| error        | service 抛出的异常                                                                                       | `Error` \| `undefined`                   |
| loading      | service 是否正在执行                                                                                     | `boolean`                                |
| params       | 当次执行的 service 的参数数组。比如你触发了 `run(1, 2, 3)`，则 params 等于 `[1, 2, 3]`                   | `TParams` \| `[]`                        |
| run          | <ul><li> 手动触发 service 执行，参数会传递给 service</li><li>异常自动处理，通过 `onError` 反馈</li></ul> | `(...params: TParams) => void`           |
| runAsync     | 与 `run` 用法一致，但返回的是 Promise，需要自行处理异常。                                                | `(...params: TParams) => Promise<TData>` |
| refresh      | 使用上一次的 params，重新调用 `run`                                                                      | `() => void`                             |
| refreshAsync | 使用上一次的 params，重新调用 `runAsync`                                                                 | `() => Promise<TData>`                   |
| mutate       | 直接修改 `data`                                                                                          | `(data?: TData ) => void`                |
| cancel       | 忽略当前 Promise 的响应                                                                                  | `() => void`                             |

### Options

| 参数          | 说明                                                                                                                              | 类型                                                 | 默认值              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------- |
| manual        | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `runAsync` 触发执行。 </li></ul> | `boolean`                                            | `false`             |
| defaultParams | 首次默认执行时，传递给 service 的参数                                                                                             | `Object`                                             | -                   |
| onBefore      | service 执行前触发                                                                                                                | `(params: TParams) => void`                          | -                   |
| onSuccess     | service resolve 时触发                                                                                                            | `(data: TData, params: TParams) => void`             | -                   |
| onError       | service reject 时触发                                                                                                             | `(e: Error, params: TParams) => void`                | -                   |
| onFinally     | service 执行完成时触发                                                                                                            | `(params: TParams, data?: TData, e?: Error) => void` | -                   |
| dataFilter    | 直接修改 `data` ,对返回的数据做处理,比如需要返回 data 下的 list,`注意对data做空判断`                                              | `(data)  => data?.list`                              | - `(data)  => data` |
