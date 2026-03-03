<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import AccordionBasic from "./AccordionBasic.vue";
import AccordionBasicRaw from "./AccordionBasic.vue?raw";
import AccordionMultiple from "./AccordionMultiple.vue";
import AccordionMultipleRaw from "./AccordionMultiple.vue?raw";
import AccordionDisabled from "./AccordionDisabled.vue";
import AccordionDisabledRaw from "./AccordionDisabled.vue?raw";
</script>

<template>
  <div class="max-w-150 mx-auto space-y-6">
    <ExampleCard :raw-component="AccordionBasicRaw">
      <template #title>Basic</template>
      <template #example>
        <AccordionBasic />
      </template>
    </ExampleCard>

    <ExampleCard :raw-component="AccordionMultipleRaw">
      <template #title>Multiple</template>
      <template #example>
        <AccordionMultiple />
      </template>
    </ExampleCard>

    <ExampleCard :raw-component="AccordionDisabledRaw">
      <template #title>With Disabled</template>
      <template #example>
        <AccordionDisabled />
      </template>
    </ExampleCard>
  </div>
</template>
