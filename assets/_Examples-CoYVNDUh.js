import{_ as I}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Dv0Lwgv7.js";import{a as g,b as S,c as o,_ as f}from"./SelectTrigger.vue_vue_type_script_setup_true_lang-CGMRsfoI.js";import{d as m,ap as M,o as p,a as s,H as n,a3 as v,a5 as C,u as e,am as $,an as q,g as w,T as L,a6 as B,ai as E,z as u,L as T,I as r,B as _,M as P,J as V,c as D,D as a,r as R,A as W}from"./DialogTitle.vue_vue_type_script_setup_true_lang-CaMH5FGq.js";import{_ as y}from"./SelectValue.vue_vue_type_script_setup_true_lang-SHCa2Wud.js";import{_ as N}from"./index-CZXqQDT0.js";import{_ as j}from"./FieldLabel.vue_vue_type_script_setup_true_lang-BkJ7885f.js";import{_ as k,a as z,b as A}from"./index-GOoXvCV-.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-DIiXhJ1v.js";import"./chevron-down-BK9fKQsP.js";import"./Collection-C_HKjXdo.js";import"./usePrimitiveElement-30gr_7Mg.js";import"./useFocusGuards-BaiBm_8F.js";import"./useTypeahead-49jAzyI6.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-DtVoYA5l.js";import"./Label.vue_vue_type_script_setup_true_lang-BUWdD9R3.js";const[H,J]=q("SelectGroup");var O=m({__name:"SelectGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(c){const l=c,t=M(void 0,"reka-select-group");return J({id:t}),(i,b)=>(p(),s(e($),C({role:"group"},l,{"aria-labelledby":e(t)}),{default:n(()=>[v(i.$slots,"default")]),_:3},16,["aria-labelledby"]))}}),U=O,K=m({__name:"SelectLabel",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(c){const l=c,t=H({id:""});return(i,b)=>(p(),s(e($),C(l,{id:e(t).id}),{default:n(()=>[v(i.$slots,"default")]),_:3},16,["id"]))}}),Q=K,X=m({__name:"SelectSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(c){const l=c;return(t,i)=>(p(),s(e($),C({"aria-hidden":"true"},l),{default:n(()=>[v(t.$slots,"default")]),_:3},16))}}),Y=X;const Z=w("chart-bar",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);const ee=w("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);const te=w("chart-pie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]),d=m({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{}},setup(c){const l=c;return(t,i)=>(p(),s(e(U),C({"data-slot":"select-group"},l),{default:n(()=>[v(t.$slots,"default")]),_:3},16))}}),F=m({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(c){const l=c;return(t,i)=>(p(),s(e(Q),{"data-slot":"select-label",class:L(e(B)("text-muted-foreground px-2 py-1.5 text-xs",l.class))},{default:n(()=>[v(t.$slots,"default")]),_:3},8,["class"]))}}),ae=m({__name:"SelectSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(c){const l=c,t=E(l,"class");return(i,b)=>(p(),s(e(Y),C({"data-slot":"select-separator"},e(t),{class:e(B)("bg-border pointer-events-none -mx-1 my-1 h-px",l.class)}),null,16,["class"]))}}),ne={key:2,class:"ml-4 flex list-disc flex-col gap-1"},re=m({__name:"FieldError",props:{class:{},errors:{}},setup(c){const l=c,t=D(()=>!l.errors||l.errors.length===0?null:l.errors.length===1&&l.errors[0]?.message?l.errors[0].message:l.errors.some(i=>i?.message)?l.errors:null);return(i,b)=>i.$slots.default||t.value?(p(),u("div",{key:0,role:"alert","data-slot":"field-error",class:L(e(B)("text-destructive text-sm font-normal",l.class))},[i.$slots.default?v(i.$slots,"default",{key:0}):typeof t.value=="string"?(p(),u(T,{key:1},[r(_(t.value),1)],64)):Array.isArray(t.value)?(p(),u("ul",ne,[(p(!0),u(T,null,P(t.value,(G,x)=>(p(),u("li",{key:x},_(G?.message),1))),128))])):V("",!0)],2)):V("",!0)}}),h=m({__name:"ItemDescription",props:{class:{}},setup(c){const l=c;return(t,i)=>(p(),u("p",{"data-slot":"item-description",class:L(e(B)("text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",l.class))},[v(t.$slots,"default")],2))}}),le=m({__name:"SelectBasic",setup(c){return(l,t)=>(p(),s(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(o),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1}),a(e(o),{value:"grapes",disabled:!0,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Grapes ",-1)])]),_:1}),a(e(o),{value:"pineapple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),oe=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,ce=m({__name:"SelectWithIcons",setup(c){return(l,t)=>(p(),s(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{size:"sm","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select a chart type","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(o),{value:"line","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(ee)),t[0]||(t[0]=r(" Line ",-1))]),_:1}),a(e(o),{value:"bar","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(Z)),t[1]||(t[1]=r(" Bar ",-1))]),_:1}),a(e(o),{value:"pie","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(te)),t[2]||(t[2]=r(" Pie ",-1))]),_:1})]),_:1})]),_:1})]),_:1}))}}),pe=`<script setup lang="ts">
import { ChartLineIcon, ChartBarIcon, ChartPieIcon } from "lucide-vue-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,ie=m({__name:"SelectWithGroups",setup(c){return(l,t)=>(p(),s(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(F),{"data-component-x-ray-trigger":"SelectLabel"},{default:n(()=>[...t[0]||(t[0]=[r("Fruits",-1)])]),_:1}),a(e(o),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Blueberry ",-1)])]),_:1})]),_:1}),a(e(ae),{"data-component-x-ray-trigger":"SelectSeparator"}),a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(F),{"data-component-x-ray-trigger":"SelectLabel"},{default:n(()=>[...t[4]||(t[4]=[r("Vegetables",-1)])]),_:1}),a(e(o),{value:"carrot","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[5]||(t[5]=[r(" Carrot ",-1)])]),_:1}),a(e(o),{value:"broccoli","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[6]||(t[6]=[r(" Broccoli ",-1)])]),_:1}),a(e(o),{value:"spinach","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[7]||(t[7]=[r(" Spinach ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),me=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,se=m({__name:"SelectLargeList",setup(c){return(l,t)=>(p(),s(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select an item","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[(p(),u(T,null,P(100,i=>a(e(o),{key:i,value:`item-${i-1}`,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[r(" Item "+_(i-1),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),ue=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,de={class:"flex flex-col gap-4"},ge=m({__name:"SelectSizes",setup(c){return(l,t)=>(p(),u("div",de,[a(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{size:"sm","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Small size","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(o),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{size:"default","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Default size","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(o),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[5]||(t[5]=[r(" Blueberry ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]))}}),Se=`<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,fe={class:"flex flex-col gap-4"},ye=m({__name:"SelectInvalid",setup(c){return(l,t)=>(p(),u("div",fe,[a(e(f),{"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{"aria-invalid":!0,"data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select a fruit","data-component-x-ray-trigger":"SelectValue"})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[a(e(o),{value:"apple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[0]||(t[0]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[1]||(t[1]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[2]||(t[2]=[r(" Blueberry ",-1)])]),_:1}),a(e(o),{value:"grapes","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[3]||(t[3]=[r(" Grapes ",-1)])]),_:1}),a(e(o),{value:"pineapple","data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[...t[4]||(t[4]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(N),{"data-invalid":""},{default:n(()=>[a(e(j),{"html-for":"select-fruit-invalid"},{default:n(()=>[...t[5]||(t[5]=[r(" Favorite Fruit ",-1)])]),_:1}),a(e(f),null,{default:n(()=>[a(e(g),{id:"select-fruit-invalid","aria-invalid":!0},{default:n(()=>[a(e(y),{placeholder:"Select a fruit"})]),_:1}),a(e(S),null,{default:n(()=>[a(e(d),null,{default:n(()=>[a(e(o),{value:"apple"},{default:n(()=>[...t[6]||(t[6]=[r(" Apple ",-1)])]),_:1}),a(e(o),{value:"banana"},{default:n(()=>[...t[7]||(t[7]=[r(" Banana ",-1)])]),_:1}),a(e(o),{value:"blueberry"},{default:n(()=>[...t[8]||(t[8]=[r(" Blueberry ",-1)])]),_:1}),a(e(o),{value:"grapes"},{default:n(()=>[...t[9]||(t[9]=[r(" Grapes ",-1)])]),_:1}),a(e(o),{value:"pineapple"},{default:n(()=>[...t[10]||(t[10]=[r(" Pineapple ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(re),{errors:[{message:"Please select a valid fruit."}]})]),_:1})]))}}),xe=`<script setup lang="ts">
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
`,Ie=m({__name:"SelectPlan",setup(c){const l=[{name:"Starter",description:"Perfect for individuals getting started."},{name:"Professional",description:"Ideal for growing teams and businesses."},{name:"Enterprise",description:"Advanced features for large organizations."}],t=R(l[0]?.name),i=D(()=>l.find(b=>b.name===t.value));return(b,G)=>(p(),s(e(f),{modelValue:t.value,"onUpdate:modelValue":G[0]||(G[0]=x=>t.value=x),"data-component-x-ray":"Select"},{default:n(()=>[a(e(g),{class:"h-auto! w-72","data-component-x-ray-trigger":"SelectTrigger"},{default:n(()=>[a(e(y),{placeholder:"Select a plan","data-component-x-ray-trigger":"SelectValue"},{default:n(()=>[i.value?(p(),s(e(k),{key:0,size:"sm",class:"w-full p-0"},{default:n(()=>[a(e(z),{class:"gap-0","data-component-x-ray-trigger":"ItemContent"},{default:n(()=>[a(e(A),{"data-component-x-ray-trigger":"ItemTitle"},{default:n(()=>[r(_(i.value.name),1)]),_:1}),a(e(h),{class:"text-xs","data-component-x-ray-trigger":"Itemdescription"},{default:n(()=>[r(_(i.value.description),1)]),_:1})]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1}),a(e(S),{"data-component-x-ray-trigger":"SelectContent"},{default:n(()=>[a(e(d),{"data-component-x-ray-trigger":"SelectGroup"},{default:n(()=>[(p(),u(T,null,P(l,x=>a(e(o),{key:x.name,value:x.name,"data-component-x-ray-trigger":"SelectItem"},{default:n(()=>[a(e(k),{size:"sm",class:"w-full p-0","data-component-x-ray-trigger":"Item"},{default:n(()=>[a(e(z),{class:"gap-0","data-component-x-ray-trigger":"ItemContent"},{default:n(()=>[a(e(A),{"data-component-x-ray-trigger":"ItemTitle"},{default:n(()=>[r(_(x.name),1)]),_:2},1024),a(e(h),{class:"text-xs","data-component-x-ray-trigger":"ItemDescription"},{default:n(()=>[r(_(x.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),_e=`<script setup lang="ts">
import { computed, ref } from "vue";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
`,ve={class:"@container max-w-200 mx-auto"},be={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},qe=m({__name:"_Examples",setup(c){return(l,t)=>(p(),u("div",ve,[W("div",be,[a(I,{"raw-component":e(oe)},{title:n(()=>[...t[0]||(t[0]=[r(" Basic ",-1)])]),example:n(()=>[a(le)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(pe)},{title:n(()=>[...t[1]||(t[1]=[r(" With Icons ",-1)])]),example:n(()=>[a(ce)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(me)},{title:n(()=>[...t[2]||(t[2]=[r(" With Groups ",-1)])]),example:n(()=>[a(ie)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(ue)},{title:n(()=>[...t[3]||(t[3]=[r(" Large List ",-1)])]),example:n(()=>[a(se)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(Se)},{title:n(()=>[...t[4]||(t[4]=[r(" Sizes ",-1)])]),example:n(()=>[a(ge)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(xe)},{title:n(()=>[...t[5]||(t[5]=[r(" Invalid State ",-1)])]),example:n(()=>[a(ye)]),_:1},8,["raw-component"]),a(I,{"raw-component":e(_e)},{title:n(()=>[...t[6]||(t[6]=[r(" Custom Content ",-1)])]),example:n(()=>[a(Ie)]),_:1},8,["raw-component"])])]))}});export{qe as default};
