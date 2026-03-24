<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import NumberFieldBasic from "./NumberFieldBasic.vue";
import NumberFieldBasicRaw from "./NumberFieldBasic.vue?raw";
import NumberFieldWithLabel from "./NumberFieldWithLabel.vue";
import NumberFieldWithLabelRaw from "./NumberFieldWithLabel.vue?raw";
import NumberFieldDisabled from "./NumberFieldDisabled.vue";
import NumberFieldDisabledRaw from "./NumberFieldDisabled.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="NumberFieldBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <NumberFieldBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="NumberFieldWithLabelRaw">
        <template #title> With Label </template>
        <template #example>
          <NumberFieldWithLabel />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="NumberFieldDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <NumberFieldDisabled />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
