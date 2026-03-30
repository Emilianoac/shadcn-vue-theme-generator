import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DM92uT3q.js";import{_ as r}from"./Separator.vue_vue_type_script_setup_true_lang-CkQLBTai.js";import{d as i,o as s,z as c,A as e,D as o,u as n,b as x,a as f,H as a,I as m}from"./DialogTitle.vue_vue_type_script_setup_true_lang-C_9FSQhf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C44kN4yO.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxLZ1jLL.js";import"./VisuallyHidden-CLlRR9c8.js";import"./Separator-g-U8SaYn.js";const v={class:"flex flex-col gap-4 text-sm"},_=i({__name:"SeparatorHorizontal",setup(l){return(p,t)=>(s(),c("div",v,[t[0]||(t[0]=e("div",{class:"flex flex-col gap-1"},[e("div",{class:"font-medium leading-none"},"shadcn/ui"),e("div",{class:"text-muted-foreground"},"The Foundation for your Design System")],-1)),o(n(r),{"data-component-x-ray":"Separator"}),t[1]||(t[1]=e("div",null," A set of beautifully designed components that you can customize, extend, and build on. ",-1))]))}}),g=`<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
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
`,S={class:"flex h-5 items-center gap-4 text-sm"},y=i({__name:"SeparatorVertical",setup(l){return(p,t)=>{const u=x("Example");return s(),f(u,{title:"Vertical"},{default:a(()=>[e("div",S,[t[0]||(t[0]=e("div",null,"Blog",-1)),o(n(r),{orientation:"vertical","data-component-x-ray":"Separator"}),t[1]||(t[1]=e("div",null,"Docs",-1)),o(n(r),{orientation:"vertical","data-component-x-ray":"Separator"}),t[2]||(t[2]=e("div",null,"Source",-1))])]),_:1})}}}),w=`<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
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
`,V={class:"@container max-w-200 mx-auto"},z={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},A=i({__name:"_Examples",setup(l){return(p,t)=>(s(),c("div",V,[e("div",z,[o(d,{"raw-component":n(g)},{title:a(()=>[...t[0]||(t[0]=[m(" Horizontal ",-1)])]),example:a(()=>[o(_)]),_:1},8,["raw-component"]),o(d,{"raw-component":n(w)},{title:a(()=>[...t[1]||(t[1]=[m(" Vertical ",-1)])]),example:a(()=>[o(y)]),_:1},8,["raw-component"])])]))}});export{A as default};
