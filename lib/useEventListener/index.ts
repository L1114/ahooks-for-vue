import { onUnmounted, Ref, watch, isRef } from "vue-demi";
import { getTargetElement } from "../utils/index";

type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => DomTarget) | Ref<DomTarget>;
interface Options {
  target?: OptionsTarget;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

const main: <
  K extends
    | keyof HTMLElementEventMap
    | keyof DocumentEventMap
    | keyof WindowEventMap
    | keyof ElementEventMap
>(
  eventName: K,
  handler: Function,
  options?: Options
) => void = (eventName, handler, options = {}) => {
  const eventListener = (event: Event) => {
    return handler(event);
  };
  // @ts-ignore
  let target: DomTarget | undefined = getTargetElement(options?.target);

  const addEventListener = () => {
    console.log("addEventListener: ", target);
    if (!target?.addEventListener) {
      return;
    }
    removeEventListener();
    target.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });
  };
  const removeEventListener = () => {
    console.log("removeEventListener: ", target);
    if (!target?.removeEventListener) {
      return;
    }
    target.removeEventListener(eventName, eventListener, {
      capture: options.capture,
    });
  };
  addEventListener();
  onUnmounted(() => {
    removeEventListener();
  });

  if (isRef(options?.target)) {
    watch(options?.target, (v) => {
      removeEventListener();
      target = v;
      addEventListener();
    });
  }
};
export default main;
