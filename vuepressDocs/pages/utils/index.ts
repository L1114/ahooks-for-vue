import { Ref, isRef, isProxy, toRaw } from "vue-demi";

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

const toRawData = (v: any) => {
  if (isRef(v)) {
    return v.value;
  }
  if (isProxy(v)) {
    return toRaw(v);
  }
  return v;
};

const getTargetElement: (
  target: OptionsTarget,
  defaultTarget?: DomTarget | null
) => DomTarget | null = (target, defaultTarget) => {
  if (!isBrowser) {
    return null;
  }
  const defaultElement = defaultTarget === undefined ? window : defaultTarget;
  let targetElement = toRawData(target);
  if (typeof targetElement === "function") {
    targetElement = toRawData(targetElement());
  }

  return targetElement || defaultElement;
};
export { isBrowser, getTargetElement, toRawData };
