import{d as R,q as G,f as K,s as S,v as P,x as Q,r as W,y as X,c as m,a as s,k as n,n as a,j as f,b as e,w as o,p as Y,e as Z,u as ee,z as oe,i as t,o as c,l as k,t as te,A as ne}from"./index.ef2589f0.js";import{L as se,_ as ce}from"./index.6dbcced3.js";import ae from"./index.b16a7b2c.js";import{_ as le}from"./plugin-vue_export-helper.21dcd24c.js";const g=l=>(Y("data-v-45d0b16e"),l=l(),Z(),l),ue={class:"ace-header"},ie={class:"left-size"},_e=g(()=>s("i",{class:"icon"},null,-1)),re=g(()=>s("h1",{class:"title"},"Ace admin vue",-1)),de={class:"right-side"},pe={key:0},me={key:1},fe={class:"avatar-wrap"},ke=g(()=>s("img",{alt:"avatar",src:ce},null,-1)),ge=k(" \u8BBE\u7F6E "),he=k(" \u9000\u51FA\u767B\u5F55 "),ve=R({name:"index",setup(l){const x=ee(),B=G(),h=K(),v=localStorage.getItem("locked"),C=S(()=>h),u=S(()=>B.appDevice==="desktop"),i=P(),A=Q(i),_=W(v?JSON.parse(v):!1),D=()=>{A()},{isFullscreen:F,toggle:b}=X(),w=()=>{ne.warning({top:"300px",title:"\u63D0\u793A",content:"\u662F\u5426\u8981\u9000\u51FA\u767B\u5F55\uFF1F",alignCenter:!1,hideCancel:!1,onOk(){h.logout(),setTimeout(()=>x.push({name:"login"}),300)}})},E=()=>{_.value=!0,localStorage.setItem("locked","true")},I=()=>{_.value=!1,localStorage.setItem("locked","false")},T=oe("toggleDrawerMenu");return(Fe,y)=>{const N=t("icon-menu-unfold"),z=t("icon-lock"),r=t("a-button"),d=t("a-tooltip"),L=t("icon-sun-fill"),V=t("icon-moon-fill"),M=t("icon-fullscreen-exit"),U=t("icon-fullscreen"),$=t("a-avatar"),j=t("icon-user"),p=t("a-doption"),q=t("icon-settings"),O=t("a-divider"),H=t("icon-export"),J=t("a-dropdown");return c(),m("header",ue,[s("div",ie,[_e,re,n(u)?f("",!0):(c(),a(N,{key:0,class:"toggle-icon",size:"26px",onClick:y[0]||(y[0]=()=>n(T))}))]),s("ul",de,[n(u)?(c(),m("li",pe,[e(ae)])):f("",!0),s("li",null,[e(d,{content:"\u70B9\u51FB\u9501\u5C4F"},{default:o(()=>[e(r,{class:"nav-btn",type:"outline",shape:"circle",onClick:E},{icon:o(()=>[e(z)]),_:1})]),_:1})]),s("li",null,[e(d,{content:`\u70B9\u51FB\u5207\u6362\u4E3A${n(i)?"\u4EAE\u8272":"\u6697\u9ED1"}\u6A21\u5F0F`},{default:o(()=>[e(r,{class:"nav-btn",type:"outline",shape:"circle",onClick:D},{icon:o(()=>[n(i)?(c(),a(L,{key:0})):(c(),a(V,{key:1}))]),_:1})]),_:1},8,["content"])]),n(u)?(c(),m("li",me,[e(d,{content:`\u70B9\u51FB${n(F)?"\u9000\u51FA":"\u5207\u6362"}\u5168\u5C4F\u6A21\u5F0F`},{default:o(()=>[e(r,{class:"nav-btn",type:"outline",shape:"circle",onClick:n(b)},{icon:o(()=>[n(F)?(c(),a(M,{key:0})):(c(),a(U,{key:1}))]),_:1},8,["onClick"])]),_:1},8,["content"])])):f("",!0),s("li",null,[e(J,{position:"br",trigger:["hover","click"]},{content:o(()=>[e(p,null,{icon:o(()=>[e(j)]),default:o(()=>[k(" "+te(n(C).name),1)]),_:1}),e(p,null,{icon:o(()=>[e(q)]),default:o(()=>[ge]),_:1}),e(O,{style:{margin:"0"}}),e(p,{onClick:w},{icon:o(()=>[e(H)]),default:o(()=>[he]),_:1})]),default:o(()=>[s("div",fe,[e($,{size:32,shape:"square"},{default:o(()=>[ke]),_:1})])]),_:1})])]),e(se,{locked:_.value,onUnlocked:I},null,8,["locked"])])}}});var Ce=le(ve,[["__scopeId","data-v-45d0b16e"]]);export{Ce as default};