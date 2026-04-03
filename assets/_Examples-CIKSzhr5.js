import{_ as m}from"./ExampleCard.vue_vue_type_script_setup_true_lang-C8cUG3aI.js";import{a as n,_ as u}from"./ToggleGroupItem.vue_vue_type_script_setup_true_lang-DllmhFOy.js";import{B as c,I as d,U as T}from"./underline-szyQ_vwQ.js";import{d as r,o as g,e as s,H as t,D as o,u as e,I as l,z as _,A as G}from"./highlight-CeYIOz-i.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-z5jP3Qrf.js";import"./index-BmP7H35y.js";import"./useFormControl-Clq6Ktd4.js";import"./VisuallyHiddenInput-DcXNHEL3.js";import"./usePrimitiveElement-Dlrrz1fa.js";import"./useSingleOrMultipleValue-m6h1a5Mg.js";import"./isValueEqualOrExist-B0pyLQLX.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./RovingFocusGroup-os-7kgWd.js";import"./Collection-Dc-yvEeD.js";import"./utils-CCozNIA-.js";import"./RovingFocusItem-DPUQfTHm.js";const I=r({__name:"ToggleGroupBasic",setup(p){return(i,a)=>(g(),s(e(u),{type:"multiple",spacing:1,"data-component-x-ray":"ToggleGroup"},{default:t(()=>[o(e(n),{value:"bold","aria-label":"Toggle bold","data-component-x-ray-trigger":"ToggleGroupItem"},{default:t(()=>[o(e(c))]),_:1}),o(e(n),{value:"italic","aria-label":"Toggle italic","data-component-x-ray-trigger":"ToggleGroupItem"},{default:t(()=>[o(e(d))]),_:1}),o(e(n),{value:"underline","aria-label":"Toggle underline","data-component-x-ray-trigger":"ToggleGroupItem"},{default:t(()=>[o(e(T))]),_:1})]),_:1}))}}),x=`<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group";
<\/script>

<template>
  <ToggleGroup type="multiple" :spacing="1" data-component-x-ray="ToggleGroup">
    <ToggleGroupItem
      value="bold"
      aria-label="Toggle bold"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="italic"
      aria-label="Toggle italic"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="underline"
      aria-label="Toggle underline"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
`,f=r({__name:"ToggleGroupOutline",setup(p){return(i,a)=>(g(),s(e(u),{variant:"outline",type:"single","default-value":"all","data-component-x-ray":"ToggleGroup"},{default:t(()=>[o(e(n),{value:"all","aria-label":"Toggle all","data-component-x-ray-trigger":"ToggleGroupItem"},{default:t(()=>[...a[0]||(a[0]=[l(" All ",-1)])]),_:1}),o(e(n),{value:"missed","aria-label":"Toggle missed","data-component-x-ray-trigger":"ToggleGroupItem"},{default:t(()=>[...a[1]||(a[1]=[l(" Missed ",-1)])]),_:1})]),_:1}))}}),y=`<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group";
<\/script>

<template>
  <ToggleGroup
    variant="outline"
    type="single"
    default-value="all"
    data-component-x-ray="ToggleGroup"
  >
    <ToggleGroupItem
      value="all"
      aria-label="Toggle all"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      All
    </ToggleGroupItem>
    <ToggleGroupItem
      value="missed"
      aria-label="Toggle missed"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      Missed
    </ToggleGroupItem>
  </ToggleGroup>
</template>
`,v={class:"@container max-w-200 mx-auto"},b={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},h=r({__name:"_Examples",setup(p){return(i,a)=>(g(),_("div",v,[G("div",b,[o(m,{"raw-component":e(x)},{title:t(()=>[...a[0]||(a[0]=[l(" Basic ",-1)])]),example:t(()=>[o(I)]),_:1},8,["raw-component"]),o(m,{"raw-component":e(y)},{title:t(()=>[...a[1]||(a[1]=[l(" Outline Variant ",-1)])]),example:t(()=>[o(f)]),_:1},8,["raw-component"])])]))}});export{h as default};
