# 基础用法

这一小节我们会介绍 `useRequest` 最核心，最基础的能力，也就是 `useRequest` 内核的能力。

## 默认请求

默认情况下，`useRequest` 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 `loading` , `data` , `error` 等状态。

```js
const { data, error, loading } = useRequest(service);
```

<UseRequestDemo />

::: details 点击查看代码

@[code vue](@/useRequest/UseRequestDemo.vue)

:::

### Result

| 参数     | 说明                 | 类型                                     |
| -------- | -------------------- | ---------------------------------------- |
| data     | service 返回的数据   | `TData` \| `undefined`                   |
| loading  | service 是否正在执行 | `boolean`                                |
| runAsync | 返回的是 Promise     | `(...params: TParams) => Promise<TData>` |

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
