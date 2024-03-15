import { Ref, isRef } from "vue-demi";

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget =
  | DomTarget
  | Ref<DomTarget>
  | (() => DomTarget | Ref<DomTarget>);

const refToRaw = (v: any) => {
  return isRef(v) ? v.value : v;
};

const getTargetElement: (
  target: OptionsTarget,
  defaultTarget?: DomTarget | null
) => DomTarget | null = (target, defaultTarget) => {
  if (!isBrowser) {
    return null;
  }
  const defaultElement = defaultTarget === undefined ? window : defaultTarget;
  let targetElement = refToRaw(target);
  if (typeof targetElement === "function") {
    targetElement = refToRaw(targetElement());
  }

  return targetElement || defaultElement;
};
export { isBrowser, getTargetElement };
