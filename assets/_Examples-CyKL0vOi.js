import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{_ as u}from"./Checkbox.vue_vue_type_script_setup_true_lang-2341J6fJ.js";import{_ as s}from"./index-CVa6A2b7.js";import{_ as d}from"./Label.vue_vue_type_script_setup_true_lang-D8lI5-mV.js";import{d as r,o as m,a as c,H as t,D as a,u as n,I as o,z as _,A as x}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{_ as b}from"./Input.vue_vue_type_script_setup_true_lang-Bt30ug1V.js";import{_ as f}from"./Textarea.vue_vue_type_script_setup_true_lang-BE28UUP-.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./VisuallyHidden-fIfXuLIO.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";import"./isValueEqualOrExist-DQKNVA7s.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-B-0zwMhs.js";import"./VisuallyHiddenInput-Cp_QWRvj.js";import"./usePrimitiveElement-BpSa_wbz.js";import"./RovingFocusItem-BFksLdot.js";import"./Collection-_O-VPQsQ.js";import"./utils-CtWPBAxg.js";import"./RovingFocusGroup-v_WEeGqd.js";const g=r({__name:"LabelWithCheckbox",setup(l){return(i,e)=>(m(),c(n(s),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[a(n(u),{id:"label-demo-terms","data-component-x-ray-trigger":"Checkbox"}),a(n(d),{for:"label-demo-terms","data-component-x-ray":"Label"},{default:t(()=>[...e[0]||(e[0]=[o(" Accept terms and conditions ",-1)])]),_:1})]),_:1}))}}),L=`<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
<\/script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Checkbox id="label-demo-terms" data-component-x-ray-trigger="Checkbox" />
    <Label for="label-demo-terms" data-component-x-ray="Label"> Accept terms and conditions </Label>
  </Field>
</template>
`,y=r({__name:"LabelWithInput",setup(l){return(i,e)=>(m(),c(n(s),null,{default:t(()=>[a(n(d),{for:"label-demo-username","data-component-x-ray":"Label"},{default:t(()=>[...e[0]||(e[0]=[o("Username",-1)])]),_:1}),a(n(b),{id:"label-demo-username",placeholder:"Username","data-component-x-ray-trigger":"Input"})]),_:1}))}}),F=`<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<\/script>

<template>
  <Field>
    <Label for="label-demo-username" data-component-x-ray="Label">Username</Label>
    <Input id="label-demo-username" placeholder="Username" data-component-x-ray-trigger="Input" />
  </Field>
</template>
`,h=r({__name:"LabelDisabled",setup(l){return(i,e)=>(m(),c(n(s),{"data-disabled":!0,"data-component-x-ray":"Field"},{default:t(()=>[a(n(d),{for:"label-demo-disabled","data-component-x-ray":"Label"},{default:t(()=>[...e[0]||(e[0]=[o(" Disabled ",-1)])]),_:1}),a(n(b),{id:"label-demo-disabled",placeholder:"Disabled",disabled:"","data-component-x-ray-trigger":"Input"})]),_:1}))}}),w=`<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
`,I=r({__name:"LabelWithTextarea",setup(l){return(i,e)=>(m(),c(n(s),{"data-component-x-ray":"Field"},{default:t(()=>[a(n(d),{for:"label-demo-message","data-component-x-ray":"Label"},{default:t(()=>[...e[0]||(e[0]=[o(" Message ",-1)])]),_:1}),a(n(f),{id:"label-demo-message",placeholder:"Message","data-component-x-ray-trigger":"Textarea"})]),_:1}))}}),k=`<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
`,$={class:"@container max-w-250 mx-auto"},C={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Y=r({__name:"_Examples",setup(l){return(i,e)=>(m(),_("div",$,[x("div",C,[a(p,{"raw-component":n(L)},{title:t(()=>[...e[0]||(e[0]=[o(" With Checkbox ",-1)])]),example:t(()=>[a(g)]),_:1},8,["raw-component"]),a(p,{"raw-component":n(F)},{title:t(()=>[...e[1]||(e[1]=[o(" With Input ",-1)])]),example:t(()=>[a(y)]),_:1},8,["raw-component"]),a(p,{"raw-component":n(w)},{title:t(()=>[...e[2]||(e[2]=[o(" Disabled ",-1)])]),example:t(()=>[a(h)]),_:1},8,["raw-component"]),a(p,{"raw-component":n(k)},{title:t(()=>[...e[3]||(e[3]=[o(" With Textarea ",-1)])]),example:t(()=>[a(I)]),_:1},8,["raw-component"])])]))}});export{Y as default};
