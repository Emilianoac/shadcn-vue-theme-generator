import{_ as h}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CektplR4.js";import{a as y,b as v,c as b,_ as A}from"./AccordionTrigger.vue_vue_type_script_setup_true_lang-CoWdSfGG.js";import{d as g,o as i,a as w,H as e,z as o,L as d,M as l,D as r,u as t,I as c,B as u}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B2bF6yJp.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C1pM5_TW.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxR4ko84.js";import"./PopperContent-DBKASWQU.js";import"./useSize-LcE3Exvp.js";import"./VisuallyHidden-Bq1HL2Ws.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-1awyB38b.js";import"./check-B2r-rQIB.js";import"./CollapsibleTrigger-CD-JiFsP.js";import"./useSingleOrMultipleValue-BdsmAT1a.js";import"./isValueEqualOrExist-8QICvWqD.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useArrowNavigation-D-pctMGk.js";import"./chevron-down-8jNZFE9q.js";const x=g({__name:"AccordionBasic",setup(f){const s=[{value:"item-1",trigger:"Product Overview",content:["Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.","Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."]},{value:"item-2",trigger:"Shipping Details",content:["We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.","All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."]},{value:"item-3",trigger:"Return Policy",content:["We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.","Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."]}];return(a,_)=>(i(),w(t(A),{type:"single",collapsible:"","default-value":"item-1","data-component-x-ray":"Accordion",class:"p-4"},{default:e(()=>[(i(),o(d,null,l(s,n=>r(t(y),{key:n.value,value:n.value,"data-component-x-ray":"AccordionItem",class:"p-2"},{default:e(()=>[r(t(v),{"data-component-x-ray-trigger":"AccordionTrigger"},{default:e(()=>[c(u(n.trigger),1)]),_:2},1024),r(t(b),{"data-component-x-ray":"AccordionContent",class:"p-2"},{default:e(()=>[(i(!0),o(d,null,l(n.content,(p,m)=>(i(),o("p",{key:m,class:"mb-2 last:mb-0"},u(p),1))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}}),k=`<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    value: "item-1",
    trigger: "Product Overview",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    value: "item-2",
    trigger: "Shipping Details",
    content: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    value: "item-3",
    trigger: "Return Policy",
    content: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
];
<\/script>

<template>
  <Accordion
    type="single"
    collapsible
    default-value="item-1"
    data-component-x-ray="Accordion"
    class="p-4"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
      data-component-x-ray="AccordionItem"
      class="p-2"
    >
      <AccordionTrigger data-component-x-ray-trigger="AccordionTrigger">
        {{ item.trigger }}
      </AccordionTrigger>
      <AccordionContent data-component-x-ray="AccordionContent" class="p-2">
        <p v-for="(paragraph, idx) in item.content" :key="idx" class="mb-2 last:mb-0">
          {{ paragraph }}
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style lang="postcss" scoped></style>
`,I=g({__name:"AccordionMultiple",setup(f){const s=[{value:"item-1",trigger:"Product Overview",content:["Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.","Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."]},{value:"item-2",trigger:"Shipping Details",content:["We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.","All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."]},{value:"item-3",trigger:"Return Policy",content:["We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.","Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."]}];return(a,_)=>(i(),w(t(A),{type:"multiple","data-component-x-ray":"Accordion",class:"p-4"},{default:e(()=>[(i(),o(d,null,l(s,n=>r(t(y),{key:n.value,value:n.value,"data-component-x-ray":"AccordionItem",class:"p-2"},{default:e(()=>[r(t(v),{"data-component-x-ray-trigger":"AccordionTrigger"},{default:e(()=>[c(u(n.trigger),1)]),_:2},1024),r(t(b),{"data-component-x-ray":"AccordionContent",class:"p-2"},{default:e(()=>[(i(!0),o(d,null,l(n.content,(p,m)=>(i(),o("p",{key:m,class:"mb-2 last:mb-0"},u(p),1))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}}),T=`<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    value: "item-1",
    trigger: "Product Overview",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    value: "item-2",
    trigger: "Shipping Details",
    content: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    value: "item-3",
    trigger: "Return Policy",
    content: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
];
<\/script>

<template>
  <Accordion type="multiple" data-component-x-ray="Accordion" class="p-4">
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
      data-component-x-ray="AccordionItem"
      class="p-2"
    >
      <AccordionTrigger data-component-x-ray-trigger="AccordionTrigger">
        {{ item.trigger }}
      </AccordionTrigger>
      <AccordionContent data-component-x-ray="AccordionContent" class="p-2">
        <p v-for="(paragraph, idx) in item.content" :key="idx" class="mb-2 last:mb-0">
          {{ paragraph }}
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style lang="postcss" scoped></style>
`,O=g({__name:"AccordionDisabled",setup(f){const s=[{value:"item-1",trigger:"Product Overview",content:["Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.","Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."],disabled:!1},{value:"item-2",trigger:"Shipping Details",content:["We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.","All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."],disabled:!0},{value:"item-3",trigger:"Return Policy",content:["We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.","Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."],disabled:!1}];return(a,_)=>(i(),w(t(A),{type:"single",collapsible:"","default-value":"item-1","data-component-x-ray":"Accordion",class:"p-4"},{default:e(()=>[(i(),o(d,null,l(s,n=>r(t(y),{key:n.value,value:n.value,disabled:n.disabled,"data-component-x-ray":"AccordionItem",class:"p-2"},{default:e(()=>[r(t(v),{"data-component-x-ray-trigger":"AccordionTrigger"},{default:e(()=>[c(u(n.trigger),1)]),_:2},1024),r(t(b),{"data-component-x-ray":"AccordionContent",class:"p-2"},{default:e(()=>[(i(!0),o(d,null,l(n.content,(p,m)=>(i(),o("p",{key:m,class:"mb-2 last:mb-0"},u(p),1))),128))]),_:2},1024)]),_:2},1032,["value","disabled"])),64))]),_:1}))}}),C=`<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    value: "item-1",
    trigger: "Product Overview",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
    disabled: false,
  },
  {
    value: "item-2",
    trigger: "Shipping Details",
    content: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
    disabled: true,
  },
  {
    value: "item-3",
    trigger: "Return Policy",
    content: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
    disabled: false,
  },
];
<\/script>

<template>
  <Accordion
    type="single"
    collapsible
    default-value="item-1"
    data-component-x-ray="Accordion"
    class="p-4"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      data-component-x-ray="AccordionItem"
      class="p-2"
    >
      <AccordionTrigger data-component-x-ray-trigger="AccordionTrigger">
        {{ item.trigger }}
      </AccordionTrigger>
      <AccordionContent data-component-x-ray="AccordionContent" class="p-2">
        <p v-for="(paragraph, idx) in item.content" :key="idx" class="mb-2 last:mb-0">
          {{ paragraph }}
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style lang="postcss" scoped></style>
`,B={class:"max-w-150 mx-auto space-y-6"},q=g({__name:"_Examples",setup(f){return(s,a)=>(i(),o("div",B,[r(h,{"raw-component":t(k)},{title:e(()=>[...a[0]||(a[0]=[c("Basic",-1)])]),example:e(()=>[r(x)]),_:1},8,["raw-component"]),r(h,{"raw-component":t(T)},{title:e(()=>[...a[1]||(a[1]=[c("Multiple",-1)])]),example:e(()=>[r(I)]),_:1},8,["raw-component"]),r(h,{"raw-component":t(C)},{title:e(()=>[...a[2]||(a[2]=[c("With Disabled",-1)])]),example:e(()=>[r(O)]),_:1},8,["raw-component"])]))}});export{q as default};
