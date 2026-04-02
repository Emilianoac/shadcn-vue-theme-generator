<script lang="ts" setup>
import ExampleCard from "@/shared/data/examples/ExampleCard.vue";
import LineChartInteractive from "./components/LineChartInteractive.vue";
import LineChartInteractiveRaw from "./components/LineChartInteractive.vue?raw";
import LineChartDefault from "./components/LineChartDefault.vue";
import LineChartDefaultRaw from "./components/LineChartDefault.vue?raw";
import LineChartLinear from "./components/LineChartLinear.vue";
import LineChartLinearRaw from "./components/LineChartLinear.vue?raw";
import LineChartStep from "./components/LineChartStep.vue";
import LineChartStepRaw from "./components/LineChartStep.vue?raw";
</script>

<template>
  <div class="@container/line-chart-examples">
    <div class="grid grid-cols-1 @4xl:grid-cols-3 gap-5">
      <ExampleCard :raw-component="LineChartInteractiveRaw" class="@4xl:col-span-3">
        <template #title>Interactive Line Chart</template>
        <template #example>
          <LineChartInteractive />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LineChartDefaultRaw">
        <template #title>Default Line Chart</template>
        <template #example>
          <LineChartDefault />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LineChartLinearRaw">
        <template #title>Linear Line Chart</template>
        <template #example>
          <LineChartLinear />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="LineChartStepRaw">
        <template #title>Step Line Chart</template>
        <template #example>
          <LineChartStep />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
