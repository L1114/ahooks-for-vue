# 快速上手

`useRequest` 是一个强大的异步数据管理的 hooks, Vue 项目中的网络请求场景使用 `useRequest` 就够了 。

`useRequest` 通过插件式组织代码，并且可以很方便的扩展出更高级的功能。目前已有能力包括：

- 自动请求/手动请求
- 轮询
- 防抖
- 节流
- 屏幕聚焦重新请求
- 错误重试
- loading delay
- 缓存

接下来让我们先从两个最简单的例子认识 `useRequest`。

# 默认用法

`useRequest` 的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的 `loading` , `data` 等状态。

```js
const { data, loading } = useRequest(getUsername);
```

# 手动触发

如果设置了 `options.manual = true`，则 useRequest 不会默认执行，需要通过 `runAsync` 来触发执行,返回`Promise`,无需手动接收返回的数据,可直接使用 useRequest 返回的`data`

```js
const { loading, runAsync, data } = useRequest(changeUsername, {
  manual: true,
});
runAsync();
```

<br />

上面两个例子，我们演示了 `useRequest` 最基础的用法，接下来的我们开始逐个详细介绍 `useRequest` 的特性。
