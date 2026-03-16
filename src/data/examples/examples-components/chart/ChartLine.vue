<script setup lang="ts">
import type { ChartConfig } from "@/components/ui/chart";
import { CurveType } from "@unovis/ts";

import { VisAxis, VisLine, VisXYContainer } from "@unovis/vue";
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
  { date: new Date("2024-01-01"), desktop: 186 },
  { date: new Date("2024-02-01"), desktop: 305 },
  { date: new Date("2024-03-01"), desktop: 237 },
  { date: new Date("2024-04-01"), desktop: 73 },
  { date: new Date("2024-05-01"), desktop: 209 },
  { date: new Date("2024-06-01"), desktop: 214 },
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
      <CardTitle data-component-x-ray="CardTitle">Line Chart</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">January - June 2024</CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <ChartContainer :config="chartConfig" data-component-x-ray="ChartContainer">
        <VisXYContainer
          :data="chartData"
          :margin="{ left: -24 }"
          :y-domain="[0, undefined]"
          data-component-x-ray="VisXYContainer"
        >
          <VisLine
            :x="(d: Data) => d.date"
            :y="(d: Data) => d.desktop"
            :color="chartConfig.desktop.color"
            :curve-type="CurveType.Natural"
            data-component-x-ray="VisLine"
          />
          <VisAxis
            type="x"
            :x="(d: Data) => d.date"
            :tick-line="false"
            :domain-line="false"
            :grid-line="false"
            :num-ticks="6"
            :tick-format="
              (d: number) => {
                const date = new Date(d);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                });
              }
            "
            :tick-values="chartData.map((d) => d.date)"
            data-component-x-ray="VisAxis-x"
          />
          <VisAxis
            type="y"
            :num-ticks="3"
            :tick-line="false"
            :domain-line="false"
            data-component-x-ray="VisAxis"
          />
          <ChartTooltip data-component-x-ray="ChartTooltip" />
          <ChartCrosshair
            :template="componentToString(chartConfig, ChartTooltipContent, { hideLabel: true })"
            :color="chartConfig.desktop.color"
            data-component-x-ray="ChartCrosshair"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col items-start gap-2 text-sm" data-component-x-ray="CardFooter">
      <p class="flex gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </p>
      <p class="leading-none text-muted-foreground">Showing total visitors for the last 6 months</p>
    </CardFooter>
  </Card>
</template>
