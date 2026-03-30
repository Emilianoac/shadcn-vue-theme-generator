<script setup lang="ts">
import type { ChartConfig } from "@/components/ui/chart";
import { VisArea, VisLine, VisScatter, VisXYContainer } from "@unovis/vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

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

const x = (_d: Data, i: number) => i;
const getRevenue = (d: Data) => d.revenue;
const getSubscription = (d: Data) => d.subscription;

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
  <div class="grid gap-4 grid-cols-1 @lg:grid-cols-2">
    <Card data-component-x-ray="Card">
      <CardHeader data-component-x-ray="CardHeader">
        <CardDescription data-component-x-ray="CardDescription">Total Revenue</CardDescription>
        <CardTitle class="text-3xl" data-component-x-ray="CardTitle">$15,231.89</CardTitle>
        <CardDescription data-component-x-ray="CardDescription">
          +20.1% from last month
        </CardDescription>
      </CardHeader>
      <CardContent class="pb-0" data-component-x-ray="CardContent">
        <ChartContainer
          :config="chartConfig"
          class="h-20 w-full"
          data-component-x-ray="ChartContainer"
        >
          <VisXYContainer
            :data="data"
            :duration="0"
            :margin="{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }"
            data-component-x-ray="VisXYContainer"
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

    <Card class="pb-0 xl:flex" data-component-x-ray="Card">
      <CardHeader data-component-x-ray="CardHeader">
        <CardDescription data-component-x-ray="CardDescription">Subscriptions</CardDescription>
        <CardTitle class="text-3xl" data-component-x-ray="CardTitle">+2,350</CardTitle>
        <CardDescription data-component-x-ray="CardDescription">
          +180.1% from last month
        </CardDescription>
        <CardAction data-component-x-ray="CardAction">
          <Button variant="ghost" size="sm" data-component-x-ray-trigger="Button">View More</Button>
        </CardAction>
      </CardHeader>
      <CardContent
        class="mt-auto max-h-31 flex-1 p-0 overflow-hidden"
        data-component-x-ray="CardContent"
      >
        <ChartContainer
          :config="chartConfig"
          class="size-full"
          data-component-x-ray="ChartContainer"
        >
          <VisXYContainer
            :margin="{
              left: 0,
              right: 0,
            }"
            :data="data"
          >
            <VisArea
              :x="x"
              :y="getSubscription"
              color="var(--color-subscription)"
              :opacity="0.05"
            />
            <VisLine :x="x" :y="getSubscription" color="var(--color-subscription)" />
          </VisXYContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>
</template>
