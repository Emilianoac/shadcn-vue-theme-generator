import{_ as I}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{a as d,b as S,c as l,_ as y}from"./SelectTrigger.vue_vue_type_script_setup_true_lang-BC0CzVi6.js";import{d as m,aq as M,o as c,e as u,H as n,a4 as b,a6 as B,u as e,an as A,ao as E,f as V,T as F,a7 as h,z as s,L as G,I as r,B as _,M as $,J as T,c as D,D as a,b as R,A as q}from"./highlight-DXRdThM2.js";import{_ as f}from"./SelectValue.vue_vue_type_script_setup_true_lang-Kd3ya311.js";import{a as W,_ as w}from"./ItemDescription.vue_vue_type_script_setup_true_lang-WBhjM-Fi.js";import{_ as N}from"./index-q-LJsFB9.js";import{_ as j}from"./FieldLabel.vue_vue_type_script_setup_true_lang-DFhQE5-v.js";import{_ as L,a as P,b as k}from"./index-BXrdKvn1.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./chevron-down-ib_-hS0h.js";import"./Collection-CX6IziOc.js";import"./usePrimitiveElement-DBla2SSk.js";import"./useFocusGuards-4ZXIwemr.js";import"./useTypeahead-W1YZZ-Zj.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-4XoA_PSt.js";import"./Label.vue_vue_type_script_setup_true_lang-DEtdywft.js";const[H,J]=E("SelectGroup");var U=m({__name:"SelectGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(i){const o=i,t=M(void 0,"reka-select-group");return J({id:t}),(p,v)=>(c(),u(e(A),B({role:"group"},o,{"aria-labelledby":e(t)}),{default:n(()=>[b(p.$slots,"default")]),_:3},16,["aria-labelledby"]))}}),K=U,O=m({__name:"SelectLabel",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(i){const o=i,t=H({id:""});return(p,v)=>(c(),u(e(A),B(o,{id:e(t).id}),{default:n(()=>[b(p.$slots,"default")]),_:3},16,["id"]))}}),Q=O;const X=V("chart-bar",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);const Y=V("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);const Z=V("chart-pie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]),g=m({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{}},setup(i){const o=i;return(t,p)=>(c(),u(e(K),B({"data-slot":"select-group"},o),{default:n(()=>[b(t.$slots,"default")]),_:3},16))}}),z=m({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(i){const o=i;return(t,p)=>(c(),u(e(Q),{"data-slot":"select-label",class:F(e(h)("text-muted-foreground px-2 py-1.5 text-xs",o.class))},{default:n(()=>[b(t.$slots,"default")]),_:3},8,["class"]))}}),ee={key:2,class:"ml-4 flex list-disc flex-col gap-1"},te=m({__name:"FieldError",props:{class:{},errors:{}},setup(i){const o=i,t=D(()=>!o.errors||o.errors.length===0?null:o.errors.length===1&&o.errors[0]?.message?o.errors[0].message:o.errors.some(p=>p?.message)?o.errors:null);return(p,v)=>p.$slots.default||t.value?(c(),s("div",{key:0,role:"alert","data-slot":"field-error",class:F(e(h)("text-destructive text-sm font-normal",o.class))},[p.$slots.default?b(p.$slots,"default",{key:0}):typeof t.value=="string"?(c(),s(G,{key:1},[r(_(t.value),1)],64)):Array.isArray(t.value)?(c(),s("ul",ee,[(c(!0),s(G,null,$(t.value,(C,x)=>(c(),s("li",{key:x},_(C?.message),1))),128))])):T("",!0)],2)):T("",!0)}}),ae=m({__name:"SelectBasic",setup(i){return(o,t)=>(c(),u(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(l),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1}),a(e(l),{value:"grapes",disabled:!0,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Grapes ",-1)])]),_:1}),a(e(l),{value:"pineapple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ne=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
        <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
        <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
          Blueberry
        </SelectItem>
        <SelectItem value="grapes" :disabled="true" data-component-x-ray-trigger="SelectItem">
          Grapes
        </SelectItem>
        <SelectItem value="pineapple" data-component-x-ray-trigger="SelectItem">
          Pineapple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`,re=m({__name:"SelectWithIcons",setup(i){return(o,t)=>(c(),u(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{size:"sm","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select a chart type","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(l),{value:"line","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(Y)),t[0]||(t[0]=r(" Line ",-1))]),_:1}),a(e(l),{value:"bar","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(X)),t[1]||(t[1]=r(" Bar ",-1))]),_:1}),a(e(l),{value:"pie","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(Z)),t[2]||(t[2]=r(" Pie ",-1))]),_:1})]),_:1})]),_:1})]),_:1}))}}),le=`<script setup lang="ts">
import { ChartLineIcon, ChartBarIcon, ChartPieIcon } from "lucide-vue-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger size="sm" data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a chart type" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem value="line" data-component-x-ray-trigger="SelectItem">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem value="bar" data-component-x-ray-trigger="SelectItem">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem value="pie" data-component-x-ray-trigger="SelectItem">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`,oe=m({__name:"SelectWithGroups",setup(i){return(o,t)=>(c(),u(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(z),{"data-component-x-ray-trigger":"SelectLabel"},{default:n(()=>[...t[0]||(t[0]=[r("Fruits",-1)])]),_:1}),a(e(l),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Blueberry ",-1)])]),_:1})]),_:1}),a(e(W),{"data-component-x-ray-trigger":"SelectSeparator"}),a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(z),{"data-component-x-ray-trigger":"SelectLabel"},{default:n(()=>[...t[4]||(t[4]=[r("Vegetables",-1)])]),_:1}),a(e(l),{value:"carrot","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[5]||(t[5]=[r(" Carrot ",-1)])]),_:1}),a(e(l),{value:"broccoli","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[6]||(t[6]=[r(" Broccoli ",-1)])]),_:1}),a(e(l),{value:"spinach","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[7]||(t[7]=[r(" Spinach ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ce=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectLabel data-component-x-ray-trigger="SelectLabel">Fruits</SelectLabel>
        <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
        <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
        <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
          Blueberry
        </SelectItem>
      </SelectGroup>
      <SelectSeparator data-component-x-ray-trigger="SelectSeparator" />
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectLabel data-component-x-ray-trigger="SelectLabel">Vegetables</SelectLabel>
        <SelectItem value="carrot" data-component-x-ray-trigger="SelectItem"> Carrot </SelectItem>
        <SelectItem value="broccoli" data-component-x-ray-trigger="SelectItem">
          Broccoli
        </SelectItem>
        <SelectItem value="spinach" data-component-x-ray-trigger="SelectItem"> Spinach </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`,pe=m({__name:"SelectLargeList",setup(i){return(o,t)=>(c(),u(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select an item","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[(c(),s(G,null,$(100,p=>a(e(l),{key:p,value:`item-${p-1}`,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[r(" Item "+_(p-1),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),ie=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select an item" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem
          v-for="i in 100"
          :key="i"
          :value="\`item-\${i - 1}\`"
          data-component-x-ray-trigger="SelectItem"
        >
          Item {{ i - 1 }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`,me={class:"flex flex-col gap-4"},se=m({__name:"SelectSizes",setup(i){return(o,t)=>(c(),s("div",me,[a(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{size:"sm","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Small size","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(l),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{size:"default","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Default size","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(l),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[5]||(t[5]=[r(" Blueberry ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]))}}),ue=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <Select data-component-x-ray="Select">
      <SelectTrigger size="sm" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Small size" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select data-component-x-ray="Select">
      <SelectTrigger size="default" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Default size" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
`,ge={class:"flex flex-col gap-4"},de=m({__name:"SelectInvalid",setup(i){return(o,t)=>(c(),s("div",ge,[a(e(y),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{"aria-invalid":!0,"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(l),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1}),a(e(l),{value:"grapes","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Grapes ",-1)])]),_:1}),a(e(l),{value:"pineapple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(N),{"data-invalid":""},{default:n(()=>[a(e(j),{"html-for":"select-fruit-invalid"},{default:n(()=>[...t[5]||(t[5]=[r(" Favorite Fruit ",-1)])]),_:1}),a(e(y),null,{default:n(()=>[a(e(d),{id:"select-fruit-invalid","aria-invalid":!0},{default:n(()=>[a(e(f),{placeholder:"Select a fruit"})]),_:1}),a(e(S),null,{default:n(()=>[a(e(g),null,{default:n(()=>[a(e(l),{value:"apple"},{default:n(()=>[...t[6]||(t[6]=[r(" Apple ",-1)])]),_:1}),a(e(l),{value:"banana"},{default:n(()=>[...t[7]||(t[7]=[r(" Banana ",-1)])]),_:1}),a(e(l),{value:"blueberry"},{default:n(()=>[...t[8]||(t[8]=[r(" Blueberry ",-1)])]),_:1}),a(e(l),{value:"grapes"},{default:n(()=>[...t[9]||(t[9]=[r(" Grapes ",-1)])]),_:1}),a(e(l),{value:"pineapple"},{default:n(()=>[...t[10]||(t[10]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(te),{errors:[{message:"Please select a valid fruit."}]})]),_:1})]))}}),Se=`<script setup lang="ts">
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <Select data-component-x-ray="Select">
      <SelectTrigger :aria-invalid="true" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes" data-component-x-ray-trigger="SelectItem"> Grapes </SelectItem>
          <SelectItem value="pineapple" data-component-x-ray-trigger="SelectItem">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Field data-invalid>
      <FieldLabel html-for="select-fruit-invalid"> Favorite Fruit </FieldLabel>
      <Select>
        <SelectTrigger id="select-fruit-invalid" :aria-invalid="true">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple"> Apple </SelectItem>
            <SelectItem value="banana"> Banana </SelectItem>
            <SelectItem value="blueberry"> Blueberry </SelectItem>
            <SelectItem value="grapes"> Grapes </SelectItem>
            <SelectItem value="pineapple"> Pineapple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError :errors="[{ message: 'Please select a valid fruit.' }]" />
    </Field>
  </div>
</template>
`,ye=m({__name:"SelectPlan",setup(i){const o=[{name:"Starter",description:"Perfect for individuals getting started."},{name:"Professional",description:"Ideal for growing teams and businesses."},{name:"Enterprise",description:"Advanced features for large organizations."}],t=R(o[0]?.name),p=D(()=>o.find(v=>v.name===t.value));return(v,C)=>(c(),u(e(y),{modelValue:t.value,"onUpdate:modelValue":C[0]||(C[0]=x=>t.value=x),"data-component-x-ray":"Select"},{default:n(()=>[a(e(d),{class:"h-auto! w-72","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(f),{placeholder:"Select a plan","data-component-x-ray-trigger":"SelectValue"},{default:n(()=>[p.value?(c(),u(e(L),{key:0,size:"sm",class:"w-full p-0"},{default:n(()=>[a(e(P),{class:"gap-0","data-component-x-ray-trigger":"ItemContent"},{default:n(()=>[a(e(k),{"data-component-x-ray-trigger":"ItemTitle"},{default:n(()=>[r(_(p.value.name),1)]),_:1}),a(e(w),{class:"text-xs","data-component-x-ray-trigger":"Itemdescription"},{default:n(()=>[r(_(p.value.description),1)]),_:1})]),_:1})]),_:1})):T("",!0)]),_:1})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[(c(),s(G,null,$(o,x=>a(e(l),{key:x.name,value:x.name,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(L),{size:"sm",class:"w-full p-0","data-component-x-ray-trigger":"Item"},{default:n(()=>[a(e(P),{class:"gap-0","data-component-x-ray-trigger":"ItemContent"},{default:n(()=>[a(e(k),{"data-component-x-ray-trigger":"ItemTitle"},{default:n(()=>[r(_(x.name),1)]),_:2},1024),a(e(w),{class:"text-xs","data-component-x-ray-trigger":"ItemDescription"},{default:n(()=>[r(_(x.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),fe=`<script setup lang="ts">
import { computed, ref } from "vue";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/shared/components/ui/item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses.",
  },
  {
    name: "Enterprise",
    description: "Advanced features for large organizations.",
  },
];

const plan = ref(plans[0]?.name);

const selectedPlan = computed(() => plans.find((p) => p.name === plan.value));
<\/script>

<template>
  <Select v-model="plan" data-component-x-ray="Select">
    <SelectTrigger class="h-auto! w-72" data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a plan" data-component-x-ray-trigger="SelectValue">
        <Item v-if="selectedPlan" size="sm" class="w-full p-0">
          <ItemContent class="gap-0" data-component-x-ray-trigger="ItemContent">
            <ItemTitle data-component-x-ray-trigger="ItemTitle">{{ selectedPlan.name }}</ItemTitle>
            <ItemDescription class="text-xs" data-component-x-ray-trigger="Itemdescription">
              {{ selectedPlan.description }}
            </ItemDescription>
          </ItemContent>
        </Item>
      </SelectValue>
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem
          v-for="p in plans"
          :key="p.name"
          :value="p.name"
          data-component-x-ray-trigger="SelectItem"
        >
          <Item size="sm" class="w-full p-0" data-component-x-ray-trigger="Item">
            <ItemContent class="gap-0" data-component-x-ray-trigger="ItemContent">
              <ItemTitle data-component-x-ray-trigger="ItemTitle">{{ p.name }}</ItemTitle>
              <ItemDescription class="text-xs" data-component-x-ray-trigger="ItemDescription">
                {{ p.description }}
              </ItemDescription>
            </ItemContent>
          </Item>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`,xe={class:"@container max-w-200 mx-auto"},Ie={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},De=m({__name:"_Examples",setup(i){return(o,t)=>(c(),s("div",xe,[q("div",Ie,[a(I,{"raw-component":e(ne)},{title:n(()=>[...t[0]||(t[0]=[r(" Basic ",-1)])]),example:n(()=>[a(ae)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(le)},{title:n(()=>[...t[1]||(t[1]=[r(" With Icons ",-1)])]),example:n(()=>[a(re)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(ce)},{title:n(()=>[...t[2]||(t[2]=[r(" With Groups ",-1)])]),example:n(()=>[a(oe)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(ie)},{title:n(()=>[...t[3]||(t[3]=[r(" Large List ",-1)])]),example:n(()=>[a(pe)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(ue)},{title:n(()=>[...t[4]||(t[4]=[r(" Sizes ",-1)])]),example:n(()=>[a(se)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(Se)},{title:n(()=>[...t[5]||(t[5]=[r(" Invalid State ",-1)])]),example:n(()=>[a(de)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(fe)},{title:n(()=>[...t[6]||(t[6]=[r(" Custom Content ",-1)])]),example:n(()=>[a(ye)]),_:1},8,["raw-component"])])]))}});export{De as default};
