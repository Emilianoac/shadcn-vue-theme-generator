<script lang="ts" setup>
import ExampleCard from "@/data/examples/ExampleCard.vue";
import AreaChartInteractive from "./components/AreaChartInteractive.vue";
import AreaChartInteractiveRaw from "./components/AreaChartInteractive.vue?raw";
import AreaChartIcons from "./components/AreaChartIcons.vue";
import AreaChartIconsRaw from "./components/AreaChartIcons.vue?raw";
import AreaChartGradient from "./components/AreaChartGradient.vue";
import AreaChartGradientRaw from "./components/AreaChartGradient.vue?raw";
import AreaChartAxes from "./components/AreaChartAxes.vue";
import AreaChartAxesRaw from "./components/AreaChartAxes.vue?raw";
</script>

<template>
  <div class="@container/area-chart-examples">
    <div class="grid grid-cols-1 @4xl:grid-cols-3 gap-4">
      <ExampleCard :raw-component="AreaChartInteractiveRaw" class="@4xl:col-span-3">
        <template #title>Interactive Area Chart</template>
        <template #example>
          <AreaChartInteractive />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AreaChartIconsRaw">
        <template #title>Area Chart with Icons</template>
        <template #example>
          <AreaChartIcons />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AreaChartGradientRaw">
        <template #title>Area Chart with Gradient</template>
        <template #example>
          <AreaChartGradient />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AreaChartAxesRaw">
        <template #title>Area Chart with Custom Axes</template>
        <template #example>
          <AreaChartAxes />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
