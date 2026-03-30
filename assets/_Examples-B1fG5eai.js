import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DXWJnCy0.js";import{_ as p}from"./index-CbcVre49.js";import{_ as m}from"./FieldLabel.vue_vue_type_script_setup_true_lang-k22y6CnO.js";import{_ as l}from"./Switch.vue_vue_type_script_setup_true_lang-DyRIj5Tx.js";import{d as o,o as r,a as _,H as i,D as e,u as n,I as a,z as f,A as u}from"./DialogTitle.vue_vue_type_script_setup_true_lang-qm1obxa6.js";import{_ as h}from"./FieldContent.vue_vue_type_script_setup_true_lang-DnV6vyjI.js";import{_ as w}from"./FieldDescription.vue_vue_type_script_setup_true_lang-B3Gm7ig_.js";import{_ as g}from"./FieldTitle.vue_vue_type_script_setup_true_lang-DUdJWdP5.js";import{_ as x}from"./Label.vue_vue_type_script_setup_true_lang-DQ8JCBbf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BQ5IMRBD.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-B8xttiRE.js";import"./VisuallyHidden-DHKEUU1O.js";import"./useFormControl-a77cAsIU.js";import"./VisuallyHiddenInput-CpfBIrWj.js";import"./usePrimitiveElement-CYhM1I7-.js";const F=o({__name:"SwitchBasic",setup(s){return(c,t)=>(r(),_(n(p),{orientation:"horizontal","data-component-x-ray":"Field"},{default:i(()=>[e(n(l),{id:"switch-basic","data-component-x-ray-trigger":"Switch"}),e(n(m),{for:"switch-basic","data-component-x-ray":"FieldLabel"},{default:i(()=>[...t[0]||(t[0]=[a(" Airplane Mode ",-1)])]),_:1})]),_:1}))}}),b=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
<\/script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Switch id="switch-basic" data-component-x-ray-trigger="Switch" />
    <FieldLabel for="switch-basic" data-component-x-ray="FieldLabel"> Airplane Mode </FieldLabel>
  </Field>
</template>
`,y=o({__name:"SwitchWithDescription",setup(s){return(c,t)=>(r(),_(n(m),{for:"switch-focus-mode","data-component-x-ray-trigger":"FieldLabel"},{default:i(()=>[e(n(p),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:i(()=>[e(n(h),{"data-component-x-ray-trigger":"FieldContent"},{default:i(()=>[e(n(g),{"data-component-x-ray-trigger":"FieldLabel"},{default:i(()=>[...t[0]||(t[0]=[a("Share across devices",-1)])]),_:1}),e(n(w),{"data-component-x-ray-trigger":"FieldDescription"},{default:i(()=>[...t[1]||(t[1]=[a(" Focus is shared across devices, and turns off when you leave the app. ",-1)])]),_:1})]),_:1}),e(n(l),{id:"switch-focus-mode","data-component-x-ray-trigger":"Switch"})]),_:1})]),_:1}))}}),S=`<script setup lang="ts">
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
<\/script>

<template>
  <FieldLabel for="switch-focus-mode" data-component-x-ray-trigger="FieldLabel">
    <Field orientation="horizontal" data-component-x-ray-trigger="Field">
      <FieldContent data-component-x-ray-trigger="FieldContent">
        <FieldTitle data-component-x-ray-trigger="FieldLabel">Share across devices</FieldTitle>
        <FieldDescription data-component-x-ray-trigger="FieldDescription">
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" data-component-x-ray-trigger="Switch" />
    </Field>
  </FieldLabel>
</template>
`,L={class:"flex flex-col gap-12"},v={class:"flex items-center gap-2"},D=o({__name:"SwitchDisabled",setup(s){return(c,t)=>(r(),f("div",L,[u("div",v,[e(n(l),{id:"switch-disabled-unchecked",disabled:!0,"data-component-x-ray-trigger":"Switch"}),e(n(x),{for:"switch-disabled-unchecked","data-component-x-ray":"Label"},{default:i(()=>[...t[0]||(t[0]=[a(" Disabled",-1)])]),_:1})])]))}}),$=`<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
<\/script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-center gap-2">
      <Switch
        id="switch-disabled-unchecked"
        :disabled="true"
        data-component-x-ray-trigger="Switch"
      />
      <Label for="switch-disabled-unchecked" data-component-x-ray="Label"> Disabled</Label>
    </div>
  </div>
</template>
`,k={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},J=o({__name:"_Examples",setup(s){return(c,t)=>(r(),f("div",k,[u("div",B,[e(d,{"raw-component":n(b)},{title:i(()=>[...t[0]||(t[0]=[a(" Basic ",-1)])]),example:i(()=>[e(F)]),_:1},8,["raw-component"]),e(d,{"raw-component":n(S)},{title:i(()=>[...t[1]||(t[1]=[a(" With description ",-1)])]),example:i(()=>[e(y)]),_:1},8,["raw-component"]),e(d,{"raw-component":n($)},{title:i(()=>[...t[2]||(t[2]=[a(" Disabled ",-1)])]),example:i(()=>[e(D)]),_:1},8,["raw-component"])])]))}});export{J as default};
