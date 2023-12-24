import{_ as h}from"./nuxt-link.9e7928a9.js";import v from"./Icon.8a5c4173.js";import{_ as C}from"./client-only.121077cf.js";import{l as I,d as $,m as y,I as z,b as a,c as l,e,g as t,w as n,A as c,n as x,G as _,f as k,E as g,ac as N,p as M,i as j}from"./entry.b108577d.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.df58e121.js";const S=()=>I("color-mode").value,B={class:"py-5 border-b dark:border-gray-800 font-semibold"},L={class:"flex px-6 container max-w-5xl justify-between mx-auto items-baseline"},V={class:"flex items-baseline space-x-5"},H={class:"text-base sm:text-2xl font-bold"},O={class:"flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"},A=$({__name:"header",setup(s){const i=y(),o=z(()=>i.fullPath.replace("/","")),r=S();function b(f){r.preference=f}return(f,d)=>{const u=h,m=v,F=C;return a(),l("div",B,[e("div",L,[e("ul",V,[e("li",H,[t(u,{to:"/",class:x({underline:_(o)===""})},{default:n(()=>[c(" Mar's Blog ")]),_:1},8,["class"])])]),e("ul",O,[e("li",null,[t(u,{to:"/blogs",class:x({underline:_(o)==="blogs"})},{default:n(()=>[c(" Blogs ")]),_:1},8,["class"])]),e("li",null,[t(u,{to:"/categories",class:x({underline:_(o)==="categories"})},{default:n(()=>[c(" Categorieën ")]),_:1},8,["class"])]),e("li",{title:"About Me",class:x({underline:_(o)==="about"})},[t(u,{to:"/about","aria-label":"About me"},{default:n(()=>[c(" Over ")]),_:1})],2),e("li",null,[t(F,null,{fallback:n(()=>[t(m,{name:"svg-spinners:180-ring",size:"20"})]),default:n(()=>[_(r).value==="light"?(a(),l("button",{key:0,name:"light-mode",title:"Light",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:d[0]||(d[0]=w=>b("dark"))},[t(m,{name:"icon-park:moon",size:"20"})])):k("",!0),_(r).value==="dark"?(a(),l("button",{key:1,name:"dark-mode",title:"Dark",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:d[1]||(d[1]=w=>b("light"))},[t(m,{name:"noto:sun",size:"20"})])):k("",!0)]),_:1})])])])])}}}),D={},E=e("p",{class:"text-black dark:text-zinc-300 text-base py-1 font-semibold"}," Over deze site ",-1),P=e("p",{class:"py-2 dark:text-zinc-300"}," Dit is een persoonlijke blogsite gebouwd met Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Momenteel is het ingezet in Vercel. ",-1),R=[E,P];function T(s,i){return a(),l("div",null,R)}const q=p(D,[["render",T]]),G={},K=e("p",{class:"text-black dark:text-zinc-300 text-2xl py-1 font-semibold"}," Mar ",-1),W=e("p",{class:"py-2 dark:text-zinc-300"},' Hoi! Ik ben Mar "asdfsadfasdf" ',-1),J={class:"my-3 space-x-3 pb-3"};function Q(s,i){const o=v,r=h;return a(),l("div",null,[K,W,e("div",J,[t(r,{to:"https://nl.linkedin.com/in/verbeekmarjolein",target:"_blank","no-referrer":"",class:"px-3 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]","aria-label":"LinkedIn"},{default:n(()=>[t(o,{name:"fa:linkedin-square",size:"1em"})]),_:1}),t(r,{to:"https://www.instagram.com/marligtvoet/",target:"_blank","no-referrer":"",class:"px-3 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]","aria-label":"Instragram"},{default:n(()=>[t(o,{name:"fa:instagram",size:"1em"})]),_:1})])])}const U=p(G,[["render",Q]]),X={},Y={class:"flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"},Z=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"}," Snelle Links ",-1);function ee(s,i){const o=h;return a(),l("div",Y,[Z,t(o,{to:"/",class:"hover:underline"},{default:n(()=>[c(" Home ")]),_:1}),t(o,{to:"/blogs",class:"hover:underline"},{default:n(()=>[c(" Blogs ")]),_:1}),t(o,{to:"/categories",class:"hover:underline"},{default:n(()=>[c(" Categorieën ")]),_:1}),t(o,{to:"/about",class:"hover:underline"},{default:n(()=>[c(" Over ")]),_:1})])}const te=p(X,[["render",ee]]),oe={},ne=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"}," Kom in contact ",-1),se=e("p",{class:"dark:text-zinc-300"}," Ik ben altijd op zoek naar nieuwe kansen en uitdagingen. Ik heb een behoorlijke hoeveelheid kennis van psychologische uitdagingen, marketing, vloggen en het moederschap. Het lijkt mij leuk om met jou in contact te komen. ",-1),ae=e("a",{href:"mailto: mverbeek1992@gmail.com",class:"block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm"}," Verstuur Mail ",-1),ce=[ne,se,ae];function re(s,i){return a(),l("div",null,ce)}const le=p(oe,[["render",re]]),ie={class:"py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300"},_e={class:"px-6 container max-w-5xl mx-auto"},de={class:"grid grid-cols-1 md:grid-cols-3"},ue=e("div",{class:"border-t dark:border-gray-800 mt-5 text-center p-2"},[c(" © 2023 No Right is reserved. Who cares 🤷‍♂️? It's "),e("a",{href:"https://github.com/nurriyad/blog",target:"_blank",rel:"nofollow",class:"underline"},"open source"),c(" anyway. ")],-1),me=$({__name:"footer",setup(s){const i=y(),o=z(()=>i.fullPath.replace("/",""));return(r,b)=>{const f=q,d=U,u=te,m=le;return a(),l("div",ie,[e("div",_e,[e("div",de,[_(o)==="about"?(a(),g(f,{key:0})):(a(),g(d,{key:1})),t(u),t(m)]),ue])])}}});const pe={},fe=s=>(M("data-v-6b416664"),s=s(),j(),s),xe={class:"gd-container font-spacegrotesk"},be={class:"fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10"},he=fe(()=>e("div",{class:"p-9"},null,-1));function ke(s,i){const o=A,r=me;return a(),l("div",xe,[e("header",be,[t(o)]),e("main",null,[he,N(s.$slots,"default",{},void 0,!0)]),e("footer",null,[t(r)])])}const we=p(pe,[["render",ke],["__scopeId","data-v-6b416664"]]);export{we as default};
