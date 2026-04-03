import{_ as y}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{d as m,ag as R,aB as w,w as $,n as A,o as i,e as f,H as r,a4 as v,u as e,an as M,c as L,bf as T,ao as S,a6 as N,z as c,T as V,a7 as h,aj as k,D as o,C as q,g as E,b as B,A as P,L as U,M as j,I as _,B as C}from"./highlight-DXRdThM2.js";import{_ as G}from"./index-q-LJsFB9.js";import{_ as z}from"./FieldLabel.vue_vue_type_script_setup_true_lang-DFhQE5-v.js";import{_ as D}from"./Slider.vue_vue_type_script_setup_true_lang-Cmv0CjtH.js";import{i as W,_ as O,a as F,b as X}from"./index-BXrdKvn1.js";import{F as H}from"./file-S2-G9qjf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./Label.vue_vue_type_script_setup_true_lang-DEtdywft.js";import"./useFormControl-4XoA_PSt.js";import"./Collection-CX6IziOc.js";import"./usePrimitiveElement-DBla2SSk.js";import"./VisuallyHiddenInput-UsrU_XqS.js";const x=100,[J,K]=S("ProgressRoot"),I=t=>typeof t=="number";function Q(t,s){return T(t)||I(t)&&!Number.isNaN(t)&&t<=s&&t>=0?t:(console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${x} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`),null)}function Y(t){return I(t)&&!Number.isNaN(t)&&t>0?t:(console.error(`Invalid prop \`max\` of value \`${t}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${x}\`.`),x)}var Z=m({__name:"ProgressRoot",props:{modelValue:{type:[Number,null],required:!1},max:{type:Number,required:!1,default:x},getValueLabel:{type:Function,required:!1,default:(t,s)=>I(t)?`${Math.round(t/s*x)}%`:void 0},getValueText:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue","update:max"],setup(t,{emit:s}){const a=t,l=s;R();const n=w(a,"modelValue",l,{passive:a.modelValue===void 0}),u=w(a,"max",l,{passive:a.max===void 0});$(()=>n.value,async d=>{const g=Q(d,a.max);g!==d&&(await A(),n.value=g)},{immediate:!0}),$(()=>a.max,d=>{const g=Y(a.max);g!==d&&(u.value=g)},{immediate:!0});const b=L(()=>T(n.value)?"indeterminate":n.value===u.value?"complete":"loading");return K({modelValue:n,max:u,progressState:b}),(d,g)=>(i(),f(e(M),{"as-child":d.asChild,as:d.as,"aria-valuemax":e(u),"aria-valuemin":0,"aria-valuenow":I(e(n))?e(n):void 0,"aria-valuetext":d.getValueText?.(e(n),e(u)),"aria-label":d.getValueLabel(e(n),e(u)),role:"progressbar","data-state":b.value,"data-value":e(n)??void 0,"data-max":e(u)},{default:r(()=>[v(d.$slots,"default",{modelValue:e(n)})]),_:3},8,["as-child","as","aria-valuemax","aria-valuenow","aria-valuetext","aria-label","data-state","data-value","data-max"]))}}),ee=Z,ae=m({__name:"ProgressIndicator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const s=t,a=J();return R(),(l,n)=>(i(),f(e(M),N(s,{"data-state":e(a).progressState.value,"data-value":e(a).modelValue?.value??void 0,"data-max":e(a).max.value}),{default:r(()=>[v(l.$slots,"default")]),_:3},16,["data-state","data-value","data-max"]))}}),te=ae;const se=m({__name:"ItemActions",props:{class:{}},setup(t){const s=t;return(a,l)=>(i(),c("div",{"data-slot":"item-actions",class:V(e(h)("flex items-center gap-2",s.class))},[v(a.$slots,"default")],2))}}),oe=m({__name:"ItemGroup",props:{class:{}},setup(t){const s=t;return(a,l)=>(i(),c("div",{role:"list","data-slot":"item-group",class:V(e(h)("group/item-group flex flex-col",s.class))},[v(a.$slots,"default")],2))}}),ne=["data-variant"],re=m({__name:"ItemMedia",props:{class:{},variant:{}},setup(t){const s=t;return(a,l)=>(i(),c("div",{"data-slot":"item-media","data-variant":s.variant,class:V(e(h)(e(W)({variant:t.variant}),s.class))},[v(a.$slots,"default")],10,ne))}}),p=m({__name:"Progress",props:{modelValue:{default:0},max:{},getValueLabel:{},getValueText:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const s=t,a=k(s,"class");return(l,n)=>(i(),f(e(ee),N({"data-slot":"progress"},e(a),{class:e(h)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",s.class)}),{default:r(()=>[o(e(te),{"data-slot":"progress-indicator",class:"bg-primary h-full w-full flex-1 transition-all",style:q(`transform: translateX(-${100-(s.modelValue??0)}%);`)},null,8,["style"])]),_:1},16,["class"]))}}),le={class:"space-y-4"},ie=m({__name:"ProgressValues",setup(t){const s=B(5);return E(()=>{const a=setTimeout(()=>{s.value=90},500);return()=>clearTimeout(a)}),(a,l)=>(i(),c("div",le,[o(e(p),{"model-value":0,"data-component-x-ray":"Progress"}),o(e(p),{"model-value":25,"data-component-x-ray":"Progress"}),o(e(p),{"model-value":50,"data-component-x-ray":"Progress"}),o(e(p),{"model-value":75,"data-component-x-ray":"Progress"}),o(e(p),{"model-value":100,"data-component-x-ray":"Progress"}),o(e(p),{"model-value":s.value,"data-component-x-ray":"Progress"},null,8,["model-value"])]))}}),me=`<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Progress } from "@/shared/components/ui/progress";

const progress = ref(5);

onMounted(() => {
  const timer = setTimeout(() => {
    progress.value = 90;
  }, 500);

  return () => clearTimeout(timer);
});
<\/script>

<template>
  <div class="space-y-4">
    <Progress :model-value="0" data-component-x-ray="Progress" />
    <Progress :model-value="25" data-component-x-ray="Progress" />
    <Progress :model-value="50" data-component-x-ray="Progress" />
    <Progress :model-value="75" data-component-x-ray="Progress" />
    <Progress :model-value="100" data-component-x-ray="Progress" />
    <Progress :model-value="progress" data-component-x-ray="Progress" />
  </div>
</template>
`,de=m({__name:"ProgressWithLabel",setup(t){return(s,a)=>(i(),f(e(G),{"data-component-x-ray":"Field"},{default:r(()=>[o(e(z),{"html-for":"progress-upload","data-component-x-ray":"FieldLabel"},{default:r(()=>[...a[0]||(a[0]=[P("span",null,"Upload progress",-1),P("span",{class:"ml-auto"},"66%",-1)])]),_:1}),o(e(p),{id:"progress-upload","model-value":66,"data-component-x-ray":"Progress"})]),_:1}))}}),pe=`<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Progress } from "@/shared/components/ui/progress";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel html-for="progress-upload" data-component-x-ray="FieldLabel">
      <span>Upload progress</span>
      <span class="ml-auto">66%</span>
    </FieldLabel>
    <Progress id="progress-upload" :model-value="66" data-component-x-ray="Progress" />
  </Field>
</template>
`,ue={class:"flex w-full flex-col gap-4"},ce=m({__name:"ProgressControlled",setup(t){const s=B([50]);return(a,l)=>(i(),c("div",ue,[o(e(p),{"model-value":s.value[0],class:"w-full","data-component-x-ray":"Progress"},null,8,["model-value"]),o(e(D),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n),min:0,max:100,step:1,"data-component-x-ray-trigger":"Slider"},null,8,["modelValue"])]))}}),ge=`<script setup lang="ts">
import { ref } from "vue";
import { Progress } from "@/shared/components/ui/progress";
import { Slider } from "@/shared/components/ui/slider";

const value = ref([50]);
<\/script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Progress :model-value="value[0]" class="w-full" data-component-x-ray="Progress" />
    <Slider v-model="value" :min="0" :max="100" :step="1" data-component-x-ray-trigger="Slider" />
  </div>
</template>
`,fe={class:"text-sm text-muted-foreground"},_e=m({__name:"ProgressFileUploadList",setup(t){const s=L(()=>[{id:"1",name:"document.pdf",progress:45,timeRemaining:"2m 30s"},{id:"2",name:"presentation.pptx",progress:78,timeRemaining:"45s"},{id:"3",name:"spreadsheet.xlsx",progress:12,timeRemaining:"5m 12s"},{id:"4",name:"image.jpg",progress:100,timeRemaining:"Complete"}]);return(a,l)=>(i(),f(e(oe),{"data-component-x-ray":"ItemGroup"},{default:r(()=>[(i(!0),c(U,null,j(s.value,n=>(i(),f(e(O),{key:n.id,size:"sm",class:"px-0","data-component-x-ray":"Item"},{default:r(()=>[o(e(re),{variant:"icon","data-component-x-ray":"ItemMedia"},{default:r(()=>[o(e(H))]),_:1}),o(e(F),{class:"inline-block truncate","data-component-x-ray":"ItemContent"},{default:r(()=>[o(e(X),{class:"inline","data-component-x-ray":"ItemTitle"},{default:r(()=>[_(C(n.name),1)]),_:2},1024)]),_:2},1024),o(e(F),{"data-component-x-ray":"ItemContent"},{default:r(()=>[o(e(p),{"model-value":n.progress,class:"w-32","data-component-x-ray":"Progress"},null,8,["model-value"])]),_:2},1024),o(e(se),{class:"w-16 justify-end","data-component-x-ray":"ItemActions"},{default:r(()=>[P("span",fe,C(n.timeRemaining),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),xe=`<script setup lang="ts">
import { FileIcon } from "lucide-vue-next";
import { computed } from "vue";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/shared/components/ui/item";
import { Progress } from "@/shared/components/ui/progress";

const files = computed(() => [
  {
    id: "1",
    name: "document.pdf",
    progress: 45,
    timeRemaining: "2m 30s",
  },
  {
    id: "2",
    name: "presentation.pptx",
    progress: 78,
    timeRemaining: "45s",
  },
  {
    id: "3",
    name: "spreadsheet.xlsx",
    progress: 12,
    timeRemaining: "5m 12s",
  },
  {
    id: "4",
    name: "image.jpg",
    progress: 100,
    timeRemaining: "Complete",
  },
]);
<\/script>

<template>
  <ItemGroup data-component-x-ray="ItemGroup">
    <Item v-for="file in files" :key="file.id" size="sm" class="px-0" data-component-x-ray="Item">
      <ItemMedia variant="icon" data-component-x-ray="ItemMedia">
        <FileIcon />
      </ItemMedia>
      <ItemContent class="inline-block truncate" data-component-x-ray="ItemContent">
        <ItemTitle class="inline" data-component-x-ray="ItemTitle">
          {{ file.name }}
        </ItemTitle>
      </ItemContent>
      <ItemContent data-component-x-ray="ItemContent">
        <Progress :model-value="file.progress" class="w-32" data-component-x-ray="Progress" />
      </ItemContent>
      <ItemActions class="w-16 justify-end" data-component-x-ray="ItemActions">
        <span class="text-sm text-muted-foreground">
          {{ file.timeRemaining }}
        </span>
      </ItemActions>
    </Item>
  </ItemGroup>
</template>
`,ve={class:"@container max-w-200 mx-auto"},ye={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Ne=m({__name:"_Examples",setup(t){return(s,a)=>(i(),c("div",ve,[P("div",ye,[o(y,{"raw-component":e(me)},{title:r(()=>[...a[0]||(a[0]=[_(" Progress Bar ",-1)])]),example:r(()=>[o(ie)]),_:1},8,["raw-component"]),o(y,{"raw-component":e(pe)},{title:r(()=>[...a[1]||(a[1]=[_(" With Label ",-1)])]),example:r(()=>[o(de)]),_:1},8,["raw-component"]),o(y,{"raw-component":e(ge)},{title:r(()=>[...a[2]||(a[2]=[_(" Controlled ",-1)])]),example:r(()=>[o(ce)]),_:1},8,["raw-component"]),o(y,{"raw-component":e(xe)},{title:r(()=>[...a[3]||(a[3]=[_(" File Upload List ",-1)])]),example:r(()=>[o(_e)]),_:1},8,["raw-component"])])]))}});export{Ne as default};
