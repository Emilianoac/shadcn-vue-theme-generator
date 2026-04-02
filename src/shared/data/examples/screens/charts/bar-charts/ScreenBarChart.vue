<script lang="ts" setup>
import ExampleCard from "@/shared/data/examples/ExampleCard.vue";
import BarChartInteractive from "./components/BarChartInteractive.vue";
import BarChartInteractiveRaw from "./components/BarChartInteractive.vue?raw";
import BarChartDefault from "./components/BarChartDefault.vue";
import BarChartDefaultRaw from "./components/BarChartDefault.vue?raw";
import BarChartHorizontal from "./components/BarChartHorizontal.vue";
import BarChartHorizontalRaw from "./components/BarChartHorizontal.vue?raw";
import BarChartMultiple from "./components/BarChartMultiple.vue";
import BarChartMultipleRaw from "./components/BarChartMultiple.vue?raw";
</script>

<template>
  <div class="@container/area-chart-examples">
    <div class="grid grid-cols-1 @4xl:grid-cols-3 gap-5">
      <ExampleCard :raw-component="BarChartInteractiveRaw" class="@4xl:col-span-3">
        <template #title>Interactive Bar Chart</template>
        <template #example>
          <BarChartInteractive />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="BarChartDefaultRaw">
        <template #title>Default Bar Chart</template>
        <template #example>
          <BarChartDefault />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="BarChartHorizontalRaw">
        <template #title>Horizontal Bar Chart</template>
        <template #example>
          <BarChartHorizontal />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="BarChartMultipleRaw">
        <template #title>Multiple Bar Chart</template>
        <template #example>
          <BarChartMultiple />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
