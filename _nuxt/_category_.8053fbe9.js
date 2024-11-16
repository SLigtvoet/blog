import{d as u,s as h,I as l,b as r,c as m,e as c,t as k,G as d,D as C,A,g as B,F as $,C as w,E as _,f as N}from"./entry.2ed2e342.js";import{m as D}from"./helper.0f331916.js";import{_ as I,a as E}from"./empty.029e8320.js";import{u as F}from"./asyncData.1b99bda8.js";import{q as V}from"./query.be51cf8f.js";import"./nuxt-img.05f2eff3.js";import"./tag.ce0cd4f3.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./arrow.716c511c.js";import"./nuxt-link.d2b5bef9.js";import"./preview.00ce1112.js";const q={class:"container mx-auto"},R={class:"p-6 my-4 mx-3 rounded-md bg-gray-200 dark:bg-slate-900"},T={class:"text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"},z=u({__name:"topic",setup(y){const n=h(),i=l(()=>{const s=n.params.category||"";let a="";return Array.isArray(s)?a=s.at(0)||"":a=s,D(a)});return(s,a)=>(r(),m("div",q,[c("div",R,[c("h1",T," #"+k(d(i)),1)])]))}}),G={class:"container max-w-5xl mx-auto text-zinc-600"},H={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},W=u({__name:"[category]",async setup(y){let n,i;const s=h(),a=l(()=>{const o=s.params.category||"";let t="";return Array.isArray(o)?t=o.at(0)||"":t=o,t}),{data:g}=([n,i]=C(()=>F(`category-data-${a.value}`,()=>V("/blogs").where({tags:{$contains:a.value}}).find())),n=await n,i(),n),f=l(()=>{var o;return(o=g.value)==null?void 0:o.map(t=>({path:t._path,title:t.title||"no-title available",description:t.description||"no-description available",image:t.image||"/nuxt-blog/no-image_cyyits.png",alt:t.alt||"no alter data available",ogImage:t.ogImage||"/nuxt-blog/no-image_cyyits.png",date:t.date||"not-date-available",tags:t.tags||[],published:t.published||!1}))});return A({title:a.value,meta:[{name:"description",content:`You will find all the ${a.value} related post here`}],titleTemplate:"Riyad's Blog - %s"}),(o,t)=>{var p;const x=z,b=I,v=E;return r(),m("main",G,[B(x),c("div",H,[(r(!0),m($,null,w(d(f),e=>(r(),_(b,{key:e.title,path:e.path,title:e.title,date:e.date,description:e.description,image:e.image,alt:e.alt,"og-image":e.ogImage,tags:e.tags,published:e.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),((p=d(g))==null?void 0:p.length)===0?(r(),_(v,{key:0})):N("",!0)])])}}});export{W as default};