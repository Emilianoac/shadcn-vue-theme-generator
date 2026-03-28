import{_ as u}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{g as B,d as i,o as d,a as c,H as e,D as o,u as n,I as a,A as r,_ as p,z as I}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{_ as l,b as E,c as m,d as f,e as x,a as h}from"./index-3jDzVASe.js";import{_ as T,a as w,b as _}from"./index-Baqvd1E8.js";import{_ as v}from"./Kbd.vue_vue_type_script_setup_true_lang-DDXU1XEr.js";import{F as C}from"./folder-GlGjFrMN.js";import{P as D}from"./plus-FlBkd2KJ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./VisuallyHidden-fIfXuLIO.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";import"./Input.vue_vue_type_script_setup_true_lang-Bt30ug1V.js";const g=B("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),b={class:"flex gap-2"},G={href:"#"},H=i({__name:"EmptyBasic",setup(s){return(y,t)=>(d(),c(n(x),{"data-component-x-ray":"Empty"},{default:e(()=>[o(n(l),{"data-component-x-ray":"EmptyHeader"},{default:e(()=>[o(n(E),{"data-component-x-ray":"EmptyTitle"},{default:e(()=>[...t[0]||(t[0]=[a(" No projects yet ",-1)])]),_:1}),o(n(m),{"data-component-x-ray":"EmptyDescription"},{default:e(()=>[...t[1]||(t[1]=[a(" You haven't created any projects yet. Get started by creating your first project. ",-1)])]),_:1})]),_:1}),o(n(f),{"data-component-x-ray":"EmptyContent"},{default:e(()=>[r("div",b,[o(n(p),{"as-child":!0,"data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[2]||(t[2]=[r("a",{href:"#"},"Create project",-1)])]),_:1}),o(n(p),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[3]||(t[3]=[a(" Import project ",-1)])]),_:1})]),o(n(p),{variant:"link","as-child":!0,class:"text-muted-foreground","data-component-x-ray-trigger":"Button"},{default:e(()=>[r("a",G,[t[4]||(t[4]=a(" Learn more ",-1)),o(n(g))])]),_:1})]),_:1})]),_:1}))}}),N=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
<\/script>

<template>
  <Empty data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyTitle data-component-x-ray="EmptyTitle"> No projects yet </EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        You haven't created any projects yet. Get started by creating your first project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <div class="flex gap-2">
        <Button :as-child="true" data-component-x-ray-trigger="Button">
          <a href="#">Create project</a>
        </Button>
        <Button variant="outline" data-component-x-ray-trigger="Button"> Import project </Button>
      </div>
      <Button
        variant="link"
        :as-child="true"
        class="text-muted-foreground"
        data-component-x-ray-trigger="Button"
      >
        <a href="#">
          Learn more
          <ArrowUpRightIcon />
        </a>
      </Button>
    </EmptyContent>
  </Empty>
</template>
`,$={href:"#"},A=i({__name:"EmptyWithMutedBackground",setup(s){return(y,t)=>(d(),c(n(x),{class:"bg-muted","data-component-x-ray":"Empty"},{default:e(()=>[o(n(l),null,{default:e(()=>[o(n(E),{"data-component-x-ray":"EmptyTitle"},{default:e(()=>[...t[0]||(t[0]=[a("No results found",-1)])]),_:1}),o(n(m),{"data-component-x-ray":"EmptyDescription"},{default:e(()=>[...t[1]||(t[1]=[a(" No results found for your search. Try adjusting your search terms. ",-1)])]),_:1})]),_:1}),o(n(f),{"data-component-x-ray":"EmptyContent"},{default:e(()=>[o(n(p),{"data-component-x-ray-trigger":"Button"},{default:e(()=>[...t[2]||(t[2]=[a("Try again",-1)])]),_:1}),o(n(p),{variant:"link","as-child":!0,class:"text-muted-foreground","data-component-x-ray-trigger":"Button"},{default:e(()=>[r("a",$,[t[3]||(t[3]=a(" Learn more ",-1)),o(n(g))])]),_:1})]),_:1})]),_:1}))}}),k=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
<\/script>

<template>
  <Empty class="bg-muted" data-component-x-ray="Empty">
    <EmptyHeader>
      <EmptyTitle data-component-x-ray="EmptyTitle">No results found</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        No results found for your search. Try adjusting your search terms.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <Button data-component-x-ray-trigger="Button">Try again</Button>
      <Button
        variant="link"
        :as-child="true"
        class="text-muted-foreground"
        data-component-x-ray-trigger="Button"
      >
        <a href="#">
          Learn more
          <ArrowUpRightIcon />
        </a>
      </Button>
    </EmptyContent>
  </Empty>
</template>
`,j=i({__name:"EmptyWithBorder",setup(s){return(y,t)=>(d(),c(n(x),{class:"border","data-component-x-ray":"Empty"},{default:e(()=>[o(n(l),{"data-component-x-ray":"EmptyHeader"},{default:e(()=>[o(n(E),{"data-component-x-ray":"EmptyTitle"},{default:e(()=>[...t[0]||(t[0]=[a("404 - Not Found",-1)])]),_:1}),o(n(m),{"data-component-x-ray":"EmptyDescription"},{default:e(()=>[...t[1]||(t[1]=[a(" The page you're looking for doesn't exist. Try searching for what you need below. ",-1)])]),_:1})]),_:1}),o(n(f),{"data-component-x-ray":"EmptyContent"},{default:e(()=>[o(n(T),{class:"w-3/4","data-component-x-ray":"InputGroup"},{default:e(()=>[o(n(w),{placeholder:"Try searching for pages...","data-component-x-ray-trigger":"InputGroupInput"}),o(n(_),{"data-component-x-ray-trigger":"InputGroupAddon"},{default:e(()=>[o(n(g))]),_:1}),o(n(_),{align:"inline-end","data-component-x-ray-trigger":"InputGroupAddon"},{default:e(()=>[o(n(v),null,{default:e(()=>[...t[2]||(t[2]=[a("/",-1)])]),_:1})]),_:1})]),_:1}),o(n(m),{"data-component-x-ray":"EmptyDescription"},{default:e(()=>[...t[3]||(t[3]=[a(" Need help? ",-1),r("a",{href:"#"},"Contact support",-1)])]),_:1})]),_:1})]),_:1}))}}),R=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
<\/script>

<template>
  <Empty class="border" data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyTitle data-component-x-ray="EmptyTitle">404 - Not Found</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        The page you're looking for doesn't exist. Try searching for what you need below.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <InputGroup class="w-3/4" data-component-x-ray="InputGroup">
        <InputGroupInput
          placeholder="Try searching for pages..."
          data-component-x-ray-trigger="InputGroupInput"
        />
        <InputGroupAddon data-component-x-ray-trigger="InputGroupAddon">
          <ArrowUpRightIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" data-component-x-ray-trigger="InputGroupAddon">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        Need help? <a href="#">Contact support</a>
      </EmptyDescription>
    </EmptyContent>
  </Empty>
</template>
`,M=i({__name:"EmptyWithIcon",setup(s){return(y,t)=>(d(),c(n(x),{class:"border","data-component-x-ray":"Empty"},{default:e(()=>[o(n(l),{"data-component-x-ray":"EmptyHeader"},{default:e(()=>[o(n(h),{variant:"icon","data-component-x-ray":"EmptyMedia"},{default:e(()=>[o(n(C))]),_:1}),o(n(E),{"data-component-x-ray":"EmptyTitle"},{default:e(()=>[...t[0]||(t[0]=[a("Nothing to see here",-1)])]),_:1}),o(n(m),{"data-component-x-ray":"EmptyDescription"},{default:e(()=>[...t[1]||(t[1]=[a(" No posts have been created yet. Get started by ",-1),r("a",{href:"#"},"creating your first post",-1),a(". ",-1)])]),_:1})]),_:1}),o(n(f),{"data-component-x-ray":"EmptyContent"},{default:e(()=>[o(n(p),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:e(()=>[o(n(D)),t[2]||(t[2]=a(" New Post ",-1))]),_:1})]),_:1})]),_:1}))}}),W=`<script setup lang="ts">
import { PlusIcon, FolderIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
<\/script>

<template>
  <Empty class="border" data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyMedia variant="icon" data-component-x-ray="EmptyMedia">
        <FolderIcon />
      </EmptyMedia>
      <EmptyTitle data-component-x-ray="EmptyTitle">Nothing to see here</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        No posts have been created yet. Get started by
        <a href="#">creating your first post</a>.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <Button variant="outline" data-component-x-ray-trigger="Button">
        <PlusIcon />
        New Post
      </Button>
    </EmptyContent>
  </Empty>
</template>
`,U={class:"@container max-w-250 mx-auto"},F={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},et=i({__name:"_Examples",setup(s){return(y,t)=>(d(),I("div",U,[r("div",F,[o(u,{"raw-component":n(N)},{title:e(()=>[...t[0]||(t[0]=[a(" Basic ",-1)])]),example:e(()=>[o(H)]),_:1},8,["raw-component"]),o(u,{"raw-component":n(k)},{title:e(()=>[...t[1]||(t[1]=[a(" With Muted Background ",-1)])]),example:e(()=>[o(A)]),_:1},8,["raw-component"]),o(u,{"raw-component":n(R)},{title:e(()=>[...t[2]||(t[2]=[a(" With Border ",-1)])]),example:e(()=>[o(j)]),_:1},8,["raw-component"]),o(u,{"raw-component":n(W)},{title:e(()=>[...t[3]||(t[3]=[a(" With Icon ",-1)])]),example:e(()=>[o(M)]),_:1},8,["raw-component"])])]))}});export{et as default};
