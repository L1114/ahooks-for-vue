import { Ref } from "vue-demi";
declare const isBrowser: boolean;
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | Ref<DomTarget> | (() => DomTarget | Ref<DomTarget>);
declare const toRawData: (v: any) => any;
declare const getTargetElement: (target: OptionsTarget, defaultTarget?: DomTarget | null) => DomTarget | null;
export { isBrowser, getTargetElement, toRawData };
