import{b as u}from"./api-vUH9sl6F.js";import{b as c}from"./index-wZlPMOb0.js";import{_ as p,o as d,c as f,d as s,e as a,t as _,u as n}from"./app-fEsgeMaf.js";import"./commonjsHelpers-1J56E-h6.js";const k={__name:"demo",setup(b){const{loading:r,data:l,cancel:i,run:m}=c(u,{pollingInterval:3e3}),e=o=>{o?m():i()};return(o,t)=>(d(),f("div",null,[s("button",{onClick:t[0]||(t[0]=()=>e(!0))},"start"),a(" - "),s("button",{onClick:t[1]||(t[1]=()=>e(!1))},"stop"),a(" data: "+_(n(r)?"loading...":n(l)),1)]))}},C=p(k,[["__file","demo.vue"]]);export{C as default};