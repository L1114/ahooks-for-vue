import{g as h,m as F}from"./index-bJ1PaNyp.js";import{g as i,w as v,_ as x,o as C,c as B,d as r,n as N,u as s,t as o,e as y}from"./app-2eDkehgc.js";import"./commonjsHelpers-1J56E-h6.js";const L=(_,e={})=>{const l=i(!1);let a=h(_,null),c=()=>{},f=()=>{},t=()=>{c(),f()};const n=u=>F("focusin",b=>{var d,m;l.value=!0,(d=e==null?void 0:e.onFocus)==null||d.call(e,b),(m=e==null?void 0:e.onChange)==null||m.call(e,!0)},{target:u}),k=u=>F("focusout",b=>{var d,m;l.value=!1,(d=e==null?void 0:e.onBlur)==null||d.call(e,b),(m=e==null?void 0:e.onChange)==null||m.call(e,!0)},{target:u});let g=()=>{t(),c=n(a).stop,f=k(a).stop};return g(),v(_,u=>{t(),a=u,u&&g()}),{stop:()=>t(),restart:()=>g(),isFocusWithin:l}},T=r("label",{style:{display:"block"}},[y(" First Name: "),r("input")],-1),W=r("br",null,null,-1),w=r("label",{style:{display:"block",marginTop:16}},[y(" Last Name: "),r("input")],-1),E=[T,W,w],R={__name:"demo",setup(_){const e=i(null),{isFocusWithin:l,stop:a,restart:c}=L(e);return(f,t)=>(C(),B("div",null,[r("div",{ref_key:"domRef",ref:e,style:N({padding:"32px",backgroundColor:s(l)?"red":"",border:"1px solid gray"})},E,4),r("p",null,"isFocusWithin: "+o(s(l)),1),r("button",{onClick:t[0]||(t[0]=(...n)=>s(c)&&s(c)(...n))},"重新开始监听"),y("-"),r("button",{onClick:t[1]||(t[1]=(...n)=>s(a)&&s(a)(...n))}," 移除监听 ")]))}},D=x(R,[["__file","demo.vue"]]);export{D as default};