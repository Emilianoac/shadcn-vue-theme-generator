import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{$ as l,a as f}from"./useCalendar-Bz7NlAqr.js";import{_}from"./RangeCalendarPrevButton.vue_vue_type_script_setup_true_lang-BUyfNq5X.js";import{d as s,o as m,e as u,u as d,b as g,z as x,A as R,D as o,H as r,I as $}from"./highlight-mgC1Gizx.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";import"./chevron-right-BGnyeyqv.js";import"./chevron-left-BB4XuAkh.js";import"./useKbd-kRIii9yh.js";import"./usePrimitiveElement-DKACLoT5.js";import"./useLocale-OrANl4BG.js";const y=s({__name:"RangeCalendarBasic",setup(c){const e=l(f()),a=e.add({days:7}),t=g({start:e,end:a});return(v,n)=>(m(),u(d(_),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),class:"w-max mx-auto","data-component-x-ray":"RangeCalendar"},null,8,["modelValue"]))}}),C=`<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateRange } from "reka-ui";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/shared/components/ui/range-calendar";

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
`,w={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Z=s({__name:"_Examples",setup(c){return(e,a)=>(m(),x("div",w,[R("div",B,[o(p,{"raw-component":d(C)},{title:r(()=>[...a[0]||(a[0]=[$(" Basic ",-1)])]),example:r(()=>[o(y)]),_:1},8,["raw-component"])])]))}});export{Z as default};
