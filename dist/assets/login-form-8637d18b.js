import{aR as h,aN as E,d as N,aS as q,az as L,aT as U,aU as g,o as v,q as b,aV as I,aW as T,a as e,w as a,b as z,aX as w,aY as M,r as u,aP as P,aQ as Q,x as R}from"./layout-6d71d22d.js";function W(l=!1){const o=h(l);return{loading:o,setLoading:r=>{o.value=r},toggle:()=>{o.value=!o.value}}}const F=l=>(P("data-v-19fb6dc8"),l=l(),Q(),l),X={class:"login-form"},Y=F(()=>R("div",{class:"title"},"登录 Ace admin vue",-1)),j=F(()=>R("div",{class:"sub-title"},"登录 Ace admin vue",-1)),G={key:0,class:"error-msg"},H=w(" 记住密码 "),J=w("登录"),K=N({name:"login-form",setup(l){const o=h(""),{loading:f,setLoading:_}=W(),r=q(),V=L(),s=U("login-config",{username:"",password:"",isRemember:!1}),y=g({username:[{required:!0,message:"账号不能为空"}],password:[{required:!0,message:"密码不能为空"}]}),n=g({username:s.value.username,password:s.value.isRemember?s.value.password:"",isRemember:s.value.isRemember}),B=async({values:d,errors:t})=>{if(!t){_(!0);try{await V.login(d),M.success({title:"登录成功",content:"欢迎回来!"});const{username:m,password:p}=d,{isRemember:i}=s.value;o.value="",s.value.username=m,s.value.password=i?p:"",r.currentRoute.value.query?setTimeout(()=>r.push({path:"/"}),300):setTimeout(()=>r.push({path:r.currentRoute.value.query}),300)}catch(m){o.value=m.message}finally{_(!1)}}},x=d=>{s.value.isRemember=d};return(d,t)=>{const m=u("icon-user"),p=u("a-input"),i=u("a-form-item"),C=u("icon-lock"),S=u("a-input-password"),A=u("a-checkbox"),D=u("a-button"),k=u("a-form");return v(),b("div",X,[Y,j,o.value?(v(),b("div",G,I(o.value),1)):T("",!0),e(k,{ref:"formRef",model:n,style:{width:"100%"},rules:y,onSubmit:B},{default:a(()=>[e(i,{field:"username","hide-label":""},{default:a(()=>[e(p,{modelValue:n.username,"onUpdate:modelValue":t[0]||(t[0]=c=>n.username=c),placeholder:"账号:admin","allow-clear":""},{prefix:a(()=>[e(m)]),_:1},8,["modelValue"])]),_:1}),e(i,{field:"password","hide-label":""},{default:a(()=>[e(S,{modelValue:n.password,"onUpdate:modelValue":t[1]||(t[1]=c=>n.password=c),placeholder:"密码:123456","allow-clear":""},{prefix:a(()=>[e(C)]),_:1},8,["modelValue"])]),_:1}),e(i,{field:"isRead","hide-label":""},{default:a(()=>[e(A,{modelValue:n.isRemember,"onUpdate:modelValue":t[2]||(t[2]=c=>n.isRemember=c),onChange:x},{default:a(()=>[H]),_:1},8,["modelValue","onChange"])]),_:1}),e(i,{"hide-label":""},{default:a(()=>[e(D,{type:"primary","html-type":"submit",long:"",loading:z(f)},{default:a(()=>[J]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules","onSubmit"])])}}}),Z=E(K,[["__scopeId","data-v-19fb6dc8"]]);export{Z as default};
