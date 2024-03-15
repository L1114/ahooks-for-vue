import { Ref, isRef } from "vue-demi";

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => DomTarget) | Ref<DomTarget>;
const refToRaw = (v: any) => {
  return isRef(v) ? v.value : v;
};

const getTargetElement = (
  target: OptionsTarget,
  defaultTarget?: DomTarget | undefined | null
) => {
  if (!isBrowser) {
    return undefined;
  }
  const defaultElement = defaultTarget === undefined ? window : defaultTarget;
  let targetElement = refToRaw(target);
  if (typeof targetElement === "function") {
    targetElement = refToRaw(targetElement());
  }

  return targetElement || defaultElement;
};
export { isBrowser, getTargetElement };
