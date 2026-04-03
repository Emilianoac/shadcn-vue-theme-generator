import{_ as u}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{_ as p,C as v,D as g,E as C}from"./index-UOI_LXtT.js";import{_ as b,a as x}from"./CardContent.vue_vue_type_script_setup_true_lang-DLnF1Kjg.js";import{_ as w,a as _}from"./CardTitle.vue_vue_type_script_setup_true_lang-CdYPRBz7.js";import{_ as D}from"./CardFooter.vue_vue_type_script_setup_true_lang-CSXzqezb.js";import{_ as T}from"./CardHeader.vue_vue_type_script_setup_true_lang-DAlhlSWD.js";import{b as S,E as y,D as V}from"./index-BQyJhjlO.js";import{T as F}from"./trending-up-BEC_Xdoo.js";import{d as c,o as f,e as $,H as t,D as o,u as r,I as i,A as l,c as P,z as J}from"./highlight-DXRdThM2.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./array-BNpUzgbK.js";const H={class:"flex items-center gap-2 font-medium leading-none"},E=c({__name:"PieChart1",setup(d){const s=[{browser:"chrome",visitors:275,fill:"var(--color-chrome)"},{browser:"safari",visitors:200,fill:"var(--color-safari)"},{browser:"firefox",visitors:187,fill:"var(--color-firefox)"},{browser:"edge",visitors:173,fill:"var(--color-edge)"},{browser:"other",visitors:90,fill:"var(--color-other)"}],e={visitors:{label:"Visitors",color:void 0},chrome:{label:"Chrome",color:"var(--chart-1)"},safari:{label:"Safari",color:"var(--chart-2)"},firefox:{label:"Firefox",color:"var(--chart-3)"},edge:{label:"Edge",color:"var(--chart-4)"},other:{label:"Other",color:"var(--chart-5)"}};return(m,n)=>(f(),$(r(x),{class:"flex flex-col"},{default:t(()=>[o(r(T),{class:"items-center pb-0"},{default:t(()=>[o(r(w),null,{default:t(()=>[...n[0]||(n[0]=[i("Pie Chart",-1)])]),_:1}),o(r(_),null,{default:t(()=>[...n[1]||(n[1]=[i("January - June 2024",-1)])]),_:1})]),_:1}),o(r(b),{class:"flex-1 pb-0"},{default:t(()=>[o(r(p),{config:e,class:"mx-auto aspect-square max-h-62.5"},{default:t(()=>[o(r(S),{data:s,margin:{top:30,bottom:30}},{default:t(()=>[o(r(y),{value:a=>a.visitors,color:a=>e[a.browser].color,"arc-width":0},null,8,["value","color"]),o(r(v),{triggers:{[r(V).selectors.segment]:r(g)(e,r(C),{hideLabel:!0})}},null,8,["triggers"])]),_:1})]),_:1})]),_:1}),o(r(D),{class:"flex-col gap-2 text-sm"},{default:t(()=>[l("div",H,[n[2]||(n[2]=i(" Trending up by 5.2% this month ",-1)),o(r(F),{class:"h-4 w-4"})]),n[3]||(n[3]=l("div",{class:"leading-none text-muted-foreground"}," Showing total visitors for the last 6 months ",-1))]),_:1})]),_:1}))}}),L=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";

import { Donut } from "@unovis/ts";
import { VisDonut, VisSingleContainer } from "@unovis/vue";
import { TrendingUp } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
type Data = (typeof chartData)[number];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: undefined,
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;
<\/script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="items-center pb-0">
      <CardTitle>Pie Chart</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 pb-0">
      <ChartContainer :config="chartConfig" class="mx-auto aspect-square max-h-62.5">
        <VisSingleContainer :data="chartData" :margin="{ top: 30, bottom: 30 }">
          <VisDonut
            :value="(d: Data) => d.visitors"
            :color="(d: Data) => chartConfig[d.browser as keyof typeof chartConfig].color"
            :arc-width="0"
          />
          <ChartTooltip
            :triggers="{
              [Donut.selectors.segment]: componentToString(chartConfig, ChartTooltipContent, {
                hideLabel: true,
              })!,
            }"
          />
        </VisSingleContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col gap-2 text-sm">
      <div class="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </div>
      <div class="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </CardFooter>
  </Card>
</template>
`,U={class:"flex items-center gap-2 font-medium leading-none"},k=c({__name:"PieChart2",setup(d){const s=[{browser:"chrome",visitors:275,fill:"var(--color-chrome)"},{browser:"safari",visitors:200,fill:"var(--color-safari)"},{browser:"firefox",visitors:187,fill:"var(--color-firefox)"},{browser:"edge",visitors:173,fill:"var(--color-edge)"},{browser:"other",visitors:90,fill:"var(--color-other)"}],e={visitors:{label:"Visitors",color:void 0},chrome:{label:"Chrome",color:"var(--chart-1)"},safari:{label:"Safari",color:"var(--chart-2)"},firefox:{label:"Firefox",color:"var(--chart-3)"},edge:{label:"Edge",color:"var(--chart-4)"},other:{label:"Other",color:"var(--chart-5)"}};return(m,n)=>(f(),$(r(x),{class:"flex flex-col"},{default:t(()=>[o(r(T),{class:"items-center pb-0"},{default:t(()=>[o(r(w),null,{default:t(()=>[...n[0]||(n[0]=[i("Pie Chart",-1)])]),_:1}),o(r(_),null,{default:t(()=>[...n[1]||(n[1]=[i("January - June 2024",-1)])]),_:1})]),_:1}),o(r(b),{class:"flex-1 pb-0"},{default:t(()=>[o(r(p),{config:e,class:"mx-auto aspect-square max-h-62.5"},{default:t(()=>[o(r(S),{data:s,margin:{top:30,bottom:30}},{default:t(()=>[o(r(y),{value:a=>a.visitors,color:a=>e[a.browser].color,"arc-width":30},null,8,["value","color"]),o(r(v),{triggers:{[r(V).selectors.segment]:r(g)(e,r(C),{hideLabel:!0})}},null,8,["triggers"])]),_:1})]),_:1})]),_:1}),o(r(D),{class:"flex-col gap-2 text-sm"},{default:t(()=>[l("div",U,[n[2]||(n[2]=i(" Trending up by 5.2% this month ",-1)),o(r(F),{class:"h-4 w-4"})]),n[3]||(n[3]=l("div",{class:"leading-none text-muted-foreground"}," Showing total visitors for the last 6 months ",-1))]),_:1})]),_:1}))}}),q=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";

import { Donut } from "@unovis/ts";
import { VisDonut, VisSingleContainer } from "@unovis/vue";
import { TrendingUp } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
type Data = (typeof chartData)[number];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: undefined,
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;
<\/script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="items-center pb-0">
      <CardTitle>Pie Chart</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 pb-0">
      <ChartContainer :config="chartConfig" class="mx-auto aspect-square max-h-62.5">
        <VisSingleContainer :data="chartData" :margin="{ top: 30, bottom: 30 }">
          <VisDonut
            :value="(d: Data) => d.visitors"
            :color="(d: Data) => chartConfig[d.browser as keyof typeof chartConfig].color"
            :arc-width="30"
          />
          <ChartTooltip
            :triggers="{
              [Donut.selectors.segment]: componentToString(chartConfig, ChartTooltipContent, {
                hideLabel: true,
              })!,
            }"
          />
        </VisSingleContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col gap-2 text-sm">
      <div class="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </div>
      <div class="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </CardFooter>
  </Card>
</template>
`,O={class:"flex items-center gap-2 font-medium leading-none"},z=c({__name:"PieChart3",setup(d){const s=[{browser:"chrome",visitors:275,fill:"var(--color-chrome)"},{browser:"safari",visitors:200,fill:"var(--color-safari)"},{browser:"firefox",visitors:287,fill:"var(--color-firefox)"},{browser:"edge",visitors:173,fill:"var(--color-edge)"},{browser:"other",visitors:190,fill:"var(--color-other)"}],e={visitors:{label:"Visitors",color:void 0},chrome:{label:"Chrome",color:"var(--chart-1)"},safari:{label:"Safari",color:"var(--chart-2)"},firefox:{label:"Firefox",color:"var(--chart-3)"},edge:{label:"Edge",color:"var(--chart-4)"},other:{label:"Other",color:"var(--chart-5)"}},m=P(()=>s.reduce((n,a)=>n+a.visitors,0));return(n,a)=>(f(),$(r(x),{class:"flex flex-col"},{default:t(()=>[o(r(T),{class:"items-center pb-0"},{default:t(()=>[o(r(w),null,{default:t(()=>[...a[0]||(a[0]=[i("Pie Chart",-1)])]),_:1}),o(r(_),null,{default:t(()=>[...a[1]||(a[1]=[i("January - June 2024",-1)])]),_:1})]),_:1}),o(r(b),{class:"flex-1 pb-0"},{default:t(()=>[o(r(p),{config:e,class:"mx-auto aspect-square max-h-62.5",style:{"--vis-donut-central-label-font-size":"var(--text-3xl)","--vis-donut-central-label-font-weight":"var(--font-weight-bold)","--vis-donut-central-label-text-color":"var(--foreground)","--vis-donut-central-sub-label-text-color":"var(--muted-foreground)"}},{default:t(()=>[o(r(S),{data:s,margin:{top:30,bottom:30}},{default:t(()=>[o(r(y),{value:h=>h.visitors,color:h=>e[h.browser].color,"arc-width":30,"central-label-offset-y":10,"central-label":m.value.toLocaleString(),"central-sub-label":"Visitors"},null,8,["value","color","central-label"]),o(r(v),{triggers:{[r(V).selectors.segment]:r(g)(e,r(C),{hideLabel:!0})}},null,8,["triggers"])]),_:1})]),_:1})]),_:1}),o(r(D),{class:"flex-col gap-2 text-sm"},{default:t(()=>[l("div",O,[a[2]||(a[2]=i(" Trending up by 5.2% this month ",-1)),o(r(F),{class:"h-4 w-4"})]),a[3]||(a[3]=l("div",{class:"leading-none text-muted-foreground"}," Showing total visitors for the last 6 months ",-1))]),_:1})]),_:1}))}}),B=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";

import { Donut } from "@unovis/ts";
import { VisDonut, VisSingleContainer } from "@unovis/vue";
import { TrendingUp } from "lucide-vue-next";
import { computed } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
type Data = (typeof chartData)[number];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: undefined,
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const totalVisitors = computed(() => chartData.reduce((acc, curr) => acc + curr.visitors, 0));
<\/script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="items-center pb-0">
      <CardTitle>Pie Chart</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 pb-0">
      <ChartContainer
        :config="chartConfig"
        class="mx-auto aspect-square max-h-62.5"
        :style="{
          '--vis-donut-central-label-font-size': 'var(--text-3xl)',
          '--vis-donut-central-label-font-weight': 'var(--font-weight-bold)',
          '--vis-donut-central-label-text-color': 'var(--foreground)',
          '--vis-donut-central-sub-label-text-color': 'var(--muted-foreground)',
        }"
      >
        <VisSingleContainer :data="chartData" :margin="{ top: 30, bottom: 30 }">
          <VisDonut
            :value="(d: Data) => d.visitors"
            :color="(d: Data) => chartConfig[d.browser as keyof typeof chartConfig].color"
            :arc-width="30"
            :central-label-offset-y="10"
            :central-label="totalVisitors.toLocaleString()"
            central-sub-label="Visitors"
          />
          <ChartTooltip
            :triggers="{
              [Donut.selectors.segment]: componentToString(chartConfig, ChartTooltipContent, {
                hideLabel: true,
              })!,
            }"
          />
        </VisSingleContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col gap-2 text-sm">
      <div class="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </div>
      <div class="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </CardFooter>
  </Card>
</template>
`,N={class:"@container/pie-chart-examples"},R={class:"grid grid-cols-1 @4xl:grid-cols-3 gap-5"},rr=c({__name:"ScreenPieChart",setup(d){return(s,e)=>(f(),J("div",N,[l("div",R,[o(u,{"raw-component":r(L)},{title:t(()=>[...e[0]||(e[0]=[i("Simple Pie Chart",-1)])]),example:t(()=>[o(E)]),_:1},8,["raw-component"]),o(u,{"raw-component":r(q)},{title:t(()=>[...e[1]||(e[1]=[i("Donut Chart",-1)])]),example:t(()=>[o(k)]),_:1},8,["raw-component"]),o(u,{"raw-component":r(B)},{title:t(()=>[...e[2]||(e[2]=[i("Donut Chart Variation",-1)])]),example:t(()=>[o(z)]),_:1},8,["raw-component"])])]))}});export{rr as default};
