# useDocumentVisibility

监听页面是否可见，参考 [visibilityState API](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)

## 代码演示

### 基础用法

<Dom-useDocumentVisibility-demo />
::: details 点击查看代码
@[code vue](./demo.vue)
:::

## API

```typescript
const { documentVisibility } = useDocumentVisibility();
```

### Result

| 参数               | 说明                           | 类型                                                    |
| ------------------ | ------------------------------ | ------------------------------------------------------- |
| documentVisibility | 判断 document 是否处于可见状态 | Ref<`visible`\| `hidden` \| `prerender`> \| `undefined` |

### Params

| 参数     | 说明     | 类型                            |
| -------- | -------- | ------------------------------- |
| callBack | 回调函数 | ( documentVisibility ) => void) |

### `Result 相比ahooks新增的APi`

| 参数      | 说明             | 类型         |
| --------- | ---------------- | ------------ |
| `restart` | 重新开始监听函数 | `() => void` |
| `stop`    | 移除监听函数     | `() => void` |
