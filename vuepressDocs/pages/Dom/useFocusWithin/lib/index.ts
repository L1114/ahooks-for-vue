import { Ref, watch, ref } from "vue-demi";
import { getTargetElement } from "../../../utils/index";
import useEventListener from "../../useEventListener/lib/index";

type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => DomTarget) | Ref<DomTarget>;
interface Options {
  onFocus?: (e: FocusEvent | Event) => void;
  onBlur?: (e: FocusEvent | Event) => void;
  onChange?: (isFocusWithin: boolean) => void;
}
type UseFocusWithin = (p: OptionsTarget, options?: Options) => void;
const main: UseFocusWithin = (t, options = {}) => {
  const isFocusWithin = ref(false);
  let target = getTargetElement(t, null);
  /**focusin监听函数移除 */
  let removeListenFocusin = () => {};
  /**focusout 监听函数移除 */
  let removeListenFocusout = () => {};
  /**focusout 移除监听函数集合*/
  let stop = () => {
    removeListenFocusin();
    removeListenFocusout();
  };

  /**focusin 监听函数 */
  const listenFocusin = (targetElement: any) => {
    return useEventListener(
      "focusin",
      (v) => {
        isFocusWithin.value = true;
        options?.onFocus?.(v);
        options?.onChange?.(true);
      },
      {
        target: targetElement,
      }
    );
  };
  /**focusout 监听函数 */
  const listenFocusout = (targetElement: any) => {
    return useEventListener(
      "focusout",
      (v) => {
        isFocusWithin.value = false;
        options?.onBlur?.(v);
        options?.onChange?.(true);
      },
      {
        target: targetElement,
      }
    );
  };
  /**监听函数集合*/
  let restart = () => {
    stop();
    removeListenFocusin = listenFocusin(target).stop;
    removeListenFocusout = listenFocusout(target).stop;
  };

  restart();
  watch(t, (v) => {
    stop();
    // @ts-ignore
    target = v;
    if (v) {
      restart();
    }
  });
  return {
    stop: () => stop(),
    restart: () => restart(),
    isFocusWithin,
  };
};
export default main;
