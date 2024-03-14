import { Ref } from "vue-demi";

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => DomTarget) | Ref<DomTarget>;
const getTargetElement = (target: OptionsTarget) => {
  //   return isBrowser ? window : undefined;
  if (!isBrowser) {
    return undefined;
  }
  let targetElement = typeof target === "function" ? target() : target;
  return targetElement || window;
};
export { isBrowser, getTargetElement };
