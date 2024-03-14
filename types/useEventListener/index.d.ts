import { Ref } from "vue-demi";
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | (() => Element) | Ref<DomTarget>;
interface Options {
    target?: OptionsTarget;
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}
declare const main: <K extends keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ElementEventMap>(eventName: K, handler: Function, options: Options) => void;
export default main;
