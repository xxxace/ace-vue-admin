import{d as s,r as c,b as o,E as i,I as t,l,k as r}from"./index-e51ca14a.js";import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";const m=s({name:"QuickLinks",setup(){const n=r(),a=c([{label:"监控页",name:"monitor",icon:"icon-bug"},{label:"404",name:"404",icon:"icon-close"},{label:"403",name:"403",icon:"icon-exclamation"},{label:"未知页面",name:"NotFound",icon:"icon-question"}]);return()=>a.value.map(e=>o("div",{class:"route-item",key:e.name,onClick:()=>n.push({name:e.name})},[o("span",{class:"icon"},[e.icon?i(t(`<${e.icon}/>`)):""]),o("div",null,[e.label]),o(l("icon-right"),{"stroke-width":8,"stroke-linejoin":"bevel","stroke-linecap":"round"},null)]))}});const d=u(m,[["__scopeId","data-v-a04c2878"]]);export{d as default};
