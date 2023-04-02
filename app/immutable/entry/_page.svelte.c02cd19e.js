import{S as de,i as ve,s as pe,k as T,l as N,m as O,h as i,K as fe,n as k,b as C,D as m,J as ee,C as De,y as j,a as w,q as R,z as D,c as b,r as F,A as M,u as ae,E as Me,F as Ae,G as Ce,g as E,d as S,B as A,L as ke,M as Ie,H as Le}from"../chunks/index.26cfbc9a.js";import{F as Te,B as $e,e as Oe,g as Pe,h as xe,i as Ve,j as We,k as Ye,l as ze}from"../chunks/index.753171c8.js";function Ge(r){let e,t,l;return{c(){e=T("div"),t=T("img"),this.h()},l(f){e=N(f,"DIV",{class:!0});var a=O(e);t=N(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(i),this.h()},h(){fe(t.src,l=r[0])||k(t,"src",l),k(t,"class","h-10"),k(t,"alt","Logo"),k(e,"class","py-2 mx-4 text-white rounded-xl flex justify-center")},m(f,a){C(f,e,a),m(e,t)},p(f,[a]){a&1&&!fe(t.src,l=f[0])&&k(t,"src",l)},i:ee,o:ee,d(f){f&&i(e)}}}function He(r,e,t){let{logo:l}=e;return r.$$set=f=>{"logo"in f&&t(0,l=f.logo)},[l]}class ue extends de{constructor(e){super(),ve(this,e,He,Ge,pe,{logo:0})}}var y=(r=>(r.ADVANCED="Advanced",r.COMPETENT="Competent",r.BASIC="Basic",r.MINIMAL="Minimal",r))(y||{}),B=(r=>(r.ALWAYS="Always",r.SOMETIMES="Sometimes",r.RARELY="Rarely",r.NEVER="Never",r))(B||{});function ye(r){let e,t,l,f,a,u,c,g,v;l=new Te({props:{icon:r[1]}});const $=r[3].default,s=De($,r,r[2],null);return{c(){e=T("div"),t=T("h1"),j(l.$$.fragment),f=w(),a=T("h2"),u=R(r[0]),c=w(),g=T("div"),s&&s.c(),this.h()},l(o){e=N(o,"DIV",{class:!0});var p=O(e);t=N(p,"H1",{});var z=O(t);D(l.$$.fragment,z),z.forEach(i),f=b(p),a=N(p,"H2",{class:!0});var I=O(a);u=F(I,r[0]),I.forEach(i),c=b(p),g=N(p,"DIV",{class:!0});var P=O(g);s&&s.l(P),P.forEach(i),p.forEach(i),this.h()},h(){k(a,"class","my-8"),k(g,"class","grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-10"),k(e,"class","bg-secondary py-8 text-center rounded-xl shadow-xl")},m(o,p){C(o,e,p),m(e,t),M(l,t,null),m(e,f),m(e,a),m(a,u),m(e,c),m(e,g),s&&s.m(g,null),v=!0},p(o,[p]){const z={};p&2&&(z.icon=o[1]),l.$set(z),(!v||p&1)&&ae(u,o[0]),s&&s.p&&(!v||p&4)&&Me(s,$,o,o[2],v?Ce($,o[2],p,null):Ae(o[2]),null)},i(o){v||(E(l.$$.fragment,o),E(s,o),v=!0)},o(o){S(l.$$.fragment,o),S(s,o),v=!1},d(o){o&&i(e),A(l),s&&s.d(o)}}}function Be(r,e,t){let{$$slots:l={},$$scope:f}=e,{title:a}=e,{faIcon:u}=e;return r.$$set=c=>{"title"in c&&t(0,a=c.title),"faIcon"in c&&t(1,u=c.faIcon),"$$scope"in c&&t(2,f=c.$$scope)},[a,u,f,l]}class _e extends de{constructor(e){super(),ve(this,e,Be,ye,pe,{title:0,faIcon:1})}}function Je(r){let e,t,l,f,a,u,c,g,v,$,s,o,p,z,I,P=je(r[4])+"",x,V;return{c(){e=T("div"),t=T("img"),f=w(),a=T("h5"),u=R(r[1]),c=w(),g=T("div"),v=T("h5"),$=R(r[2]),s=w(),o=T("h5"),p=R(r[3]),z=w(),I=T("h5"),x=R(P),this.h()},l(n){e=N(n,"DIV",{class:!0});var _=O(e);t=N(_,"IMG",{src:!0,class:!0,alt:!0}),f=b(_),a=N(_,"H5",{class:!0});var L=O(a);u=F(L,r[1]),L.forEach(i),c=b(_),g=N(_,"DIV",{class:!0});var h=O(g);v=N(h,"H5",{});var W=O(v);$=F(W,r[2]),W.forEach(i),s=b(h),o=N(h,"H5",{});var H=O(o);p=F(H,r[3]),H.forEach(i),z=b(h),I=N(h,"H5",{});var G=O(I);x=F(G,P),G.forEach(i),h.forEach(i),_.forEach(i),this.h()},h(){fe(t.src,l=r[0])||k(t,"src",l),k(t,"class","w-1/3 h-16"),k(t,"alt","Logo"),k(a,"class","w-1/3 mx-4 text-center"),k(g,"class","w-1/3 text-right"),k(e,"class",V=r[5].class+" p-4 flex justify-center items-center rounded-lg")},m(n,_){C(n,e,_),m(e,t),m(e,f),m(e,a),m(a,u),m(e,c),m(e,g),m(g,v),m(v,$),m(g,s),m(g,o),m(o,p),m(g,z),m(g,I),m(I,x)},p(n,[_]){_&1&&!fe(t.src,l=n[0])&&k(t,"src",l),_&2&&ae(u,n[1]),_&4&&ae($,n[2]),_&8&&ae(p,n[3]),_&16&&P!==(P=je(n[4])+"")&&ae(x,P),_&32&&V!==(V=n[5].class+" p-4 flex justify-center items-center rounded-lg")&&k(e,"class",V)},i:ee,o:ee,d(n){n&&i(e)}}}function je(r){const e=new Date(Date.now()),t=new Date(+new Date-+r).getFullYear()-1970;if(t>0)return`+${t} year/s`;const l=Re(r,e);return l>1?`${l} months`:"Just Starting"}function Re(r,e){let t;return t=(e.getFullYear()-r.getFullYear())*12,t-=r.getMonth(),t+=e.getMonth(),t}function Fe(r,e,t){let{logo:l}=e,{text:f}=e,{usage:a}=e,{level:u}=e,{date:c}=e;return r.$$set=g=>{t(5,e=ke(ke({},e),Ie(g))),"logo"in g&&t(0,l=g.logo),"text"in g&&t(1,f=g.text),"usage"in g&&t(2,a=g.usage),"level"in g&&t(3,u=g.level),"date"in g&&t(4,c=g.date)},e=Ie(e),[l,f,a,u,c,e]}class J extends de{constructor(e){super(),ve(this,e,Fe,Je,pe,{logo:0,text:1,usage:2,level:3,date:4})}}var Ke={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},Ne={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function qe(r){let e;return{c(){e=R("Live Website")},l(t){e=F(t,"Live Website")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function Qe(r){let e;return{c(){e=R("Github Repository")},l(t){e=F(t,"Github Repository")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function Xe(r){let e,t,l,f,a,u,c,g,v,$,s,o,p,z,I,P,x,V,n;const _=r[5].default,L=De(_,r,r[6],null);return P=new $e({props:{class:"btn-accent mb-4 sm:mb-0",faIcon:Oe,link:r[3],$$slots:{default:[qe]},$$scope:{ctx:r}}}),V=new $e({props:{class:"btn-accent",faIcon:Ne,link:r[4],$$slots:{default:[Qe]},$$scope:{ctx:r}}}),{c(){e=T("div"),t=T("img"),f=w(),a=T("div"),u=T("div"),c=T("h3"),g=R(r[1]),v=w(),$=T("h4"),s=R(r[2]),o=w(),p=T("div"),L&&L.c(),z=w(),I=T("div"),j(P.$$.fragment),x=w(),j(V.$$.fragment),this.h()},l(h){e=N(h,"DIV",{class:!0});var W=O(e);t=N(W,"IMG",{src:!0,alt:!0}),f=b(W),a=N(W,"DIV",{class:!0});var H=O(a);u=N(H,"DIV",{class:!0});var G=O(u);c=N(G,"H3",{});var K=O(c);g=F(K,r[1]),K.forEach(i),v=b(G),$=N(G,"H4",{class:!0});var re=O($);s=F(re,r[2]),re.forEach(i),o=b(G),p=N(G,"DIV",{class:!0});var q=O(p);L&&L.l(q),q.forEach(i),z=b(G),I=N(G,"DIV",{class:!0});var U=O(I);D(P.$$.fragment,U),x=b(U),D(V.$$.fragment,U),U.forEach(i),G.forEach(i),H.forEach(i),W.forEach(i),this.h()},h(){fe(t.src,l=r[0])||k(t,"src",l),k(t,"alt","Project"),k($,"class","my-4"),k(p,"class","flex justify-center"),k(I,"class","flex-col justify-center my-4"),k(u,"class","text-center mt-6"),k(a,"class","flex justify-center items-center"),k(e,"class","bg-secondary grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 mx-5 sm:mx-10 rounded-xl")},m(h,W){C(h,e,W),m(e,t),m(e,f),m(e,a),m(a,u),m(u,c),m(c,g),m(u,v),m(u,$),m($,s),m(u,o),m(u,p),L&&L.m(p,null),m(u,z),m(u,I),M(P,I,null),m(I,x),M(V,I,null),n=!0},p(h,[W]){(!n||W&1&&!fe(t.src,l=h[0]))&&k(t,"src",l),(!n||W&2)&&ae(g,h[1]),(!n||W&4)&&ae(s,h[2]),L&&L.p&&(!n||W&64)&&Me(L,_,h,h[6],n?Ce(_,h[6],W,null):Ae(h[6]),null);const H={};W&8&&(H.link=h[3]),W&64&&(H.$$scope={dirty:W,ctx:h}),P.$set(H);const G={};W&16&&(G.link=h[4]),W&64&&(G.$$scope={dirty:W,ctx:h}),V.$set(G)},i(h){n||(E(L,h),E(P.$$.fragment,h),E(V.$$.fragment,h),n=!0)},o(h){S(L,h),S(P.$$.fragment,h),S(V.$$.fragment,h),n=!1},d(h){h&&i(e),L&&L.d(h),A(P),A(V)}}}function Ze(r,e,t){let{$$slots:l={},$$scope:f}=e,{image:a}=e,{name:u}=e,{description:c}=e,{live:g}=e,{github:v}=e;return r.$$set=$=>{"image"in $&&t(0,a=$.image),"name"in $&&t(1,u=$.name),"description"in $&&t(2,c=$.description),"live"in $&&t(3,g=$.live),"github"in $&&t(4,v=$.github),"$$scope"in $&&t(6,f=$.$$scope)},[a,u,c,g,v,l,f]}class Ue extends de{constructor(e){super(),ve(this,e,Ze,Xe,pe,{image:0,name:1,description:2,live:3,github:4})}}function et(r){let e;return{c(){e=R("Github")},l(t){e=F(t,"Github")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function tt(r){let e;return{c(){e=R("Steam")},l(t){e=F(t,"Steam")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function st(r){let e;return{c(){e=R("Let's Go")},l(t){e=F(t,"Let's Go")},m(t,l){C(t,e,l)},d(t){t&&i(e)}}}function nt(r){let e,t,l,f,a,u,c,g,v,$,s,o,p,z,I,P,x,V;return e=new J({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",text:"HTML",usage:B.ALWAYS,level:y.ADVANCED,date:new Date("2020")}}),l=new J({props:{class:"bg-sky-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",text:"CSS",usage:B.SOMETIMES,level:y.COMPETENT,date:new Date("2020")}}),a=new J({props:{class:"bg-pink-400",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",text:"Sass",usage:B.SOMETIMES,level:y.MINIMAL,date:new Date("August 1, 2022")}}),c=new J({props:{class:"bg-teal-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",text:"Tailwind CSS",usage:B.ALWAYS,level:y.BASIC,date:new Date("August 1, 2022")}}),v=new J({props:{class:"bg-yellow-400",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",text:"Javascript",usage:B.SOMETIMES,level:y.COMPETENT,date:new Date("2020")}}),s=new J({props:{class:"bg-blue-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",text:"Typescript",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("2021")}}),p=new J({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",text:"Svelte",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("August 1, 2022")}}),I=new J({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",text:"SvelteKit",usage:B.ALWAYS,level:y.BASIC,date:new Date("September 1, 2022")}}),x=new J({props:{class:"bg-green-600 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",text:"NodeJS",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("2020")}}),{c(){j(e.$$.fragment),t=w(),j(l.$$.fragment),f=w(),j(a.$$.fragment),u=w(),j(c.$$.fragment),g=w(),j(v.$$.fragment),$=w(),j(s.$$.fragment),o=w(),j(p.$$.fragment),z=w(),j(I.$$.fragment),P=w(),j(x.$$.fragment)},l(n){D(e.$$.fragment,n),t=b(n),D(l.$$.fragment,n),f=b(n),D(a.$$.fragment,n),u=b(n),D(c.$$.fragment,n),g=b(n),D(v.$$.fragment,n),$=b(n),D(s.$$.fragment,n),o=b(n),D(p.$$.fragment,n),z=b(n),D(I.$$.fragment,n),P=b(n),D(x.$$.fragment,n)},m(n,_){M(e,n,_),C(n,t,_),M(l,n,_),C(n,f,_),M(a,n,_),C(n,u,_),M(c,n,_),C(n,g,_),M(v,n,_),C(n,$,_),M(s,n,_),C(n,o,_),M(p,n,_),C(n,z,_),M(I,n,_),C(n,P,_),M(x,n,_),V=!0},p:ee,i(n){V||(E(e.$$.fragment,n),E(l.$$.fragment,n),E(a.$$.fragment,n),E(c.$$.fragment,n),E(v.$$.fragment,n),E(s.$$.fragment,n),E(p.$$.fragment,n),E(I.$$.fragment,n),E(x.$$.fragment,n),V=!0)},o(n){S(e.$$.fragment,n),S(l.$$.fragment,n),S(a.$$.fragment,n),S(c.$$.fragment,n),S(v.$$.fragment,n),S(s.$$.fragment,n),S(p.$$.fragment,n),S(I.$$.fragment,n),S(x.$$.fragment,n),V=!1},d(n){A(e,n),n&&i(t),A(l,n),n&&i(f),A(a,n),n&&i(u),A(c,n),n&&i(g),A(v,n),n&&i($),A(s,n),n&&i(o),A(p,n),n&&i(z),A(I,n),n&&i(P),A(x,n)}}}function lt(r){let e,t,l,f;return e=new J({props:{class:"bg-orange-400",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",text:"Java",usage:B.RARELY,level:y.COMPETENT,date:new Date("2020")}}),l=new J({props:{class:"bg-fuchsia-900",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",text:"C#",usage:B.SOMETIMES,level:y.BASIC,date:new Date("December 4, 2022")}}),{c(){j(e.$$.fragment),t=w(),j(l.$$.fragment)},l(a){D(e.$$.fragment,a),t=b(a),D(l.$$.fragment,a)},m(a,u){M(e,a,u),C(a,t,u),M(l,a,u),f=!0},p:ee,i(a){f||(E(e.$$.fragment,a),E(l.$$.fragment,a),f=!0)},o(a){S(e.$$.fragment,a),S(l.$$.fragment,a),f=!1},d(a){A(e,a),a&&i(t),A(l,a)}}}function at(r){let e,t;return e=new J({props:{class:"bg-blue-400 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",text:"MySQL",usage:B.SOMETIMES,level:y.COMPETENT,date:new Date("2021")}}),{c(){j(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,f){M(e,l,f),t=!0},p:ee,i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function rt(r){let e,t,l,f,a,u,c,g,v,$;return e=new J({props:{class:"bg-sky-700",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",text:"VSCode",usage:B.ALWAYS,level:y.ADVANCED,date:new Date("2020")}}),l=new J({props:{class:"bg-amber-500",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",text:"Git",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("2020")}}),a=new J({props:{class:"bg-gray-700",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",text:"Github",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("2020")}}),c=new J({props:{class:"bg-slate-900",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",text:"Linux",usage:B.ALWAYS,level:y.COMPETENT,date:new Date("2021")}}),v=new J({props:{class:"bg-red-400 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",text:"NPM",usage:B.SOMETIMES,level:y.COMPETENT,date:new Date("2020")}}),{c(){j(e.$$.fragment),t=w(),j(l.$$.fragment),f=w(),j(a.$$.fragment),u=w(),j(c.$$.fragment),g=w(),j(v.$$.fragment)},l(s){D(e.$$.fragment,s),t=b(s),D(l.$$.fragment,s),f=b(s),D(a.$$.fragment,s),u=b(s),D(c.$$.fragment,s),g=b(s),D(v.$$.fragment,s)},m(s,o){M(e,s,o),C(s,t,o),M(l,s,o),C(s,f,o),M(a,s,o),C(s,u,o),M(c,s,o),C(s,g,o),M(v,s,o),$=!0},p:ee,i(s){$||(E(e.$$.fragment,s),E(l.$$.fragment,s),E(a.$$.fragment,s),E(c.$$.fragment,s),E(v.$$.fragment,s),$=!0)},o(s){S(e.$$.fragment,s),S(l.$$.fragment,s),S(a.$$.fragment,s),S(c.$$.fragment,s),S(v.$$.fragment,s),$=!1},d(s){A(e,s),s&&i(t),A(l,s),s&&i(f),A(a,s),s&&i(u),A(c,s),s&&i(g),A(v,s)}}}function it(r){let e,t,l,f,a,u,c,g,v,$;return e=new ue({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}}),l=new ue({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"}}),a=new ue({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}}),c=new ue({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}}),v=new ue({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"}}),{c(){j(e.$$.fragment),t=w(),j(l.$$.fragment),f=w(),j(a.$$.fragment),u=w(),j(c.$$.fragment),g=w(),j(v.$$.fragment)},l(s){D(e.$$.fragment,s),t=b(s),D(l.$$.fragment,s),f=b(s),D(a.$$.fragment,s),u=b(s),D(c.$$.fragment,s),g=b(s),D(v.$$.fragment,s)},m(s,o){M(e,s,o),C(s,t,o),M(l,s,o),C(s,f,o),M(a,s,o),C(s,u,o),M(c,s,o),C(s,g,o),M(v,s,o),$=!0},p:ee,i(s){$||(E(e.$$.fragment,s),E(l.$$.fragment,s),E(a.$$.fragment,s),E(c.$$.fragment,s),E(v.$$.fragment,s),$=!0)},o(s){S(e.$$.fragment,s),S(l.$$.fragment,s),S(a.$$.fragment,s),S(c.$$.fragment,s),S(v.$$.fragment,s),$=!1},d(s){A(e,s),s&&i(t),A(l,s),s&&i(f),A(a,s),s&&i(u),A(c,s),s&&i(g),A(v,s)}}}function ot(r){let e,t,l,f,a,u,c,g,v,$,s,o,p,z,I,P,x,V,n,_,L,h,W,H,G,K,re,q,U,Z,ie,we,be,ce,te,he;return a=new Te({props:{icon:Pe}}),s=new $e({props:{class:"btn-accent",faIcon:Ne,link:"https://github.com/thejaviertc",$$slots:{default:[et]},$$scope:{ctx:r}}}),p=new $e({props:{class:"btn-accent",faIcon:Ke,link:"https://steamcommunity.com/id/javiertc/",$$slots:{default:[tt]},$$scope:{ctx:r}}}),I=new $e({props:{class:"btn-accent",faIcon:xe,link:"#knowledge",$$slots:{default:[st]},$$scope:{ctx:r}}}),h=new _e({props:{title:"Website Frontend",faIcon:Ve,$$slots:{default:[nt]},$$scope:{ctx:r}}}),H=new _e({props:{title:"Desktop",faIcon:We,$$slots:{default:[lt]},$$scope:{ctx:r}}}),K=new _e({props:{title:"Databases",faIcon:Ye,$$slots:{default:[at]},$$scope:{ctx:r}}}),q=new _e({props:{title:"Tools",faIcon:ze,$$slots:{default:[rt]},$$scope:{ctx:r}}}),te=new Ue({props:{image:"https://repository-images.githubusercontent.com/289227137/bab81a80-7abc-11eb-8c63-37afc324cb8b",name:"Steam Workshop Stats",description:`See the views, subscriptions and favs of your Steam
			Workshop addons!`,live:"https://thejaviertc.github.io/steam-workshop-stats/",github:"https://github.com/thejaviertc/steam-workshop-stats",$$slots:{default:[it]},$$scope:{ctx:r}}}),{c(){e=w(),t=T("section"),l=T("h1"),f=R("Javiertc "),j(a.$$.fragment),u=w(),c=T("h2"),g=R("Software Engineering Student"),v=w(),$=T("div"),j(s.$$.fragment),o=w(),j(p.$$.fragment),z=w(),j(I.$$.fragment),P=w(),x=T("section"),V=T("h2"),n=R("Knowledge"),_=w(),L=T("div"),j(h.$$.fragment),W=w(),j(H.$$.fragment),G=w(),j(K.$$.fragment),re=w(),j(q.$$.fragment),U=w(),Z=T("section"),ie=T("h2"),we=R("Current Projects"),be=w(),ce=T("div"),j(te.$$.fragment),this.h()},l(d){Le("svelte-1d52lkg",document.head).forEach(i),e=b(d),t=N(d,"SECTION",{class:!0});var Q=O(t);l=N(Q,"H1",{});var oe=O(l);f=F(oe,"Javiertc "),D(a.$$.fragment,oe),oe.forEach(i),u=b(Q),c=N(Q,"H2",{class:!0});var ge=O(c);g=F(ge,"Software Engineering Student"),ge.forEach(i),v=b(Q),$=N(Q,"DIV",{class:!0});var se=O($);D(s.$$.fragment,se),o=b(se),D(p.$$.fragment,se),se.forEach(i),z=b(Q),D(I.$$.fragment,Q),Q.forEach(i),P=b(d),x=N(d,"SECTION",{id:!0,class:!0});var ne=O(x);V=N(ne,"H2",{class:!0});var me=O(V);n=F(me,"Knowledge"),me.forEach(i),_=b(ne),L=N(ne,"DIV",{class:!0});var X=O(L);D(h.$$.fragment,X),W=b(X),D(H.$$.fragment,X),G=b(X),D(K.$$.fragment,X),re=b(X),D(q.$$.fragment,X),X.forEach(i),ne.forEach(i),U=b(d),Z=N(d,"SECTION",{id:!0,class:!0});var le=O(Z);ie=N(le,"H2",{class:!0});var Ee=O(ie);we=F(Ee,"Current Projects"),Ee.forEach(i),be=b(le),ce=N(le,"DIV",{});var Se=O(ce);D(te.$$.fragment,Se),Se.forEach(i),le.forEach(i),this.h()},h(){document.title="Javiertc's Portfolio",k(c,"class","my-4"),k($,"class","my-6"),k(t,"class","min-h-screen flex flex-col justify-center items-center text-center"),k(V,"class","pb-14 text-center"),k(L,"class","grid grid-cols-1 xl:grid-cols-2 gap-10 mx-5 sm:mx-10"),k(x,"id","knowledge"),k(x,"class","py-16"),k(ie,"class","pb-14 text-center"),k(Z,"id","projects"),k(Z,"class","pb-16")},m(d,Y){C(d,e,Y),C(d,t,Y),m(t,l),m(l,f),M(a,l,null),m(t,u),m(t,c),m(c,g),m(t,v),m(t,$),M(s,$,null),m($,o),M(p,$,null),m(t,z),M(I,t,null),C(d,P,Y),C(d,x,Y),m(x,V),m(V,n),m(x,_),m(x,L),M(h,L,null),m(L,W),M(H,L,null),m(L,G),M(K,L,null),m(L,re),M(q,L,null),C(d,U,Y),C(d,Z,Y),m(Z,ie),m(ie,we),m(Z,be),m(Z,ce),M(te,ce,null),he=!0},p(d,[Y]){const Q={};Y&1&&(Q.$$scope={dirty:Y,ctx:d}),s.$set(Q);const oe={};Y&1&&(oe.$$scope={dirty:Y,ctx:d}),p.$set(oe);const ge={};Y&1&&(ge.$$scope={dirty:Y,ctx:d}),I.$set(ge);const se={};Y&1&&(se.$$scope={dirty:Y,ctx:d}),h.$set(se);const ne={};Y&1&&(ne.$$scope={dirty:Y,ctx:d}),H.$set(ne);const me={};Y&1&&(me.$$scope={dirty:Y,ctx:d}),K.$set(me);const X={};Y&1&&(X.$$scope={dirty:Y,ctx:d}),q.$set(X);const le={};Y&1&&(le.$$scope={dirty:Y,ctx:d}),te.$set(le)},i(d){he||(E(a.$$.fragment,d),E(s.$$.fragment,d),E(p.$$.fragment,d),E(I.$$.fragment,d),E(h.$$.fragment,d),E(H.$$.fragment,d),E(K.$$.fragment,d),E(q.$$.fragment,d),E(te.$$.fragment,d),he=!0)},o(d){S(a.$$.fragment,d),S(s.$$.fragment,d),S(p.$$.fragment,d),S(I.$$.fragment,d),S(h.$$.fragment,d),S(H.$$.fragment,d),S(K.$$.fragment,d),S(q.$$.fragment,d),S(te.$$.fragment,d),he=!1},d(d){d&&i(e),d&&i(t),A(a),A(s),A(p),A(I),d&&i(P),d&&i(x),A(h),A(H),A(K),A(q),d&&i(U),d&&i(Z),A(te)}}}class gt extends de{constructor(e){super(),ve(this,e,null,ot,pe,{})}}export{gt as default};
