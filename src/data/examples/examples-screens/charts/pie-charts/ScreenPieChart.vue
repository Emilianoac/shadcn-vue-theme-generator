<script lang="ts" setup>
import ExampleCard from "@/data/examples/ExampleCard.vue";
import PieChart1 from "./components/PieChart1.vue";
import PieChart1Raw from "./components/PieChart1.vue?raw";
import PieChart2 from "./components/PieChart2.vue";
import PieChart2Raw from "./components/PieChart2.vue?raw";
import PieChart3 from "./components/PieChart3.vue";
import PieChart3Raw from "./components/PieChart3.vue?raw";
</script>

<template>
  <div class="@container/pie-chart-examples">
    <div class="grid grid-cols-1 @4xl:grid-cols-3 gap-5">
      <ExampleCard :raw-component="PieChart1Raw">
        <template #title>Simple Pie Chart</template>
        <template #example>
          <PieChart1 />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="PieChart2Raw">
        <template #title>Donut Chart</template>
        <template #example>
          <PieChart2 />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="PieChart3Raw">
        <template #title>Donut Chart Variation</template>
        <template #example>
          <PieChart3 />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
