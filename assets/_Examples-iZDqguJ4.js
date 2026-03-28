import{_ as v}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{d,o as m,a as P,H as o,D as n,u as e,_ as i,I as r,A as a,z as _}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{_ as p,a as s,b as l}from"./PopoverTrigger.vue_vue_type_script_setup_true_lang-DzAigcnT.js";import{_ as g}from"./Input.vue_vue_type_script_setup_true_lang-Bt30ug1V.js";import{_ as f}from"./index-CVa6A2b7.js";import{_ as y}from"./FieldGroup.vue_vue_type_script_setup_true_lang-oEVSd7od.js";import{_ as x}from"./FieldLabel.vue_vue_type_script_setup_true_lang-CxLdfyZS.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./VisuallyHidden-fIfXuLIO.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";import"./useBodyScrollLock-DgbeSxz5.js";import"./useFocusGuards-DWoBvhE4.js";import"./Label.vue_vue_type_script_setup_true_lang-D8lI5-mV.js";const h=d({__name:"PopoverBasic",setup(u){return(c,t)=>(m(),P(e(l),{"data-component-x-ray":"Popover"},{default:o(()=>[n(e(p),{"as-child":""},{default:o(()=>[n(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[0]||(t[0]=[r(" Open popover ",-1)])]),_:1})]),_:1}),n(e(s),{class:"w-80","data-component-x-ray":"PopoverContent"},{default:o(()=>[...t[1]||(t[1]=[a("div",{class:"space-y-2"},[a("h4",{class:"font-medium leading-none"},"Dimensions"),a("p",{class:"text-sm text-muted-foreground"},"Set the dimensions for the layer.")],-1)])]),_:1})]),_:1}))}}),B=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
<\/script>

<template>
  <Popover data-component-x-ray="Popover">
    <PopoverTrigger as-child>
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open popover </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80" data-component-x-ray="PopoverContent">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
`,w={class:"grid gap-4"},C=d({__name:"PopoverWithForm",setup(u){return(c,t)=>(m(),P(e(l),{"data-component-x-ray":"Popover"},{default:o(()=>[n(e(p),{"as-child":""},{default:o(()=>[n(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[0]||(t[0]=[r(" Open popover ",-1)])]),_:1})]),_:1}),n(e(s),{class:"w-80","data-component-x-ray":"PopoverContent"},{default:o(()=>[a("div",w,[t[3]||(t[3]=a("div",{class:"space-y-2"},[a("h4",{class:"font-medium leading-none"},"Dimensions"),a("p",{class:"text-sm text-muted-foreground"},"Set the dimensions for the layer.")],-1)),n(e(y),{class:"gap-4","data-component-x-ray":"FieldGroup"},{default:o(()=>[n(e(f),{orientation:"horizontal","data-component-x-ray":"Field"},{default:o(()=>[n(e(x),{"html-for":"width",class:"w-1/2","data-component-x-ray":"FieldLabel"},{default:o(()=>[...t[1]||(t[1]=[r(" Width ",-1)])]),_:1}),n(e(g),{id:"width","default-value":"100%","data-component-x-ray-trigger":"Input"})]),_:1}),n(e(f),{orientation:"horizontal","data-component-x-ray":"Field"},{default:o(()=>[n(e(x),{"html-for":"height",class:"w-1/2","data-component-x-ray":"FieldLabel"},{default:o(()=>[...t[2]||(t[2]=[r(" Height ",-1)])]),_:1}),n(e(g),{id:"height","default-value":"25px","data-component-x-ray-trigger":"Input"})]),_:1})]),_:1})])]),_:1})]),_:1}))}}),F=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
<\/script>

<template>
  <Popover data-component-x-ray="Popover">
    <PopoverTrigger as-child>
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open popover </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80" data-component-x-ray="PopoverContent">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <FieldGroup class="gap-4" data-component-x-ray="FieldGroup">
          <Field orientation="horizontal" data-component-x-ray="Field">
            <FieldLabel html-for="width" class="w-1/2" data-component-x-ray="FieldLabel">
              Width
            </FieldLabel>
            <Input id="width" default-value="100%" data-component-x-ray-trigger="Input" />
          </Field>
          <Field orientation="horizontal" data-component-x-ray="Field">
            <FieldLabel html-for="height" class="w-1/2" data-component-x-ray="FieldLabel">
              Height
            </FieldLabel>
            <Input id="height" default-value="25px" data-component-x-ray-trigger="Input" />
          </Field>
        </FieldGroup>
      </div>
    </PopoverContent>
  </Popover>
</template>
`,b={class:"flex gap-6"},T=d({__name:"PopoverAlignments",setup(u){return(c,t)=>(m(),_("div",b,[n(e(l),{"data-component-x-ray":"Popover"},{default:o(()=>[n(e(p),{"as-child":!0},{default:o(()=>[n(e(i),{variant:"outline",size:"sm","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[0]||(t[0]=[r(" Start ",-1)])]),_:1})]),_:1}),n(e(s),{align:"start",class:"w-40","data-component-x-ray":"PopoverContent"},{default:o(()=>[...t[1]||(t[1]=[a("p",{class:"text-sm"},"Aligned to start",-1)])]),_:1})]),_:1}),n(e(l),{"data-component-x-ray":"Popover"},{default:o(()=>[n(e(p),{"as-child":!0},{default:o(()=>[n(e(i),{variant:"outline",size:"sm","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[2]||(t[2]=[r(" Center ",-1)])]),_:1})]),_:1}),n(e(s),{align:"center",class:"w-40","data-component-x-ray":"PopoverContent"},{default:o(()=>[...t[3]||(t[3]=[a("p",{class:"text-sm"},"Aligned to center",-1)])]),_:1})]),_:1}),n(e(l),{"data-component-x-ray":"Popover"},{default:o(()=>[n(e(p),{"as-child":!0},{default:o(()=>[n(e(i),{variant:"outline",size:"sm","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[4]||(t[4]=[r(" End ",-1)])]),_:1})]),_:1}),n(e(s),{align:"end",class:"w-40","data-component-x-ray":"PopoverContent"},{default:o(()=>[...t[5]||(t[5]=[a("p",{class:"text-sm"},"Aligned to end",-1)])]),_:1})]),_:1})]))}}),$=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
<\/script>

<template>
  <div class="flex gap-6">
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> Start </Button>
      </PopoverTrigger>
      <PopoverContent align="start" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to start</p>
      </PopoverContent>
    </Popover>
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> Center </Button>
      </PopoverTrigger>
      <PopoverContent align="center" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to center</p>
      </PopoverContent>
    </Popover>
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> End </Button>
      </PopoverTrigger>
      <PopoverContent align="end" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to end</p>
      </PopoverContent>
    </Popover>
  </div>
</template>
`,z={class:"@container max-w-250 mx-auto"},A={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Q=d({__name:"_Examples",setup(u){return(c,t)=>(m(),_("div",z,[a("div",A,[n(v,{"raw-component":e(B)},{title:o(()=>[...t[0]||(t[0]=[r(" Basic ",-1)])]),example:o(()=>[n(h)]),_:1},8,["raw-component"]),n(v,{"raw-component":e(F)},{title:o(()=>[...t[1]||(t[1]=[r(" With form ",-1)])]),example:o(()=>[n(C)]),_:1},8,["raw-component"]),n(v,{"raw-component":e($)},{title:o(()=>[...t[2]||(t[2]=[r(" Alignments ",-1)])]),example:o(()=>[n(T)]),_:1},8,["raw-component"])])]))}});export{Q as default};
