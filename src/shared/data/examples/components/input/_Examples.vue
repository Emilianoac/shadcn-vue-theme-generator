<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import InputBasic from "./InputBasic.vue";
import InputBasicRaw from "./InputBasic.vue?raw";
import InputInvalid from "./InputInvalid.vue";
import InputInvalidRaw from "./InputInvalid.vue?raw";
import InputWithLabel from "./InputWithLabel.vue";
import InputWithLabelRaw from "./InputWithLabel.vue?raw";
import InputWithDescription from "./InputWithDescription.vue";
import InputWithDescriptionRaw from "./InputWithDescription.vue?raw";
import InputDisabled from "./InputDisabled.vue";
import InputDisabledRaw from "./InputDisabled.vue?raw";
import InputTypes from "./InputTypes.vue";
import InputTypesRaw from "./InputTypes.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="InputBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <InputBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputInvalidRaw">
        <template #title> Invalid </template>
        <template #example>
          <InputInvalid />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputWithLabelRaw">
        <template #title> With Label </template>
        <template #example>
          <InputWithLabel />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputWithDescriptionRaw">
        <template #title> With Description </template>
        <template #example>
          <InputWithDescription />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <InputDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputTypesRaw">
        <template #title> Input Types </template>
        <template #example>
          <InputTypes />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
