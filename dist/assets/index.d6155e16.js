import{d as A,g as I,I as M,h as y,r as D,k as o,c as u,b as l,w as c,u as T,i as r,o as a,a as d,F as B,q as F,s as J,l as p,t as m,j,J as q}from"./index.7b4003e2.js";const U={class:"search-modal"},G=p(" \u641C \u7D22 "),H={key:0,class:"recent-wrap"},K={class:"title"},P=p(" \u6700\u8FD1 "),Q=p("\u6E05\u7A7A"),W={class:"recent-body"},X={key:1,class:"result-wrap"},Y=["onClick"],Z=["title"],se=A({name:"index",setup(ee){const i=I("recent-list",[]),L=T(),O=M(),v=y([]);let _=y([]);const g=e=>{e==null||e.forEach(t=>{var n;(n=t.children)!=null&&n.length?g(t.children):v.push(t)})},k=D(null),h=D(!1),w=()=>{h.value=!0,setTimeout(()=>{var e;return(e=k.value)==null?void 0:e.focus()})},C=e=>{h.value=!1,L.push({path:e.path}),i.value.some(t=>t.name===e.name)||i.value.push(e)};g(O.MenuList),_=y(JSON.parse(JSON.stringify(o(v))));const b=q(e=>{_.length=0;const t=v.filter(n=>n.title.indexOf(e.target.value)!==-1);_.push(...JSON.parse(JSON.stringify(o(t))))},500),x=e=>{e==="all"?i.value.length=0:i.value.splice(e,1)};return(e,t)=>{const n=r("icon-search"),S=r("a-button"),E=r("icon-history"),R=r("a-tag"),V=r("a-avatar"),$=r("a-empty"),z=r("a-modal");return a(),u("div",U,[l(S,{class:"search-btn",onClick:w,shape:"round"},{icon:c(()=>[l(n,{style:{color:"var(--color-text-1)"}})]),default:c(()=>[G]),_:1}),l(z,{visible:h.value,"onUpdate:visible":t[2]||(t[2]=s=>h.value=s),top:"150px",closable:!1,footer:!1,"modal-class":"my-modal","align-center":!1},{title:c(()=>[l(n,{size:"20",style:{color:"rgb(var(--primary-6))"}}),d("input",{ref_key:"input",ref:k,class:"search-input",type:"text",autofocus:"",placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",onInput:t[0]||(t[0]=(...s)=>o(b)&&o(b)(...s))},null,544)]),default:c(()=>[o(i).length?(a(),u("div",H,[d("div",K,[d("span",null,[l(E),P]),l(S,{size:"mini",type:"text",status:"danger",onClick:t[1]||(t[1]=s=>x("all"))},{default:c(()=>[Q]),_:1})]),d("div",W,[(a(!0),u(B,null,F(o(i),(s,f)=>(a(),J(R,{closable:"",onClick:N=>C(s),onClose:N=>x(f)},{default:c(()=>[p(m(s.title),1)]),_:2},1032,["onClick","onClose"]))),256))])])):j("",!0),o(_).length?(a(),u("div",X,[(a(!0),u(B,null,F(o(_),(s,f)=>(a(),u("div",{key:s,class:"result-item",onClick:N=>C(s)},[l(V,{class:"icon"},{default:c(()=>[p(m(f+1),1)]),_:2},1024),d("span",{class:"label",title:s.title},m(s.title),9,Z)],8,Y))),128))])):(a(),J($,{key:2}))]),_:1},8,["visible"])])}}});export{se as default};
