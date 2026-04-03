import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{_ as p}from"./index-q-LJsFB9.js";import{_ as m}from"./FieldLabel.vue_vue_type_script_setup_true_lang-DFhQE5-v.js";import{_ as l}from"./Switch.vue_vue_type_script_setup_true_lang-CNGmpdb3.js";import{d as o,o as r,e as _,H as i,D as t,u as n,I as a,z as f,A as h}from"./highlight-DXRdThM2.js";import{_ as u}from"./FieldContent.vue_vue_type_script_setup_true_lang-Ee4kzXg-.js";import{_ as w}from"./FieldDescription.vue_vue_type_script_setup_true_lang-CGq4oDgo.js";import{_ as g}from"./FieldTitle.vue_vue_type_script_setup_true_lang-BoKJgJUH.js";import{_ as x}from"./Label.vue_vue_type_script_setup_true_lang-DEtdywft.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./useFormControl-4XoA_PSt.js";import"./VisuallyHiddenInput-UsrU_XqS.js";import"./usePrimitiveElement-DBla2SSk.js";const F=o({__name:"SwitchBasic",setup(s){return(c,e)=>(r(),_(n(p),{orientation:"horizontal","data-component-x-ray":"Field"},{default:i(()=>[t(n(l),{id:"switch-basic","data-component-x-ray-trigger":"Switch"}),t(n(m),{for:"switch-basic","data-component-x-ray":"FieldLabel"},{default:i(()=>[...e[0]||(e[0]=[a(" Airplane Mode ",-1)])]),_:1})]),_:1}))}}),b=`<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Switch } from "@/shared/components/ui/switch";
<\/script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Switch id="switch-basic" data-component-x-ray-trigger="Switch" />
    <FieldLabel for="switch-basic" data-component-x-ray="FieldLabel"> Airplane Mode </FieldLabel>
  </Field>
</template>
`,y=o({__name:"SwitchWithDescription",setup(s){return(c,e)=>(r(),_(n(m),{for:"switch-focus-mode","data-component-x-ray-trigger":"FieldLabel"},{default:i(()=>[t(n(p),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:i(()=>[t(n(u),{"data-component-x-ray-trigger":"FieldContent"},{default:i(()=>[t(n(g),{"data-component-x-ray-trigger":"FieldLabel"},{default:i(()=>[...e[0]||(e[0]=[a("Share across devices",-1)])]),_:1}),t(n(w),{"data-component-x-ray-trigger":"FieldDescription"},{default:i(()=>[...e[1]||(e[1]=[a(" Focus is shared across devices, and turns off when you leave the app. ",-1)])]),_:1})]),_:1}),t(n(l),{id:"switch-focus-mode","data-component-x-ray-trigger":"Switch"})]),_:1})]),_:1}))}}),S=`<script setup lang="ts">
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/shared/components/ui/field";
import { Switch } from "@/shared/components/ui/switch";
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
`,L={class:"flex flex-col gap-12"},v={class:"flex items-center gap-2"},D=o({__name:"SwitchDisabled",setup(s){return(c,e)=>(r(),f("div",L,[h("div",v,[t(n(l),{id:"switch-disabled-unchecked",disabled:!0,"data-component-x-ray-trigger":"Switch"}),t(n(x),{for:"switch-disabled-unchecked","data-component-x-ray":"Label"},{default:i(()=>[...e[0]||(e[0]=[a(" Disabled",-1)])]),_:1})])]))}}),$=`<script setup lang="ts">
import { Label } from "@/shared/components/ui/label";
import { Switch } from "@/shared/components/ui/switch";
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
`,k={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},q=o({__name:"_Examples",setup(s){return(c,e)=>(r(),f("div",k,[h("div",B,[t(d,{"raw-component":n(b)},{title:i(()=>[...e[0]||(e[0]=[a(" Basic ",-1)])]),example:i(()=>[t(F)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(S)},{title:i(()=>[...e[1]||(e[1]=[a(" With description ",-1)])]),example:i(()=>[t(y)]),_:1},8,["raw-component"]),t(d,{"raw-component":n($)},{title:i(()=>[...e[2]||(e[2]=[a(" Disabled ",-1)])]),example:i(()=>[t(D)]),_:1},8,["raw-component"])])]))}});export{q as default};
