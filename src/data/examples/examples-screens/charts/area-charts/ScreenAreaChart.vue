<script lang="ts" setup>
import AreaChartInteractive from "./components/AreaChartInteractive.vue";
import AreaChartIcons from "./components/AreaChartIcons.vue";
import AreaChartGradient from "./components/AreaChartGradient.vue";
import AreaChartAxes from "./components/AreaChartAxes.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <AreaChartInteractive class="col-span-3" />
    <AreaChartIcons />
    <AreaChartGradient />
    <AreaChartAxes />
  </div>
</template>

<style lang="postcss" scoped></style>
