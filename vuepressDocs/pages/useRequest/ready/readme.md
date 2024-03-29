# Ready

- `注意options.ready的类型必须是Ref<boolean>`
- 通过设置 `options.ready`，可以控制请求是否发出。当其值为 `false` 时，请求永远都不会发出。

其具体行为如下：

1. 当 `manual=false` 自动请求模式时，每次 `ready` 从 `false` 变为 `true` 时，都会自动发起请求，会带上参数 `options.defaultParams`。
2. 当 `manual=true` 手动请求模式时，只要 `ready=false`，则通过 `run/runAsync` 触发的请求都不会执行。

## 自动模式

以下示例演示了自动模式下 `ready` 的行为。每次 `ready` 从 `false` 变为 `true` 时，都会重新发起请求。
<useRequest-ready-demo />

::: details 点击查看代码
@[code vue](./demo.vue)
:::

## 手动模式

以下示例演示了手动模式下 `ready` 的行为。只有当 `ready` 等于 `true` 时，`run` 才会执行。

<useRequest-ready-demo2 />

::: details 点击查看代码
@[code vue](./demo2.vue)
:::

## API

### Options

| 参数  | 说明                 | 类型           | 默认值      |
| ----- | -------------------- | -------------- | ----------- |
| ready | 当前请求是否准备好了 | `Ref<boolean>` | `Ref<true>` |
