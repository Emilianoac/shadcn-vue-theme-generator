<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SheetWithForm from "./SheetWithForm.vue";
import SheetWithFormRaw from "./SheetWithForm.vue?raw";
import SheetWithSides from "./SheetWithSides.vue";
import SheetWithSidesRaw from "./SheetWithSides.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SheetWithFormRaw">
        <template #title> With form </template>
        <template #example>
          <SheetWithForm />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SheetWithSidesRaw">
        <template #title> With sides </template>
        <template #example>
          <SheetWithSides />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
