import { Ref, watch, isRef } from "vue-demi";
import { getTargetElement } from "../../../utils/index";

type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget =
  | DomTarget
  | Ref<DomTarget>
  | (() => DomTarget | Ref<DomTarget>);

interface Options {
  target?: OptionsTarget;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}
interface Result {
  restart: () => void;
  stop: () => void;
}
const main: <
  K extends
    | keyof HTMLElementEventMap
    | keyof DocumentEventMap
    | keyof WindowEventMap
    | keyof ElementEventMap
>(
  eventName: K,
  handler: (e: Event) => void,
  options?: Options
) => Result = (eventName, handler, options = {}) => {
  const eventListener = (event: Event) => {
    return handler(event);
  };
  let disabledListener = false;
  // @ts-ignore
  let target: DomTarget | undefined = getTargetElement(options?.target);

  const addEventListener = (before?: Function) => {
    before && before();
    removeEventListener();
    if (!target?.addEventListener || disabledListener) {
      return;
    }
    target.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });
  };
  const removeEventListener = (before?: Function) => {
    before && before();
    if (!target?.removeEventListener) {
      return;
    }
    target.removeEventListener(eventName, eventListener, {
      capture: options.capture,
    });
  };
  addEventListener();
  // onUnmounted(() => {
  //   removeEventListener();
  // });

  if (isRef(options?.target)) {
    watch(options?.target, (v) => {
      removeEventListener();
      target = v;
      addEventListener();
    });
  }
  return {
    stop: () => removeEventListener(() => (disabledListener = true)),
    restart: () => addEventListener(() => (disabledListener = false)),
  };
};
export default main;
