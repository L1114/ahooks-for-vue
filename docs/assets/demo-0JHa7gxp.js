import{a as u}from"./api-4pLQZzrE.js";import{a as c}from"./index-bJ1PaNyp.js";import{_ as p,o as d,c as f,d as a,e as s,t as _,u as n}from"./app-2eDkehgc.js";import"./commonjsHelpers-1J56E-h6.js";const k={__name:"demo",setup(g){const{loading:r,data:l,cancel:i,run:m}=c(u,{pollingInterval:3e3}),e=o=>{o?m():i()};return(o,t)=>(d(),f("div",null,[a("button",{onClick:t[0]||(t[0]=()=>e(!0))},"start"),s(" - "),a("button",{onClick:t[1]||(t[1]=()=>e(!1))},"stop"),s(" data: "+_(n(r)?"loading...":n(l)),1)]))}},C=p(k,[["__file","demo.vue"]]);export{C as default};