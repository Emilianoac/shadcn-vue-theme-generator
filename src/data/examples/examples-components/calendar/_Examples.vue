<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CalendarMonthAndYear from "./CalendarMonthAndYear.vue";
import CalendarMonthAndYearRaw from "./CalendarMonthAndYear.vue?raw";
import CalendarYearOnly from "./CalendarYearOnly.vue";
import CalendarYearOnlyRaw from "./CalendarYearOnly.vue?raw";
import CalendarMonthOnly from "./CalendarMonthOnly.vue";
import CalendarMonthOnlyRaw from "./CalendarMonthOnly.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CalendarMonthAndYearRaw">
        <template #title>Month and Year</template>
        <template #example>
          <CalendarMonthAndYear />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="CalendarYearOnlyRaw">
        <template #title>Year Only</template>
        <template #example>
          <CalendarYearOnly />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="CalendarMonthOnlyRaw">
        <template #title>Month Only</template>
        <template #example>
          <CalendarMonthOnly />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
