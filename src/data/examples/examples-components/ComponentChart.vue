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
  { date: new Date("2024-01-01"), desktop: 186, fill: "var(--chart-1)" },
  { date: new Date("2024-02-01"), desktop: 305, fill: "var(--chart-2)" },
  { date: new Date("2024-03-01"), desktop: 237, fill: "var(--chart-3)" },
  { date: new Date("2024-04-01"), desktop: 73, fill: "var(--chart-4)" },
  { date: new Date("2024-05-01"), desktop: 209, fill: "var(--chart-5)" },
];

type Data = (typeof chartData)[number];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
} satisfies ChartConfig;
</script>

<template>
  <Card class="max-w-150 mx-auto">
    <CardHeader>
      <CardTitle>Bar Chart</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer :config="chartConfig">
        <VisXYContainer :data="chartData" :margin="{ left: -24 }" :y-domain="[0, undefined]">
          <VisGroupedBar
            :x="(d: Data) => d.date"
            :y="(d: Data) => d.desktop"
            :color="(d: Data) => d.fill"
            :rounded-corners="10"
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
                return date.toLocaleDateString('en-US', { month: 'short' });
              }
            "
            :tick-values="chartData.map((d) => d.date)"
          />
          <VisAxis type="y" :num-ticks="3" :tick-line="false" :domain-line="false" />

          <ChartTooltip />
          <ChartCrosshair
            :template="componentToString(chartConfig, ChartTooltipContent, { hideLabel: true })"
            color="#0000"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col items-start gap-2 text-sm">
      <div class="flex gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </div>
      <div class="leading-none text-muted-foreground">Showing individual colors per month</div>
    </CardFooter>
  </Card>
</template>
