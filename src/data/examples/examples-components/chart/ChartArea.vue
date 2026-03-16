<script setup lang="ts">
import type { ChartConfig } from "@/components/ui/chart";
import { VisArea, VisAxis, VisLine, VisXYContainer } from "@unovis/vue";

import { TrendingUp } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/components/ui/chart";

const chartData = [
  { month: 1, monthLabel: "January", desktop: 186 },
  { month: 2, monthLabel: "February", desktop: 305 },
  { month: 3, monthLabel: "March", desktop: 237 },
  { month: 4, monthLabel: "April", desktop: 73 },
  { month: 5, monthLabel: "May", desktop: 209 },
  { month: 6, monthLabel: "June", desktop: 214 },
];

type Data = (typeof chartData)[number];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Area Chart</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Showing total visitors for the last 6 months
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <ChartContainer :config="chartConfig" data-component-x-ray="ChartContainer">
        <VisXYContainer :data="chartData" data-component-x-ray="VisXYContainer">
          <VisArea
            :x="(d: Data) => d.month"
            :y="[(d: Data) => d.desktop]"
            :color="(d: Data, i: number) => [chartConfig.desktop.color][i]"
            :opacity="0.4"
          />
          <VisLine
            :x="(d: Data) => d.month"
            :y="[(d: Data) => d.desktop]"
            :color="(d: Data, i: number) => [chartConfig.desktop.color][i]"
            :line-width="1"
          />
          <VisAxis
            type="x"
            :x="(d: Data) => d.month"
            :tick-line="false"
            :domain-line="false"
            :grid-line="false"
            :num-ticks="6"
            :tick-format="
              (d: number, index: number) => {
                return chartData[index]?.monthLabel.slice(0, 3);
              }
            "
          />
          <ChartTooltip />
          <ChartCrosshair
            :template="
              componentToString(chartConfig, ChartTooltipContent, { labelKey: 'monthLabel' })
            "
            :color="(d: Data, i: number) => [chartConfig.desktop.color][i % 2]"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter>
      <div class="flex w-full items-start gap-2 text-sm">
        <div class="grid gap-2">
          <div class="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
          </div>
          <div class="text-muted-foreground flex items-center gap-2 leading-none">
            January - June 2024
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>
