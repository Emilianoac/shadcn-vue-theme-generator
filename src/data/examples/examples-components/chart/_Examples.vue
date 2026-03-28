<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useComponentXRay } from "@/composables/useComponentXRay";
import ChartArea from "./ChartArea.vue";
import ChartAreaRaw from "./ChartArea.vue?raw";
import ChartBar from "./ChartBar.vue";
import ChartBarRaw from "./ChartBar.vue?raw";
import ChartLine from "./ChartLine.vue";
import ChartLineRaw from "./ChartLine.vue?raw";
import ChartRadial from "./ChartRadial.vue";
import ChartRadialRaw from "./ChartRadial.vue?raw";

const { isActive } = useComponentXRay();

const chartColors = [
  {
    name: "chart-1",
    className: "bg-chart-1",
  },
  {
    name: "chart-2",
    className: "bg-chart-2",
  },
  {
    name: "chart-3",
    className: "bg-chart-3",
  },
  {
    name: "chart-4",
    className: "bg-chart-4",
  },
  {
    name: "chart-5",
    className: "bg-chart-5",
  },
];

function goToChartColors(themeKey: string): void {
  window.setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("xray:focus-theme-color", {
        detail: { themeKey },
      }),
    );
  }, 0);
}
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <div class="col-span-2 space-y-4" v-if="isActive">
        <div>
          <h2 class="text-xl font-semibold">Charts colors</h2>
          <p class="text-muted-foreground text-sm">Go to chart colors in theme editor</p>
        </div>
        <div class="flex items-center gap-3">
          <TooltipProvider v-for="color in chartColors" :key="color.name">
            <Tooltip>
              <TooltipTrigger as-child>
                <div
                  class="w-5 h-5 rounded-sm hover:opacity-70 cursor-pointer"
                  :class="color.className"
                  @click="goToChartColors(color.name)"
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{{ `${color} color` }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <ExampleCard :raw-component="ChartAreaRaw">
        <template #title> Area Chart </template>
        <template #example>
          <ChartArea />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ChartBarRaw">
        <template #title> Bar Chart </template>
        <template #example>
          <ChartBar />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ChartLineRaw">
        <template #title> Line Chart </template>
        <template #example>
          <ChartLine />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ChartRadialRaw">
        <template #title> Pie Chart </template>
        <template #example>
          <ChartRadial />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
