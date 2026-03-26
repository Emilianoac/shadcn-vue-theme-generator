<script lang="ts" setup>
import PieChart1 from "./components/PieChart1.vue";
import PieChart2 from "./components/PieChart2.vue";
import PieChart3 from "./components/PieChart3.vue";
</script>

<template>
  <div class="@container/pie-chart-examples">
    <div class="grid grid-cols-1 @2xl:grid-cols-3 gap-5">
      <PieChart1 />
      <PieChart2 />
      <PieChart3 />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
