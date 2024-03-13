var W=Object.defineProperty;var q=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var v=(t,e,r)=>(q(t,typeof e!="symbol"?e+"":e,r),r);import{i as D,j as y,k as X,l as z,m as J,w as K,g as Q}from"./app-MDcXVWpp.js";import{c as p,a as F}from"./commonjsHelpers-1J56E-h6.js";const le=async(...t)=>(console.log("mockFetch params: ",t),new Promise((e,r)=>{setTimeout(()=>{e(Math.random())},2e3)})),de=async(...t)=>(console.log("mockFetch params: ",t),new Promise((e,r)=>{setTimeout(()=>{e(Math.random())},200)}));class V{constructor(e,r,n,i){v(this,"count",0);v(this,"state",D({loading:!1,data:void 0,error:void 0,params:void 0}));v(this,"pluginImpls",[]);this.serviceRef=e,this.options=r,this.subscribe=n,this.initState=i,this.options=r||{}}fetchLifecycleHook(e,...r){const n=this.options&&this.options[e];n&&n(...r)}pluginsLifecycleHook(e,...r){const n=this.pluginImpls.map(i=>{var o;return(o=i[e])==null?void 0:o.call(i,...r)}).filter(Boolean);return Object.assign({},...n)}run(...e){this.runAsync(...e).catch(r=>{this.options.onError||console.error(r)})}async runAsync(...e){this.count++;const r=this.count,{stopNow:n=!1}=this.pluginsLifecycleHook("onBefore",e);if(n)return new Promise(()=>{});try{this.state.params=e,this.fetchLifecycleHook("onBefore",e),this.state.loading=!0;const i=await this.serviceRef(...e);return r!==this.count?new Promise(()=>{}):(this.state.data=i,this.state.error=void 0,this.state.loading=!1,this.fetchLifecycleHook("onSuccess",e,i),this.fetchLifecycleHook("onFinally",e,i,void 0),i)}catch(i){if(r!==this.count)return new Promise(()=>{});throw this.fetchLifecycleHook("onError",e,void 0,i),this.fetchLifecycleHook("onFinally",e,void 0,i),this.state.loading=!1,this.state.error=i,i}}cancel(){this.count++,this.state.loading=!1,this.pluginsLifecycleHook("onCancel")}mutate(e){this.state.data=e}refresh(){this.run(...this.state.params||[])}refreshAsync(){this.runAsync(...this.state.params||[])}}const Y=(t,e={},r=[])=>{const n=new V(t,e,()=>{},r);return n.options=e,n.state.params||e.defaultParams,n.pluginImpls=r.map(i=>i(n,e)),{loading:y(n.state,"loading"),data:y(n.state,"data"),error:y(n.state,"error"),params:y(n.state,"params"),cancel:n.cancel.bind(n),refresh:n.refresh.bind(n),refreshAsync:n.refreshAsync.bind(n),run:n.run.bind(n),runAsync:n.runAsync.bind(n),mutate:n.mutate.bind(n)}};function Z(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var O=Z,tt=typeof p=="object"&&p&&p.Object===Object&&p,et=tt,rt=et,nt=typeof self=="object"&&self&&self.Object===Object&&self,it=rt||nt||Function("return this")(),I=it,ot=I,st=function(){return ot.Date.now()},at=st,ct=/\s/;function ut(t){for(var e=t.length;e--&&ct.test(t.charAt(e)););return e}var ft=ut,lt=ft,dt=/^\s+/;function mt(t){return t&&t.slice(0,lt(t)+1).replace(dt,"")}var ht=mt,gt=I,bt=gt.Symbol,C=bt,x=C,H=Object.prototype,vt=H.hasOwnProperty,yt=H.toString,g=x?x.toStringTag:void 0;function pt(t){var e=vt.call(t,g),r=t[g];try{t[g]=void 0;var n=!0}catch{}var i=yt.call(t);return n&&(e?t[g]=r:delete t[g]),i}var Tt=pt,jt=Object.prototype,$t=jt.toString;function St(t){return $t.call(t)}var Ot=St,E=C,kt=Tt,wt=Ot,_t="[object Null]",xt="[object Undefined]",P=E?E.toStringTag:void 0;function Et(t){return t==null?t===void 0?xt:_t:P&&P in Object(t)?kt(t):wt(t)}var Pt=Et;function At(t){return t!=null&&typeof t=="object"}var Rt=At,Lt=Pt,Ft=Rt,It="[object Symbol]";function Ct(t){return typeof t=="symbol"||Ft(t)&&Lt(t)==It}var Ht=Ct,Nt=ht,A=O,Bt=Ht,R=NaN,Gt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Wt=parseInt;function qt(t){if(typeof t=="number")return t;if(Bt(t))return R;if(A(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=A(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Nt(t);var r=Mt.test(t);return r||Ut.test(t)?Wt(t.slice(2),r?2:8):Gt.test(t)?R:+t}var Dt=qt,Xt=O,S=at,L=Dt,zt="Expected a function",Jt=Math.max,Kt=Math.min;function Qt(t,e,r){var n,i,o,c,s,u,f=0,d=!1,l=!1,T=!0;if(typeof t!="function")throw new TypeError(zt);e=L(e)||0,Xt(r)&&(d=!!r.leading,l="maxWait"in r,o=l?Jt(L(r.maxWait)||0,e):o,T="trailing"in r?!!r.trailing:T);function j(a){var m=n,h=i;return n=i=void 0,f=a,c=t.apply(h,m),c}function B(a){return f=a,s=setTimeout(b,e),d?j(a):c}function G(a){var m=a-u,h=a-f,_=e-m;return l?Kt(_,o-h):_}function k(a){var m=a-u,h=a-f;return u===void 0||m>=e||m<0||l&&h>=o}function b(){var a=S();if(k(a))return w(a);s=setTimeout(b,G(a))}function w(a){return s=void 0,T&&n?j(a):(n=i=void 0,c)}function M(){s!==void 0&&clearTimeout(s),f=0,n=u=i=s=void 0}function U(){return s===void 0?c:w(S())}function $(){var a=S(),m=k(a);if(n=arguments,i=this,u=a,m){if(s===void 0)return B(u);if(l)return clearTimeout(s),s=setTimeout(b,e),j(u)}return s===void 0&&(s=setTimeout(b,e)),c}return $.cancel=M,$.flush=U,$}var N=Qt;const Vt=F(N);var Yt=N,Zt=O,te="Expected a function";function ee(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(te);return Zt(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Yt(t,e,{leading:n,maxWait:e,trailing:i})}var re=ee;const ne=F(re),ie=(t,{throttleWait:e,throttleLeading:r,throttleTrailing:n})=>{const i={};if(r!==void 0&&(i.leading=r),n!==void 0&&(i.trailing=n),e!==void 0&&e>0){const o=t.runAsync.bind(t),c=ne(s=>{s()},e,i);t.runAsync=(...s)=>new Promise((u,f)=>{c(()=>{o==null||o(...s).then(d=>u(d)).catch(d=>f(d))})})}return{onCancel:()=>{}}},oe=(t,{debounceWait:e,debounceLeading:r,debounceTrailing:n,debounceMaxWait:i})=>{let o;const c={};if(r!==void 0&&(c.leading=r),n!==void 0&&(c.trailing=n),i!==void 0&&(c.maxWait=i),e!==void 0&&e>0){const s=t.runAsync.bind(t);o=Vt(u=>{u()},e,c),t.runAsync=(...u)=>new Promise((f,d)=>{o(()=>{s==null||s(...u).then(l=>f(l)).catch(l=>d(l))})})}return{onCancel:()=>{o==null||o.cancel()}}},se=(t,{manual:e,ready:r=Q(!0)})=>{let n=!1;X(()=>{const o=z(r)?r.value:!!r;n=!o,!e&&o&&t.run(...t.state.params||[])}),J(()=>{t.cancel(),i()});const i=K(r,(o,c)=>{n=!o,!e&&o&&t.run(...t.state.params||[])});return{onBefore:()=>({stopNow:n})}},ae=(t,e,r)=>Y(t,e,[...r||[],ie,oe,se]),me=ae;export{de as a,le as m,me as u};