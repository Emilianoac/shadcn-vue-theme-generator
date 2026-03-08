<script lang="ts" setup>
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
</script>

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
