<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import TextareaBasic from "./TextareaBasic.vue";
import TextareaBasicRaw from "./TextareaBasic.vue?raw";
import TextareaInvalid from "./TextareaInvalid.vue";
import TextareaInvalidRaw from "./TextareaInvalid.vue?raw";
import TextareaWithLabel from "./TextareaWithLabel.vue";
import TextareaWithLabelRaw from "./TextareaWithLabel.vue?raw";
import TextareaWithDescription from "./TextareaWithDescription.vue";
import TextareaWithDescriptionRaw from "./TextareaWithDescription.vue?raw";
import TextareaDisabled from "./TextareaDisabled.vue";
import TextareaDisabledRaw from "./TextareaDisabled.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="TextareaBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <TextareaBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TextareaInvalidRaw">
        <template #title> Invalid </template>
        <template #example>
          <TextareaInvalid />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TextareaWithLabelRaw">
        <template #title> With Label </template>
        <template #example>
          <TextareaWithLabel />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TextareaWithDescriptionRaw">
        <template #title> With Description </template>
        <template #example>
          <TextareaWithDescription />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TextareaDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <TextareaDisabled />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
