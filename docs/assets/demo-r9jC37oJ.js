import{c as m}from"./api-vUH9sl6F.js";import{b as p}from"./index-wZlPMOb0.js";import{_ as d,g as a,o as c,c as f,d as e,u as o,e as _,t as b}from"./app-fEsgeMaf.js";import"./commonjsHelpers-1J56E-h6.js";const y=e("br",null,null,-1),k={__name:"demo",setup(v){const r=a(100),n=a(2e3),{loading:u,data:l,run:s}=p(m,{retryCount:r,retryInterval:n});return(C,t)=>(c(),f("div",null,[e("button",{type:"button",onClick:t[0]||(t[0]=(...i)=>o(s)&&o(s)(...i))},"run"),e("button",{type:"button",onClick:t[1]||(t[1]=()=>r.value=100)}," set retryCount "),e("button",{type:"button",onClick:t[2]||(t[2]=()=>n.value=-1)}," set retryInterval "),y,_(" data:"+b(o(u)?"loading...":o(l)),1)]))}},I=d(k,[["__file","demo.vue"]]);export{I as default};