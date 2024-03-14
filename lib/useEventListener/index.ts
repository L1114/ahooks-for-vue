import { onMounted, onUnmounted, Ref } from "vue-demi";

type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => Element) | Ref<DomTarget>;
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
  options: Options
) => void = (eventName, handler, options = {}) => {
  const eventListener = (event: Event) => {
    return handler(event);
  };
  let target: DomTarget;

  onMounted(() => {
    if (typeof options.target === "function") {
      // @ts-ignore
      target = options.target();
    }
    target = target || window;
    if (!target?.addEventListener) {
      return;
    }
    target.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive,
    });
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
