import { Ref } from "vue-demi";
type DomTarget = HTMLElement | Window | Document | Element;
type OptionsTarget = DomTarget | Ref<DomTarget> | (() => DomTarget | Ref<DomTarget>);
type BrowserEvent = keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ElementEventMap;
interface Options {
    onFocus?: (e: FocusEvent | Event) => void;
    onBlur?: (e: FocusEvent | Event) => void;
    onChange?: (isFocusWithin: boolean) => void;
    focusin?: BrowserEvent;
    focusout?: BrowserEvent;
}
interface Result {
    restart: () => void;
    stop: () => void;
    isFocusWithin: Ref<boolean>;
}
type UseFocusWithin = (p: OptionsTarget, options?: Options) => Result;
declare const main: UseFocusWithin;
export default main;
