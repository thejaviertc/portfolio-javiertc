import{s as me,f as oe,n as ee,c as De,u as Ce,g as je,d as ke,h as ve,i as he}from"../chunks/scheduler.d478c70b.js";import{S as ue,i as de,g as T,h as x,j as y,f,k as C,a as M,x as u,r as R,s as E,m as W,u as I,c as b,n as q,v as S,o as ae,d as j,t as k,w as N,y as Se,z as _e}from"../chunks/index.73d1fdac.js";import{F as Re,B as ge,e as Ne,g as Me,h as Te,i as xe,j as Ae,k as Le}from"../chunks/index.0707a9c1.js";function Ve(a){let e,t,l;return{c(){e=T("div"),t=T("img"),this.h()},l(m){e=x(m,"DIV",{class:!0});var r=y(e);t=x(r,"IMG",{src:!0,class:!0,alt:!0}),r.forEach(f),this.h()},h(){oe(t.src,l=a[0])||C(t,"src",l),C(t,"class","h-10"),C(t,"alt","Logo"),C(e,"class","py-2 mx-4 text-white rounded-xl flex justify-center")},m(m,r){M(m,e,r),u(e,t)},p(m,[r]){r&1&&!oe(t.src,l=m[0])&&C(t,"src",l)},i:ee,o:ee,d(m){m&&f(e)}}}function Ye(a,e,t){let{logo:l}=e;return a.$$set=m=>{"logo"in m&&t(0,l=m.logo)},[l]}class re extends ue{constructor(e){super(),de(this,e,Ye,Ve,me,{logo:0})}}function ze(a){let e,t,l,m,r,d,o,g,v,c;l=new Re({props:{icon:a[1]}});const i=a[4].default,$=De(i,a,a[3],null);return{c(){e=T("div"),t=T("h1"),R(l.$$.fragment),m=E(),r=T("h2"),d=W(a[0]),o=E(),g=T("div"),$&&$.c(),this.h()},l(s){e=x(s,"DIV",{class:!0});var h=y(e);t=x(h,"H1",{});var D=y(t);I(l.$$.fragment,D),D.forEach(f),m=b(h),r=x(h,"H2",{class:!0});var L=y(r);d=q(L,a[0]),L.forEach(f),o=b(h),g=x(h,"DIV",{class:!0});var A=y(g);$&&$.l(A),A.forEach(f),h.forEach(f),this.h()},h(){C(r,"class","my-8"),C(g,"class","grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-10"),C(e,"class",v=a[2].class+" bg-secondary py-8 text-center rounded-xl shadow-xl")},m(s,h){M(s,e,h),u(e,t),S(l,t,null),u(e,m),u(e,r),u(r,d),u(e,o),u(e,g),$&&$.m(g,null),c=!0},p(s,[h]){const D={};h&2&&(D.icon=s[1]),l.$set(D),(!c||h&1)&&ae(d,s[0]),$&&$.p&&(!c||h&8)&&Ce($,i,s,s[3],c?ke(i,s[3],h,null):je(s[3]),null),(!c||h&4&&v!==(v=s[2].class+" bg-secondary py-8 text-center rounded-xl shadow-xl"))&&C(e,"class",v)},i(s){c||(j(l.$$.fragment,s),j($,s),c=!0)},o(s){k(l.$$.fragment,s),k($,s),c=!1},d(s){s&&f(e),N(l),$&&$.d(s)}}}function ye(a,e,t){let{$$slots:l={},$$scope:m}=e,{title:r}=e,{faIcon:d}=e;return a.$$set=o=>{t(2,e=ve(ve({},e),he(o))),"title"in o&&t(0,r=o.title),"faIcon"in o&&t(1,d=o.faIcon),"$$scope"in o&&t(3,m=o.$$scope)},e=he(e),[r,d,e,m,l]}class we extends ue{constructor(e){super(),de(this,e,ye,ze,me,{title:0,faIcon:1})}}function Ge(a){let e,t,l,m,r,d,o,g,v,c,i,$,s,h,D,L=be(a[4])+"",A,Y;return{c(){e=T("div"),t=T("img"),m=E(),r=T("h5"),d=W(a[1]),o=E(),g=T("div"),v=T("h5"),c=W(a[2]),i=E(),$=T("h5"),s=W(a[3]),h=E(),D=T("h5"),A=W(L),this.h()},l(n){e=x(n,"DIV",{class:!0});var _=y(e);t=x(_,"IMG",{src:!0,class:!0,alt:!0}),m=b(_),r=x(_,"H5",{class:!0});var V=y(r);d=q(V,a[1]),V.forEach(f),o=b(_),g=x(_,"DIV",{class:!0});var p=y(g);v=x(p,"H5",{});var z=y(v);c=q(z,a[2]),z.forEach(f),i=b(p),$=x(p,"H5",{});var O=y($);s=q(O,a[3]),O.forEach(f),h=b(p),D=x(p,"H5",{});var H=y(D);A=q(H,L),H.forEach(f),p.forEach(f),_.forEach(f),this.h()},h(){oe(t.src,l=a[0])||C(t,"src",l),C(t,"class","w-1/3 h-16"),C(t,"alt","Logo"),C(r,"class","w-1/3 mx-4 text-center"),C(g,"class","w-1/3 text-right"),C(e,"class",Y=a[5].class+" p-4 flex justify-center items-center rounded-lg")},m(n,_){M(n,e,_),u(e,t),u(e,m),u(e,r),u(r,d),u(e,o),u(e,g),u(g,v),u(v,c),u(g,i),u(g,$),u($,s),u(g,h),u(g,D),u(D,A)},p(n,[_]){_&1&&!oe(t.src,l=n[0])&&C(t,"src",l),_&2&&ae(d,n[1]),_&4&&ae(c,n[2]),_&8&&ae(s,n[3]),_&16&&L!==(L=be(n[4])+"")&&ae(A,L),_&32&&Y!==(Y=n[5].class+" p-4 flex justify-center items-center rounded-lg")&&C(e,"class",Y)},i:ee,o:ee,d(n){n&&f(e)}}}function be(a){const e=new Date(Date.now()),t=new Date(+new Date-+a).getFullYear()-1970;if(t>0)return`+${t} year/s`;const l=He(a,e);return l>1?`${l} months`:"Just Starting"}function He(a,e){let t;return t=(e.getFullYear()-a.getFullYear())*12,t-=a.getMonth(),t+=e.getMonth(),t}function Oe(a,e,t){let{logo:l}=e,{text:m}=e,{usage:r}=e,{level:d}=e,{date:o}=e;return a.$$set=g=>{t(5,e=ve(ve({},e),he(g))),"logo"in g&&t(0,l=g.logo),"text"in g&&t(1,m=g.text),"usage"in g&&t(2,r=g.usage),"level"in g&&t(3,d=g.level),"date"in g&&t(4,o=g.date)},e=he(e),[l,m,r,d,o,e]}class B extends ue{constructor(e){super(),de(this,e,Oe,Ge,me,{logo:0,text:1,usage:2,level:3,date:4})}}var Pe={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},Ie={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Ue(a){let e;return{c(){e=W("Live Website")},l(t){e=q(t,"Live Website")},m(t,l){M(t,e,l)},d(t){t&&f(e)}}}function Be(a){let e;return{c(){e=W("Github Repository")},l(t){e=q(t,"Github Repository")},m(t,l){M(t,e,l)},d(t){t&&f(e)}}}function Je(a){let e,t,l,m,r,d,o,g,v,c,i,$,s,h,D,L,A,Y,n;const _=a[5].default,V=De(_,a,a[6],null);return L=new ge({props:{class:"btn-accent mb-4 sm:mb-0",faIcon:Ne,link:a[3],$$slots:{default:[Ue]},$$scope:{ctx:a}}}),Y=new ge({props:{class:"btn-accent",faIcon:Ie,link:a[4],$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){e=T("div"),t=T("img"),m=E(),r=T("div"),d=T("div"),o=T("h3"),g=W(a[1]),v=E(),c=T("h4"),i=W(a[2]),$=E(),s=T("div"),V&&V.c(),h=E(),D=T("div"),R(L.$$.fragment),A=E(),R(Y.$$.fragment),this.h()},l(p){e=x(p,"DIV",{class:!0});var z=y(e);t=x(z,"IMG",{src:!0,alt:!0}),m=b(z),r=x(z,"DIV",{class:!0});var O=y(r);d=x(O,"DIV",{class:!0});var H=y(d);o=x(H,"H3",{});var K=y(o);g=q(K,a[1]),K.forEach(f),v=b(H),c=x(H,"H4",{class:!0});var te=y(c);i=q(te,a[2]),te.forEach(f),$=b(H),s=x(H,"DIV",{class:!0});var J=y(s);V&&V.l(J),J.forEach(f),h=b(H),D=x(H,"DIV",{class:!0});var F=y(D);I(L.$$.fragment,F),A=b(F),I(Y.$$.fragment,F),F.forEach(f),H.forEach(f),O.forEach(f),z.forEach(f),this.h()},h(){oe(t.src,l=a[0])||C(t,"src",l),C(t,"alt","Project"),C(c,"class","my-4"),C(s,"class","flex justify-center"),C(D,"class","flex-col justify-center my-4"),C(d,"class","text-center mt-6"),C(r,"class","flex justify-center items-center"),C(e,"class","bg-secondary grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 mx-5 sm:mx-10 rounded-xl")},m(p,z){M(p,e,z),u(e,t),u(e,m),u(e,r),u(r,d),u(d,o),u(o,g),u(d,v),u(d,c),u(c,i),u(d,$),u(d,s),V&&V.m(s,null),u(d,h),u(d,D),S(L,D,null),u(D,A),S(Y,D,null),n=!0},p(p,[z]){(!n||z&1&&!oe(t.src,l=p[0]))&&C(t,"src",l),(!n||z&2)&&ae(g,p[1]),(!n||z&4)&&ae(i,p[2]),V&&V.p&&(!n||z&64)&&Ce(V,_,p,p[6],n?ke(_,p[6],z,null):je(p[6]),null);const O={};z&8&&(O.link=p[3]),z&64&&(O.$$scope={dirty:z,ctx:p}),L.$set(O);const H={};z&16&&(H.link=p[4]),z&64&&(H.$$scope={dirty:z,ctx:p}),Y.$set(H)},i(p){n||(j(V,p),j(L.$$.fragment,p),j(Y.$$.fragment,p),n=!0)},o(p){k(V,p),k(L.$$.fragment,p),k(Y.$$.fragment,p),n=!1},d(p){p&&f(e),V&&V.d(p),N(L),N(Y)}}}function We(a,e,t){let{$$slots:l={},$$scope:m}=e,{image:r}=e,{name:d}=e,{description:o}=e,{live:g}=e,{github:v}=e;return a.$$set=c=>{"image"in c&&t(0,r=c.image),"name"in c&&t(1,d=c.name),"description"in c&&t(2,o=c.description),"live"in c&&t(3,g=c.live),"github"in c&&t(4,v=c.github),"$$scope"in c&&t(6,m=c.$$scope)},[r,d,o,g,v,l,m]}class qe extends ue{constructor(e){super(),de(this,e,We,Je,me,{image:0,name:1,description:2,live:3,github:4})}}var P=(a=>(a.ADVANCED="Advanced",a.COMPETENT="Competent",a.BASIC="Basic",a.MINIMAL="Minimal",a))(P||{}),U=(a=>(a.RECURRENTLY="Recurrently",a.SOMETIMES="Sometimes",a.RARELY="Rarely",a))(U||{});function Fe(a){let e;return{c(){e=W("Github")},l(t){e=q(t,"Github")},m(t,l){M(t,e,l)},d(t){t&&f(e)}}}function Ke(a){let e;return{c(){e=W("Steam")},l(t){e=q(t,"Steam")},m(t,l){M(t,e,l)},d(t){t&&f(e)}}}function Qe(a){let e;return{c(){e=W("Let's Go")},l(t){e=q(t,"Let's Go")},m(t,l){M(t,e,l)},d(t){t&&f(e)}}}function Xe(a){let e,t,l,m,r,d,o,g,v,c,i,$,s,h,D,L,A,Y;return e=new B({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",text:"HTML",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2020")}}),l=new B({props:{class:"bg-sky-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",text:"CSS",usage:U.RARELY,level:P.COMPETENT,date:new Date("2020")}}),r=new B({props:{class:"bg-pink-400",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",text:"Sass",usage:U.SOMETIMES,level:P.BASIC,date:new Date("August 1, 2022")}}),o=new B({props:{class:"bg-teal-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",text:"Tailwind CSS",usage:U.RECURRENTLY,level:P.BASIC,date:new Date("August 1, 2022")}}),v=new B({props:{class:"bg-yellow-400",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",text:"Javascript",usage:U.SOMETIMES,level:P.ADVANCED,date:new Date("2020")}}),i=new B({props:{class:"bg-blue-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",text:"Typescript",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2021")}}),s=new B({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",text:"Svelte",usage:U.RECURRENTLY,level:P.COMPETENT,date:new Date("August 1, 2022")}}),D=new B({props:{class:"bg-orange-600",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",text:"SvelteKit",usage:U.RECURRENTLY,level:P.BASIC,date:new Date("September 1, 2022")}}),A=new B({props:{class:"bg-green-600 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",text:"NodeJS",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2020")}}),{c(){R(e.$$.fragment),t=E(),R(l.$$.fragment),m=E(),R(r.$$.fragment),d=E(),R(o.$$.fragment),g=E(),R(v.$$.fragment),c=E(),R(i.$$.fragment),$=E(),R(s.$$.fragment),h=E(),R(D.$$.fragment),L=E(),R(A.$$.fragment)},l(n){I(e.$$.fragment,n),t=b(n),I(l.$$.fragment,n),m=b(n),I(r.$$.fragment,n),d=b(n),I(o.$$.fragment,n),g=b(n),I(v.$$.fragment,n),c=b(n),I(i.$$.fragment,n),$=b(n),I(s.$$.fragment,n),h=b(n),I(D.$$.fragment,n),L=b(n),I(A.$$.fragment,n)},m(n,_){S(e,n,_),M(n,t,_),S(l,n,_),M(n,m,_),S(r,n,_),M(n,d,_),S(o,n,_),M(n,g,_),S(v,n,_),M(n,c,_),S(i,n,_),M(n,$,_),S(s,n,_),M(n,h,_),S(D,n,_),M(n,L,_),S(A,n,_),Y=!0},p:ee,i(n){Y||(j(e.$$.fragment,n),j(l.$$.fragment,n),j(r.$$.fragment,n),j(o.$$.fragment,n),j(v.$$.fragment,n),j(i.$$.fragment,n),j(s.$$.fragment,n),j(D.$$.fragment,n),j(A.$$.fragment,n),Y=!0)},o(n){k(e.$$.fragment,n),k(l.$$.fragment,n),k(r.$$.fragment,n),k(o.$$.fragment,n),k(v.$$.fragment,n),k(i.$$.fragment,n),k(s.$$.fragment,n),k(D.$$.fragment,n),k(A.$$.fragment,n),Y=!1},d(n){n&&(f(t),f(m),f(d),f(g),f(c),f($),f(h),f(L)),N(e,n),N(l,n),N(r,n),N(o,n),N(v,n),N(i,n),N(s,n),N(D,n),N(A,n)}}}function Ze(a){let e,t,l,m,r,d,o,g,v,c;return e=new B({props:{class:"bg-sky-700",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",text:"VSCode",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2020")}}),l=new B({props:{class:"bg-amber-500",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",text:"Git",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2020")}}),r=new B({props:{class:"bg-gray-700",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",text:"Github",usage:U.RECURRENTLY,level:P.ADVANCED,date:new Date("2020")}}),o=new B({props:{class:"bg-slate-900",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",text:"Linux",usage:U.RECURRENTLY,level:P.COMPETENT,date:new Date("2021")}}),v=new B({props:{class:"bg-red-400 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",text:"NPM",usage:U.RECURRENTLY,level:P.COMPETENT,date:new Date("2020")}}),{c(){R(e.$$.fragment),t=E(),R(l.$$.fragment),m=E(),R(r.$$.fragment),d=E(),R(o.$$.fragment),g=E(),R(v.$$.fragment)},l(i){I(e.$$.fragment,i),t=b(i),I(l.$$.fragment,i),m=b(i),I(r.$$.fragment,i),d=b(i),I(o.$$.fragment,i),g=b(i),I(v.$$.fragment,i)},m(i,$){S(e,i,$),M(i,t,$),S(l,i,$),M(i,m,$),S(r,i,$),M(i,d,$),S(o,i,$),M(i,g,$),S(v,i,$),c=!0},p:ee,i(i){c||(j(e.$$.fragment,i),j(l.$$.fragment,i),j(r.$$.fragment,i),j(o.$$.fragment,i),j(v.$$.fragment,i),c=!0)},o(i){k(e.$$.fragment,i),k(l.$$.fragment,i),k(r.$$.fragment,i),k(o.$$.fragment,i),k(v.$$.fragment,i),c=!1},d(i){i&&(f(t),f(m),f(d),f(g)),N(e,i),N(l,i),N(r,i),N(o,i),N(v,i)}}}function et(a){let e,t;return e=new B({props:{class:"bg-blue-400 md:col-span-2",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",text:"MySQL",usage:U.SOMETIMES,level:P.COMPETENT,date:new Date("2021")}}),{c(){R(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,m){S(e,l,m),t=!0},p:ee,i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function tt(a){let e,t,l,m,r,d,o,g,v,c,i,$;return e=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}}),l=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"}}),r=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}}),o=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}}),v=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"}}),i=new re({props:{logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"}}),{c(){R(e.$$.fragment),t=E(),R(l.$$.fragment),m=E(),R(r.$$.fragment),d=E(),R(o.$$.fragment),g=E(),R(v.$$.fragment),c=E(),R(i.$$.fragment)},l(s){I(e.$$.fragment,s),t=b(s),I(l.$$.fragment,s),m=b(s),I(r.$$.fragment,s),d=b(s),I(o.$$.fragment,s),g=b(s),I(v.$$.fragment,s),c=b(s),I(i.$$.fragment,s)},m(s,h){S(e,s,h),M(s,t,h),S(l,s,h),M(s,m,h),S(r,s,h),M(s,d,h),S(o,s,h),M(s,g,h),S(v,s,h),M(s,c,h),S(i,s,h),$=!0},p:ee,i(s){$||(j(e.$$.fragment,s),j(l.$$.fragment,s),j(r.$$.fragment,s),j(o.$$.fragment,s),j(v.$$.fragment,s),j(i.$$.fragment,s),$=!0)},o(s){k(e.$$.fragment,s),k(l.$$.fragment,s),k(r.$$.fragment,s),k(o.$$.fragment,s),k(v.$$.fragment,s),k(i.$$.fragment,s),$=!1},d(s){s&&(f(t),f(m),f(d),f(g),f(c)),N(e,s),N(l,s),N(r,s),N(o,s),N(v,s),N(i,s)}}}function st(a){let e,t,l,m,r,d,o,g="Software Engineering Student",v,c,i,$,s,h,D,L,A,Y,n="Knowledge",_,V,p,z,O,H,K,te,J,F,Ee="Current Projects",pe,fe,Z,$e;return r=new Re({props:{icon:Me}}),i=new ge({props:{class:"btn-accent",faIcon:Ie,link:"https://github.com/thejaviertc",$$slots:{default:[Fe]},$$scope:{ctx:a}}}),s=new ge({props:{class:"btn-accent",faIcon:Pe,link:"https://steamcommunity.com/id/javiertc/",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),D=new ge({props:{class:"btn-accent",faIcon:Te,link:"#knowledge",$$slots:{default:[Qe]},$$scope:{ctx:a}}}),p=new we({props:{title:"Web Development",faIcon:xe,$$slots:{default:[Xe]},$$scope:{ctx:a}}}),O=new we({props:{title:"Tools",faIcon:Ae,$$slots:{default:[Ze]},$$scope:{ctx:a}}}),K=new we({props:{class:"md:col-span-2",title:"Databases",faIcon:Le,$$slots:{default:[et]},$$scope:{ctx:a}}}),Z=new qe({props:{image:"https://raw.githubusercontent.com/thejaviertc/thejaviertc/master/images/steam-workshop-stats.png",name:"Steam Workshop Stats",description:"See the number of views, subs, likes and more of your addons!",live:"https://thejaviertc.github.io/steam-workshop-stats/",github:"https://github.com/thejaviertc/steam-workshop-stats",$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){e=E(),t=T("section"),l=T("h1"),m=W("Javiertc "),R(r.$$.fragment),d=E(),o=T("h2"),o.textContent=g,v=E(),c=T("div"),R(i.$$.fragment),$=E(),R(s.$$.fragment),h=E(),R(D.$$.fragment),L=E(),A=T("section"),Y=T("h2"),Y.textContent=n,_=E(),V=T("div"),R(p.$$.fragment),z=E(),R(O.$$.fragment),H=E(),R(K.$$.fragment),te=E(),J=T("section"),F=T("h2"),F.textContent=Ee,pe=E(),fe=T("div"),R(Z.$$.fragment),this.h()},l(w){Se("svelte-1d52lkg",document.head).forEach(f),e=b(w),t=x(w,"SECTION",{class:!0});var Q=y(t);l=x(Q,"H1",{});var ie=y(l);m=q(ie,"Javiertc "),I(r.$$.fragment,ie),ie.forEach(f),d=b(Q),o=x(Q,"H2",{class:!0,"data-svelte-h":!0}),_e(o)!=="svelte-1y9e69v"&&(o.textContent=g),v=b(Q),c=x(Q,"DIV",{class:!0});var se=y(c);I(i.$$.fragment,se),$=b(se),I(s.$$.fragment,se),se.forEach(f),h=b(Q),I(D.$$.fragment,Q),Q.forEach(f),L=b(w),A=x(w,"SECTION",{id:!0,class:!0});var ne=y(A);Y=x(ne,"H2",{class:!0,"data-svelte-h":!0}),_e(Y)!=="svelte-x2qj1i"&&(Y.textContent=n),_=b(ne),V=x(ne,"DIV",{class:!0});var X=y(V);I(p.$$.fragment,X),z=b(X),I(O.$$.fragment,X),H=b(X),I(K.$$.fragment,X),X.forEach(f),ne.forEach(f),te=b(w),J=x(w,"SECTION",{id:!0,class:!0});var le=y(J);F=x(le,"H2",{class:!0,"data-svelte-h":!0}),_e(F)!=="svelte-27r3wv"&&(F.textContent=Ee),pe=b(le),fe=x(le,"DIV",{});var ce=y(fe);I(Z.$$.fragment,ce),ce.forEach(f),le.forEach(f),this.h()},h(){document.title="Javiertc's Portfolio",C(o,"class","my-4"),C(c,"class","my-6"),C(t,"class","min-h-screen flex flex-col justify-center items-center text-center"),C(Y,"class","pb-14 text-center"),C(V,"class","grid grid-cols-1 xl:grid-cols-2 gap-10 mx-5 sm:mx-10"),C(A,"id","knowledge"),C(A,"class","py-16"),C(F,"class","pb-14 text-center"),C(J,"id","projects"),C(J,"class","pb-16")},m(w,G){M(w,e,G),M(w,t,G),u(t,l),u(l,m),S(r,l,null),u(t,d),u(t,o),u(t,v),u(t,c),S(i,c,null),u(c,$),S(s,c,null),u(t,h),S(D,t,null),M(w,L,G),M(w,A,G),u(A,Y),u(A,_),u(A,V),S(p,V,null),u(V,z),S(O,V,null),u(V,H),S(K,V,null),M(w,te,G),M(w,J,G),u(J,F),u(J,pe),u(J,fe),S(Z,fe,null),$e=!0},p(w,[G]){const Q={};G&1&&(Q.$$scope={dirty:G,ctx:w}),i.$set(Q);const ie={};G&1&&(ie.$$scope={dirty:G,ctx:w}),s.$set(ie);const se={};G&1&&(se.$$scope={dirty:G,ctx:w}),D.$set(se);const ne={};G&1&&(ne.$$scope={dirty:G,ctx:w}),p.$set(ne);const X={};G&1&&(X.$$scope={dirty:G,ctx:w}),O.$set(X);const le={};G&1&&(le.$$scope={dirty:G,ctx:w}),K.$set(le);const ce={};G&1&&(ce.$$scope={dirty:G,ctx:w}),Z.$set(ce)},i(w){$e||(j(r.$$.fragment,w),j(i.$$.fragment,w),j(s.$$.fragment,w),j(D.$$.fragment,w),j(p.$$.fragment,w),j(O.$$.fragment,w),j(K.$$.fragment,w),j(Z.$$.fragment,w),$e=!0)},o(w){k(r.$$.fragment,w),k(i.$$.fragment,w),k(s.$$.fragment,w),k(D.$$.fragment,w),k(p.$$.fragment,w),k(O.$$.fragment,w),k(K.$$.fragment,w),k(Z.$$.fragment,w),$e=!1},d(w){w&&(f(e),f(t),f(L),f(A),f(te),f(J)),N(r),N(i),N(s),N(D),N(p),N(O),N(K),N(Z)}}}class it extends ue{constructor(e){super(),de(this,e,null,st,me,{})}}export{it as component};