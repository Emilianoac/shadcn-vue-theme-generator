import{_ as m}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{d as i,ai as v,aj as b,o as s,a as y,H as l,a3 as B,ag as w,ah as I,a5 as z,u as a,a6 as $,z as p,D as t,I as o,A as V}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{t as S,T as P}from"./index-f9bzrqDz.js";import{B as d,I as c,U as O}from"./underline-CrZnDDV1.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";import"./useFormControl-GfOjOtjt.js";import"./VisuallyHiddenInput-Dd-s1NAa.js";import"./usePrimitiveElement-DijCEuh6.js";import"./useSingleOrMultipleValue-CuPC4VfP.js";import"./isValueEqualOrExist-DRKOu-py.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./RovingFocusGroup-Cbueb1rW.js";import"./Collection-B0sjwPP0.js";import"./utils-CCo4lxQo.js";const n=i({__name:"Toggle",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{},variant:{default:"default"},size:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:g}){const e=r,u=g,T=v(e,"class","size","variant"),f=b(T,u);return(x,F)=>(s(),y(a(P),z({"data-slot":"toggle"},a(f),{class:a($)(a(S)({variant:r.variant,size:r.size}),e.class)}),{default:l(_=>[B(x.$slots,"default",w(I(_)))]),_:3},16,["class"]))}}),R={class:"flex flex-wrap items-center gap-2"},U=i({__name:"ToggleBasic",setup(r){return(g,e)=>(s(),p("div",R,[t(a(n),{"aria-label":"Toggle bold","default-pressed":!0,"data-component-x-ray-trigger":"Toggle"},{default:l(()=>[t(a(d))]),_:1}),t(a(n),{"aria-label":"Toggle italic","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[t(a(c))]),_:1}),t(a(n),{"aria-label":"Toggle underline","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[t(a(O))]),_:1})]))}}),k=`<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
import { Toggle } from "@/components/ui/toggle";
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle aria-label="Toggle bold" :default-pressed="true" data-component-x-ray-trigger="Toggle">
      <BoldIcon />
    </Toggle>
    <Toggle aria-label="Toggle italic" data-component-x-ray-trigger="Toggle">
      <ItalicIcon />
    </Toggle>
    <Toggle aria-label="Toggle underline" data-component-x-ray-trigger="Toggle">
      <UnderlineIcon />
    </Toggle>
  </div>
</template>
`,C={class:"flex flex-wrap items-center gap-2"},D=i({__name:"ToggleOutline",setup(r){return(g,e)=>(s(),p("div",C,[t(a(n),{variant:"outline","aria-label":"Toggle italic","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[t(a(c)),e[0]||(e[0]=o(" Italic ",-1))]),_:1}),t(a(n),{variant:"outline","aria-label":"Toggle bold","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[t(a(d)),e[1]||(e[1]=o(" Bold ",-1))]),_:1})]))}}),E=`<script setup lang="ts">
import { BoldIcon, ItalicIcon } from "lucide-vue-next";
import { Toggle } from "@/components/ui/toggle";
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle variant="outline" aria-label="Toggle italic" data-component-x-ray-trigger="Toggle">
      <ItalicIcon />
      Italic
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle bold" data-component-x-ray-trigger="Toggle">
      <BoldIcon />
      Bold
    </Toggle>
  </div>
</template>
`,N={class:"flex flex-wrap items-center gap-2"},L=i({__name:"ToggleSizes",setup(r){return(g,e)=>(s(),p("div",N,[t(a(n),{variant:"outline","aria-label":"Toggle small",size:"sm","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[...e[0]||(e[0]=[o(" Small ",-1)])]),_:1}),t(a(n),{variant:"outline","aria-label":"Toggle default",size:"default","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[...e[1]||(e[1]=[o(" Default ",-1)])]),_:1}),t(a(n),{variant:"outline","aria-label":"Toggle large",size:"lg","data-component-x-ray-trigger":"Toggle"},{default:l(()=>[...e[2]||(e[2]=[o(" Large ",-1)])]),_:1})]))}}),j=`<script setup lang="ts">
import { Toggle } from "@/components/ui/toggle";
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle
      variant="outline"
      aria-label="Toggle small"
      size="sm"
      data-component-x-ray-trigger="Toggle"
    >
      Small
    </Toggle>
    <Toggle
      variant="outline"
      aria-label="Toggle default"
      size="default"
      data-component-x-ray-trigger="Toggle"
    >
      Default
    </Toggle>
    <Toggle
      variant="outline"
      aria-label="Toggle large"
      size="lg"
      data-component-x-ray-trigger="Toggle"
    >
      Large
    </Toggle>
  </div>
</template>
`,q={class:"@container max-w-200 mx-auto"},A={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},le=i({__name:"_Examples",setup(r){return(g,e)=>(s(),p("div",q,[V("div",A,[t(m,{"raw-component":a(k)},{title:l(()=>[...e[0]||(e[0]=[o(" Basic ",-1)])]),example:l(()=>[t(U)]),_:1},8,["raw-component"]),t(m,{"raw-component":a(E)},{title:l(()=>[...e[1]||(e[1]=[o(" Outline ",-1)])]),example:l(()=>[t(D)]),_:1},8,["raw-component"]),t(m,{"raw-component":a(j)},{title:l(()=>[...e[2]||(e[2]=[o(" Sizes ",-1)])]),example:l(()=>[t(L)]),_:1},8,["raw-component"])])]))}});export{le as default};
