(function(){"use strict";var t={206:function(t,e,n){var a=n(963),i=n(252);const o={id:"main"},r={class:"info-pages"},s={class:"navbutton-container"},c={key:0};function l(t,e,n,a,l,d){const u=(0,i.up)("HeaderComponent"),f=(0,i.up)("GreetingPage"),p=(0,i.up)("NavButton"),v=(0,i.up)("FooterComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i.Wm)(u,{id:"header"}),(0,i.Wm)(f,{id:"greeting"}),(0,i._)("div",r,[(0,i._)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.buttons,(t=>((0,i.wg)(),(0,i.j4)(p,{key:t.label,label:t.label,section:t.section,"is-active":t.section===l.activeSection,onClick:e=>d.activateSection(t.section),class:"nav-btn"},null,8,["label","section","is-active","onClick"])))),128))]),l.activeSection?((0,i.wg)(),(0,i.iD)("div",c,[((0,i.wg)(),(0,i.j4)((0,i.LL)(l.activeSection),{class:"info-page"}))])):(0,i.kq)("",!0)])]),(0,i.Wm)(v,{id:"footer"})],64)}var d=n.p+"img/black.06c37dae.png";const u={class:"header-container"},f=(0,i.uE)('<div class="header-content-container" data-v-4462f5fa><div class="header-left" data-v-4462f5fa><a href="/" data-v-4462f5fa><img src="'+d+'" alt="logo" class="header-logo" data-v-4462f5fa></a><div class="header-contact-container" data-v-4462f5fa><a href="mailto:yufanbruce@gmail.com" class="header-contact" target="_blank" data-v-4462f5fa>Email</a><a href="https://www.linkedin.com/in/yufanbruce/" class="header-contact" target="_blank" data-v-4462f5fa>LinkedIn</a><a href="https://github.com/iamyufan" class="header-contact" target="_blank" data-v-4462f5fa>GitHub</a></div></div></div>',1),p=[f];function v(t,e){return(0,i.wg)(),(0,i.iD)("div",u,p)}var m=n(744);const g={},h=(0,m.Z)(g,[["render",v],["__scopeId","data-v-4462f5fa"]]);var b=h,k=n(577);const w={class:"nav-btn-label"};function y(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("button",{class:(0,k.C_)([{active:n.isActive}]),onClick:e[0]||(e[0]=e=>t.$emit("click",n.section))},[(0,i._)("h3",w,(0,k.zw)(n.label),1)],2)}var _={props:{label:{type:String,required:!0},section:{type:String,required:!0},isActive:{type:Boolean,required:!0}}};const D=(0,m.Z)(_,[["render",y],["__scopeId","data-v-7b5e4a90"]]);var S=D;const C=t=>((0,i.dD)("data-v-798d1870"),t=t(),(0,i.Cn)(),t),W={class:"footer-container"},P=C((()=>(0,i._)("div",{id:"copyright"},[(0,i.Uk)("© 2022-2023 "),(0,i._)("a",{href:"http://yufanbruce.com",target:"_blank"},"YufanBruce.com")],-1))),I=[P];function M(t,e){return(0,i.wg)(),(0,i.iD)("div",W,I)}const j={},B=(0,m.Z)(j,[["render",M],["__scopeId","data-v-798d1870"]]);var A=B,z=n.p+"img/profile.4f2a7fe9.png";const N={class:"greeting-container"},L=(0,i.uE)('<div class="top-container" data-v-399ffd82><div class="text-container" data-v-399ffd82><h1 data-v-399ffd82>Yufan Zhang is an aspiring software developer and product designer<a data-v-399ffd82>.</a></h1><div class="text-subtitle" data-v-399ffd82><p data-v-399ffd82>Located at <a href="https://goo.gl/maps/jHgjnAhw4pRtGFz17" target="_blank" data-v-399ffd82>New York City</a></p></div></div><div class="img-container" data-v-399ffd82><img src="'+z+'" alt="profile" data-v-399ffd82></div></div><hr style="height:1px;background-color:rgba(18, 18, 18, 0.7);border:none;margin:0rem 0;" data-v-399ffd82><div class="bio-container" data-v-399ffd82><p data-v-399ffd82> I recently graduated from the Duke University-<a href="https://dukekunshan.edu.cn/" target="_blank" data-v-399ffd82>Duke Kunshan University</a> dual degree program, holding a B.S. in Data Science. While pursuing an M.S. in Information Systems (Connective Media) at <a href="https://www.tech.cornell.edu/" target="_blank" data-v-399ffd82>Cornell Tech</a>, I am actively seeking opportunities to contribute my skills and knowledge in building intelligent systems that augment human creativity.</p></div>',3),E=[L];function F(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",N,E)}var T=n.p+"assets/resume.a88781cd.pdf",Z={computed:{resumePath(){return T}}};const O=(0,m.Z)(Z,[["render",F],["__scopeId","data-v-399ffd82"]]);var x=O;const G=t=>((0,i.dD)("data-v-806c3074"),t=t(),(0,i.Cn)(),t),U={class:"about-container"},Y={id:"first-container"},H=G((()=>(0,i._)("h2",null,"Education",-1))),R=G((()=>(0,i._)("h2",null,"Publications",-1))),q=G((()=>(0,i._)("h2",null,"Awards & Honors",-1))),K={id:"first-container"},J=G((()=>(0,i._)("h2",null,"Professional",-1))),Q=G((()=>(0,i._)("h2",null,"Skill Set",-1)));function V(t,e,n,a,o,r){const s=(0,i.up)("DetailItem"),c=(0,i.up)("DetailSection");return(0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("div",Y,[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[H,(0,i.Wm)(s,{title:"Cornell Tech, Cornell University",subtitle:"2023.09 - 2025.05",description:"M.S. in Information Systems with a Concentration in Connective Media"}),(0,i.Wm)(s,{title:"Duke Kunshan University, Duke University",subtitle:"2019.08 - 2023.05",description:"B.S. in Data Science"})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[R,(0,i.Wm)(s,{title:"Blockchain Network Analysis: A Comparative Studies of Decentralized Banks",subtitle:"SAI Computing Conference 2023",description:"Yufan Zhang, Zichao Chen, Yutong Sun, Yulin Liu*, Luyao Zhang*",link:"https://doi.org/10.48550/arXiv.2212.05632"}),(0,i.Wm)(s,{title:"MF-Net: A Novel Few-Shot Stylized Multilingual Font Generation Method",subtitle:"ACM Multimedia 2022",description:"Yufan Zhang, Junkai Man, Peng Sun*",link:"https://doi.org/10.1145/3503161.3548414"})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[q,(0,i.Wm)(s,{title:"Dean's Lists, Duke Kunshan University",description:"2021 Spring Term, 2022 Spring Term, 2022 Fall Term"}),(0,i.Wm)(s,{title:"COMAP's Mathematical Contest in Modeling (MCM) 2021",description:"Meritorious Winner"}),(0,i.Wm)(s,{title:"L’Oréal Brandstorm 2021",description:"Top 100 Team (China Mainland)"})])),_:1})]),(0,i._)("div",K,[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[J,(0,i.Wm)(s,{title:"eBay Inc.",subtitle:"2023.03 - 2023.06",description:"Product Management Intern, Cloud Data & Storage (CDS)",link:"https://ebay.com/"}),(0,i.Wm)(s,{title:"Gallinula",subtitle:"2023.02 - 2023.05",description:"Full-Stack Developer & UI/UX Designer",link:"https://gallinula.com/"}),(0,i.Wm)(s,{title:"SciEcon CIC, NPO",subtitle:"2021.02 - 2023.01",description:"Research Data Engineer & Chair of Innovation and Creativity, Inaugural E-Board",link:"https://www.sciecon.org/"})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[Q,(0,i.Wm)(s,{title:"Programming Languages",description:"Python, Java, C++, JavaScript, SQL"}),(0,i.Wm)(s,{title:"Web Development",description:"MERN (MongoDB, Express.js, React.js, Node.js), Vue.js, Django, Spring Boot, MyBatis"}),(0,i.Wm)(s,{title:"Database Management",description:"MySQL, PostgreSQL, MongoDB, Redis"}),(0,i.Wm)(s,{title:"Big Data & Cloud Computing",description:"Flink, Kafka, Spark, ElasticSearch"}),(0,i.Wm)(s,{title:"Machine Learning",description:"PyTorch, Scikit-Learn, XGBoost"}),(0,i.Wm)(s,{title:"Data Analysis",description:"Pandas, NumPy, Visualization (Plotly, Tableau)"})])),_:1})])])}function X(t,e){return(0,i.wg)(),(0,i.iD)("ul",null,[(0,i.WI)(t.$slots,"default")])}const $={},tt=(0,m.Z)($,[["render",X]]);var et=tt;const nt=t=>((0,i.dD)("data-v-3c99d15a"),t=t(),(0,i.Cn)(),t),at={class:"hover-section"},it=["href"],ot=nt((()=>(0,i._)("i",{class:"fa-solid fa-link",style:{"font-size":"1rem"}},null,-1))),rt={key:1,class:"details-title"},st={class:"details-subtitle"},ct={class:"details-description"},lt=nt((()=>(0,i._)("hr",{style:{height:"1px",width:"100%","background-color":"rgba(18, 18, 18, 0.7)",border:"none",margin:"1.3rem 0"}},null,-1)));function dt(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("section",at,[n.link?((0,i.wg)(),(0,i.iD)("a",{key:0,href:n.link,class:"details-title",target:"_blank"},[(0,i.Uk)((0,k.zw)(n.title)+" ",1),ot],8,it)):((0,i.wg)(),(0,i.iD)("div",rt,(0,k.zw)(n.title),1)),(0,i._)("div",st,(0,k.zw)(n.subtitle),1),(0,i._)("div",ct,(0,k.zw)(n.description),1),lt])}var ut={props:{title:String,subtitle:String,description:String,link:String}};const ft=(0,m.Z)(ut,[["render",dt],["__scopeId","data-v-3c99d15a"]]);var pt=ft,vt={components:{DetailItem:pt,DetailSection:et}};const mt=(0,m.Z)(vt,[["render",V],["__scopeId","data-v-806c3074"]]);var gt=mt;const ht=t=>((0,i.dD)("data-v-6ddc68ec"),t=t(),(0,i.Cn)(),t),bt={class:"project-container"},kt=ht((()=>(0,i._)("h2",null,"Projects",-1)));var wt={__name:"ProjectPage",setup(t){return(t,e)=>((0,i.wg)(),(0,i.iD)("div",bt,[(0,i.Wm)(et,null,{default:(0,i.w5)((()=>[kt,(0,i.Wm)(pt,{title:"IntelliResume | ChatGPT-powered resume building chatbot for job seekers",subtitle:"[Development in progress]",description:"Full Stack Development & Product Design"}),(0,i.Wm)(pt,{title:"CosmicAPI | The ultimate API management system for developers",subtitle:"[Development in progress]",description:"Full Stack Development & Product Design"}),(0,i.Wm)(pt,{title:"BNS | Research framework for comparative studies of decentralized banks",subtitle:"2022",description:"Blockchain Data Analysis & Social Network Analysis",link:"https://brucez.notion.site/BNS-9cdd0e26d8484c7e97b1052284bd9e87?pvs=4"}),(0,i.Wm)(pt,{title:"MF-Net | GAN-based solution for generating multilingual stylized fonts",subtitle:"2022",description:"Deep Learning Research",link:"https://brucez.notion.site/MF-Net-d284612f2be94e6b99afdb3d6517870d?pvs=4"}),(0,i.Wm)(pt,{title:"CryptoPunks Ethics Dashboard | Exploratory visualization of inequality in the NFT market",subtitle:"2022",description:"Blockchain Data Analysis & Data Visualization",link:"https://brucez.notion.site/CryptoPunks-Ethics-Dashboard-a13d15e392be451f97299aee2b02fe6a?pvs=4"})])),_:1})]))}};const yt=(0,m.Z)(wt,[["__scopeId","data-v-6ddc68ec"]]);var _t=yt;const Dt=t=>((0,i.dD)("data-v-3adcc57c"),t=t(),(0,i.Cn)(),t),St={class:"contact-container"},Ct=Dt((()=>(0,i._)("h2",null,"Email",-1))),Wt=Dt((()=>(0,i._)("h2",null,"LinkedIn",-1))),Pt=Dt((()=>(0,i._)("h2",null,"GitHub",-1))),It=Dt((()=>(0,i._)("h2",null,"Mobile",-1))),Mt=Dt((()=>(0,i._)("h2",null,"Instagram",-1))),jt=Dt((()=>(0,i._)("h2",null,"Threads",-1)));var Bt={__name:"ContactPage",setup(t){return(t,e)=>((0,i.wg)(),(0,i.iD)("div",St,[(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[Ct,(0,i.Wm)(pt,{description:"yufanbruce@gmail.com",link:"mailto:yufanbruce@gmail.com"})])),_:1}),(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[Wt,(0,i.Wm)(pt,{description:"linkedin.com/in/yufanbruce",link:"https://www.linkedin.com/in/yufanbruce/"})])),_:1}),(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[Pt,(0,i.Wm)(pt,{description:"github.com/iamyufan",link:"http://www.github.com/iamyufan"})])),_:1}),(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[It,(0,i.Wm)(pt,{description:"+1 (646) 453-0913",link:"tel:+1 6464530913"})])),_:1}),(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[Mt,(0,i.Wm)(pt,{description:"instagram.com/yufanbruce",link:"https://www.instagram.com/yufanbruce/"})])),_:1}),(0,i.Wm)(et,{class:"contact-section"},{default:(0,i.w5)((()=>[jt,(0,i.Wm)(pt,{description:"threads.net/@yufanbruce",link:"https://www.threads.net/@yufanbruce"})])),_:1})]))}};const At=(0,m.Z)(Bt,[["__scopeId","data-v-3adcc57c"]]);var zt=At,Nt={components:{HeaderComponent:b,NavButton:S,FooterComponent:A,GreetingPage:x,AboutPage:gt,ProjectPage:_t,ContactPage:zt},data(){return{activeSection:"AboutPage",buttons:[{label:"About",section:"AboutPage"},{label:"Projects",section:"ProjectPage"},{label:"Contacts",section:"ContactPage"}],activeButton:null}},methods:{activateSection(t){this.activeSection=t}}};const Lt=(0,m.Z)(Nt,[["render",l]]);var Et=Lt;(0,a.ri)(Et).mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],o=t[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<r&&(r=o));if(s){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,i,o]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],s=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(e&&e(a);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self["webpackChunkyufan_site"]=self["webpackChunkyufan_site"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(206)}));a=n.O(a)})();
//# sourceMappingURL=app.28cade29.js.map