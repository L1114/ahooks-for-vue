var z=Object.defineProperty;var J=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var h=(e,t,r)=>(J(e,typeof t!="symbol"?t+"":t,r),r);import{i as K,j as Q,k as y,l as Y,m as S,p as $,w as B,g as N}from"./app-2eDkehgc.js";import{c as T,a as G}from"./commonjsHelpers-1J56E-h6.js";class Z{constructor(t,r,n,i){h(this,"count",0);h(this,"state",K({loading:!1,data:void 0,error:void 0,params:void 0}));h(this,"pluginImpls",[]);this.serviceRef=t,this.options=r,this.subscribe=n,this.initState=i,this.options=r||{};let o=r.defaultParams||[];this.state.params=Array.isArray(o)?o:[o]}getRawParams(){return Q(this.state.params)||[]}userOptionsHook(t,...r){const n=this.options&&this.options[t];n&&n(...r)}pluginsLifecycleHook(t,...r){const n=this.pluginImpls.map(i=>{var o;return(o=i[t])==null?void 0:o.call(i,...r)}).filter(Boolean);return Object.assign({},...n)}run(...t){this.runAsync(...t).catch(r=>{this.options.onError||console.error(r)})}async runAsync(...t){this.count++;const r=this.count,{stopNow:n=!1}=this.pluginsLifecycleHook("onBefore",t);if(n)return new Promise(()=>{});try{this.state.params=t,this.userOptionsHook("onBefore",t),this.state.loading=!0;const i=await this.serviceRef(...t);return r!==this.count?new Promise(()=>{}):(this.pluginsLifecycleHook("onBefore",t),this.state.data=i,this.state.error=void 0,this.state.loading=!1,this.userOptionsHook("onSuccess",t,i),this.userOptionsHook("onFinally",t,i),this.pluginsLifecycleHook("onSuccess",t,i),this.pluginsLifecycleHook("onFinally",t,i),i)}catch(i){if(r!==this.count)return new Promise(()=>{});throw this.state.loading=!1,this.state.error=i,this.userOptionsHook("onError",t,void 0,i),this.userOptionsHook("onFinally",t,void 0,i),this.pluginsLifecycleHook("onError",t,void 0,i),this.pluginsLifecycleHook("onFinally",t,void 0,i),i}}cancel(){this.count++,this.state.loading=!1,this.pluginsLifecycleHook("onCancel")}mutate(t){this.state.data=t}refresh(){this.run(...getRawParams())}refreshAsync(){return this.runAsync(...getRawParams())}}const ee=(e,t={},r=[])=>{const n=new Z(e,t,()=>{},[]);return n.pluginImpls=r.map(i=>i(n,t)),{loading:y(n.state,"loading"),data:y(n.state,"data"),error:y(n.state,"error"),params:y(n.state,"params"),cancel:n.cancel.bind(n),refresh:n.refresh.bind(n),refreshAsync:n.refreshAsync.bind(n),run:n.run.bind(n),runAsync:n.runAsync.bind(n),mutate:n.mutate.bind(n)}};function te(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var E=te,re=typeof T=="object"&&T&&T.Object===Object&&T,ne=re,ie=ne,oe=typeof self=="object"&&self&&self.Object===Object&&self,se=ie||oe||Function("return this")(),I=se,ae=I,ue=function(){return ae.Date.now()},ce=ue,le=/\s/;function fe(e){for(var t=e.length;t--&&le.test(e.charAt(t)););return t}var de=fe,me=de,ge=/^\s+/;function ve(e){return e&&e.slice(0,me(e)+1).replace(ge,"")}var be=ve,he=I,ye=he.Symbol,M=ye,L=M,U=Object.prototype,Te=U.hasOwnProperty,we=U.toString,v=L?L.toStringTag:void 0;function je(e){var t=Te.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch{}var i=we.call(e);return n&&(t?e[v]=r:delete e[v]),i}var pe=je,Oe=Object.prototype,Se=Oe.toString;function $e(e){return Se.call(e)}var Ee=$e,x=M,Pe=pe,ke=Ee,Re="[object Null]",Le="[object Undefined]",A=x?x.toStringTag:void 0;function xe(e){return e==null?e===void 0?Le:Re:A&&A in Object(e)?Pe(e):ke(e)}var Ae=xe;function He(e){return e!=null&&typeof e=="object"}var _e=He,Ce=Ae,Fe=_e,Be="[object Symbol]";function Ne(e){return typeof e=="symbol"||Fe(e)&&Ce(e)==Be}var Ge=Ne,Ie=be,H=E,Me=Ge,_=NaN,Ue=/^[-+]0x[0-9a-f]+$/i,We=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,De=parseInt;function Xe(e){if(typeof e=="number")return e;if(Me(e))return _;if(H(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=H(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var r=We.test(e);return r||qe.test(e)?De(e.slice(2),r?2:8):Ue.test(e)?_:+e}var Ve=Xe,ze=E,O=ce,C=Ve,Je="Expected a function",Ke=Math.max,Qe=Math.min;function Ye(e,t,r){var n,i,o,c,s,a,f=0,u=!1,d=!1,w=!0;if(typeof e!="function")throw new TypeError(Je);t=C(t)||0,ze(r)&&(u=!!r.leading,d="maxWait"in r,o=d?Ke(C(r.maxWait)||0,t):o,w="trailing"in r?!!r.trailing:w);function j(l){var m=n,g=i;return n=i=void 0,f=l,c=e.apply(g,m),c}function q(l){return f=l,s=setTimeout(b,t),u?j(l):c}function D(l){var m=l-a,g=l-f,R=t-m;return d?Qe(R,o-g):R}function P(l){var m=l-a,g=l-f;return a===void 0||m>=t||m<0||d&&g>=o}function b(){var l=O();if(P(l))return k(l);s=setTimeout(b,D(l))}function k(l){return s=void 0,w&&n?j(l):(n=i=void 0,c)}function X(){s!==void 0&&clearTimeout(s),f=0,n=a=i=s=void 0}function V(){return s===void 0?c:k(O())}function p(){var l=O(),m=P(l);if(n=arguments,i=this,a=l,m){if(s===void 0)return q(a);if(d)return clearTimeout(s),s=setTimeout(b,t),j(a)}return s===void 0&&(s=setTimeout(b,t)),c}return p.cancel=X,p.flush=V,p}var W=Ye;const Ze=G(W);var et=W,tt=E,rt="Expected a function";function nt(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(rt);return tt(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),et(e,t,{leading:n,maxWait:t,trailing:i})}var it=nt;const ot=G(it),st=(e,{throttleWait:t,throttleLeading:r,throttleTrailing:n})=>{const i={};if(r!==void 0&&(i.leading=r),n!==void 0&&(i.trailing=n),t!==void 0&&t>0){const o=e.runAsync.bind(e),c=ot(s=>{s()},t,i);e.runAsync=(...s)=>new Promise((a,f)=>{c(()=>{o==null||o(...s).then(u=>a(u)).catch(u=>f(u))})})}return{onCancel:()=>{}}},at=(e,{debounceWait:t,debounceLeading:r,debounceTrailing:n,debounceMaxWait:i})=>{let o;const c={};if(r!==void 0&&(c.leading=r),n!==void 0&&(c.trailing=n),i!==void 0&&(c.maxWait=i),t!==void 0&&t>0){const s=e.runAsync.bind(e);o=Ze(a=>{a()},t,c),e.runAsync=(...a)=>new Promise((f,u)=>{o(()=>{s==null||s(...a).then(d=>f(d)).catch(d=>u(d))})})}return{onCancel:()=>{o==null||o.cancel()}}},ut=(e,{manual:t,ready:r=N(!0)})=>{let n=!1;Y(()=>{const o=S(r)?r.value:!!r;n=!o,!t&&o&&e.run(...e.getRawParams())}),$(()=>{e.cancel(),i()});const i=B(r,o=>{n=!o,!t&&o&&e.run(...e.getRawParams())});return{onBefore:()=>({stopNow:n})}},ct=!!(typeof window<"u"&&window.document&&window.document.createElement),F=e=>S(e)?e.value:e,lt=(e,t)=>{if(!ct)return null;const r=t===void 0?window:t;let n=F(e);return typeof n=="function"&&(n=F(n())),n||r},ft=(e,t,r={})=>{const n=a=>t(a);let i=!1,o=lt(r==null?void 0:r.target);const c=a=>{a&&a(),s(),!(!(o!=null&&o.addEventListener)||i)&&o.addEventListener(e,n,{capture:r.capture,once:r.once,passive:r.passive})},s=a=>{a&&a(),o!=null&&o.removeEventListener&&o.removeEventListener(e,n,{capture:r.capture})};return c(),$(()=>{s()}),S(r==null?void 0:r.target)&&B(r==null?void 0:r.target,a=>{s(),o=a,c()}),{stop:()=>s(()=>i=!0),restart:()=>c(()=>i=!1)}},dt=e=>{const t=N("visible");return ft("visibilitychange",()=>{t.value=document.visibilityState,e&&e(document.visibilityState)}),t},mt=(e,{pollingInterval:t,pollingWhenHidden:r=!0,pollingErrorRetryCount:n=-1})=>{if(!t||t<=0)return{};let i=!1,o=0,c;const s=u=>{u&&(i=u),clearTimeout(c)},a=e.run.bind(e);r||dt(u=>{if(u==="visible"&&!i)return f(e.getRawParams());if(u==="hidden")return s()}),e.run=(...u)=>{const d=u!=null&&u.length?u:e.getRawParams();a(...d),f(d)};const f=u=>{s(),i=!1,c=setTimeout(()=>{e.run(...u||[])},t)};return $(()=>s(!0)),{onError:()=>{o++,n!==void 0&&n!==-1&&o>=n&&s(!0)},onSuccess:()=>{o=0},onCancel(){s(!0)}}},gt=(e,t,r)=>ee(e,t,[...r||[],st,at,ut,mt]),yt=gt;export{yt as a,lt as g,ft as m,dt as u};
