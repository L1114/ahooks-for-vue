import { Ref } from "vue-demi";
type VisibilityState = "visible" | "hidden" | "prerender" | undefined;
type Callback = (v: VisibilityState) => void;
declare const _default: (cb: Callback) => {
    documentVisibility: Ref<VisibilityState>;
    restart: () => void;
    stop: () => void;
};
export default _default;
