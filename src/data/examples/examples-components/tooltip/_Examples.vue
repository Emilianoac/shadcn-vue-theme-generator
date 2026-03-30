<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import TooltipBasic from "./TooltipBasic.vue";
import TooltipBasicRaw from "./TooltipBasic.vue?raw";
import TooltipSides from "./TooltipSides.vue";
import TooltipSidesRaw from "./TooltipSides.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="TooltipBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <TooltipBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TooltipSidesRaw">
        <template #title> Sides </template>
        <template #example>
          <TooltipSides />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
