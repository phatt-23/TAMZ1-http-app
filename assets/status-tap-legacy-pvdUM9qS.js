System.register(["./index-legacy-52p9faaQ.js","./__commonjsHelpers__-legacy-Dm4tvPOc.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.r,r=e.f,s=e.b,o=e.w,i=e.s},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=r(a);c&&new Promise((e=>s(c,e))).then((()=>{o((async()=>{c.style.setProperty("--overflow","hidden"),await i(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
