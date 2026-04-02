<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import PopoverBasic from "./PopoverBasic.vue";
import PopoverBasicRaw from "./PopoverBasic.vue?raw";
import PopoverWithForm from "./PopoverWithForm.vue";
import PopoverWithFormRaw from "./PopoverWithForm.vue?raw";
import PopoverAlignments from "./PopoverAlignments.vue";
import PopoverAlignmentsRaw from "./PopoverAlignments.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="PopoverBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <PopoverBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="PopoverWithFormRaw">
        <template #title> With form </template>
        <template #example>
          <PopoverWithForm />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="PopoverAlignmentsRaw">
        <template #title> Alignments </template>
        <template #example>
          <PopoverAlignments />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
