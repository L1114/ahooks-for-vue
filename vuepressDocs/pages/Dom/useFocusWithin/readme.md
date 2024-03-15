# useFocusWithin

监听当前焦点是否在某个区域之内，同 css 属性 [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)。

## 代码演示

### 基础用法

<Dom-useFocusWithin-demo />
::: details 点击查看代码
@[code vue](./demo.vue)
:::

### 传入 DOM 元素

## API

```typescript
const isFocusWithin = useFocusWithin(target, {
  onFocus,
  onBlur,
  onChange,
});
```

### Params

| 参数    | 说明                  | 类型                                           | 默认值 |
| ------- | --------------------- | ---------------------------------------------- | ------ |
| target  | DOM 节点或者 Ref 对象 | `() => Element` \| `Element` \| `Ref<Element>` | -      |
| options | 额外的配置项          | `Options`                                      | -      |

### Options

| 参数     | 说明           | 类型                               | 默认值 |
| -------- | -------------- | ---------------------------------- | ------ |
| onFocus  | 获取焦点时触发 | `(e: FocusEvent) => void`          | -      |
| onBlur   | 失去焦点时触发 | `(e: FocusEvent) => void`          | -      |
| onChange | 焦点变化时触发 | `(isFocusWithin: boolean) => void` | -      |

### `Result 相比ahooks新增的APi`

| 参数          | 说明               | 类型           |
| ------------- | ------------------ | -------------- |
| isFocusWithin | 焦点是否在当前区域 | `Ref<boolean>` |
| `restart`     | 重新开始监听函数   | `() => void`   |
| `stop`        | 移除监听函数       | `() => void`   |
