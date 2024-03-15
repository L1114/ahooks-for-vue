import { ref, Ref } from "vue-demi";
import useEventListener from "../../../Dom/useEventListener/lib/index";
type VisibilityState = "visible" | "hidden" | "prerender" | undefined;
type Callback = (v: VisibilityState) => void;
// type UseDocumentVisibility = (v: VisibilityState) => {
//   documentVisibility: Ref<VisibilityState>;
//   restart: () => void;
//   stop: () => void;
// };
export default (cb: Callback) => {
  const documentVisibility: Ref<VisibilityState> = ref("visible");

  const { stop, restart } = useEventListener("visibilitychange", () => {
    documentVisibility.value = document.visibilityState;
    cb && cb(document.visibilityState);
  });
  return { documentVisibility, restart, stop };
};
