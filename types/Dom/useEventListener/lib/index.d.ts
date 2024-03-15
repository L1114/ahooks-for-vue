import { Ref } from "vue-demi";
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | Ref<DomTarget> | (() => DomTarget | Ref<DomTarget>);
interface Options {
    target?: OptionsTarget;
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}
interface Result {
    restart: () => void;
    stop: () => void;
}
declare const main: <K extends keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ElementEventMap>(eventName: K, handler: (e: Event) => void, options?: Options) => Result;
export default main;
