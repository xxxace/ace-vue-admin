import{d as R,q as G,f as J,s as B,v as K,x as P,r as Q,y as W,c as f,a as s,k as t,n as a,j as k,b as e,w as o,p as X,e as Y,u as Z,z as ee,i as n,o as c,l as g,t as oe,A as ne}from"./index.5a558d6d.js";import{L as te,_ as se}from"./index.73e3a927.js";import ce from"./index.86957600.js";import{_ as ae}from"./plugin-vue_export-helper.21dcd24c.js";const h=l=>(X("data-v-66586606"),l=l(),Y(),l),le={class:"ace-header"},ue={class:"left-size"},ie=h(()=>s("i",{class:"icon"},null,-1)),_e=h(()=>s("h1",{class:"title"},"Ace admin vue",-1)),re={class:"right-side"},pe={key:0},de={key:1},me={class:"avatar-wrap"},fe=h(()=>s("img",{alt:"avatar",src:se},null,-1)),ke=g(" \u8BBE\u7F6E "),ge=g(" \u9000\u51FA\u767B\u5F55 "),he=R({name:"index",setup(l){const x=Z(),C=G(),v=J(),F=localStorage.getItem("locked"),S=B(()=>v),i=B(()=>C.appDevice==="desktop"),_=K(),A=P(_),r=Q(F?Boolean(F):!1),D=()=>{A()},{isFullscreen:y,toggle:w}=W(),b=()=>{ne.warning({top:"300px",title:"\u63D0\u793A",content:"\u662F\u5426\u8981\u9000\u51FA\u767B\u5F55\uFF1F",alignCenter:!1,hideCancel:!1,onOk(){v.logout(),setTimeout(()=>x.push({name:"login"}),300)}})},E=()=>{r.value=!0},T=ee("toggleDrawerMenu");return(ve,u)=>{const I=n("icon-menu-unfold"),z=n("icon-lock"),p=n("a-button"),d=n("a-tooltip"),L=n("icon-sun-fill"),N=n("icon-moon-fill"),V=n("icon-fullscreen-exit"),M=n("icon-fullscreen"),$=n("a-avatar"),j=n("icon-user"),m=n("a-doption"),q=n("icon-settings"),U=n("a-divider"),H=n("icon-export"),O=n("a-dropdown");return c(),f("header",le,[s("div",ue,[ie,_e,t(i)?k("",!0):(c(),a(I,{key:0,class:"toggle-icon",size:"26px",onClick:u[0]||(u[0]=()=>t(T))}))]),s("ul",re,[t(i)?(c(),f("li",pe,[e(ce)])):k("",!0),s("li",null,[e(d,{content:"\u70B9\u51FB\u9501\u5C4F"},{default:o(()=>[e(p,{class:"nav-btn",type:"outline",shape:"circle",onClick:E},{icon:o(()=>[e(z)]),_:1})]),_:1})]),s("li",null,[e(d,{content:`\u70B9\u51FB\u5207\u6362\u4E3A${t(_)?"\u4EAE\u8272":"\u6697\u9ED1"}\u6A21\u5F0F`},{default:o(()=>[e(p,{class:"nav-btn",type:"outline",shape:"circle",onClick:D},{icon:o(()=>[t(_)?(c(),a(L,{key:0})):(c(),a(N,{key:1}))]),_:1})]),_:1},8,["content"])]),t(i)?(c(),f("li",de,[e(d,{content:`\u70B9\u51FB${t(y)?"\u9000\u51FA":"\u5207\u6362"}\u5168\u5C4F\u6A21\u5F0F`},{default:o(()=>[e(p,{class:"nav-btn",type:"outline",shape:"circle",onClick:t(w)},{icon:o(()=>[t(y)?(c(),a(V,{key:0})):(c(),a(M,{key:1}))]),_:1},8,["onClick"])]),_:1},8,["content"])])):k("",!0),s("li",null,[e(O,{position:"br",trigger:["hover","click"]},{content:o(()=>[e(m,null,{icon:o(()=>[e(j)]),default:o(()=>[g(" "+oe(t(S).name),1)]),_:1}),e(m,null,{icon:o(()=>[e(q)]),default:o(()=>[ke]),_:1}),e(U,{style:{margin:"0"}}),e(m,{onClick:b},{icon:o(()=>[e(H)]),default:o(()=>[ge]),_:1})]),default:o(()=>[s("div",me,[e($,{size:32,shape:"square"},{default:o(()=>[fe]),_:1})])]),_:1})])]),e(te,{locked:r.value,onUnlocked:u[1]||(u[1]=()=>r.value=!1)},null,8,["locked"])])}}});var Ce=ae(he,[["__scopeId","data-v-66586606"]]);export{Ce as default};
