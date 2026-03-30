import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DM92uT3q.js";import{_ as u}from"./Checkbox.vue_vue_type_script_setup_true_lang-89j5atjj.js";import{_ as s}from"./index-CMtQWdH2.js";import{_ as d}from"./Label.vue_vue_type_script_setup_true_lang-DsL9Eqt1.js";import{d as r,o as l,a as c,H as a,D as t,u as n,I as o,z as _,A as x}from"./DialogTitle.vue_vue_type_script_setup_true_lang-C_9FSQhf.js";import{_ as b}from"./Input.vue_vue_type_script_setup_true_lang-DL-KWtmP.js";import{_ as f}from"./Textarea.vue_vue_type_script_setup_true_lang-Bu4SoG8H.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C44kN4yO.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxLZ1jLL.js";import"./VisuallyHidden-CLlRR9c8.js";import"./isValueEqualOrExist-C_w1oaoe.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-DceCPepB.js";import"./VisuallyHiddenInput-CyMtalLq.js";import"./usePrimitiveElement-BHBbwdEN.js";import"./RovingFocusItem-oxTNTS7z.js";import"./Collection-zSMwjtqR.js";import"./utils-4m1nVd7-.js";import"./RovingFocusGroup-DAfsBAJO.js";const g=r({__name:"LabelWithCheckbox",setup(m){return(i,e)=>(l(),c(n(s),{orientation:"horizontal","data-component-x-ray":"Field"},{default:a(()=>[t(n(u),{id:"label-demo-terms","data-component-x-ray-trigger":"Checkbox"}),t(n(d),{for:"label-demo-terms","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Accept terms and conditions ",-1)])]),_:1})]),_:1}))}}),L=`<script setup lang="ts">
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
`,y=r({__name:"LabelWithInput",setup(m){return(i,e)=>(l(),c(n(s),null,{default:a(()=>[t(n(d),{for:"label-demo-username","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o("Username",-1)])]),_:1}),t(n(b),{id:"label-demo-username",placeholder:"Username","data-component-x-ray-trigger":"Input"})]),_:1}))}}),F=`<script setup lang="ts">
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
`,h=r({__name:"LabelDisabled",setup(m){return(i,e)=>(l(),c(n(s),{"data-disabled":!0,"data-component-x-ray":"Field"},{default:a(()=>[t(n(d),{for:"label-demo-disabled","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Disabled ",-1)])]),_:1}),t(n(b),{id:"label-demo-disabled",placeholder:"Disabled",disabled:"","data-component-x-ray-trigger":"Input"})]),_:1}))}}),w=`<script setup lang="ts">
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
`,I=r({__name:"LabelWithTextarea",setup(m){return(i,e)=>(l(),c(n(s),{"data-component-x-ray":"Field"},{default:a(()=>[t(n(d),{for:"label-demo-message","data-component-x-ray":"Label"},{default:a(()=>[...e[0]||(e[0]=[o(" Message ",-1)])]),_:1}),t(n(f),{id:"label-demo-message",placeholder:"Message","data-component-x-ray-trigger":"Textarea"})]),_:1}))}}),k=`<script setup lang="ts">
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
`,$={class:"@container max-w-200 mx-auto"},C={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},O=r({__name:"_Examples",setup(m){return(i,e)=>(l(),_("div",$,[x("div",C,[t(p,{"raw-component":n(L)},{title:a(()=>[...e[0]||(e[0]=[o(" With Checkbox ",-1)])]),example:a(()=>[t(g)]),_:1},8,["raw-component"]),t(p,{"raw-component":n(F)},{title:a(()=>[...e[1]||(e[1]=[o(" With Input ",-1)])]),example:a(()=>[t(y)]),_:1},8,["raw-component"]),t(p,{"raw-component":n(w)},{title:a(()=>[...e[2]||(e[2]=[o(" Disabled ",-1)])]),example:a(()=>[t(h)]),_:1},8,["raw-component"]),t(p,{"raw-component":n(k)},{title:a(()=>[...e[3]||(e[3]=[o(" With Textarea ",-1)])]),example:a(()=>[t(I)]),_:1},8,["raw-component"])])]))}});export{O as default};
