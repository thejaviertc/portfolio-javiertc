import{a as j,c as H}from"../chunks/scheduler.1vssFSt3.js";import{S as q,i as w,s as v,e as E,t as b,c as C,h as I,d as u,a as S,b as k,f as B,g as $,j as R,k as x,l as g,m as f,n as y,o as N,p as O,q as T,r as z}from"../chunks/index.mp7YowDt.js";import{b as A}from"../chunks/paths.3dPwLcY4.js";import{s as D}from"../chunks/entry.3An_8JzS.js";import{B as F,f as G}from"../chunks/index.GkrluTXb.js";const J=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},K={subscribe(s){return J().page.subscribe(s)}};function L(s){let a;return{c(){a=b("Return Back")},l(n){a=$(n,"Return Back")},m(n,e){g(n,a,e)},d(n){n&&u(a)}}}function M(s){let a,n,e,o,d,m=s[0].status+"",p,_,r,l;return document.title=a=s[0].status,r=new F({props:{class:"btn-accent",faIcon:G,link:A,$$slots:{default:[L]},$$scope:{ctx:s}}}),{c(){n=v(),e=E("section"),o=E("h2"),d=b("Something Happened - "),p=b(m),_=v(),C(r.$$.fragment),this.h()},l(t){I("svelte-1pmtc3j",document.head).forEach(u),n=S(t),e=k(t,"SECTION",{class:!0});var i=B(e);o=k(i,"H2",{class:!0});var h=B(o);d=$(h,"Something Happened - "),p=$(h,m),h.forEach(u),_=S(i),R(r.$$.fragment,i),i.forEach(u),this.h()},h(){x(o,"class","mb-6"),x(e,"class","min-h-screen flex flex-col justify-center items-center text-center")},m(t,c){g(t,n,c),g(t,e,c),f(e,o),f(o,d),f(o,p),f(e,_),y(r,e,null),l=!0},p(t,[c]){(!l||c&1)&&a!==(a=t[0].status)&&(document.title=a),(!l||c&1)&&m!==(m=t[0].status+"")&&N(p,m);const i={};c&2&&(i.$$scope={dirty:c,ctx:t}),r.$set(i)},i(t){l||(O(r.$$.fragment,t),l=!0)},o(t){T(r.$$.fragment,t),l=!1},d(t){t&&(u(n),u(e)),z(r)}}}function P(s,a,n){let e;return H(s,K,o=>n(0,e=o)),[e]}let Y=class extends q{constructor(a){super(),w(this,a,P,M,j,{})}};export{Y as component};
