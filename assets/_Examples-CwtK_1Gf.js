import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DM92uT3q.js";import{$ as l,a as f}from"./useCalendar-DIj1K0M0.js";import{_}from"./RangeCalendarPrevButton.vue_vue_type_script_setup_true_lang-g6UNLzc6.js";import{d as s,o as m,a as u,u as c,r as g,z as x,A as R,D as o,H as r,I as $}from"./DialogTitle.vue_vue_type_script_setup_true_lang-C_9FSQhf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C44kN4yO.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxLZ1jLL.js";import"./VisuallyHidden-CLlRR9c8.js";import"./chevron-right-iRhPDQPF.js";import"./chevron-left-BXl_tL3q.js";import"./useKbd-kRIii9yh.js";import"./usePrimitiveElement-BHBbwdEN.js";import"./useLocale-2iZwPsEY.js";const y=s({__name:"RangeCalendarBasic",setup(d){const e=l(f()),a=e.add({days:7}),t=g({start:e,end:a});return(v,n)=>(m(),u(c(_),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),class:"w-max mx-auto","data-component-x-ray":"RangeCalendar"},null,8,["modelValue"]))}}),C=`<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateRange } from "reka-ui";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/components/ui/range-calendar";

const start = today(getLocalTimeZone());
const end = start.add({ days: 7 });

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>;
<\/script>

<template>
  <RangeCalendar v-model="dateRange" class="w-max mx-auto" data-component-x-ray="RangeCalendar" />
</template>
`,w={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},H=s({__name:"_Examples",setup(d){return(e,a)=>(m(),x("div",w,[R("div",B,[o(p,{"raw-component":c(C)},{title:r(()=>[...a[0]||(a[0]=[$(" Basic ",-1)])]),example:r(()=>[o(y)]),_:1},8,["raw-component"])])]))}});export{H as default};
