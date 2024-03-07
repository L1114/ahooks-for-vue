var U=Object.defineProperty;var q=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);import{h as B,i as D,j as X,k as h}from"./app-zUonB3Xg.js";import{c as v,a as H}from"./commonjsHelpers-1J56E-h6.js";class z{constructor(e,n,r,a){p(this,"count",0);p(this,"state",B({loading:!1,data:void 0,error:void 0,params:[]}));this.serviceRef=e,this.options=n,this.subscribe=r,this.initState=a}run(...e){this.runAsync(...e).catch(n=>{this.options.onError||console.error(n)})}async runAsync(...e){this.count++;const n=this.count;try{this.state.loading=!0,this.state.params=e;const r=await this.serviceRef(...e);return n!==this.count?new Promise(()=>{}):(this.state.data=r,this.state.error=void 0,this.state.loading=!1,r)}catch(r){if(n!==this.count)return new Promise(()=>{});throw this.state.loading=!1,this.state.error=r,r}}cancel(){this.count++,this.state.loading=!1}mutate(e){this.state.data=e}refresh(){this.run(...this.state.params||[])}refreshAsync(){this.runAsync(...this.state.params||[])}}const J=(t,e={},n=[])=>{const r=new z(t,e,()=>{},n);r.options=e;let a=r.state.params||e.defaultParams||[];return a=Array.isArray(a)?a:[a],n.map(o=>o(r,e)),D(()=>{e!=null&&e.manual||r.run(...a)}),X(()=>{r.cancel()}),{loading:h(r.state,"loading"),data:h(r.state,"data"),error:h(r.state,"error"),params:h(r.state,"params"),cancel:r.cancel.bind(r),refresh:r.refresh.bind(r),refreshAsync:r.refreshAsync.bind(r),run:r.run.bind(r),runAsync:r.runAsync.bind(r),mutate:r.mutate.bind(r)}};function K(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var S=K,Q=typeof v=="object"&&v&&v.Object===Object&&v,V=Q,Y=V,Z=typeof self=="object"&&self&&self.Object===Object&&self,tt=Y||Z||Function("return this")(),P=tt,et=P,rt=function(){return et.Date.now()},nt=rt,at=/\s/;function it(t){for(var e=t.length;e--&&at.test(t.charAt(e)););return e}var st=it,ot=st,ct=/^\s+/;function ut(t){return t&&t.slice(0,ot(t)+1).replace(ct,"")}var ft=ut,dt=P,mt=dt.Symbol,N=mt,E=N,C=Object.prototype,lt=C.hasOwnProperty,bt=C.toString,b=E?E.toStringTag:void 0;function gt(t){var e=lt.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch{}var a=bt.call(t);return r&&(e?t[b]=n:delete t[b]),a}var ht=gt,vt=Object.prototype,yt=vt.toString;function Tt(t){return yt.call(t)}var jt=Tt,R=N,pt=ht,$t=jt,St="[object Null]",Ot="[object Undefined]",k=R?R.toStringTag:void 0;function _t(t){return t==null?t===void 0?Ot:St:k&&k in Object(t)?pt(t):$t(t)}var xt=_t;function At(t){return t!=null&&typeof t=="object"}var Et=At,Rt=xt,kt=Et,wt="[object Symbol]";function It(t){return typeof t=="symbol"||kt(t)&&Rt(t)==wt}var Ft=It,Pt=ft,w=S,Nt=Ft,I=NaN,Ct=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Lt=parseInt;function Wt(t){if(typeof t=="number")return t;if(Nt(t))return I;if(w(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=w(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Pt(t);var n=Gt.test(t);return n||Mt.test(t)?Lt(t.slice(2),n?2:8):Ct.test(t)?I:+t}var Ut=Wt,qt=S,$=nt,F=Ut,Bt="Expected a function",Dt=Math.max,Xt=Math.min;function Ht(t,e,n){var r,a,o,c,s,f,d=0,O=!1,m=!1,y=!0;if(typeof t!="function")throw new TypeError(Bt);e=F(e)||0,qt(n)&&(O=!!n.leading,m="maxWait"in n,o=m?Dt(F(n.maxWait)||0,e):o,y="trailing"in n?!!n.trailing:y);function T(i){var u=r,l=a;return r=a=void 0,d=i,c=t.apply(l,u),c}function G(i){return d=i,s=setTimeout(g,e),O?T(i):c}function M(i){var u=i-f,l=i-d,A=e-u;return m?Xt(A,o-l):A}function _(i){var u=i-f,l=i-d;return f===void 0||u>=e||u<0||m&&l>=o}function g(){var i=$();if(_(i))return x(i);s=setTimeout(g,M(i))}function x(i){return s=void 0,y&&r?T(i):(r=a=void 0,c)}function L(){s!==void 0&&clearTimeout(s),d=0,r=f=a=s=void 0}function W(){return s===void 0?c:x($())}function j(){var i=$(),u=_(i);if(r=arguments,a=this,f=i,u){if(s===void 0)return G(f);if(m)return clearTimeout(s),s=setTimeout(g,e),T(f)}return s===void 0&&(s=setTimeout(g,e)),c}return j.cancel=L,j.flush=W,j}var zt=Ht,Jt=zt,Kt=S,Qt="Expected a function";function Vt(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(Qt);return Kt(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Jt(t,e,{leading:r,maxWait:e,trailing:a})}var Yt=Vt;const Zt=H(Yt),te=(t,{throttleWait:e,throttleLeading:n,throttleTrailing:r})=>{const a={};if(n!==void 0&&(a.leading=n),r!==void 0&&(a.trailing=r),e!==void 0&&e>0){const o=t.runAsync.bind(t),c=Zt(o,e,a);t.runAsync=c.bind(t)}return{}},ee=(t,e,n)=>J(t,e,[...n||[],te]),ie=ee,se=async(...t)=>(console.log("mockFetch params: ",t),new Promise((e,n)=>{setTimeout(()=>{e(Math.random())},2e3)})),oe=async(...t)=>(console.log("mockFetch params: ",t),new Promise((e,n)=>{setTimeout(()=>{e(Math.random())},200)}));export{oe as a,se as m,ie as u};