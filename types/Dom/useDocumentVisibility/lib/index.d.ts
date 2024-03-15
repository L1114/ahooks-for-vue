import { Ref } from "vue-demi";
type VisibilityState = "visible" | "hidden" | "prerender" | undefined;
type Callback = (v: VisibilityState) => void;
declare const _default: (cb: Callback) => Ref<VisibilityState>;
export default _default;
