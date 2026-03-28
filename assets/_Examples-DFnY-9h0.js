import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-RODFUHo8.js";import{$ as l,a as f}from"./useCalendar-BQ66GEfF.js";import{_}from"./RangeCalendarPrevButton.vue_vue_type_script_setup_true_lang-DzLPIFmv.js";import{d as s,o as m,a as u,u as i,r as g,z as x,A as R,D as o,H as r,I as $}from"./DialogTitle.vue_vue_type_script_setup_true_lang-BO6eI9T0.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-JhfpkWUQ.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-BTii5kdN.js";import"./PopperContent-8PHJ-kTl.js";import"./useSize-s3pOCBPt.js";import"./VisuallyHidden-DM3OMqDx.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-ah-oNQF4.js";import"./check-BIt67cX5.js";import"./chevron-right-D_ANSfPE.js";import"./chevron-left-DJvJTDp_.js";import"./useKbd-kRIii9yh.js";import"./usePrimitiveElement-DemUCsCM.js";import"./useLocale-CjhMo2mq.js";const y=s({__name:"RangeCalendarBasic",setup(p){const e=l(f()),a=e.add({days:7}),t=g({start:e,end:a});return(v,n)=>(m(),u(i(_),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=c=>t.value=c),class:"w-max mx-auto","data-component-x-ray":"RangeCalendar"},null,8,["modelValue"]))}}),C=`<script setup lang="ts">
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
`,w={class:"@container max-w-250 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},F=s({__name:"_Examples",setup(p){return(e,a)=>(m(),x("div",w,[R("div",B,[o(d,{"raw-component":i(C)},{title:r(()=>[...a[0]||(a[0]=[$(" Basic ",-1)])]),example:r(()=>[o(y)]),_:1},8,["raw-component"])])]))}});export{F as default};
