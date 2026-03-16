<script setup lang="ts">
import type { ChartConfig } from "@/components/ui/chart";
import { VisAxis, VisGroupedBar, VisXYContainer } from "@unovis/vue";
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
  { date: new Date("2024-01-01"), desktop: 186, mobile: 80 },
  { date: new Date("2024-02-01"), desktop: 305, mobile: 200 },
  { date: new Date("2024-03-01"), desktop: 237, mobile: 120 },
  { date: new Date("2024-04-01"), desktop: 73, mobile: 190 },
  { date: new Date("2024-05-01"), desktop: 209, mobile: 130 },
  { date: new Date("2024-06-01"), desktop: 214, mobile: 140 },
];

type Data = (typeof chartData)[number];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Bar Chart - Multiple</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">January - June 2024</CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <ChartContainer :config="chartConfig" data-component-x-ray="ChartContainer">
        <VisXYContainer :data="chartData" data-component-x-ray="VisXYContainer">
          <VisGroupedBar
            :x="(d: Data) => d.date"
            :y="[(d: Data) => d.desktop, (d: Data) => d.mobile]"
            :color="[chartConfig.desktop.color, chartConfig.mobile.color]"
            :rounded-corners="4"
            bar-padding="0.15"
            group-padding="0"
            data-component-x-ray="VisGroupedBar"
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
            data-component-x-ray="VisAxisX"
          />
          <VisAxis
            type="y"
            :num-ticks="3"
            :tick-line="false"
            :domain-line="false"
            data-component-x-ray="VisAxisY"
          />
          <ChartTooltip />
          <ChartCrosshair
            :template="
              componentToString(chartConfig, ChartTooltipContent, {
                indicator: 'dashed',
                hideLabel: true,
              })
            "
            color="#0000"
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
