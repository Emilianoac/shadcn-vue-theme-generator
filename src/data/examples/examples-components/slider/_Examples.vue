<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SliderBasic from "./SliderBasic.vue";
import SliderBasicRaw from "./SliderBasic.vue?raw";
import SliderRange from "./SliderRange.vue";
import SliderRangeRaw from "./SliderRange.vue?raw";
import SliderMultiple from "./SliderMultiple.vue";
import SliderMultipleRaw from "./SliderMultiple.vue?raw";
import SliderVertical from "./SliderVertical.vue";
import SliderVerticalRaw from "./SliderVertical.vue?raw";
import SliderControlled from "./SliderControlled.vue";
import SliderControlledRaw from "./SliderControlled.vue?raw";
import SliderDisabled from "./SliderDisabled.vue";
import SliderDisabledRaw from "./SliderDisabled.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SliderBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <SliderBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SliderRangeRaw">
        <template #title> Range </template>
        <template #example>
          <SliderRange />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SliderMultipleRaw">
        <template #title> Multiple </template>
        <template #example>
          <SliderMultiple />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SliderVerticalRaw">
        <template #title> Vertical </template>
        <template #example>
          <SliderVertical />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SliderControlledRaw">
        <template #title> Controlled </template>
        <template #example>
          <SliderControlled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SliderDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <SliderDisabled />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
