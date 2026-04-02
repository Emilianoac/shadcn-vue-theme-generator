<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import RadioGroupBasic from "./RadioGroupBasic.vue";
import RadioGroupBasicRaw from "./RadioGroupBasic.vue?raw";
import RadioGroupWithDescriptions from "./RadioGroupWithDescriptions.vue";
import RadioGroupWithDescriptionsRaw from "./RadioGroupWithDescriptions.vue?raw";
import RadioGroupWithFieldSet from "./RadioGroupWithFieldSet.vue";
import RadioGroupWithFieldSetRaw from "./RadioGroupWithFieldSet.vue?raw";
import RadioGroupGrid from "./RadioGroupGrid.vue";
import RadioGroupGridRaw from "./RadioGroupGrid.vue?raw";
import RadioGroupDisabled from "./RadioGroupDisabled.vue";
import RadioGroupDisabledRaw from "./RadioGroupDisabled.vue?raw";
import RadioGroupInvalid from "./RadioGroupInvalid.vue";
import RadioGroupInvalidRaw from "./RadioGroupInvalid.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="RadioGroupBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <RadioGroupBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="RadioGroupWithDescriptionsRaw">
        <template #title> With Descriptions </template>
        <template #example>
          <RadioGroupWithDescriptions />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="RadioGroupWithFieldSetRaw">
        <template #title> With FieldSet </template>
        <template #example>
          <RadioGroupWithFieldSet />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="RadioGroupGridRaw">
        <template #title> Grid </template>
        <template #example>
          <RadioGroupGrid />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="RadioGroupDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <RadioGroupDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="RadioGroupInvalidRaw">
        <template #title> Invalid </template>
        <template #example>
          <RadioGroupInvalid />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
