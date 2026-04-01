import{_ as m}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Dv0Lwgv7.js";import{d as r,o as p,z as d,T as i,u as n,a6 as k,D as e,A as c,a as _,H as o,I as x}from"./DialogTitle.vue_vue_type_script_setup_true_lang-CaMH5FGq.js";import{_ as S,a as f}from"./CardContent.vue_vue_type_script_setup_true_lang-D8yqQyCJ.js";import{_ as u}from"./CardHeader.vue_vue_type_script_setup_true_lang-DmUrV1xQ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-DIiXhJ1v.js";const t=r({__name:"Skeleton",props:{class:{}},setup(l){const s=l;return(a,G)=>(p(),d("div",{"data-slot":"skeleton",class:i(n(k)("animate-pulse rounded-md bg-primary/10",s.class))},null,2))}}),w={class:"flex w-full items-center gap-4"},h={class:"grid gap-2"},y=r({__name:"SkeletonAvatar",setup(l){return(s,a)=>(p(),d("div",w,[e(n(t),{class:"size-10 shrink-0 rounded-full","data-component-x-ray":"Skeleton"}),c("div",h,[e(n(t),{class:"h-4 w-37.5","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-25","data-component-x-ray":"Skeleton"})])]))}}),v=`<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
<\/script>

<template>
  <div class="flex w-full items-center gap-4">
    <Skeleton class="size-10 shrink-0 rounded-full" data-component-x-ray="Skeleton" />
    <div class="grid gap-2">
      <Skeleton class="h-4 w-37.5" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-25" data-component-x-ray="Skeleton" />
    </div>
  </div>
</template>
`,g=r({__name:"SkeletonCard",setup(l){return(s,a)=>(p(),_(n(f),{class:"w-full","data-component-x-ray":"Card"},{default:o(()=>[e(n(u),{"data-component-x-ray":"CardHeader"},{default:o(()=>[e(n(t),{class:"h-4 w-2/3","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-1/2","data-component-x-ray":"Skeleton"})]),_:1}),e(n(S),{"data-component-x-ray":"CardContent"},{default:o(()=>[e(n(t),{class:"aspect-square w-full","data-component-x-ray":"Skeleton"})]),_:1})]),_:1}))}}),C=`<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
<\/script>

<template>
  <Card class="w-full" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <Skeleton class="h-4 w-2/3" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-1/2" data-component-x-ray="Skeleton" />
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <Skeleton class="aspect-square w-full" data-component-x-ray="Skeleton" />
    </CardContent>
  </Card>
</template>
`,$={class:"flex w-full flex-col gap-2"},T=r({__name:"SkeletonText",setup(l){return(s,a)=>(p(),d("div",$,[e(n(t),{class:"h-4 w-full","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-full","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-3/4","data-component-x-ray":"Skeleton"})]))}}),H=`<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
<\/script>

<template>
  <div class="flex w-full flex-col gap-2">
    <Skeleton class="h-4 w-full" data-component-x-ray="Skeleton" />
    <Skeleton class="h-4 w-full" data-component-x-ray="Skeleton" />
    <Skeleton class="h-4 w-3/4" data-component-x-ray="Skeleton" />
  </div>
</template>
`,R={class:"flex w-full flex-col gap-7"},b={class:"flex flex-col gap-3"},z={class:"flex flex-col gap-3"},A=r({__name:"SkeletonForm",setup(l){return(s,a)=>(p(),d("div",R,[c("div",b,[e(n(t),{class:"h-4 w-20","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-10 w-full","data-component-x-ray":"Skeleton"})]),c("div",z,[e(n(t),{class:"h-4 w-24","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-10 w-full","data-component-x-ray":"Skeleton"})]),e(n(t),{class:"h-9 w-24","data-component-x-ray":"Skeleton"})]))}}),B=`<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
<\/script>

<template>
  <div class="flex w-full flex-col gap-7">
    <div class="flex flex-col gap-3">
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
      <Skeleton class="h-10 w-full" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex flex-col gap-3">
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-10 w-full" data-component-x-ray="Skeleton" />
    </div>
    <Skeleton class="h-9 w-24" data-component-x-ray="Skeleton" />
  </div>
</template>
`,F={class:"flex w-full flex-col gap-2"},N={class:"flex gap-4"},V={class:"flex gap-4"},q={class:"flex gap-4"},E=r({__name:"SkeletonTable",setup(l){return(s,a)=>(p(),d("div",F,[c("div",N,[e(n(t),{class:"h-4 flex-1","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-24","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-20","data-component-x-ray":"Skeleton"})]),c("div",V,[e(n(t),{class:"h-4 flex-1","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-24","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-20","data-component-x-ray":"Skeleton"})]),c("div",q,[e(n(t),{class:"h-4 flex-1","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-24","data-component-x-ray":"Skeleton"}),e(n(t),{class:"h-4 w-20","data-component-x-ray":"Skeleton"})])]))}}),D=`<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
<\/script>

<template>
  <div class="flex w-full flex-col gap-2">
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
  </div>
</template>
`,I={class:"@container max-w-200 mx-auto"},j={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},P=r({__name:"_Examples",setup(l){return(s,a)=>(p(),d("div",I,[c("div",j,[e(m,{"raw-component":n(v)},{title:o(()=>[...a[0]||(a[0]=[x(" Avatar ",-1)])]),example:o(()=>[e(y)]),_:1},8,["raw-component"]),e(m,{"raw-component":n(C)},{title:o(()=>[...a[1]||(a[1]=[x(" Card ",-1)])]),example:o(()=>[e(g)]),_:1},8,["raw-component"]),e(m,{"raw-component":n(H)},{title:o(()=>[...a[2]||(a[2]=[x(" Text ",-1)])]),example:o(()=>[e(T)]),_:1},8,["raw-component"]),e(m,{"raw-component":n(B)},{title:o(()=>[...a[3]||(a[3]=[x(" Form ",-1)])]),example:o(()=>[e(A)]),_:1},8,["raw-component"]),e(m,{"raw-component":n(D)},{title:o(()=>[...a[4]||(a[4]=[x(" Table ",-1)])]),example:o(()=>[e(E)]),_:1},8,["raw-component"])])]))}});export{P as default};
