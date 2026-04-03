import{_ as s}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{_ as u}from"./Checkbox.vue_vue_type_script_setup_true_lang-D26nC9F4.js";import{_ as d}from"./index-q-LJsFB9.js";import{_ as p}from"./Label.vue_vue_type_script_setup_true_lang-DEtdywft.js";import{d as r,o as l,e as c,H as a,D as t,u as n,I as o,z as _,A as x}from"./highlight-DXRdThM2.js";import{_ as b}from"./Input.vue_vue_type_script_setup_true_lang-BcfNoD41.js";import{_ as f}from"./Textarea.vue_vue_type_script_setup_true_lang-Bjm-XrnS.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./isValueEqualOrExist-Cli9G3Za.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-4XoA_PSt.js";import"./VisuallyHiddenInput-UsrU_XqS.js";import"./usePrimitiveElement-DBla2SSk.js";import"./RovingFocusItem-BYXyurAd.js";import"./Collection-CX6IziOc.js";import"./utils-Cjg6PTZ9.js";import"./RovingFocusGroup-c-SW99X5.js";const g=r({__name:"LabelWithCheckbox",setup(m){return(i,e)=>(l(),c(n(d),{orientation:"horizontal","data-component-x-ray":"Field"},{default:a(()=>[t(n(u),{id:"label-demo-terms","data-component-x-ray-trigger":"Checkbox"}),t(n(p),{for:"label-demo-terms","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Accept terms and conditions ",-1)])]),_:1})]),_:1}))}}),h=`<script setup lang="ts">
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field } from "@/shared/components/ui/field";
import { Label } from "@/shared/components/ui/label";
<\/script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Checkbox id="label-demo-terms" data-component-x-ray-trigger="Checkbox" />
    <Label for="label-demo-terms" data-component-x-ray="Label"> Accept terms and conditions </Label>
  </Field>
</template>
`,L=r({__name:"LabelWithInput",setup(m){return(i,e)=>(l(),c(n(d),null,{default:a(()=>[t(n(p),{for:"label-demo-username","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o("Username",-1)])]),_:1}),t(n(b),{id:"label-demo-username",placeholder:"Username","data-component-x-ray-trigger":"Input"})]),_:1}))}}),y=`<script setup lang="ts">
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
<\/script>

<template>
  <Field>
    <Label for="label-demo-username" data-component-x-ray="Label">Username</Label>
    <Input id="label-demo-username" placeholder="Username" data-component-x-ray-trigger="Input" />
  </Field>
</template>
`,F=r({__name:"LabelDisabled",setup(m){return(i,e)=>(l(),c(n(d),{"data-disabled":!0,"data-component-x-ray":"Field"},{default:a(()=>[t(n(p),{for:"label-demo-disabled","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Disabled ",-1)])]),_:1}),t(n(b),{id:"label-demo-disabled",placeholder:"Disabled",disabled:"","data-component-x-ray-trigger":"Input"})]),_:1}))}}),w=`<script setup lang="ts">
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
<\/script>

<template>
  <Field :data-disabled="true" data-component-x-ray="Field">
    <Label for="label-demo-disabled" data-component-x-ray="Label"> Disabled </Label>
    <Input
      id="label-demo-disabled"
      placeholder="Disabled"
      disabled
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
`,I=r({__name:"LabelWithTextarea",setup(m){return(i,e)=>(l(),c(n(d),{"data-component-x-ray":"Field"},{default:a(()=>[t(n(p),{for:"label-demo-message","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Message ",-1)])]),_:1}),t(n(f),{id:"label-demo-message",placeholder:"Message","data-component-x-ray-trigger":"Textarea"})]),_:1}))}}),k=`<script setup lang="ts">
import { Field } from "@/shared/components/ui/field";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <Label for="label-demo-message" data-component-x-ray="Label"> Message </Label>
    <Textarea
      id="label-demo-message"
      placeholder="Message"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
`,$={class:"@container max-w-200 mx-auto"},C={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},J=r({__name:"_Examples",setup(m){return(i,e)=>(l(),_("div",$,[x("div",C,[t(s,{"raw-component":n(h)},{title:a(()=>[...e[0]||(e[0]=[o(" With Checkbox ",-1)])]),example:a(()=>[t(g)]),_:1},8,["raw-component"]),t(s,{"raw-component":n(y)},{title:a(()=>[...e[1]||(e[1]=[o(" With Input ",-1)])]),example:a(()=>[t(L)]),_:1},8,["raw-component"]),t(s,{"raw-component":n(w)},{title:a(()=>[...e[2]||(e[2]=[o(" Disabled ",-1)])]),example:a(()=>[t(F)]),_:1},8,["raw-component"]),t(s,{"raw-component":n(k)},{title:a(()=>[...e[3]||(e[3]=[o(" With Textarea ",-1)])]),example:a(()=>[t(I)]),_:1},8,["raw-component"])])]))}});export{J as default};
