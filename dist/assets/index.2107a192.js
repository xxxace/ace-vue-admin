var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(s,a,e)=>a in s?g(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))h.call(a,e)&&p(s,e,a[e]);if(u)for(var e of u(a))C.call(a,e)&&p(s,e,a[e]);return s};import{d as k,U as B,s as x,P as b,c as d,a as y,F as L,G as N,k as T,u as P,i as S,o as l,n as V,w as $,l as A,t as F,V as w}from"./index.5a558d6d.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const D={class:"nav-bar"},E={class:"tag-container"},G=k({name:"index",setup(s){const a=P(),e=B(),_=x(()=>e.getTagList);b(t=>{t.meta.noAffix||e.updatetagList(t)});const v=(t,n)=>{if(e.removeTag(t),n-=1,n>=0){const r=_.value[n];a.push(c({},r))}},m=t=>{a.push(c({},t))};return(t,n)=>{const r=S("a-tag");return l(),d("div",D,[y("div",E,[(l(!0),d(L,null,N(T(_),(o,i)=>(l(),V(r,{key:o.name,class:w([{active:o.fullPath===t.$route.fullPath}]),closable:!!i,onClose:f=>v(o,i),onClick:f=>m(o)},{default:$(()=>[A(F(o.title),1)]),_:2},1032,["class","closable","onClose","onClick"]))),128))])])}}});var U=z(G,[["__scopeId","data-v-6a0630e1"]]);export{U as default};