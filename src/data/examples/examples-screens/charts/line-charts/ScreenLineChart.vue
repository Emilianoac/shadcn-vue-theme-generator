<script lang="ts" setup>
import LineChartInteractive from "./components/LineChartInteractive.vue";
import LineChartDefault from "./components/LineChartDefault.vue";
import LineChartLinear from "./components/LineChartLinear.vue";
import LineChartStep from "./components/LineChartStep.vue";
</script>

<template>
  <div class="@container/line-chart-examples">
    <div class="grid grid-cols-1 @2xl:grid-cols-3 gap-5">
      <LineChartInteractive class="@2xl:col-span-3" />
      <LineChartDefault />
      <LineChartLinear />
      <LineChartStep />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
