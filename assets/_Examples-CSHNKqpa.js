import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{_ as r}from"./Separator.vue_vue_type_script_setup_true_lang-CLMgwQFt.js";import{d as s,o as i,z as c,A as e,D as a,u as n,aM as x,e as f,H as o,I as m}from"./highlight-mgC1Gizx.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";import"./Separator-CnwynMLx.js";const v={class:"flex flex-col gap-4 text-sm"},_=s({__name:"SeparatorHorizontal",setup(l){return(p,t)=>(i(),c("div",v,[t[0]||(t[0]=e("div",{class:"flex flex-col gap-1"},[e("div",{class:"font-medium leading-none"},"shadcn/ui"),e("div",{class:"text-muted-foreground"},"The Foundation for your Design System")],-1)),a(n(r),{"data-component-x-ray":"Separator"}),t[1]||(t[1]=e("div",null," A set of beautifully designed components that you can customize, extend, and build on. ",-1))]))}}),g=`<script setup lang="ts">
import { Separator } from "@/shared/components/ui/separator";
<\/script>

<template>
  <div class="flex flex-col gap-4 text-sm">
    <div class="flex flex-col gap-1">
      <div class="font-medium leading-none">shadcn/ui</div>
      <div class="text-muted-foreground">The Foundation for your Design System</div>
    </div>
    <Separator data-component-x-ray="Separator" />
    <div>
      A set of beautifully designed components that you can customize, extend, and build on.
    </div>
  </div>
</template>
`,S={class:"flex h-5 items-center gap-4 text-sm"},y=s({__name:"SeparatorVertical",setup(l){return(p,t)=>{const u=x("Example");return i(),f(u,{title:"Vertical"},{default:o(()=>[e("div",S,[t[0]||(t[0]=e("div",null,"Blog",-1)),a(n(r),{orientation:"vertical","data-component-x-ray":"Separator"}),t[1]||(t[1]=e("div",null,"Docs",-1)),a(n(r),{orientation:"vertical","data-component-x-ray":"Separator"}),t[2]||(t[2]=e("div",null,"Source",-1))])]),_:1})}}}),w=`<script setup lang="ts">
import { Separator } from "@/shared/components/ui/separator";
<\/script>

<template>
  <Example title="Vertical">
    <div class="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" data-component-x-ray="Separator" />
      <div>Docs</div>
      <Separator orientation="vertical" data-component-x-ray="Separator" />
      <div>Source</div>
    </div>
  </Example>
</template>
`,V={class:"@container max-w-200 mx-auto"},z={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},h=s({__name:"_Examples",setup(l){return(p,t)=>(i(),c("div",V,[e("div",z,[a(d,{"raw-component":n(g)},{title:o(()=>[...t[0]||(t[0]=[m(" Horizontal ",-1)])]),example:o(()=>[a(_)]),_:1},8,["raw-component"]),a(d,{"raw-component":n(w)},{title:o(()=>[...t[1]||(t[1]=[m(" Vertical ",-1)])]),example:o(()=>[a(y)]),_:1},8,["raw-component"])])]))}});export{h as default};
