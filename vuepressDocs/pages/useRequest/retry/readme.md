# 错误重试

通过设置 `options.retryCount`，指定错误重试次数，则 useRequest 在失败后会进行重试。

```tsx | pure
const { data, run } = useRequest(getUsername, {
  retryCount: 3,
});
```

如上示例代码，在请求异常后，会做 3 次重试。

<useRequest-retry-demo />

::: details 点击查看代码
@[code vue](./demo.vue)
:::

## API

### Options

| 参数          | 说明                                                                                                                                                                                                    | 类型                    | 默认值 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------ |
| retryCount    | 错误重试次数。如果设置为 `-1`，则无限次重试。                                                                                                                                                           | `Ref<number> ` `number` | -      |
| retryInterval | <ul><li>重试时间间隔，单位为毫秒。</li><li>如果不设置，默认采用简易的指数退避算法，取 `1000 * 2 ** retryCount`，也就是第一次重试等待 2s，第二次重试等待 4s，以此类推，如果大于 30s，则取 30s </li></ul> | `Ref<number> ` `number` | -      |

## 备注

- `options.retryCount`、`options.retryInterval` 支持动态变化。
- `cancel` 可以取消正在进行的重试行为。
