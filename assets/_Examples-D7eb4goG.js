import{_ as u}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{f as h,d as i,o as d,e as c,H as o,D as e,u as n,I as a,A as r,_ as p,z as B}from"./highlight-DV_B57Hj.js";import{_ as l,b as E,c as m,d as f,e as x,a as I}from"./index-Btlk7Xd8.js";import{_ as T,a as w,b as _}from"./index-BnfGvMHS.js";import{_ as v}from"./Kbd.vue_vue_type_script_setup_true_lang-BBAB3eY-.js";import{F as C}from"./folder-CUNkNaLZ.js";import{P as D}from"./plus-B8Ib1j-W.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import"./Input.vue_vue_type_script_setup_true_lang-C1xib6QG.js";const g=h("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),b={class:"flex gap-2"},G={href:"#"},H=i({__name:"EmptyBasic",setup(s){return(y,t)=>(d(),c(n(x),{"data-component-x-ray":"Empty"},{default:o(()=>[e(n(l),{"data-component-x-ray":"EmptyHeader"},{default:o(()=>[e(n(E),{"data-component-x-ray":"EmptyTitle"},{default:o(()=>[...t[0]||(t[0]=[a(" No projects yet ",-1)])]),_:1}),e(n(m),{"data-component-x-ray":"EmptyDescription"},{default:o(()=>[...t[1]||(t[1]=[a(" You haven't created any projects yet. Get started by creating your first project. ",-1)])]),_:1})]),_:1}),e(n(f),{"data-component-x-ray":"EmptyContent"},{default:o(()=>[r("div",b,[e(n(p),{"as-child":!0,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[2]||(t[2]=[r("a",{href:"#"},"Create project",-1)])]),_:1}),e(n(p),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[3]||(t[3]=[a(" Import project ",-1)])]),_:1})]),e(n(p),{variant:"link","as-child":!0,class:"text-muted-foreground","data-component-x-ray-trigger":"Button"},{default:o(()=>[r("a",G,[t[4]||(t[4]=a(" Learn more ",-1)),e(n(g))])]),_:1})]),_:1})]),_:1}))}}),N=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/shared/components/ui/empty";
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
`,$={href:"#"},A=i({__name:"EmptyWithMutedBackground",setup(s){return(y,t)=>(d(),c(n(x),{class:"bg-muted","data-component-x-ray":"Empty"},{default:o(()=>[e(n(l),null,{default:o(()=>[e(n(E),{"data-component-x-ray":"EmptyTitle"},{default:o(()=>[...t[0]||(t[0]=[a("No results found",-1)])]),_:1}),e(n(m),{"data-component-x-ray":"EmptyDescription"},{default:o(()=>[...t[1]||(t[1]=[a(" No results found for your search. Try adjusting your search terms. ",-1)])]),_:1})]),_:1}),e(n(f),{"data-component-x-ray":"EmptyContent"},{default:o(()=>[e(n(p),{"data-component-x-ray-trigger":"Button"},{default:o(()=>[...t[2]||(t[2]=[a("Try again",-1)])]),_:1}),e(n(p),{variant:"link","as-child":!0,class:"text-muted-foreground","data-component-x-ray-trigger":"Button"},{default:o(()=>[r("a",$,[t[3]||(t[3]=a(" Learn more ",-1)),e(n(g))])]),_:1})]),_:1})]),_:1}))}}),k=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/shared/components/ui/empty";
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
`,j=i({__name:"EmptyWithBorder",setup(s){return(y,t)=>(d(),c(n(x),{class:"border","data-component-x-ray":"Empty"},{default:o(()=>[e(n(l),{"data-component-x-ray":"EmptyHeader"},{default:o(()=>[e(n(E),{"data-component-x-ray":"EmptyTitle"},{default:o(()=>[...t[0]||(t[0]=[a("404 - Not Found",-1)])]),_:1}),e(n(m),{"data-component-x-ray":"EmptyDescription"},{default:o(()=>[...t[1]||(t[1]=[a(" The page you're looking for doesn't exist. Try searching for what you need below. ",-1)])]),_:1})]),_:1}),e(n(f),{"data-component-x-ray":"EmptyContent"},{default:o(()=>[e(n(T),{class:"w-3/4","data-component-x-ray":"InputGroup"},{default:o(()=>[e(n(w),{placeholder:"Try searching for pages...","data-component-x-ray-trigger":"InputGroupInput"}),e(n(_),{"data-component-x-ray-trigger":"InputGroupAddon"},{default:o(()=>[e(n(g))]),_:1}),e(n(_),{align:"inline-end","data-component-x-ray-trigger":"InputGroupAddon"},{default:o(()=>[e(n(v),null,{default:o(()=>[...t[2]||(t[2]=[a("/",-1)])]),_:1})]),_:1})]),_:1}),e(n(m),{"data-component-x-ray":"EmptyDescription"},{default:o(()=>[...t[3]||(t[3]=[a(" Need help? ",-1),r("a",{href:"#"},"Contact support",-1)])]),_:1})]),_:1})]),_:1}))}}),R=`<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/shared/components/ui/empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Kbd } from "@/shared/components/ui/kbd";
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
`,M=i({__name:"EmptyWithIcon",setup(s){return(y,t)=>(d(),c(n(x),{class:"border","data-component-x-ray":"Empty"},{default:o(()=>[e(n(l),{"data-component-x-ray":"EmptyHeader"},{default:o(()=>[e(n(I),{variant:"icon","data-component-x-ray":"EmptyMedia"},{default:o(()=>[e(n(C))]),_:1}),e(n(E),{"data-component-x-ray":"EmptyTitle"},{default:o(()=>[...t[0]||(t[0]=[a("Nothing to see here",-1)])]),_:1}),e(n(m),{"data-component-x-ray":"EmptyDescription"},{default:o(()=>[...t[1]||(t[1]=[a(" No posts have been created yet. Get started by ",-1),r("a",{href:"#"},"creating your first post",-1),a(". ",-1)])]),_:1})]),_:1}),e(n(f),{"data-component-x-ray":"EmptyContent"},{default:o(()=>[e(n(p),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:o(()=>[e(n(D)),t[2]||(t[2]=a(" New Post ",-1))]),_:1})]),_:1})]),_:1}))}}),W=`<script setup lang="ts">
import { PlusIcon, FolderIcon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/components/ui/empty";
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
`,U={class:"@container max-w-200 mx-auto"},F={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Q=i({__name:"_Examples",setup(s){return(y,t)=>(d(),B("div",U,[r("div",F,[e(u,{"raw-component":n(N)},{title:o(()=>[...t[0]||(t[0]=[a(" Basic ",-1)])]),example:o(()=>[e(H)]),_:1},8,["raw-component"]),e(u,{"raw-component":n(k)},{title:o(()=>[...t[1]||(t[1]=[a(" With Muted Background ",-1)])]),example:o(()=>[e(A)]),_:1},8,["raw-component"]),e(u,{"raw-component":n(R)},{title:o(()=>[...t[2]||(t[2]=[a(" With Border ",-1)])]),example:o(()=>[e(j)]),_:1},8,["raw-component"]),e(u,{"raw-component":n(W)},{title:o(()=>[...t[3]||(t[3]=[a(" With Icon ",-1)])]),example:o(()=>[e(M)]),_:1},8,["raw-component"])])]))}});export{Q as default};
