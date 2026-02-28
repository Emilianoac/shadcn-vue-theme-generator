<script setup lang="ts">
import type { ChartConfig } from "@/components/ui/chart";

import { VisLine, VisScatter, VisXYContainer } from "@unovis/vue";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

defineOptions({
  name: "CardStats",
});

type Data = (typeof data)[number];
const data = [
  { revenue: 10400, subscription: 240 },
  { revenue: 14405, subscription: 300 },
  { revenue: 9400, subscription: 200 },
  { revenue: 8200, subscription: 278 },
  { revenue: 7000, subscription: 189 },
  { revenue: 9600, subscription: 239 },
  { revenue: 11244, subscription: 278 },
  { revenue: 26475, subscription: 189 },
];

const x = (d: Data, i: number) => i;
const getRevenue = (d: Data) => d.revenue;

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--primary)",
  },
  subscription: {
    label: "Subscriptions",
    color: "var(--primary)",
  },
} satisfies ChartConfig;
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>Total Revenue</CardDescription>
      <CardTitle class="text-3xl"> $15,231.89 </CardTitle>
      <CardDescription>+20.1% from last month</CardDescription>
    </CardHeader>
    <CardContent class="pb-0">
      <ChartContainer :config="chartConfig" class="h-20 w-full">
        <VisXYContainer
          :data="data"
          :duration="0"
          :margin="{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }"
        >
          <VisLine :x="x" :y="getRevenue" color="var(--color-revenue)" />
          <VisScatter
            :x="x"
            :y="getRevenue"
            :size="6"
            stroke-color="var(--color-revenue)"
            :stroke-width="2"
            color="white"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
  </Card>
</template>
