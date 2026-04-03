import{_ as s}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{a,b as e,_ as T,c as o}from"./InputOTPSlot.vue_vue_type_script_setup_true_lang-C8RJTJEa.js";import{d as r,o as l,e as O,H as p,D as t,u as n,b as x,z as _,A as c,I}from"./highlight-DXRdThM2.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./minus-uaL1vF-k.js";const S=r({__name:"InputOTPBasic",setup(d){return(i,u)=>(l(),O(n(T),{maxlength:6},{default:p(()=>[t(n(a),null,{default:p(()=>[t(n(e),{index:0}),t(n(e),{index:1}),t(n(e),{index:2}),t(n(e),{index:3}),t(n(e),{index:4}),t(n(e),{index:5})]),_:1})]),_:1}))}}),f=`<script setup lang="ts">
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/components/ui/input-otp";
<\/script>

<template>
  <InputOTP :maxlength="6">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
      <InputOTPSlot :index="2" />
      <InputOTPSlot :index="3" />
      <InputOTPSlot :index="4" />
      <InputOTPSlot :index="5" />
    </InputOTPGroup>
  </InputOTP>
</template>
`,v=r({__name:"InputOTPWithSeparator",setup(d){const i=x("123456");return(u,P)=>(l(),O(n(T),{modelValue:i.value,"onUpdate:modelValue":P[0]||(P[0]=m=>i.value=m),maxlength:6},{default:p(()=>[t(n(a),null,{default:p(()=>[t(n(e),{index:0}),t(n(e),{index:1})]),_:1}),t(n(o)),t(n(a),null,{default:p(()=>[t(n(e),{index:2}),t(n(e),{index:3})]),_:1}),t(n(o)),t(n(a),null,{default:p(()=>[t(n(e),{index:4}),t(n(e),{index:5})]),_:1})]),_:1},8,["modelValue"]))}}),G=`<script setup lang="ts">
import { ref } from "vue";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";

const value = ref("123456");
<\/script>

<template>
  <InputOTP v-model="value" :maxlength="6">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="2" />
      <InputOTPSlot :index="3" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="4" />
      <InputOTPSlot :index="5" />
    </InputOTPGroup>
  </InputOTP>
</template>
`,g=r({__name:"InputOTPDisabled",setup(d){return(i,u)=>(l(),O(n(T),{maxlength:6,disabled:!0,value:"123456"},{default:p(()=>[t(n(a),null,{default:p(()=>[t(n(e),{index:0}),t(n(e),{index:1}),t(n(e),{index:2})]),_:1}),t(n(o)),t(n(a),null,{default:p(()=>[t(n(e),{index:3}),t(n(e),{index:4}),t(n(e),{index:5})]),_:1})]),_:1}))}}),w=`<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
<\/script>

<template>
  <InputOTP :maxlength="6" :disabled="true" value="123456">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
      <InputOTPSlot :index="2" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="3" />
      <InputOTPSlot :index="4" />
      <InputOTPSlot :index="5" />
    </InputOTPGroup>
  </InputOTP>
</template>
`,h=r({__name:"InputOTPInvalid",setup(d){return(i,u)=>(l(),O(n(T),{maxlength:6},{default:p(()=>[t(n(a),null,{default:p(()=>[t(n(e),{index:0,"aria-invalid":!0}),t(n(e),{index:1,"aria-invalid":!0})]),_:1}),t(n(o)),t(n(a),null,{default:p(()=>[t(n(e),{index:2,"aria-invalid":!0}),t(n(e),{index:3,"aria-invalid":!0})]),_:1}),t(n(o)),t(n(a),null,{default:p(()=>[t(n(e),{index:4,"aria-invalid":!0}),t(n(e),{index:5,"aria-invalid":!0})]),_:1})]),_:1}))}}),$=`<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
<\/script>

<template>
  <InputOTP :maxlength="6">
    <InputOTPGroup>
      <InputOTPSlot :index="0" :aria-invalid="true" />
      <InputOTPSlot :index="1" :aria-invalid="true" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="2" :aria-invalid="true" />
      <InputOTPSlot :index="3" :aria-invalid="true" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="4" :aria-invalid="true" />
      <InputOTPSlot :index="5" :aria-invalid="true" />
    </InputOTPGroup>
  </InputOTP>
</template>
`,b={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},W=r({__name:"_Examples",setup(d){return(i,u)=>(l(),_("div",b,[c("div",B,[t(s,{"raw-component":n(f)},{title:p(()=>[...u[0]||(u[0]=[I(" Basic ",-1)])]),example:p(()=>[t(S)]),_:1},8,["raw-component"]),t(s,{"raw-component":n(G)},{title:p(()=>[...u[1]||(u[1]=[I(" With Separator ",-1)])]),example:p(()=>[t(v)]),_:1},8,["raw-component"]),t(s,{"raw-component":n(w)},{title:p(()=>[...u[2]||(u[2]=[I(" Disabled ",-1)])]),example:p(()=>[t(g)]),_:1},8,["raw-component"]),t(s,{"raw-component":n($)},{title:p(()=>[...u[3]||(u[3]=[I(" Invalid ",-1)])]),example:p(()=>[t(h)]),_:1},8,["raw-component"])])]))}});export{W as default};
