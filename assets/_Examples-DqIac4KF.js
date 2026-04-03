import{_ as S}from"./ExampleCard.vue_vue_type_script_setup_true_lang-C8cUG3aI.js";import{d as g,ah as b,o as l,e as d,H as r,a5 as m,I as c,a7 as v,u as e,ao as I,am as H,aC as J,c as C,ap as O,ai as k,aj as L,B as A,ak as h,al as T,a8 as B,D as u,A as E,aB as M,as as j,z,L as V,M as G,J as K}from"./highlight-CeYIOz-i.js";import{E as Q}from"./ellipsis-BuTCgEl5.js";import{C as U}from"./chevron-right-C9FSGvmG.js";import{C as W}from"./chevron-left-yWdxEl-B.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-z5jP3Qrf.js";var X=g({__name:"PaginationEllipsis",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const n=s;return b(),(a,i)=>(l(),d(e(I),v(n,{"data-type":"ellipsis"}),{default:r(()=>[m(a.$slots,"default",{},()=>[i[0]||(i[0]=c("…"))])]),_:3},16))}}),Y=X;const[q,Z]=O("PaginationRoot");var aa=g({__name:"PaginationRoot",props:{page:{type:Number,required:!1},defaultPage:{type:Number,required:!1,default:1},itemsPerPage:{type:Number,required:!0},total:{type:Number,required:!1,default:0},siblingCount:{type:Number,required:!1,default:2},disabled:{type:Boolean,required:!1},showEdges:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"nav"}},emits:["update:page"],setup(s,{emit:n}){const a=s,i=n,{siblingCount:o,disabled:t,showEdges:p}=H(a);b();const f=J(a,"page",i,{defaultValue:a.defaultPage,passive:a.page===void 0}),_=C(()=>Math.max(1,Math.ceil(a.total/(a.itemsPerPage||1))));return Z({page:f,onPageChange(P){f.value=P},pageCount:_,siblingCount:o,disabled:t,showEdges:p}),(P,$)=>(l(),d(e(I),{as:P.as,"as-child":P.asChild},{default:r(()=>[m(P.$slots,"default",{page:e(f),pageCount:_.value})]),_:3},8,["as","as-child"]))}}),ea=aa;function y(s,n){const a=n-s+1;return Array.from({length:a},(i,o)=>o+s)}function ta(s){return s.map(n=>typeof n=="number"?{type:"page",value:n}:{type:"ellipsis"})}const w="ellipsis";function na(s,n,a,i){const t=n,p=Math.max(s-a,1),f=Math.min(s+a,t);if(i){const P=Math.min(2*a+5,n)-2,$=p>3&&Math.abs(t-P-1+1)>2&&Math.abs(p-1)>2,R=f<t-2&&Math.abs(t-P)>2&&Math.abs(t-f)>2;if(!$&&R)return[...y(1,P),w,t];if($&&!R){const N=y(t-P+1,t);return[1,w,...N]}if($&&R){const N=y(p,f);return[1,w,...N,w,t]}return y(1,t)}else{const _=a*2+1;return n<_?y(1,t):s<=a+1?y(1,_):n-s<=a?y(n-_+1,t):y(p,f)}}var sa=g({__name:"PaginationList",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const n=s;b();const a=q(),i=C(()=>ta(na(a.page.value,a.pageCount.value,a.siblingCount.value,a.showEdges.value)));return(o,t)=>(l(),d(e(I),k(L(n)),{default:r(()=>[m(o.$slots,"default",{items:i.value})]),_:3},16))}}),ia=sa,oa=g({__name:"PaginationListItem",props:{value:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const n=s;b();const a=q(),i=C(()=>a.page.value===n.value),o=C(()=>a.disabled.value);return(t,p)=>(l(),d(e(I),v(n,{"data-type":"page","aria-label":`Page ${t.value}`,"aria-current":i.value?"page":void 0,"data-selected":i.value?"true":void 0,disabled:o.value,type:t.as==="button"?"button":void 0,onClick:p[0]||(p[0]=f=>!o.value&&e(a).onPageChange(t.value))}),{default:r(()=>[m(t.$slots,"default",{},()=>[c(A(t.value),1)])]),_:3},16,["aria-label","aria-current","data-selected","disabled","type"]))}}),ra=oa,la=g({__name:"PaginationNext",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const n=s;b();const a=q(),i=C(()=>a.page.value===a.pageCount.value||a.disabled.value);return(o,t)=>(l(),d(e(I),v(n,{"aria-label":"Next Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=p=>!i.value&&e(a).onPageChange(e(a).page.value+1))}),{default:r(()=>[m(o.$slots,"default",{},()=>[t[1]||(t[1]=c("Next page"))])]),_:3},16,["type","disabled"]))}}),ua=la,pa=g({__name:"PaginationPrev",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const n=s;b();const a=q(),i=C(()=>a.page.value===1||a.disabled.value);return(o,t)=>(l(),d(e(I),v(n,{"aria-label":"Previous Page",type:o.as==="button"?"button":void 0,disabled:i.value,onClick:t[0]||(t[0]=p=>!i.value&&e(a).onPageChange(e(a).page.value-1))}),{default:r(()=>[m(o.$slots,"default",{},()=>[t[1]||(t[1]=c("Prev page"))])]),_:3},16,["type","disabled"]))}}),da=pa;const F=g({__name:"Pagination",props:{page:{},defaultPage:{},itemsPerPage:{},total:{},siblingCount:{},disabled:{type:Boolean},showEdges:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:page"],setup(s,{emit:n}){const a=s,i=n,o=h(a,"class"),t=T(o,i);return(p,f)=>(l(),d(e(ea),v({"data-slot":"pagination"},e(t),{class:e(B)("mx-auto flex w-full justify-center",a.class)}),{default:r(_=>[m(p.$slots,"default",k(L(_)))]),_:3},16,["class"]))}}),D=g({__name:"PaginationContent",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const n=s,a=h(n,"class");return(i,o)=>(l(),d(e(ia),v({"data-slot":"pagination-content"},e(a),{class:e(B)("flex flex-row items-center gap-1",n.class)}),{default:r(t=>[m(i.$slots,"default",k(L(t)))]),_:3},16,["class"]))}}),ga=g({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const n=s,a=h(n,"class");return(i,o)=>(l(),d(e(Y),v({"data-slot":"pagination-ellipsis"},e(a),{class:e(B)("flex size-9 items-center justify-center",n.class)}),{default:r(()=>[m(i.$slots,"default",{},()=>[u(e(Q),{class:"size-4"}),o[0]||(o[0]=E("span",{class:"sr-only"},"More pages",-1))])]),_:3},16,["class"]))}}),x=g({__name:"PaginationItem",props:{value:{},asChild:{type:Boolean},as:{},size:{default:"icon"},class:{},isActive:{type:Boolean}},setup(s){const n=s,a=h(n,"class","size","isActive");return(i,o)=>(l(),d(e(ra),v({"data-slot":"pagination-item"},e(a),{class:e(B)(e(M)({variant:s.isActive?"outline":"ghost",size:s.size}),n.class)}),{default:r(()=>[m(i.$slots,"default")]),_:3},16,["class"]))}}),ma=g({__name:"PaginationNext",props:{asChild:{type:Boolean},as:{},size:{default:"default"},class:{}},setup(s){const n=s,a=h(n,"class","size"),i=j(a);return(o,t)=>(l(),d(e(ua),v({"data-slot":"pagination-next",class:e(B)(e(M)({variant:"ghost",size:s.size}),"gap-1 px-2.5 sm:pr-2.5",n.class)},e(i)),{default:r(()=>[m(o.$slots,"default",{},()=>[t[0]||(t[0]=E("span",{class:"hidden sm:block"},"Next",-1)),u(e(U))])]),_:3},16,["class"]))}}),ca=g({__name:"PaginationPrevious",props:{asChild:{type:Boolean},as:{},size:{default:"default"},class:{}},setup(s){const n=s,a=h(n,"class","size"),i=j(a);return(o,t)=>(l(),d(e(da),v({"data-slot":"pagination-previous",class:e(B)(e(M)({variant:"ghost",size:s.size}),"gap-1 px-2.5 sm:pr-2.5",n.class)},e(i)),{default:r(()=>[m(o.$slots,"default",{},()=>[u(e(W)),t[0]||(t[0]=E("span",{class:"hidden sm:block"},"Previous",-1))])]),_:3},16,["class"]))}}),fa=g({__name:"PaginationBasic",setup(s){return(n,a)=>(l(),d(e(F),{"items-per-page":10,total:30,"default-page":2,"data-component-x-ray":"Pagination"},{default:r(({page:i})=>[u(e(D),{"data-component-x-ray":"PaginationContent"},{default:r(({items:o})=>[u(e(ca),{"data-component-x-ray-trigger":"PaginationPrevious"}),(l(!0),z(V,null,G(o,(t,p)=>(l(),z(V,{key:p},[t.type==="page"?(l(),d(e(x),{key:0,value:t.value,"is-active":t.value===i,"data-component-x-ray-trigger":"PaginationItem"},{default:r(()=>[c(A(t.value),1)]),_:2},1032,["value","is-active"])):K("",!0)],64))),128)),u(e(ga),{index:4,"data-component-x-ray":"PaginationEllipsis"}),u(e(ma),{"data-component-x-ray-trigger":"PaginationNext"})]),_:2},1024)]),_:1}))}}),Pa=`<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
<\/script>

<template>
  <Pagination
    v-slot="{ page }"
    :items-per-page="10"
    :total="30"
    :default-page="2"
    data-component-x-ray="Pagination"
  >
    <PaginationContent v-slot="{ items }" data-component-x-ray="PaginationContent">
      <PaginationPrevious data-component-x-ray-trigger="PaginationPrevious" />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
          data-component-x-ray-trigger="PaginationItem"
        >
          {{ item.value }}
        </PaginationItem>
      </template>

      <PaginationEllipsis :index="4" data-component-x-ray="PaginationEllipsis" />

      <PaginationNext data-component-x-ray-trigger="PaginationNext" />
    </PaginationContent>
  </Pagination>
</template>
`,va=g({__name:"PaginationSimple",setup(s){return(n,a)=>(l(),d(e(F),{"items-per-page":10,total:30,"default-page":2},{default:r(()=>[u(e(D),{"data-component-x-ray":"PaginationContent"},{default:r(()=>[u(e(x),{value:1,"data-component-x-ray-trigger":"PaginationItem"},{default:r(()=>[...a[0]||(a[0]=[c(" 1 ",-1)])]),_:1}),u(e(x),{value:2,"is-active":!0,"data-component-x-ray-trigger":"PaginationItem"}),u(e(x),{value:3,"data-component-x-ray-trigger":"PaginationItem"},{default:r(()=>[...a[1]||(a[1]=[c(" 3 ",-1)])]),_:1}),u(e(x),{value:4,"data-component-x-ray-trigger":"PaginationItem"},{default:r(()=>[...a[2]||(a[2]=[c(" 4 ",-1)])]),_:1}),u(e(x),{value:5,"data-component-x-ray-trigger":"PaginationItem"},{default:r(()=>[...a[3]||(a[3]=[c(" 5 ",-1)])]),_:1})]),_:1})]),_:1}))}}),_a=`<script setup lang="ts">
import { Pagination, PaginationContent, PaginationItem } from "@/shared/components/ui/pagination";
<\/script>

<template>
  <Pagination :items-per-page="10" :total="30" :default-page="2">
    <PaginationContent data-component-x-ray="PaginationContent">
      <PaginationItem :value="1" data-component-x-ray-trigger="PaginationItem"> 1 </PaginationItem>
      <PaginationItem :value="2" :is-active="true" data-component-x-ray-trigger="PaginationItem">
      </PaginationItem>
      <PaginationItem :value="3" data-component-x-ray-trigger="PaginationItem"> 3 </PaginationItem>
      <PaginationItem :value="4" data-component-x-ray-trigger="PaginationItem"> 4 </PaginationItem>
      <PaginationItem :value="5" data-component-x-ray-trigger="PaginationItem"> 5 </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>
`,ya={class:"@container max-w-200 mx-auto"},xa={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},wa=g({__name:"_Examples",setup(s){return(n,a)=>(l(),z("div",ya,[E("div",xa,[u(S,{"raw-component":e(Pa)},{title:r(()=>[...a[0]||(a[0]=[c(" Basic ",-1)])]),example:r(()=>[u(fa)]),_:1},8,["raw-component"]),u(S,{"raw-component":e(_a)},{title:r(()=>[...a[1]||(a[1]=[c(" Simple ",-1)])]),example:r(()=>[u(va)]),_:1},8,["raw-component"])])]))}});export{wa as default};
