import { onUnmounted, Ref } from "vue-demi";
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
  let target: DomTarget = getTargetElement(options?.target);

  if (!target?.addEventListener) {
    return;
  }
  target.addEventListener(eventName, eventListener, {
    capture: options.capture,
    once: options.once,
    passive: options.passive,
  });

  onUnmounted(() => {
    if (!target?.removeEventListener) {
      return;
    }
    target.removeEventListener(eventName, eventListener, {
      capture: options.capture,
    });
  });
};
export default main;
