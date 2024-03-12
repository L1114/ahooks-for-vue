import { ref, Ref } from "vue-demi";
import useEventListener from "../useEventListener/index";
type VisibilityState = "visible" | "hidden" | "prerender" | undefined;
type Callback = (v: VisibilityState) => void;
export default (cb: Callback) => {
  const documentVisibility: Ref<VisibilityState> = ref("visible");
  useEventListener(
    "visibilitychange",
    () => {
      documentVisibility.value = document.visibilityState;
      cb && cb(document.visibilityState);
    },
    {
      target: document,
    }
  );
  return documentVisibility;
};
