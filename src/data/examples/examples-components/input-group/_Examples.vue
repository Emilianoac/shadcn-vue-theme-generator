<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import InputGroupBasic from "./InputGroupBasic.vue";
import InputGroupBasicRaw from "./InputGroupBasic.vue?raw";
import InputGroupWithButton from "./InputGroupWithButton.vue";
import InputGroupWithButtonRaw from "./InputGroupWithButton.vue?raw";
import InputGroupWithTextarea from "./InputGroupWithTextarea.vue";
import InputGroupWithTextareaRaw from "./InputGroupWithTextarea.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="InputGroupBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <InputGroupBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputGroupWithButtonRaw">
        <template #title> With Button </template>
        <template #example>
          <InputGroupWithButton />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputGroupWithTextareaRaw">
        <template #title> With Textarea </template>
        <template #example>
          <InputGroupWithTextarea />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
