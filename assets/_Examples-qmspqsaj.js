import{_ as ft}from"./ExampleCard.vue_vue_type_script_setup_true_lang-B9Mol2ml.js";import{a as $t,_ as Mt}from"./CardContent.vue_vue_type_script_setup_true_lang-CwsYOZhY.js";import{g as Ce,O as De,w as ce,Q as le,a as ue,aE as je,b as fe,d as H,o as O,z,T as Ot,u as x,a7 as Lt,a4 as Tt,A as M,a6 as $e,e as Rt,H as S,D as v,_ as ge,L as pt,M as mt,B as xt,I as dt}from"./highlight-Dn55r6j6.js";import{A as Me}from"./arrow-right-QTKczAS5.js";import{A as Oe}from"./arrow-left-CyuYEK7W.js";import{E as ye}from"./example-image-CoB8jV9D.js";import{_ as he}from"./AspectRatio.vue_vue_type_script_setup_true_lang-BHLlrXP_.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BGdXP9nw.js";function Re(t){return Object.prototype.toString.call(t)==="[object Object]"}function de(t){return Re(t)||Array.isArray(t)}function Fe(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Qt(t,e){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;const a=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return a!==s?!1:n.every(r=>{const c=t[r],i=e[r];return typeof c=="function"?`${c}`==`${i}`:!de(c)||!de(i)?c===i:Qt(c,i)})}function pe(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Ve(t,e){if(t.length!==e.length)return!1;const n=pe(t),o=pe(e);return n.every((a,s)=>{const r=o[s];return Qt(a,r)})}function Jt(t){return typeof t=="number"}function Kt(t){return typeof t=="string"}function Ft(t){return typeof t=="boolean"}function me(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function Xt(t){return Math.sign(t)}function Pt(t,e){return D(t-e)}function ze(t,e){if(t===0||e===0||D(t)<=D(e))return 0;const n=Pt(D(t),D(e));return D(n/t)}function Be(t){return Math.round(t*100)/100}function Et(t){return At(t).map(Number)}function G(t){return t[kt(t)]}function kt(t){return Math.max(0,t.length-1)}function Yt(t,e){return e===kt(t)}function xe(t,e=0){return Array.from(Array(t),(n,o)=>e+o)}function At(t){return Object.keys(t)}function _e(t,e){return[t,e].reduce((n,o)=>(At(o).forEach(a=>{const s=n[a],r=o[a],c=me(s)&&me(r);n[a]=c?_e(s,r):r}),n),{})}function Ut(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function qe(t,e){const n={start:o,center:a,end:s};function o(){return 0}function a(i){return s(i)/2}function s(i){return e-i}function r(i,l){return Kt(t)?n[t](i):t(e,i,l)}return{measure:r}}function Nt(){let t=[];function e(a,s,r,c={passive:!0}){let i;if("addEventListener"in a)a.addEventListener(s,r,c),i=()=>a.removeEventListener(s,r,c);else{const l=a;l.addListener(r),i=()=>l.removeListener(r)}return t.push(i),o}function n(){t=t.filter(a=>a())}const o={add:e,clear:n};return o}function He(t,e,n,o){const a=Nt(),s=1e3/60;let r=null,c=0,i=0;function l(){a.add(t,"visibilitychange",()=>{t.hidden&&d()})}function C(){h(),a.clear()}function f(g){if(!i)return;r||(r=g,n(),n());const u=g-r;for(r=g,c+=u;c>=s;)n(),c-=s;const y=c/s;o(y),i&&(i=e.requestAnimationFrame(f))}function p(){i||(i=e.requestAnimationFrame(f))}function h(){e.cancelAnimationFrame(i),r=null,c=0,i=0}function d(){r=null,c=0}return{init:l,destroy:C,start:p,stop:h,update:n,render:o}}function Ge(t,e){const n=e==="rtl",o=t==="y",a=o?"y":"x",s=o?"x":"y",r=!o&&n?-1:1,c=C(),i=f();function l(d){const{height:m,width:g}=d;return o?m:g}function C(){return o?"top":n?"right":"left"}function f(){return o?"bottom":n?"left":"right"}function p(d){return d*r}return{scroll:a,cross:s,startEdge:c,endEdge:i,measureSize:l,direction:p}}function it(t=0,e=0){const n=D(t-e);function o(l){return l<t}function a(l){return l>e}function s(l){return o(l)||a(l)}function r(l){return s(l)?o(l)?t:e:l}function c(l){return n?l-n*Math.ceil((l-e)/n):l}return{length:n,max:e,min:t,constrain:r,reachedAny:s,reachedMax:a,reachedMin:o,removeOffset:c}}function ve(t,e,n){const{constrain:o}=it(0,t),a=t+1;let s=r(e);function r(p){return n?D((a+p)%a):o(p)}function c(){return s}function i(p){return s=r(p),f}function l(p){return C().set(c()+p)}function C(){return ve(t,c(),n)}const f={get:c,set:i,add:l,clone:C};return f}function Ke(t,e,n,o,a,s,r,c,i,l,C,f,p,h,d,m,g,u,y){const{cross:b,direction:P}=t,T=["INPUT","SELECT","TEXTAREA"],E={passive:!1},w=Nt(),I=Nt(),A=it(50,225).constrain(h.measure(20)),j={mouse:300,touch:400},N={mouse:500,touch:600},V=d?43:25;let K=!1,U=0,Q=0,st=!1,nt=!1,Y=!1,Z=!1;function vt(_){if(!y)return;function L(F){(Ft(y)||y(_,F))&&St(F)}const $=e;w.add($,"dragstart",F=>F.preventDefault(),E).add($,"touchmove",()=>{},E).add($,"touchend",()=>{}).add($,"touchstart",L).add($,"mousedown",L).add($,"touchcancel",R).add($,"contextmenu",R).add($,"click",tt,!0)}function J(){w.clear(),I.clear()}function ct(){const _=Z?n:e;I.add(_,"touchmove",B,E).add(_,"touchend",R).add(_,"mousemove",B,E).add(_,"mouseup",R)}function lt(_){const L=_.nodeName||"";return T.includes(L)}function W(){return(d?N:j)[Z?"mouse":"touch"]}function bt(_,L){const $=f.add(Xt(_)*-1),F=C.byDistance(_,!d).distance;return d||D(_)<A?F:g&&L?F*.5:C.byIndex($.get(),0).distance}function St(_){const L=Ut(_,o);Z=L,Y=d&&L&&!_.buttons&&K,K=Pt(a.get(),r.get())>=2,!(L&&_.button!==0)&&(lt(_.target)||(st=!0,s.pointerDown(_),l.useFriction(0).useDuration(0),a.set(r),ct(),U=s.readPoint(_),Q=s.readPoint(_,b),p.emit("pointerDown")))}function B(_){if(!Ut(_,o)&&_.touches.length>=2)return R(_);const $=s.readPoint(_),F=s.readPoint(_,b),X=Pt($,U),et=Pt(F,Q);if(!nt&&!Z&&(!_.cancelable||(nt=X>et,!nt)))return R(_);const rt=s.pointerMove(_);X>m&&(Y=!0),l.useFriction(.3).useDuration(.75),c.start(),a.add(P(rt)),_.preventDefault()}function R(_){const $=C.byDistance(0,!1).index!==f.get(),F=s.pointerUp(_)*W(),X=bt(P(F),$),et=ze(F,X),rt=V-10*et,ot=u+et/50;nt=!1,st=!1,I.clear(),l.useDuration(rt).useFriction(ot),i.distance(X,!d),Z=!1,p.emit("pointerUp")}function tt(_){Y&&(_.stopPropagation(),_.preventDefault(),Y=!1)}function q(){return st}return{init:vt,destroy:J,pointerDown:q}}function Ue(t,e){let o,a;function s(f){return f.timeStamp}function r(f,p){const d=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Ut(f,e)?f:f.touches[0])[d]}function c(f){return o=f,a=f,r(f)}function i(f){const p=r(f)-r(a),h=s(f)-s(o)>170;return a=f,h&&(o=f),p}function l(f){if(!o||!a)return 0;const p=r(a)-r(o),h=s(f)-s(o),d=s(f)-s(a)>170,m=p/h;return h&&!d&&D(m)>.1?m:0}return{pointerDown:c,pointerMove:i,pointerUp:l,readPoint:r}}function Qe(){function t(n){const{offsetTop:o,offsetLeft:a,offsetWidth:s,offsetHeight:r}=n;return{top:o,right:a+s,bottom:o+r,left:a,width:s,height:r}}return{measure:t}}function Je(t){function e(o){return t*(o/100)}return{measure:e}}function Xe(t,e,n,o,a,s,r){const c=[t].concat(o);let i,l,C=[],f=!1;function p(g){return a.measureSize(r.measure(g))}function h(g){if(!s)return;l=p(t),C=o.map(p);function u(y){for(const b of y){if(f)return;const P=b.target===t,T=o.indexOf(b.target),E=P?l:C[T],w=p(P?t:o[T]);if(D(w-E)>=.5){g.reInit(),e.emit("resize");break}}}i=new ResizeObserver(y=>{(Ft(s)||s(g,y))&&u(y)}),n.requestAnimationFrame(()=>{c.forEach(y=>i.observe(y))})}function d(){f=!0,i&&i.disconnect()}return{init:h,destroy:d}}function Ye(t,e,n,o,a,s){let r=0,c=0,i=a,l=s,C=t.get(),f=0;function p(){const E=o.get()-t.get(),w=!i;let I=0;return w?(r=0,n.set(o),t.set(o),I=E):(n.set(t),r+=E/i,r*=l,C+=r,t.add(r),I=C-f),c=Xt(I),f=C,T}function h(){const E=o.get()-e.get();return D(E)<.001}function d(){return i}function m(){return c}function g(){return r}function u(){return b(a)}function y(){return P(s)}function b(E){return i=E,T}function P(E){return l=E,T}const T={direction:m,duration:d,velocity:g,seek:p,settled:h,useBaseFriction:y,useBaseDuration:u,useFriction:P,useDuration:b};return T}function Ze(t,e,n,o,a){const s=a.measure(10),r=a.measure(50),c=it(.1,.99);let i=!1;function l(){return!(i||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function C(h){if(!l())return;const d=t.reachedMin(e.get())?"min":"max",m=D(t[d]-e.get()),g=n.get()-e.get(),u=c.constrain(m/r);n.subtract(g*u),!h&&D(g)<s&&(n.set(t.constrain(n.get())),o.useDuration(25).useBaseFriction())}function f(h){i=!h}return{shouldConstrain:l,constrain:C,toggleActive:f}}function We(t,e,n,o,a){const s=it(-e+t,0),r=f(),c=C(),i=p();function l(d,m){return Pt(d,m)<=1}function C(){const d=r[0],m=G(r),g=r.lastIndexOf(d),u=r.indexOf(m)+1;return it(g,u)}function f(){return n.map((d,m)=>{const{min:g,max:u}=s,y=s.constrain(d),b=!m,P=Yt(n,m);return b?u:P||l(g,y)?g:l(u,y)?u:y}).map(d=>parseFloat(d.toFixed(3)))}function p(){if(e<=t+a)return[s.max];if(o==="keepSnaps")return r;const{min:d,max:m}=c;return r.slice(d,m)}return{snapsContained:i,scrollContainLimit:c}}function tn(t,e,n){const o=e[0],a=n?o-t:G(e);return{limit:it(a,o)}}function en(t,e,n,o){const s=e.min+.1,r=e.max+.1,{reachedMin:c,reachedMax:i}=it(s,r);function l(p){return p===1?i(n.get()):p===-1?c(n.get()):!1}function C(p){if(!l(p))return;const h=t*(p*-1);o.forEach(d=>d.add(h))}return{loop:C}}function nn(t){const{max:e,length:n}=t;function o(s){const r=s-e;return n?r/-n:0}return{get:o}}function on(t,e,n,o,a){const{startEdge:s,endEdge:r}=t,{groupSlides:c}=a,i=f().map(e.measure),l=p(),C=h();function f(){return c(o).map(m=>G(m)[r]-m[0][s]).map(D)}function p(){return o.map(m=>n[s]-m[s]).map(m=>-D(m))}function h(){return c(l).map(m=>m[0]).map((m,g)=>m+i[g])}return{snaps:l,snapsAligned:C}}function sn(t,e,n,o,a,s){const{groupSlides:r}=a,{min:c,max:i}=o,l=C();function C(){const p=r(s),h=!t||e==="keepSnaps";return n.length===1?[s]:h?p:p.slice(c,i).map((d,m,g)=>{const u=!m,y=Yt(g,m);if(u){const b=G(g[0])+1;return xe(b)}if(y){const b=kt(s)-G(g)[0]+1;return xe(b,G(g)[0])}return d})}return{slideRegistry:l}}function rn(t,e,n,o,a){const{reachedAny:s,removeOffset:r,constrain:c}=o;function i(d){return d.concat().sort((m,g)=>D(m)-D(g))[0]}function l(d){const m=t?r(d):c(d),g=e.map((y,b)=>({diff:C(y-m,0),index:b})).sort((y,b)=>D(y.diff)-D(b.diff)),{index:u}=g[0];return{index:u,distance:m}}function C(d,m){const g=[d,d+n,d-n];if(!t)return d;if(!m)return i(g);const u=g.filter(y=>Xt(y)===m);return u.length?i(u):G(g)-n}function f(d,m){const g=e[d]-a.get(),u=C(g,m);return{index:d,distance:u}}function p(d,m){const g=a.get()+d,{index:u,distance:y}=l(g),b=!t&&s(g);if(!m||b)return{index:u,distance:d};const P=e[u]-y,T=d+C(P,0);return{index:u,distance:T}}return{byDistance:p,byIndex:f,shortcut:C}}function an(t,e,n,o,a,s,r){function c(f){const p=f.distance,h=f.index!==e.get();s.add(p),p&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),h&&(n.set(e.get()),e.set(f.index),r.emit("select"))}function i(f,p){const h=a.byDistance(f,p);c(h)}function l(f,p){const h=e.clone().set(f),d=a.byIndex(h.get(),p);c(d)}return{distance:i,index:l}}function cn(t,e,n,o,a,s,r,c){const i={passive:!0,capture:!0};let l=0;function C(h){if(!c)return;function d(m){if(new Date().getTime()-l>10)return;r.emit("slideFocusStart"),t.scrollLeft=0;const y=n.findIndex(b=>b.includes(m));Jt(y)&&(a.useDuration(0),o.index(y,0),r.emit("slideFocus"))}s.add(document,"keydown",f,!1),e.forEach((m,g)=>{s.add(m,"focus",u=>{(Ft(c)||c(h,u))&&d(g)},i)})}function f(h){h.code==="Tab"&&(l=new Date().getTime())}return{init:C}}function It(t){let e=t;function n(){return e}function o(i){e=r(i)}function a(i){e+=r(i)}function s(i){e-=r(i)}function r(i){return Jt(i)?i:i.get()}return{get:n,set:o,add:a,subtract:s}}function be(t,e){const n=t.scroll==="x"?r:c,o=e.style;let a=null,s=!1;function r(p){return`translate3d(${p}px,0px,0px)`}function c(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(s)return;const h=Be(t.direction(p));h!==a&&(o.transform=n(h),a=h)}function l(p){s=!p}function C(){s||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:C,to:i,toggleActive:l}}function ln(t,e,n,o,a,s,r,c,i){const C=Et(a),f=Et(a).reverse(),p=u().concat(y());function h(w,I){return w.reduce((A,j)=>A-a[j],I)}function d(w,I){return w.reduce((A,j)=>h(A,I)>0?A.concat([j]):A,[])}function m(w){return s.map((I,A)=>({start:I-o[A]+.5+w,end:I+e-.5+w}))}function g(w,I,A){const j=m(I);return w.map(N=>{const V=A?0:-n,K=A?n:0,U=A?"end":"start",Q=j[N][U];return{index:N,loopPoint:Q,slideLocation:It(-1),translate:be(t,i[N]),target:()=>c.get()>Q?V:K}})}function u(){const w=r[0],I=d(f,w);return g(I,n,!1)}function y(){const w=e-r[0]-1,I=d(C,w);return g(I,-n,!0)}function b(){return p.every(({index:w})=>{const I=C.filter(A=>A!==w);return h(I,e)<=.1})}function P(){p.forEach(w=>{const{target:I,translate:A,slideLocation:j}=w,N=I();N!==j.get()&&(A.to(N),j.set(N))})}function T(){p.forEach(w=>w.translate.clear())}return{canLoop:b,clear:T,loop:P,loopPoints:p}}function un(t,e,n){let o,a=!1;function s(i){if(!n)return;function l(C){for(const f of C)if(f.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}o=new MutationObserver(C=>{a||(Ft(n)||n(i,C))&&l(C)}),o.observe(t,{childList:!0})}function r(){o&&o.disconnect(),a=!0}return{init:s,destroy:r}}function fn(t,e,n,o){const a={};let s=null,r=null,c,i=!1;function l(){c=new IntersectionObserver(d=>{i||(d.forEach(m=>{const g=e.indexOf(m.target);a[g]=m}),s=null,r=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:o}),e.forEach(d=>c.observe(d))}function C(){c&&c.disconnect(),i=!0}function f(d){return At(a).reduce((m,g)=>{const u=parseInt(g),{isIntersecting:y}=a[u];return(d&&y||!d&&!y)&&m.push(u),m},[])}function p(d=!0){if(d&&s)return s;if(!d&&r)return r;const m=f(d);return d&&(s=m),d||(r=m),m}return{init:l,destroy:C,get:p}}function dn(t,e,n,o,a,s){const{measureSize:r,startEdge:c,endEdge:i}=t,l=n[0]&&a,C=d(),f=m(),p=n.map(r),h=g();function d(){if(!l)return 0;const y=n[0];return D(e[c]-y[c])}function m(){if(!l)return 0;const y=s.getComputedStyle(G(o));return parseFloat(y.getPropertyValue(`margin-${i}`))}function g(){return n.map((y,b,P)=>{const T=!b,E=Yt(P,b);return T?p[b]+C:E?p[b]+f:P[b+1][c]-y[c]}).map(D)}return{slideSizes:p,slideSizesWithGaps:h,startGap:C,endGap:f}}function pn(t,e,n,o,a,s,r,c,i){const{startEdge:l,endEdge:C,direction:f}=t,p=Jt(n);function h(u,y){return Et(u).filter(b=>b%y===0).map(b=>u.slice(b,b+y))}function d(u){return u.length?Et(u).reduce((y,b,P)=>{const T=G(y)||0,E=T===0,w=b===kt(u),I=a[l]-s[T][l],A=a[l]-s[b][C],j=!o&&E?f(r):0,N=!o&&w?f(c):0,V=D(A-N-(I+j));return P&&V>e+i&&y.push(b),w&&y.push(u.length),y},[]).map((y,b,P)=>{const T=Math.max(P[b-1]||0);return u.slice(T,y)}):[]}function m(u){return p?h(u,n):d(u)}return{groupSlides:m}}function mn(t,e,n,o,a,s,r){const{align:c,axis:i,direction:l,startIndex:C,loop:f,duration:p,dragFree:h,dragThreshold:d,inViewThreshold:m,slidesToScroll:g,skipSnaps:u,containScroll:y,watchResize:b,watchSlides:P,watchDrag:T,watchFocus:E}=s,w=2,I=Qe(),A=I.measure(e),j=n.map(I.measure),N=Ge(i,l),V=N.measureSize(A),K=Je(V),U=qe(c,V),Q=!f&&!!y,st=f||!!y,{slideSizes:nt,slideSizesWithGaps:Y,startGap:Z,endGap:vt}=dn(N,A,j,n,st,a),J=pn(N,V,g,f,A,j,Z,vt,w),{snaps:ct,snapsAligned:lt}=on(N,U,A,j,J),W=-G(ct)+G(Y),{snapsContained:bt,scrollContainLimit:St}=We(V,W,lt,y,w),B=Q?bt:lt,{limit:R}=tn(W,B,f),tt=ve(kt(B),C,f),q=tt.clone(),k=Et(n),_=({dragHandler:ut,scrollBody:Ht,scrollBounds:Gt,options:{loop:Dt}})=>{Dt||Gt.constrain(ut.pointerDown()),Ht.seek()},L=({scrollBody:ut,translate:Ht,location:Gt,offsetLocation:Dt,previousLocation:Ie,scrollLooper:Pe,slideLooper:Ee,dragHandler:Ae,animation:Ne,eventHandler:ne,scrollBounds:Le,options:{loop:oe}},se)=>{const re=ut.settled(),Te=!Le.shouldConstrain(),ae=oe?re:re&&Te,ie=ae&&!Ae.pointerDown();ie&&Ne.stop();const ke=Gt.get()*se+Ie.get()*(1-se);Dt.set(ke),oe&&(Pe.loop(ut.direction()),Ee.loop()),Ht.to(Dt.get()),ie&&ne.emit("settle"),ae||ne.emit("scroll")},$=He(o,a,()=>_(qt),ut=>L(qt,ut)),F=.68,X=B[tt.get()],et=It(X),rt=It(X),ot=It(X),at=It(X),wt=Ye(et,ot,rt,at,p,F),zt=rn(f,B,W,R,at),Bt=an($,tt,q,wt,zt,at,r),Wt=nn(R),te=Nt(),Se=fn(e,n,r,m),{slideRegistry:ee}=sn(Q,y,B,St,J,k),we=cn(t,n,ee,Bt,wt,te,r,E),qt={ownerDocument:o,ownerWindow:a,eventHandler:r,containerRect:A,slideRects:j,animation:$,axis:N,dragHandler:Ke(N,t,o,a,at,Ue(N,a),et,$,Bt,wt,zt,tt,r,K,h,d,u,F,T),eventStore:te,percentOfView:K,index:tt,indexPrevious:q,limit:R,location:et,offsetLocation:ot,previousLocation:rt,options:s,resizeHandler:Xe(e,r,a,n,N,b,I),scrollBody:wt,scrollBounds:Ze(R,ot,at,wt,K),scrollLooper:en(W,R,ot,[et,ot,rt,at]),scrollProgress:Wt,scrollSnapList:B.map(Wt.get),scrollSnaps:B,scrollTarget:zt,scrollTo:Bt,slideLooper:ln(N,V,W,nt,Y,ct,B,ot,n),slideFocus:we,slidesHandler:un(e,r,P),slidesInView:Se,slideIndexes:k,slideRegistry:ee,slidesToScroll:J,target:at,translate:be(N,e)};return qt}function xn(){let t={},e;function n(l){e=l}function o(l){return t[l]||[]}function a(l){return o(l).forEach(C=>C(e,l)),i}function s(l,C){return t[l]=o(l).concat([C]),i}function r(l,C){return t[l]=o(l).filter(f=>f!==C),i}function c(){t={}}const i={init:n,emit:a,off:r,on:s,clear:c};return i}const Cn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function gn(t){function e(s,r){return _e(s,r||{})}function n(s){const r=s.breakpoints||{},c=At(r).filter(i=>t.matchMedia(i).matches).map(i=>r[i]).reduce((i,l)=>e(i,l),{});return e(s,c)}function o(s){return s.map(r=>At(r.breakpoints||{})).reduce((r,c)=>r.concat(c),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:o}}function yn(t){let e=[];function n(s,r){return e=r.filter(({options:c})=>t.optionsAtMedia(c).active!==!1),e.forEach(c=>c.init(s,t)),r.reduce((c,i)=>Object.assign(c,{[i.name]:i}),{})}function o(){e=e.filter(s=>s.destroy())}return{init:n,destroy:o}}function jt(t,e,n){const o=t.ownerDocument,a=o.defaultView,s=gn(a),r=yn(s),c=Nt(),i=xn(),{mergeOptions:l,optionsAtMedia:C,optionsMediaQueries:f}=s,{on:p,off:h,emit:d}=i,m=N;let g=!1,u,y=l(Cn,jt.globalOptions),b=l(y),P=[],T,E,w;function I(){const{container:k,slides:_}=b;E=(Kt(k)?t.querySelector(k):k)||t.children[0];const $=Kt(_)?E.querySelectorAll(_):_;w=[].slice.call($||E.children)}function A(k){const _=mn(t,E,w,o,a,k,i);if(k.loop&&!_.slideLooper.canLoop()){const L=Object.assign({},k,{loop:!1});return A(L)}return _}function j(k,_){g||(y=l(y,k),b=C(y),P=_||P,I(),u=A(b),f([y,...P.map(({options:L})=>L)]).forEach(L=>c.add(L,"change",N)),b.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(q),u.eventHandler.init(q),u.resizeHandler.init(q),u.slidesHandler.init(q),u.options.loop&&u.slideLooper.loop(),E.offsetParent&&w.length&&u.dragHandler.init(q),T=r.init(q,P)))}function N(k,_){const L=J();V(),j(l({startIndex:L},k),_),i.emit("reInit")}function V(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),r.destroy(),c.clear()}function K(){g||(g=!0,c.clear(),V(),i.emit("destroy"),i.clear())}function U(k,_,L){!b.active||g||(u.scrollBody.useBaseFriction().useDuration(_===!0?0:b.duration),u.scrollTo.index(k,L||0))}function Q(k){const _=u.index.add(1).get();U(_,k,-1)}function st(k){const _=u.index.add(-1).get();U(_,k,1)}function nt(){return u.index.add(1).get()!==J()}function Y(){return u.index.add(-1).get()!==J()}function Z(){return u.scrollSnapList}function vt(){return u.scrollProgress.get(u.offsetLocation.get())}function J(){return u.index.get()}function ct(){return u.indexPrevious.get()}function lt(){return u.slidesInView.get()}function W(){return u.slidesInView.get(!1)}function bt(){return T}function St(){return u}function B(){return t}function R(){return E}function tt(){return w}const q={canScrollNext:nt,canScrollPrev:Y,containerNode:R,internalEngine:St,destroy:K,off:h,on:p,emit:d,plugins:bt,previousScrollSnap:ct,reInit:m,rootNode:B,scrollNext:Q,scrollPrev:st,scrollProgress:vt,scrollSnapList:Z,scrollTo:U,selectedScrollSnap:J,slideNodes:tt,slidesInView:lt,slidesNotInView:W};return j(e,n),setTimeout(()=>i.emit("init"),0),q}jt.globalOptions=void 0;function Zt(t={},e=[]){const n=le(t),o=le(e);let a=n?t.value:t,s=o?e.value:e;const r=ue(),c=ue();function i(){c.value&&c.value.reInit(a,s)}return Ce(()=>{!Fe()||!r.value||(jt.globalOptions=Zt.globalOptions,c.value=jt(r.value,a,s))}),De(()=>{c.value&&c.value.destroy()}),n&&ce(t,l=>{Qt(a,l)||(a=l,i())}),o&&ce(e,l=>{Ve(s,l)||(s=l,i())}),[r,c]}Zt.globalOptions=void 0;const[hn,_n]=je(({opts:t,orientation:e,plugins:n},o)=>{const[a,s]=Zt({...t,axis:e==="horizontal"?"x":"y"},n);function r(){s.value?.scrollPrev()}function c(){s.value?.scrollNext()}const i=fe(!1),l=fe(!1);function C(f){i.value=f?.canScrollNext()||!1,l.value=f?.canScrollPrev()||!1}return Ce(()=>{s.value&&(s.value?.on("init",C),s.value?.on("reInit",C),s.value?.on("select",C),o("init-api",s.value))}),{carouselRef:a,carouselApi:s,canScrollPrev:l,canScrollNext:i,scrollPrev:r,scrollNext:c,orientation:e}});function Vt(){const t=_n();if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Ct=H({__name:"Carousel",props:{opts:{},plugins:{},orientation:{default:"horizontal"},class:{}},emits:["init-api"],setup(t,{expose:e,emit:n}){const o=t,a=n,{canScrollNext:s,canScrollPrev:r,carouselApi:c,carouselRef:i,orientation:l,scrollNext:C,scrollPrev:f}=hn(o,a);e({canScrollNext:s,canScrollPrev:r,carouselApi:c,carouselRef:i,orientation:l,scrollNext:C,scrollPrev:f});function p(h){const d=o.orientation==="vertical"?"ArrowUp":"ArrowLeft",m=o.orientation==="vertical"?"ArrowDown":"ArrowRight";if(h.key===d){h.preventDefault(),f();return}h.key===m&&(h.preventDefault(),C())}return(h,d)=>(O(),z("div",{class:Ot(x(Lt)("relative",o.class)),role:"region","aria-roledescription":"carousel",tabindex:"0",onKeydown:p},[Tt(h.$slots,"default",{canScrollNext:x(s),canScrollPrev:x(r),carouselApi:x(c),carouselRef:x(i),orientation:x(l),scrollNext:x(C),scrollPrev:x(f)})],34))}}),gt=H({inheritAttrs:!1,__name:"CarouselContent",props:{class:{}},setup(t){const e=t,{carouselRef:n,orientation:o}=Vt();return(a,s)=>(O(),z("div",{ref_key:"carouselRef",ref:n,class:"overflow-hidden"},[M("div",$e({class:x(Lt)("flex",x(o)==="horizontal"?"-ml-4":"-mt-4 flex-col",e.class)},a.$attrs),[Tt(a.$slots,"default")],16)],512))}}),yt=H({__name:"CarouselItem",props:{class:{}},setup(t){const e=t,{orientation:n}=Vt();return(o,a)=>(O(),z("div",{role:"group","aria-roledescription":"slide",class:Ot(x(Lt)("min-w-0 shrink-0 grow-0 basis-full",x(n)==="horizontal"?"pl-4":"pt-4",e.class))},[Tt(o.$slots,"default")],2))}}),ht=H({__name:"CarouselNext",props:{class:{}},setup(t){const e=t,{orientation:n,canScrollNext:o,scrollNext:a}=Vt();return(s,r)=>(O(),Rt(x(ge),{disabled:!x(o),class:Ot(x(Lt)("touch-manipulation absolute h-8 w-8 rounded-full p-0",x(n)==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e.class)),variant:"outline",onClick:x(a)},{default:S(()=>[Tt(s.$slots,"default",{},()=>[v(x(Me),{class:"h-4 w-4 text-current"}),r[0]||(r[0]=M("span",{class:"sr-only"},"Next Slide",-1))])]),_:3},8,["disabled","class","onClick"]))}}),_t=H({__name:"CarouselPrevious",props:{class:{}},setup(t){const e=t,{orientation:n,canScrollPrev:o,scrollPrev:a}=Vt();return(s,r)=>(O(),Rt(x(ge),{disabled:!x(o),class:Ot(x(Lt)("touch-manipulation absolute h-8 w-8 rounded-full p-0",x(n)==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e.class)),variant:"outline",onClick:x(a)},{default:S(()=>[Tt(s.$slots,"default",{},()=>[v(x(Oe),{class:"h-4 w-4 text-current"}),r[0]||(r[0]=M("span",{class:"sr-only"},"Previous Slide",-1))])]),_:3},8,["disabled","class","onClick"]))}}),vn={class:"flex justify-center"},bn={class:"p-1"},Sn={class:"text-4xl font-semibold"},wn=H({__name:"CarouselDefault",setup(t){return(e,n)=>(O(),z("div",vn,[v(x(Ct),{class:"w-full max-w-xs","data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{"data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,o=>v(x(yt),{key:o,"data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",bn,[v(x($t),{"data-component-x-ray":"Card"},{default:S(()=>[v(x(Mt),{class:"flex aspect-square items-center justify-center p-6","data-component-x-ray":"CardContent"},{default:S(()=>[M("span",Sn,xt(o),1)]),_:2},1024)]),_:2},1024)])]),_:2},1024)),64))]),_:1}),v(x(_t),{"data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{"data-component-x-ray-trigger":"CarouselNext"})]),_:1})]))}}),In=`<script setup lang="ts">
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <div class="flex justify-center">
    <Carousel class="w-full max-w-xs" data-component-x-ray="Carousel">
      <CarouselContent data-component-x-ray="CarouselContent">
        <CarouselItem v-for="i in 5" :key="i" data-component-x-ray="CarouselItem">
          <div class="p-1">
            <Card data-component-x-ray="Card">
              <CardContent
                class="flex aspect-square items-center justify-center p-6"
                data-component-x-ray="CardContent"
              >
                <span class="text-4xl font-semibold">{{ i }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
`,Pn={class:"p-1"},En={class:"text-3xl font-semibold"},An=H({__name:"CarouselMultiple",setup(t){return(e,n)=>(O(),Rt(x(Ct),{class:"relative w-full",opts:{align:"start"},"data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{"data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,(o,a)=>v(x(yt),{key:a,class:"md:basis-1/2 lg:basis-1/3","data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",Pn,[v(x($t),{"data-component-x-ray":"Card"},{default:S(()=>[v(x(Mt),{class:"flex aspect-square items-center justify-center p-6","data-component-x-ray":"CardContent"},{default:S(()=>[M("span",En,xt(a+1),1)]),_:2},1024)]),_:2},1024)])]),_:2},1024)),64))]),_:1}),v(x(_t),{"data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{"data-component-x-ray-trigger":"CarouselNext"})]),_:1}))}}),Nn=`<script setup lang="ts">
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <Carousel
    class="relative w-full"
    :opts="{
      align: 'start',
    }"
    data-component-x-ray="Carousel"
  >
    <CarouselContent data-component-x-ray="CarouselContent">
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="md:basis-1/2 lg:basis-1/3"
        data-component-x-ray="CarouselItem"
      >
        <div class="p-1">
          <Card data-component-x-ray="Card">
            <CardContent
              class="flex aspect-square items-center justify-center p-6"
              data-component-x-ray="CardContent"
            >
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
    <CarouselNext data-component-x-ray-trigger="CarouselNext" />
  </Carousel>
</template>
`,Ln={class:"flex justify-center max-w-sm mx-auto"},Tn={class:"relative"},kn=["src"],Dn={class:"absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white"},jn=H({__name:"CarouselWithImages",setup(t){return(e,n)=>(O(),z("div",Ln,[v(x(Ct),{class:"w-full",opts:{align:"start"},"data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{class:"-ml-1","data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,(o,a)=>v(x(yt),{key:a,class:"select-none","data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",Tn,[v(x(he),{ratio:1/1,class:"bg-muted rounded-lg","data-component-x-ray":"AspectRatio"},{default:S(()=>[M("img",{src:x(ye),alt:"Example Image",class:"h-full w-full rounded-lg object-cover"},null,8,kn)]),_:1}),M("span",Dn,xt(a+1),1)])]),_:2},1024)),64))]),_:1}),v(x(_t),{"data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{"data-component-x-ray-trigger":"CarouselNext"})]),_:1})]))}}),$n=`<script setup lang="ts">
import ExampleImage from "@/shared/assets/images/example-image.jpg";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <div class="flex justify-center max-w-sm mx-auto">
    <Carousel
      class="w-full"
      :opts="{
        align: 'start',
      }"
      data-component-x-ray="Carousel"
    >
      <CarouselContent class="-ml-1" data-component-x-ray="CarouselContent">
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index"
          class="select-none"
          data-component-x-ray="CarouselItem"
        >
          <div class="relative">
            <AspectRatio
              :ratio="1 / 1"
              class="bg-muted rounded-lg"
              data-component-x-ray="AspectRatio"
            >
              <img
                :src="ExampleImage"
                alt="Example Image"
                class="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
            <span
              class="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white"
            >
              {{ index + 1 }}
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
`,Mn={class:"flex justify-center"},On={class:"p-1"},Rn={class:"text-4xl font-semibold select-none"},Fn=H({__name:"CarouselContainedControls",setup(t){return(e,n)=>(O(),z("div",Mn,[v(x(Ct),{class:"w-full max-w-xs","data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{"data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,o=>v(x(yt),{key:o,"data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",On,[v(x($t),{"data-component-x-ray":"Card"},{default:S(()=>[v(x(Mt),{class:"flex aspect-square items-center justify-center p-6","data-component-x-ray":"CardContent"},{default:S(()=>[M("span",Rn,xt(o),1)]),_:2},1024)]),_:2},1024)])]),_:2},1024)),64))]),_:1}),v(x(_t),{class:"left-0","data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{class:"right-0","data-component-x-ray-trigger":"CarouselNext"})]),_:1})]))}}),Vn=`<script setup lang="ts">
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <div class="flex justify-center">
    <Carousel class="w-full max-w-xs" data-component-x-ray="Carousel">
      <CarouselContent data-component-x-ray="CarouselContent">
        <CarouselItem v-for="i in 5" :key="i" data-component-x-ray="CarouselItem">
          <div class="p-1">
            <Card data-component-x-ray="Card">
              <CardContent
                class="flex aspect-square items-center justify-center p-6"
                data-component-x-ray="CardContent"
              >
                <span class="text-4xl font-semibold select-none">{{ i }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="left-0" data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext class="right-0" data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
`,zn={class:"p-0"},Bn={class:"text-3xl font-semibold"},qn=H({__name:"CarouselVertical",setup(t){return(e,n)=>(O(),Rt(x(Ct),{orientation:"vertical",class:"relative w-full max-w-xs mx-auto",opts:{align:"start"},"data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{class:"-mt-1 h-50","data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,(o,a)=>v(x(yt),{key:a,class:"shrink p-1 md:basis-1/2","data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",zn,[v(x($t),{"data-component-x-ray":"Card"},{default:S(()=>[v(x(Mt),{class:"flex items-center justify-center p-6","data-component-x-ray":"CardContent"},{default:S(()=>[M("span",Bn,xt(a+1),1)]),_:2},1024)]),_:2},1024)])]),_:2},1024)),64))]),_:1}),v(x(_t),{"data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{"data-component-x-ray-trigger":"CarouselNext"})]),_:1}))}}),Hn=`<script setup lang="ts">
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <Carousel
    orientation="vertical"
    class="relative w-full max-w-xs mx-auto"
    :opts="{
      align: 'start',
    }"
    data-component-x-ray="Carousel"
  >
    <CarouselContent class="-mt-1 h-50" data-component-x-ray="CarouselContent">
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="shrink p-1 md:basis-1/2"
        data-component-x-ray="CarouselItem"
      >
        <div class="p-0">
          <Card data-component-x-ray="Card">
            <CardContent
              class="flex items-center justify-center p-6"
              data-component-x-ray="CardContent"
            >
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
    <CarouselNext data-component-x-ray-trigger="CarouselNext" />
  </Carousel>
</template>
`,Gn={class:"flex justify-center max-w-sm mx-auto"},Kn={class:"relative"},Un=["src"],Qn={class:"absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white"},Jn=H({__name:"CarouselVerticalImages",setup(t){return(e,n)=>(O(),z("div",Gn,[v(x(Ct),{orientation:"vertical",class:"w-full",opts:{align:"start"},"data-component-x-ray":"Carousel"},{default:S(()=>[v(x(gt),{class:"-ml-1 h-100","data-component-x-ray":"CarouselContent"},{default:S(()=>[(O(),z(pt,null,mt(5,(o,a)=>v(x(yt),{key:a,class:"shrink select-none","data-component-x-ray":"CarouselItem"},{default:S(()=>[M("div",Kn,[v(x(he),{ratio:1/1,class:"bg-muted rounded-lg","data-component-x-ray":"AspectRatio"},{default:S(()=>[M("img",{src:x(ye),alt:"Example Image",class:"h-full w-full rounded-lg object-cover"},null,8,Un),M("span",Qn,xt(a+1),1)]),_:2},1024)])]),_:2},1024)),64))]),_:1}),v(x(_t),{"data-component-x-ray-trigger":"CarouselPrevious"}),v(x(ht),{"data-component-x-ray-trigger":"CarouselNext"})]),_:1})]))}}),Xn=`<script setup lang="ts">
import ExampleImage from "@/shared/assets/images/example-image.jpg";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
<\/script>

<template>
  <div class="flex justify-center max-w-sm mx-auto">
    <Carousel
      orientation="vertical"
      class="w-full"
      :opts="{
        align: 'start',
      }"
      data-component-x-ray="Carousel"
    >
      <CarouselContent class="-ml-1 h-100" data-component-x-ray="CarouselContent">
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index"
          class="shrink select-none"
          data-component-x-ray="CarouselItem"
        >
          <div class="relative">
            <AspectRatio
              :ratio="1 / 1"
              class="bg-muted rounded-lg"
              data-component-x-ray="AspectRatio"
            >
              <img
                :src="ExampleImage"
                alt="Example Image"
                class="h-full w-full rounded-lg object-cover"
              />
              <span
                class="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white"
              >
                {{ index + 1 }}
              </span>
            </AspectRatio>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
`,Yn={class:"@container max-w-200 mx-auto"},Zn={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},io=H({__name:"_Examples",setup(t){return(e,n)=>(O(),z("div",Yn,[M("div",Zn,[v(ft,{"raw-component":x(In)},{title:S(()=>[...n[0]||(n[0]=[dt("Default",-1)])]),example:S(()=>[v(wn)]),_:1},8,["raw-component"]),v(ft,{"raw-component":x(Nn)},{title:S(()=>[...n[1]||(n[1]=[dt("Multiple Items",-1)])]),example:S(()=>[v(An)]),_:1},8,["raw-component"]),v(ft,{"raw-component":x($n)},{title:S(()=>[...n[2]||(n[2]=[dt("With Images",-1)])]),example:S(()=>[v(jn)]),_:1},8,["raw-component"]),v(ft,{"raw-component":x(Vn)},{title:S(()=>[...n[3]||(n[3]=[dt("Contained Controls",-1)])]),example:S(()=>[v(Fn)]),_:1},8,["raw-component"]),v(ft,{"raw-component":x(Hn)},{title:S(()=>[...n[4]||(n[4]=[dt("Vertical",-1)])]),example:S(()=>[v(qn)]),_:1},8,["raw-component"]),v(ft,{"raw-component":x(Xn)},{title:S(()=>[...n[5]||(n[5]=[dt("Vertical with Images",-1)])]),example:S(()=>[v(Jn)]),_:1},8,["raw-component"])])]))}});export{io as default};
