<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import LabelWithCheckbox from "./LabelWithCheckbox.vue";
import LabelWithCheckboxRaw from "./LabelWithCheckbox.vue?raw";
import LabelWithInput from "./LabelWithInput.vue";
import LabelWithInputRaw from "./LabelWithInput.vue?raw";
import LabelDisabled from "./LabelDisabled.vue";
import LabelDisabledRaw from "./LabelDisabled.vue?raw";
import LabelWithTextarea from "./LabelWithTextarea.vue";
import LabelWithTextareaRaw from "./LabelWithTextarea.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="LabelWithCheckboxRaw">
        <template #title> With Checkbox </template>
        <template #example>
          <LabelWithCheckbox />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LabelWithInputRaw">
        <template #title> With Input </template>
        <template #example>
          <LabelWithInput />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LabelDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <LabelDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LabelWithTextareaRaw">
        <template #title> With Textarea </template>
        <template #example>
          <LabelWithTextarea />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
