<script lang="ts" setup>
import BarChartInteractive from "./components/BarChartInteractive.vue";
import BarChartDefault from "./components/BarChartDefault.vue";
import BarChartHorizontal from "./components/BarChartHorizontal.vue";
import BarChartMultiple from "./components/BarChartMultiple.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <BarChartInteractive class="col-span-3" />
    <BarChartDefault />
    <BarChartHorizontal />
    <BarChartMultiple />
  </div>
</template>

<style lang="postcss" scoped></style>
