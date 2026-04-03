import{_ as g}from"./ExampleCard.vue_vue_type_script_setup_true_lang-C8cUG3aI.js";import{a as c,b as d,c as m,d as A,e as u,f as D,g as p,h as x,_ as y}from"./AlertDialogTrigger.vue_vue_type_script_setup_true_lang-BRIXWSrE.js";import{f as w,d as l,o as r,e as f,H as e,D as o,u as a,_,I as n,z as T,A as b}from"./highlight-CeYIOz-i.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-z5jP3Qrf.js";import"./DialogTrigger-CtlYhvYM.js";const C=w("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),B=l({__name:"AlertDialogBasic",setup(i){return(s,t)=>(r(),f(a(y),null,{default:e(()=>[o(a(c),{"as-child":"",class:"mx-auto block"},{default:e(()=>[o(a(_),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[0]||(t[0]=[n(" Default ",-1)])]),_:1})]),_:1}),o(a(d),{"data-component-x-ray":"AlertDialogContent"},{default:e(()=>[o(a(m),{"data-component-x-ray":"AlertDialogHeader"},{default:e(()=>[o(a(A),{"data-component-x-ray":"AlertDialogTitle"},{default:e(()=>[...t[1]||(t[1]=[n(" Are you absolutely sure? ",-1)])]),_:1}),o(a(u),{"data-component-x-ray":"AlertDialogDescription"},{default:e(()=>[...t[2]||(t[2]=[n(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(a(D),{"data-component-x-ray":"AlertDialogFooter"},{default:e(()=>[o(a(p),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:e(()=>[...t[3]||(t[3]=[n(" Cancel ",-1)])]),_:1}),o(a(x),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:e(()=>[...t[4]||(t[4]=[n(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),v=`<script lang="ts" setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog";
import { Button } from "@/shared/components/ui/button";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default </Button>
    </AlertDialogTrigger>
    <AlertDialogContent data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader data-component-x-ray="AlertDialogHeader">
        <AlertDialogTitle data-component-x-ray="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription data-component-x-ray="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter data-component-x-ray="AlertDialogFooter">
        <AlertDialogCancel data-component-x-ray-trigger="AlertDialogCancel">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction data-component-x-ray-trigger="AlertDialogAction">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
`,H=l({__name:"AlertDialogSmall",setup(i){return(s,t)=>(r(),f(a(y),null,{default:e(()=>[o(a(c),{"as-child":"",class:"mx-auto block"},{default:e(()=>[o(a(_),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[0]||(t[0]=[n(" Small ",-1)])]),_:1})]),_:1}),o(a(d),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent"},{default:e(()=>[o(a(m),{"data-component-x-ray":"AlertDialogHeader"},{default:e(()=>[o(a(A),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:e(()=>[...t[1]||(t[1]=[n(" Allow accessory to connect? ",-1)])]),_:1}),o(a(u),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:e(()=>[...t[2]||(t[2]=[n(" Do you want to allow the USB accessory to connect to this device? ",-1)])]),_:1})]),_:1}),o(a(D),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:e(()=>[o(a(p),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:e(()=>[...t[3]||(t[3]=[n(" Cancel ",-1)])]),_:1}),o(a(x),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:e(()=>[...t[4]||(t[4]=[n(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),F=`<script lang="ts" setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog";
import { Button } from "@/shared/components/ui/button";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Small </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs sm:max-w-xs" data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader data-component-x-ray="AlertDialogHeader">
        <AlertDialogTitle class="text-center" data-component-x-ray="AlertDialogTitle">
          Allow accessory to connect?
        </AlertDialogTitle>
        <AlertDialogDescription class="text-center" data-component-x-ray="AlertDialogDescription">
          Do you want to allow the USB accessory to connect to this device?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="sm:grid grid-cols-2" data-component-x-ray="AlertDialogFooter">
        <AlertDialogCancel data-component-x-ray-trigger="AlertDialogCancel">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction data-component-x-ray-trigger="AlertDialogAction">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
`,k=l({__name:"AlertDialogWithMedia",setup(i){return(s,t)=>(r(),f(a(y),null,{default:e(()=>[o(a(c),{"as-child":"",class:"mx-auto block"},{default:e(()=>[o(a(_),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[0]||(t[0]=[n(" Default (Media) ",-1)])]),_:1})]),_:1}),o(a(d),{class:"max-w-xs md:max-w-md","data-component-x-ray":"AlertDialogContent"},{default:e(()=>[o(a(m),{class:"md:grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-4","data-component-x-ray":"AlertDialogHeader"},{default:e(()=>[o(a(C),{class:"col-span-1 row-span-2 mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(a(A),{class:"col-start-2","data-component-x-ray":"AlertDialogTitle"},{default:e(()=>[...t[1]||(t[1]=[n(" Are you absolutely sure? ",-1)])]),_:1}),o(a(u),{class:"col-start-2","data-component-x-ray":"AlertDialogDescription"},{default:e(()=>[...t[2]||(t[2]=[n(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(a(D),{"data-component-x-ray":"AlertDialogFooter"},{default:e(()=>[o(a(p),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:e(()=>[...t[3]||(t[3]=[n(" Cancel ",-1)])]),_:1}),o(a(x),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:e(()=>[...t[4]||(t[4]=[n(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$=`<script lang="ts" setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog";
import { Button } from "@/shared/components/ui/button";
import { Layers } from "lucide-vue-next";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default (Media) </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs md:max-w-md" data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader
        class="md:grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-4"
        data-component-x-ray="AlertDialogHeader"
      >
        <Layers
          class="col-span-1 row-span-2 mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"
        />
        <AlertDialogTitle class="col-start-2" data-component-x-ray="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription class="col-start-2" data-component-x-ray="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter data-component-x-ray="AlertDialogFooter">
        <AlertDialogCancel data-component-x-ray-trigger="AlertDialogCancel">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction data-component-x-ray-trigger="AlertDialogAction">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
`,M=l({__name:"AlertDialogWithMediaSmall",setup(i){return(s,t)=>(r(),f(a(y),null,{default:e(()=>[o(a(c),{"as-child":"",class:"mx-auto block"},{default:e(()=>[o(a(_),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[0]||(t[0]=[n(" Small (Media) ",-1)])]),_:1})]),_:1}),o(a(d),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent"},{default:e(()=>[o(a(m),{class:"items-center","data-component-x-ray":"AlertDialogHeader"},{default:e(()=>[o(a(C),{class:"mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(a(A),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:e(()=>[...t[1]||(t[1]=[n(" Are you absolutely sure? ",-1)])]),_:1}),o(a(u),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:e(()=>[...t[2]||(t[2]=[n(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(a(D),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:e(()=>[o(a(p),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:e(()=>[...t[3]||(t[3]=[n(" Cancel ",-1)])]),_:1}),o(a(x),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:e(()=>[...t[4]||(t[4]=[n(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),S=`<script lang="ts" setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog";
import { Button } from "@/shared/components/ui/button";
import { Layers } from "lucide-vue-next";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Small (Media) </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs sm:max-w-xs" data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader class="items-center" data-component-x-ray="AlertDialogHeader">
        <Layers class="mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm" />
        <AlertDialogTitle class="text-center" data-component-x-ray="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription class="text-center" data-component-x-ray="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="sm:grid grid-cols-2" data-component-x-ray="AlertDialogFooter">
        <AlertDialogCancel data-component-x-ray-trigger="AlertDialogCancel">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction data-component-x-ray-trigger="AlertDialogAction">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
`,L={class:"@container"},h={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 max-w-200 mx-auto"},q=l({__name:"_Examples",setup(i){return(s,t)=>(r(),T("div",L,[b("div",h,[o(g,{"raw-component":a(v)},{title:e(()=>[...t[0]||(t[0]=[n("Basic",-1)])]),example:e(()=>[o(B)]),_:1},8,["raw-component"]),o(g,{"raw-component":a(F)},{title:e(()=>[...t[1]||(t[1]=[n("Small",-1)])]),example:e(()=>[o(H)]),_:1},8,["raw-component"]),o(g,{"raw-component":a($)},{title:e(()=>[...t[2]||(t[2]=[n("With Media",-1)])]),example:e(()=>[o(k)]),_:1},8,["raw-component"]),o(g,{"raw-component":a(S)},{title:e(()=>[...t[3]||(t[3]=[n("With Media Small",-1)])]),example:e(()=>[o(M)]),_:1},8,["raw-component"])])]))}});export{q as default};
