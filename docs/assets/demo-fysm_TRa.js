import{m as i}from"./api-IIX5bhec.js";import{b as f}from"./index-ZQJKkblz.js";import{_ as d,g as m,o as p,c as _,e as t,f as s,t as a,u}from"./app-m2-sF_Mn.js";import"./commonjsHelpers-1J56E-h6.js";const x=t("br",null,null,-1),b=t("br",null,null,-1),k={__name:"demo",setup(g){const o=m(!0),{loading:l,data:c}=f(i,{refreshOnWindowFocus:o,focusTimespan:5e3}),n=r=>{o.value=r};return(r,e)=>(p(),_("div",null,[t("button",{type:"text",onClick:e[0]||(e[0]=()=>n(!0))}," set refreshOnWindowFocus true "),s(" - "),t("button",{type:"text",onClick:e[1]||(e[1]=()=>n(!1))}," set refreshOnWindowFocus false "),s(" -- "+a(o.value)+" ",1),x,b,s(" fetch data:"+a(u(l)?"loading...":u(c)),1)]))}},y=d(k,[["__file","demo.vue"]]);export{y as default};