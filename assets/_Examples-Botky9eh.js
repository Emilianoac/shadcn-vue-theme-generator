import{_ as f}from"./ExampleCard.vue_vue_type_script_setup_true_lang-B9Mol2ml.js";import{a as F,b as H,c as J,_ as X}from"./CoppyButton.vue_vue_type_script_setup_true_lang-BGdXP9nw.js";import{d as C,o as c,e as u,H as e,D as n,u as t,I as s,A as i,V as Y,z as L,L as B,M as U,T as N,B as M,J as E}from"./highlight-Dn55r6j6.js";import{_ as x,C as g,D as y,E as b}from"./index-BArpchMQ.js";import{_ as k,a as D}from"./CardContent.vue_vue_type_script_setup_true_lang-CwsYOZhY.js";import{_ as v,a as _}from"./CardTitle.vue_vue_type_script_setup_true_lang-Cz70Btsw.js";import{_ as w}from"./CardFooter.vue_vue_type_script_setup_true_lang-DmHBdwU2.js";import{_ as T}from"./CardHeader.vue_vue_type_script_setup_true_lang-Dpiadp8i.js";import{b as S,C as p,A}from"./index-sLPctGup.js";import{C as R}from"./index-HHyB7iau.js";import{C as $,a as G}from"./index-qS1-szb7.js";import{T as V}from"./trending-up-CcbIUJhH.js";import{A as z}from"./index-CkPO6xLw.js";import{b as P,E as q,D as K}from"./index-BJW0ftWC.js";import"./array-BNpUzgbK.js";import"./path-BYvMW87q.js";const O={class:"flex w-full items-start gap-2 text-sm"},I={class:"grid gap-2"},j={class:"flex items-center gap-2 leading-none font-medium"},Q=C({__name:"ChartArea",setup(h){const l=[{month:1,monthLabel:"January",desktop:186},{month:2,monthLabel:"February",desktop:305},{month:3,monthLabel:"March",desktop:237},{month:4,monthLabel:"April",desktop:73},{month:5,monthLabel:"May",desktop:209},{month:6,monthLabel:"June",desktop:214}],r={desktop:{label:"Desktop",color:"var(--chart-1)"}};return(m,o)=>(c(),u(t(D),{"data-component-x-ray":"Card"},{default:e(()=>[n(t(T),{"data-component-x-ray":"CardHeader"},{default:e(()=>[n(t(v),{"data-component-x-ray":"CardTitle"},{default:e(()=>[...o[0]||(o[0]=[s("Area Chart",-1)])]),_:1}),n(t(_),{"data-component-x-ray":"CardDescription"},{default:e(()=>[...o[1]||(o[1]=[s(" Showing total visitors for the last 6 months ",-1)])]),_:1})]),_:1}),n(t(k),{"data-component-x-ray":"CardContent"},{default:e(()=>[n(t(x),{config:r,"data-component-x-ray":"ChartContainer"},{default:e(()=>[n(t(S),{data:l,"data-component-x-ray":"VisXYContainer"},{default:e(()=>[n(t(R),{x:a=>a.month,y:[a=>a.desktop],color:(a,d)=>[r.desktop.color][d],opacity:.4},null,8,["x","y","color"]),n(t($),{x:a=>a.month,y:[a=>a.desktop],color:(a,d)=>[r.desktop.color][d],"line-width":1},null,8,["x","y","color"]),n(t(p),{type:"x",x:a=>a.month,"tick-line":!1,"domain-line":!1,"grid-line":!1,"num-ticks":6,"tick-format":(a,d)=>l[d]?.monthLabel.slice(0,3)},null,8,["x","tick-format"]),n(t(g)),n(t(A),{template:t(y)(r,t(b),{labelKey:"monthLabel"}),color:(a,d)=>[r.desktop.color][d%2]},null,8,["template","color"])]),_:1})]),_:1})]),_:1}),n(t(w),null,{default:e(()=>[i("div",O,[i("div",I,[i("div",j,[o[2]||(o[2]=s(" Trending up by 5.2% this month ",-1)),n(t(V),{class:"h-4 w-4"})]),o[3]||(o[3]=i("div",{class:"text-muted-foreground flex items-center gap-2 leading-none"}," January - June 2024 ",-1))])])]),_:1})]),_:1}))}}),W=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";
import { VisArea, VisAxis, VisLine, VisXYContainer } from "@unovis/vue";

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
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

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
<\/script>

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
`,Z={class:"flex gap-2 font-medium leading-none"},tt=C({__name:"ChartBar",setup(h){const l=[{date:new Date("2024-01-01"),desktop:186,mobile:80},{date:new Date("2024-02-01"),desktop:305,mobile:200},{date:new Date("2024-03-01"),desktop:237,mobile:120},{date:new Date("2024-04-01"),desktop:73,mobile:190},{date:new Date("2024-05-01"),desktop:209,mobile:130},{date:new Date("2024-06-01"),desktop:214,mobile:140}],r={desktop:{label:"Desktop",color:"var(--chart-1)"},mobile:{label:"Mobile",color:"var(--chart-2)"}};return(m,o)=>(c(),u(t(D),{"data-component-x-ray":"Card"},{default:e(()=>[n(t(T),{"data-component-x-ray":"CardHeader"},{default:e(()=>[n(t(v),{"data-component-x-ray":"CardTitle"},{default:e(()=>[...o[0]||(o[0]=[s("Bar Chart - Multiple",-1)])]),_:1}),n(t(_),{"data-component-x-ray":"CardDescription"},{default:e(()=>[...o[1]||(o[1]=[s("January - June 2024",-1)])]),_:1})]),_:1}),n(t(k),{"data-component-x-ray":"CardContent"},{default:e(()=>[n(t(x),{config:r,"data-component-x-ray":"ChartContainer"},{default:e(()=>[n(t(S),{data:l,"data-component-x-ray":"VisXYContainer"},{default:e(()=>[n(t(z),{x:a=>a.date,y:[a=>a.desktop,a=>a.mobile],color:[r.desktop.color,r.mobile.color],"rounded-corners":4,"bar-padding":"0.15","group-padding":"0","data-component-x-ray":"VisGroupedBar"},null,8,["x","y","color"]),n(t(p),{type:"x",x:a=>a.date,"tick-line":!1,"domain-line":!1,"grid-line":!1,"num-ticks":6,"tick-format":a=>new Date(a).toLocaleDateString("en-US",{month:"short"}),"tick-values":l.map(a=>a.date),"data-component-x-ray":"VisAxisX"},null,8,["x","tick-format","tick-values"]),n(t(p),{type:"y","num-ticks":3,"tick-line":!1,"domain-line":!1,"data-component-x-ray":"VisAxisY"}),n(t(g)),n(t(A),{template:t(y)(r,t(b),{indicator:"dashed",hideLabel:!0}),color:"#0000","data-component-x-ray":"ChartCrosshair"},null,8,["template"])]),_:1})]),_:1})]),_:1}),n(t(w),{class:"flex-col items-start gap-2 text-sm","data-component-x-ray":"CardFooter"},{default:e(()=>[i("p",Z,[o[2]||(o[2]=s(" Trending up by 5.2% this month ",-1)),n(t(V),{class:"h-4 w-4"})]),o[3]||(o[3]=i("p",{class:"leading-none text-muted-foreground"},"Showing total visitors for the last 6 months",-1))]),_:1})]),_:1}))}}),nt=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";
import { VisAxis, VisGroupedBar, VisXYContainer } from "@unovis/vue";
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
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

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
<\/script>

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
`,at={class:"flex gap-2 font-medium leading-none"},et=C({__name:"ChartLine",setup(h){const l=[{date:new Date("2024-01-01"),desktop:186},{date:new Date("2024-02-01"),desktop:305},{date:new Date("2024-03-01"),desktop:237},{date:new Date("2024-04-01"),desktop:73},{date:new Date("2024-05-01"),desktop:209},{date:new Date("2024-06-01"),desktop:214}],r={desktop:{label:"Desktop",color:"var(--chart-1)"}};return(m,o)=>(c(),u(t(D),{"data-component-x-ray":"Card"},{default:e(()=>[n(t(T),{"data-component-x-ray":"CardHeader"},{default:e(()=>[n(t(v),{"data-component-x-ray":"CardTitle"},{default:e(()=>[...o[0]||(o[0]=[s("Line Chart",-1)])]),_:1}),n(t(_),{"data-component-x-ray":"CardDescription"},{default:e(()=>[...o[1]||(o[1]=[s("January - June 2024",-1)])]),_:1})]),_:1}),n(t(k),{"data-component-x-ray":"CardContent"},{default:e(()=>[n(t(x),{config:r,"data-component-x-ray":"ChartContainer"},{default:e(()=>[n(t(S),{data:l,margin:{left:-24},"y-domain":[0,void 0],"data-component-x-ray":"VisXYContainer"},{default:e(()=>[n(t($),{x:a=>a.date,y:a=>a.desktop,color:r.desktop.color,"curve-type":t(G).Natural,"data-component-x-ray":"VisLine"},null,8,["x","y","color","curve-type"]),n(t(p),{type:"x",x:a=>a.date,"tick-line":!1,"domain-line":!1,"grid-line":!1,"num-ticks":6,"tick-format":a=>new Date(a).toLocaleDateString("en-US",{month:"short"}),"tick-values":l.map(a=>a.date),"data-component-x-ray":"VisAxis-x"},null,8,["x","tick-format","tick-values"]),n(t(p),{type:"y","num-ticks":3,"tick-line":!1,"domain-line":!1,"data-component-x-ray":"VisAxis"}),n(t(g),{"data-component-x-ray":"ChartTooltip"}),n(t(A),{template:t(y)(r,t(b),{hideLabel:!0}),color:r.desktop.color,"data-component-x-ray":"ChartCrosshair"},null,8,["template","color"])]),_:1})]),_:1})]),_:1}),n(t(w),{class:"flex-col items-start gap-2 text-sm","data-component-x-ray":"CardFooter"},{default:e(()=>[i("p",at,[o[2]||(o[2]=s(" Trending up by 5.2% this month ",-1)),n(t(V),{class:"h-4 w-4"})]),o[3]||(o[3]=i("p",{class:"leading-none text-muted-foreground"},"Showing total visitors for the last 6 months",-1))]),_:1})]),_:1}))}}),ot=`<script setup lang="ts">
import type { ChartConfig } from "@/shared/components/ui/chart";
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
} from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/shared/components/ui/chart";

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
<\/script>

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
`,rt={class:"flex items-center gap-2 font-medium leading-none"},it=C({__name:"ChartRadial",setup(h){const l=[{browser:"chrome",visitors:275,fill:"var(--color-chrome)"},{browser:"safari",visitors:200,fill:"var(--color-safari)"},{browser:"firefox",visitors:187,fill:"var(--color-firefox)"},{browser:"edge",visitors:173,fill:"var(--color-edge)"},{browser:"other",visitors:90,fill:"var(--color-other)"}],r={visitors:{label:"Visitors",color:void 0},chrome:{label:"Chrome",color:"var(--chart-1)"},safari:{label:"Safari",color:"var(--chart-2)"},firefox:{label:"Firefox",color:"var(--chart-3)"},edge:{label:"Edge",color:"var(--chart-4)"},other:{label:"Other",color:"var(--chart-5)"}};return(m,o)=>(c(),u(t(D),{class:"flex flex-col","data-component-x-ray":"Card"},{default:e(()=>[n(t(T),{class:"items-center pb-0","data-component-x-ray":"CardHeader"},{default:e(()=>[n(t(v),{"data-component-x-ray":"CardTitle"},{default:e(()=>[...o[0]||(o[0]=[s("Pie Chart",-1)])]),_:1}),n(t(_),{"data-component-x-ray":"CardDescription"},{default:e(()=>[...o[1]||(o[1]=[s("January - June 2024",-1)])]),_:1})]),_:1}),n(t(k),{class:"flex-1 pb-0","data-component-x-ray":"CardContent"},{default:e(()=>[n(t(x),{config:r,class:"mx-auto aspect-square max-h-62.5","data-component-x-ray":"ChartContainer"},{default:e(()=>[n(t(P),{data:l,margin:{top:30,bottom:30},"data-component-x-ray":"VisSingleContainer"},{default:e(()=>[n(t(q),{value:a=>a.visitors,color:a=>r[a.browser].color,"arc-width":0,"data-component-x-ray":"VisDonut"},null,8,["value","color"]),n(t(g),{triggers:{[t(K).selectors.segment]:t(y)(r,t(b),{hideLabel:!0})},"data-component-x-ray":"ChartTooltip"},null,8,["triggers"])]),_:1})]),_:1})]),_:1}),n(t(w),{class:"flex-col gap-2 text-sm","data-component-x-ray":"CardFooter"},{default:e(()=>[i("p",rt,[o[2]||(o[2]=s(" Trending up by 5.2% this month ",-1)),n(t(V),{class:"h-4 w-4"})]),o[3]||(o[3]=i("p",{class:"leading-none text-muted-foreground"},"Showing total visitors for the last 6 months",-1))]),_:1})]),_:1}))}}),st=`<script setup lang="ts">
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
  <Card class="flex flex-col" data-component-x-ray="Card">
    <CardHeader class="items-center pb-0" data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Pie Chart</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">January - June 2024</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 pb-0" data-component-x-ray="CardContent">
      <ChartContainer
        :config="chartConfig"
        class="mx-auto aspect-square max-h-62.5"
        data-component-x-ray="ChartContainer"
      >
        <VisSingleContainer
          :data="chartData"
          :margin="{ top: 30, bottom: 30 }"
          data-component-x-ray="VisSingleContainer"
        >
          <VisDonut
            :value="(d: Data) => d.visitors"
            :color="(d: Data) => chartConfig[d.browser as keyof typeof chartConfig].color"
            :arc-width="0"
            data-component-x-ray="VisDonut"
          />
          <ChartTooltip
            :triggers="{
              [Donut.selectors.segment]: componentToString(chartConfig, ChartTooltipContent, {
                hideLabel: true,
              })!,
            }"
            data-component-x-ray="ChartTooltip"
          />
        </VisSingleContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col gap-2 text-sm" data-component-x-ray="CardFooter">
      <p class="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
      </p>
      <p class="leading-none text-muted-foreground">Showing total visitors for the last 6 months</p>
    </CardFooter>
  </Card>
</template>
`,dt={class:"@container max-w-200 mx-auto"},lt={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},ct={key:0,class:"col-span-2 space-y-4"},mt={class:"flex items-center gap-3"},pt=["onClick"],At=C({__name:"_Examples",setup(h){const{isActive:l}=Y(),r=[{name:"chart-1",className:"bg-chart-1"},{name:"chart-2",className:"bg-chart-2"},{name:"chart-3",className:"bg-chart-3"},{name:"chart-4",className:"bg-chart-4"},{name:"chart-5",className:"bg-chart-5"}];function m(o){window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("xray:focus-theme-color",{detail:{themeKey:o}}))},0)}return(o,a)=>(c(),L("div",dt,[i("div",lt,[t(l)?(c(),L("div",ct,[a[0]||(a[0]=i("div",null,[i("h2",{class:"text-xl font-semibold"},"Charts colors"),i("p",{class:"text-muted-foreground text-sm"},"Go to chart colors in theme editor")],-1)),i("div",mt,[(c(),L(B,null,U(r,d=>n(t(X),{key:d.name},{default:e(()=>[n(t(F),null,{default:e(()=>[n(t(H),{"as-child":""},{default:e(()=>[i("div",{class:N(["w-5 h-5 rounded-sm hover:opacity-70 cursor-pointer",d.className]),onClick:Ct=>m(d.name)},null,10,pt)]),_:2},1024),n(t(J),null,{default:e(()=>[i("p",null,M(`${d} color`),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))])])):E("",!0),n(f,{"raw-component":t(W)},{title:e(()=>[...a[1]||(a[1]=[s(" Area Chart ",-1)])]),example:e(()=>[n(Q)]),_:1},8,["raw-component"]),n(f,{"raw-component":t(nt)},{title:e(()=>[...a[2]||(a[2]=[s(" Bar Chart ",-1)])]),example:e(()=>[n(tt)]),_:1},8,["raw-component"]),n(f,{"raw-component":t(ot)},{title:e(()=>[...a[3]||(a[3]=[s(" Line Chart ",-1)])]),example:e(()=>[n(et)]),_:1},8,["raw-component"]),n(f,{"raw-component":t(st)},{title:e(()=>[...a[4]||(a[4]=[s(" Pie Chart ",-1)])]),example:e(()=>[n(it)]),_:1},8,["raw-component"])])]))}});export{At as default};
