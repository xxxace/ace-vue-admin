import{h as n,o as l,s as i,w as m,b as u,l as r}from"./index-46fce740.js";import{_}from"./plugin-vue_export-helper-c27b6911.js";import"./echarts-48262bf7.js";const p={setup(){const t=n([{title:"Name",dataIndex:"name",width:150},{title:"Salary",dataIndex:"salary",width:120},{title:"Address",dataIndex:"address",width:300},{title:"Email",dataIndex:"email"}]),o=n((()=>{const e=[];for(let a=0;a<100;a++)e.push({key:a+1,name:`Ace ${a+1}`,salary:Math.floor(Math.random()*1e5),address:"32 Park Road, London",email:`ace${a+1}@example.com`});return e})());return{columns:t,data:o}}};function f(t,s,o,e,a,h){const d=r("a-table"),c=r("a-card");return l(),i(c,{class:"ace-card"},{default:m(()=>[u(d,{columns:e.columns,data:e.data,"column-resizable":"",bordered:{cell:!0},pagination:{showPageSize:!0,defaultPageSize:20}},null,8,["columns","data"])]),_:1})}const b=_(p,[["render",f]]);export{b as default};
