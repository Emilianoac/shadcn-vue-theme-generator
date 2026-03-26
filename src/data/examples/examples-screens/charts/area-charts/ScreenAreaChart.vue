<script lang="ts" setup>
import AreaChartInteractive from "./components/AreaChartInteractive.vue";
import AreaChartIcons from "./components/AreaChartIcons.vue";
import AreaChartGradient from "./components/AreaChartGradient.vue";
import AreaChartAxes from "./components/AreaChartAxes.vue";
</script>

<template>
  <div class="@container/area-chart-examples">
    <div class="grid grid-cols-1 @2xl:grid-cols-3 gap-5">
      <AreaChartInteractive class="@2xl:col-span-3" />
      <AreaChartIcons />
      <AreaChartGradient />
      <AreaChartAxes />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
