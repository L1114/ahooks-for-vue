import { Ref, isRef } from "vue-demi";

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
  let targetElement = target;
  if (typeof targetElement === "function") {
    targetElement = targetElement();
  }
  if (isRef(targetElement)) {
    targetElement = targetElement.value;
  }

  return targetElement || window;
};
export { isBrowser, getTargetElement };
