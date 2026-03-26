<script lang="ts" setup>
import BarChartInteractive from "./components/BarChartInteractive.vue";
import BarChartDefault from "./components/BarChartDefault.vue";
import BarChartHorizontal from "./components/BarChartHorizontal.vue";
import BarChartMultiple from "./components/BarChartMultiple.vue";
</script>

<template>
  <div class="@container/area-chart-examples">
    <div class="grid grid-cols-1 @2xl:grid-cols-3 gap-5">
      <BarChartInteractive class="2xl:col-span-3" />
      <BarChartDefault />
      <BarChartHorizontal />
      <BarChartMultiple />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
