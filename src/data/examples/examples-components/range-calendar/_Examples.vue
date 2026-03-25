<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import RangeCalendarBasic from "./RangeCalendarBasic.vue";
import RangeCalendarBasicRaw from "./RangeCalendarBasic.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="RangeCalendarBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <RangeCalendarBasic />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
