import{S as w,i as D,s as V,a as S,k as h,q as k,w as q,G as z,h as i,c as B,l as v,m as b,r as H,x as C,n as y,b as j,H as m,y as G,u as R,f as A,t as F,z as J,I as K}from"../../chunks/index-eaf1a392.js";import{s as L}from"../../chunks/singletons-2077632f.js";import{B as M,f as N}from"../../chunks/index-3d43fc2e.js";const O=()=>{const e=L;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},P={subscribe(e){return O().page.subscribe(e)}};function Q(e){let n,c,s,a,r,g,p=e[0].status+"",f,$,l,o,u;return document.title=n=e[0].status,o=new M({props:{faIcon:N,link:"/",text:"Return Back"}}),{c(){c=S(),s=h("div"),a=h("div"),r=h("h2"),g=k("Something Happened - "),f=k(p),$=S(),l=h("div"),q(o.$$.fragment),this.h()},l(t){z("svelte-1pmtc3j",document.head).forEach(i),c=B(t),s=v(t,"DIV",{class:!0});var E=b(s);a=v(E,"DIV",{});var _=b(a);r=v(_,"H2",{class:!0});var x=b(r);g=H(x,"Something Happened - "),f=H(x,p),x.forEach(i),$=B(_),l=v(_,"DIV",{class:!0});var I=b(l);C(o.$$.fragment,I),I.forEach(i),_.forEach(i),E.forEach(i),this.h()},h(){y(r,"class","text-gray-100"),y(l,"class","flex justify-center my-6"),y(s,"class","bg-zinc-900 min-h-screen flex justify-center items-center")},m(t,d){j(t,c,d),j(t,s,d),m(s,a),m(a,r),m(r,g),m(r,f),m(a,$),m(a,l),G(o,l,null),u=!0},p(t,[d]){(!u||d&1)&&n!==(n=t[0].status)&&(document.title=n),(!u||d&1)&&p!==(p=t[0].status+"")&&R(f,p)},i(t){u||(A(o.$$.fragment,t),u=!0)},o(t){F(o.$$.fragment,t),u=!1},d(t){t&&i(c),t&&i(s),J(o)}}}function T(e,n,c){let s;return K(e,P,a=>c(0,s=a)),[s]}let Y=class extends w{constructor(n){super(),D(this,n,T,Q,V,{})}};export{Y as default};
