import{_ as u}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{d as s,o as e,a as y,H as t,D as o,u as n,_,I as a,A as d,z as l,L as B,M as v,B as w}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{a as T,b as f,c as g,_ as x}from"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";const C=s({__name:"TooltipBasic",setup(c){return(r,i)=>(e(),y(n(x),null,{default:t(()=>[o(n(T),{"data-component-x-ray":"Tooltip"},{default:t(()=>[o(n(f),{"as-child":!0},{default:t(()=>[o(n(_),{variant:"outline",class:"w-fit","data-component-x-ray-trigger":"Button"},{default:t(()=>[...i[0]||(i[0]=[a(" Show Tooltip ",-1)])]),_:1})]),_:1}),o(n(g),{"data-component-x-ray":"TooltipContent"},{default:t(()=>[...i[1]||(i[1]=[d("p",null,"Add to library",-1)])]),_:1})]),_:1})]),_:1}))}}),b=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
<\/script>

<template>
  <TooltipProvider>
    <Tooltip data-component-x-ray="Tooltip">
      <TooltipTrigger :as-child="true">
        <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button">
          Show Tooltip
        </Button>
      </TooltipTrigger>
      <TooltipContent data-component-x-ray="TooltipContent">
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
`,$={class:"flex flex-wrap gap-2"},P=s({__name:"TooltipSides",setup(c){const r=["top","right","bottom","left"];return(i,m)=>(e(),l("div",$,[(e(),l(B,null,v(r,p=>o(n(x),{key:p},{default:t(()=>[o(n(T),{"data-component-x-ray":"Tooltip"},{default:t(()=>[o(n(f),{"as-child":!0},{default:t(()=>[o(n(_),{variant:"outline",class:"w-fit capitalize","data-component-x-ray-trigger":"Button"},{default:t(()=>[a(w(p),1)]),_:2},1024)]),_:2},1024),o(n(g),{side:p,"data-component-x-ray":"TooltipContent"},{default:t(()=>[...m[0]||(m[0]=[d("p",null,"Add to library",-1)])]),_:1},8,["side"])]),_:2},1024)]),_:2},1024)),64))]))}}),S=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const sides = ["top", "right", "bottom", "left"] as const;
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <TooltipProvider v-for="side in sides" :key="side">
      <Tooltip data-component-x-ray="Tooltip">
        <TooltipTrigger :as-child="true">
          <Button variant="outline" class="w-fit capitalize" data-component-x-ray-trigger="Button">
            {{ side }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="side" data-component-x-ray="TooltipContent">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
`,h={class:"@container max-w-200 mx-auto"},k={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},V=s({__name:"_Examples",setup(c){return(r,i)=>(e(),l("div",h,[d("div",k,[o(u,{"raw-component":n(b)},{title:t(()=>[...i[0]||(i[0]=[a(" Basic ",-1)])]),example:t(()=>[o(C)]),_:1},8,["raw-component"]),o(u,{"raw-component":n(S)},{title:t(()=>[...i[1]||(i[1]=[a(" Sides ",-1)])]),example:t(()=>[o(P)]),_:1},8,["raw-component"])])]))}});export{V as default};
