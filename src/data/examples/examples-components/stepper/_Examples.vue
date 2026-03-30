<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import StepperBasic from "./StepperBasic.vue";
import StepperBasicRaw from "./StepperBasic.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="StepperBasicRaw" class="col-span-1 @xl:col-span-2">
        <template #title> Basic </template>
        <template #example>
          <StepperBasic />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
