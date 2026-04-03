import{_ as m}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{_ as o}from"./Slider.vue_vue_type_script_setup_true_lang-B59K1n-e.js";import{d as i,o as s,e as c,u as n,z as _,D as t,A as u,H as r,I as l,B as f,b as g}from"./highlight-DV_B57Hj.js";import{_ as S}from"./Label.vue_vue_type_script_setup_true_lang-BLtXXxKJ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import"./useFormControl-Dw7qtzdV.js";import"./Collection-BzhLJ3ey.js";import"./usePrimitiveElement-CC4NqMuD.js";import"./VisuallyHiddenInput-b5QhEy_5.js";const v=i({__name:"SliderBasic",setup(p){return(a,e)=>(s(),c(n(o),{"default-value":[50],max:100,step:1,"data-component-x-ray-trigger":"Slider"}))}}),w=`<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
<\/script>

<template>
  <Slider :default-value="[50]" :max="100" :step="1" data-component-x-ray-trigger="Slider" />
</template>
`,y=i({__name:"SliderRange",setup(p){return(a,e)=>(s(),c(n(o),{"default-value":[25,50],max:100,step:5,"data-component-x-ray-trigger":"Slider"}))}}),b=`<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
<\/script>

<template>
  <Slider :default-value="[25, 50]" :max="100" :step="5" data-component-x-ray-trigger="Slider" />
</template>
`,$=i({__name:"SliderMultiple",setup(p){return(a,e)=>(s(),c(n(o),{"default-value":[10,20,70],max:100,step:10,"data-component-x-ray-trigger":"Slider"}))}}),h=`<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
<\/script>

<template>
  <Slider
    :default-value="[10, 20, 70]"
    :max="100"
    :step="10"
    data-component-x-ray-trigger="Slider"
  />
</template>
`,R={class:"flex items-center gap-6"},V=i({__name:"SliderVertical",setup(p){return(a,e)=>(s(),_("div",R,[t(n(o),{"default-value":[50],max:100,step:1,orientation:"vertical",class:"h-40","data-component-x-ray-trigger":"Slider"}),t(n(o),{"default-value":[25],max:100,step:1,orientation:"vertical",class:"h-40","data-component-x-ray-trigger":"Slider"})]))}}),B=`<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
<\/script>

<template>
  <div class="flex items-center gap-6">
    <Slider
      :default-value="[50]"
      :max="100"
      :step="1"
      orientation="vertical"
      class="h-40"
      data-component-x-ray-trigger="Slider"
    />
    <Slider
      :default-value="[25]"
      :max="100"
      :step="1"
      orientation="vertical"
      class="h-40"
      data-component-x-ray-trigger="Slider"
    />
  </div>
</template>
`,C={class:"grid w-full gap-3"},D={class:"flex items-center justify-between gap-2"},L={class:"text-muted-foreground text-sm"},j=i({__name:"SliderControlled",setup(p){const a=g([.3,.7]);return(e,d)=>(s(),_("div",C,[u("div",D,[t(n(S),{"html-for":"slider-demo-temperature","data-component-x-ray":"Label"},{default:r(()=>[...d[1]||(d[1]=[l("Temperature",-1)])]),_:1}),u("span",L,f(a.value.join(", ")),1)]),t(n(o),{id:"slider-demo-temperature",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=x=>a.value=x),min:0,max:1,step:.1,"data-component-x-ray-trigger":"Slider"},null,8,["modelValue"])]))}}),k=`<script setup lang="ts">
import { ref } from "vue";
import { Label } from "@/shared/components/ui/label";
import { Slider } from "@/shared/components/ui/slider";

const value = ref([0.3, 0.7]);
<\/script>

<template>
  <div class="grid w-full gap-3">
    <div class="flex items-center justify-between gap-2">
      <Label html-for="slider-demo-temperature" data-component-x-ray="Label">Temperature</Label>
      <span class="text-muted-foreground text-sm">
        {{ value.join(", ") }}
      </span>
    </div>
    <Slider
      id="slider-demo-temperature"
      v-model="value"
      :min="0"
      :max="1"
      :step="0.1"
      data-component-x-ray-trigger="Slider"
    />
  </div>
</template>
`,M=i({__name:"SliderDisabled",setup(p){return(a,e)=>(s(),c(n(o),{"default-value":[50],max:100,step:1,disabled:!0,"data-component-x-ray-trigger":"Slider"}))}}),N=`<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
<\/script>

<template>
  <Slider
    :default-value="[50]"
    :max="100"
    :step="1"
    :disabled="true"
    data-component-x-ray-trigger="Slider"
  />
</template>
`,T={class:"@container max-w-200 mx-auto"},E={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},K=i({__name:"_Examples",setup(p){return(a,e)=>(s(),_("div",T,[u("div",E,[t(m,{"raw-component":n(w)},{title:r(()=>[...e[0]||(e[0]=[l(" Basic ",-1)])]),example:r(()=>[t(v)]),_:1},8,["raw-component"]),t(m,{"raw-component":n(b)},{title:r(()=>[...e[1]||(e[1]=[l(" Range ",-1)])]),example:r(()=>[t(y)]),_:1},8,["raw-component"]),t(m,{"raw-component":n(h)},{title:r(()=>[...e[2]||(e[2]=[l(" Multiple ",-1)])]),example:r(()=>[t($)]),_:1},8,["raw-component"]),t(m,{"raw-component":n(B)},{title:r(()=>[...e[3]||(e[3]=[l(" Vertical ",-1)])]),example:r(()=>[t(V)]),_:1},8,["raw-component"]),t(m,{"raw-component":n(k)},{title:r(()=>[...e[4]||(e[4]=[l(" Controlled ",-1)])]),example:r(()=>[t(j)]),_:1},8,["raw-component"]),t(m,{"raw-component":n(N)},{title:r(()=>[...e[5]||(e[5]=[l(" Disabled ",-1)])]),example:r(()=>[t(M)]),_:1},8,["raw-component"])])]))}});export{K as default};
