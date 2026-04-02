import{_}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{f as C,d as u,o as c,z as B,T as l,a4 as f,u as r,a7 as y,D as a,A as i,e as I,an as P,H as n,I as o}from"./highlight-mgC1Gizx.js";import{C as $}from"./chevron-right-BGnyeyqv.js";import{E}from"./ellipsis-DNIH39IY.js";import{_ as k,a as M,b as S,c as x}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-Cx6wxnUP.js";import{C as T}from"./chevron-down-yEsxib64.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";import"./MenuPortal-DcRvuQvn.js";import"./Collection-BaCW7bG5.js";import"./usePrimitiveElement-DKACLoT5.js";import"./useArrowNavigation-D-pctMGk.js";import"./useFocusGuards-QLXtyTTL.js";import"./useTypeahead-DeESezdk.js";import"./RovingFocusGroup-BtOY189e.js";import"./utils-jFGFItbh.js";const D=C("slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]),g=u({__name:"Breadcrumb",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",class:l(m.class)},[f(e.$slots,"default")],2))}}),h=u({__name:"BreadcrumbEllipsis",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",class:l(r(y)("flex size-9 items-center justify-center",m.class))},[f(e.$slots,"default",{},()=>[a(r(E),{class:"size-4"})]),b[0]||(b[0]=i("span",{class:"sr-only"},"More",-1))],2))}}),d=u({__name:"BreadcrumbItem",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("li",{"data-slot":"breadcrumb-item",class:l(r(y)("inline-flex items-center gap-1.5",m.class))},[f(e.$slots,"default")],2))}}),s=u({__name:"BreadcrumbLink",props:{asChild:{type:Boolean},as:{default:"a"},class:{}},setup(t){const m=t;return(e,b)=>(c(),I(r(P),{"data-slot":"breadcrumb-link",as:t.as,"as-child":t.asChild,class:l(r(y)("hover:text-foreground transition-colors",m.class))},{default:n(()=>[f(e.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),w=u({__name:"BreadcrumbList",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("ol",{"data-slot":"breadcrumb-list",class:l(r(y)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",m.class))},[f(e.$slots,"default")],2))}}),L=u({__name:"BreadcrumbPage",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",class:l(r(y)("text-foreground font-normal",m.class))},[f(e.$slots,"default")],2))}}),p=u({__name:"BreadcrumbSeparator",props:{class:{}},setup(t){const m=t;return(e,b)=>(c(),B("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",class:l(r(y)("[&>svg]:size-3.5",m.class))},[f(e.$slots,"default",{},()=>[a(r($))])],2))}}),v=u({__name:"BreadcrumbDefault",setup(t){return(m,e)=>(c(),I(r(g),{"data-component-x-ray":"Breadcrumb",class:"p-2"},{default:n(()=>[a(r(w),{"data-component-x-ray":"BreadcrumbList"},{default:n(()=>[a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[0]||(e[0]=[o("Home",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[1]||(e[1]=[o("Library",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(L),{"data-component-x-ray":"BreadcrumbPage"},{default:n(()=>[...e[2]||(e[2]=[o("Data",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),H=`<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
<\/script>

<template>
  <Breadcrumb data-component-x-ray="Breadcrumb" class="p-2">
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Library</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,z=u({__name:"BreadcrumbWithEllipsis",setup(t){return(m,e)=>(c(),I(r(g),null,{default:n(()=>[a(r(w),{"data-component-x-ray":"BreadcrumbList"},{default:n(()=>[a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[0]||(e[0]=[o("Home",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[1]||(e[1]=[o("Library",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[2]||(e[2]=[o("Data",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(h),{"data-component-x-ray":"BreadcrumbEllipsis"}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(L),{"data-component-x-ray":"BreadcrumbPage"},{default:n(()=>[...e[3]||(e[3]=[o("Bootstrap",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),R=`<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Library</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Data</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbEllipsis data-component-x-ray="BreadcrumbEllipsis" />
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Bootstrap</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,W=u({__name:"BreadcrumbCustomSeparator",setup(t){return(m,e)=>(c(),I(r(g),null,{default:n(()=>[a(r(w),{"data-component-x-ray":"BreadcrumbList"},{default:n(()=>[a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[0]||(e[0]=[o("Home",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"},{default:n(()=>[a(r(D))]),_:1})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[1]||(e[1]=[o("Library",-1)])]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"},{default:n(()=>[a(r(D))]),_:1})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(L),{"data-component-x-ray":"BreadcrumbPage"},{default:n(()=>[...e[2]||(e[2]=[o("Data",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),N=`<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { Slash } from "lucide-vue-next";
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator">
          <Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Library</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator">
          <Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,V=u({__name:"BreadcrumbEllipsisDropdown",setup(t){return(m,e)=>(c(),I(r(g),null,{default:n(()=>[a(r(w),{"data-component-x-ray":"BreadcrumbList"},{default:n(()=>[a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[0]||(e[0]=[o("Home",-1)])]),_:1}),a(r(p))]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(k),null,{default:n(()=>[a(r(M),{"aria-label":"Toggle menu","as-child":""},{default:n(()=>[a(r(h),{class:"size-4 cursor-pointer hover:text-foreground","data-component-x-ray-trigger":"BreadcrumbEllipsis"})]),_:1}),a(r(S),{align:"start","data-component-x-ray":"DropdownMenuContent"},{default:n(()=>[a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[1]||(e[1]=[i("a",{href:"#"},"Documentation",-1)])]),_:1}),a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[2]||(e[2]=[i("a",{href:"#"},"Themes",-1)])]),_:1}),a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[3]||(e[3]=[i("a",{href:"#"},"Built by",-1)])]),_:1})]),_:1})]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[4]||(e[4]=[o("Components",-1)])]),_:1}),a(r(p))]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(L),{"data-component-x-ray":"BreadcrumbPage"},{default:n(()=>[...e[5]||(e[5]=[o("Breadcrumb",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),G=`<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="Toggle menu" as-child>
            <BreadcrumbEllipsis
              class="size-4 cursor-pointer hover:text-foreground"
              data-component-x-ray-trigger="BreadcrumbEllipsis"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" data-component-x-ray="DropdownMenuContent">
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Built by</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Components</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,j=u({__name:"BreadcrumbDropdown",setup(t){return(m,e)=>(c(),I(r(g),null,{default:n(()=>[a(r(w),{"data-component-x-ray":"BreadcrumbList"},{default:n(()=>[a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(s),{href:"#","data-component-x-ray":"BreadcrumbLink"},{default:n(()=>[...e[0]||(e[0]=[o("Home",-1)])]),_:1}),a(r(p))]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(k),null,{default:n(()=>[a(r(M),{class:"flex items-center gap-1 cursor-pointer hover:text-foreground","data-component-x-ray-trigger":"DropdownMenuTrigger"},{default:n(()=>[e[1]||(e[1]=o(" Components ",-1)),a(r(T),{class:"size-3"})]),_:1}),a(r(S),{align:"start","data-component-x-ray":"DropdownMenuContent"},{default:n(()=>[a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[2]||(e[2]=[i("a",{href:"#"},"Documentation",-1)])]),_:1}),a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[3]||(e[3]=[i("a",{href:"#"},"Themes",-1)])]),_:1}),a(r(x),{"as-child":"","data-component-x-ray":"DropdownMenuItem"},{default:n(()=>[...e[4]||(e[4]=[i("a",{href:"#"},"GitHub",-1)])]),_:1})]),_:1})]),_:1}),a(r(p),{"data-component-x-ray":"BreadcrumbSeparator"})]),_:1}),a(r(d),{"data-component-x-ray":"BreadcrumbItem"},{default:n(()=>[a(r(L),{"data-component-x-ray":"BreadcrumbPage"},{default:n(()=>[...e[5]||(e[5]=[o("Breadcrumb",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=`<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-vue-next";
<\/script>

<template>
  <Breadcrumb>
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1 cursor-pointer hover:text-foreground"
            data-component-x-ray-trigger="DropdownMenuTrigger"
          >
            Components
            <ChevronDown class="size-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" data-component-x-ray="DropdownMenuContent">
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">GitHub</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,A={class:"space-y-8 max-w-200 mx-auto"},mr=u({__name:"_Examples",setup(t){return(m,e)=>(c(),B("div",A,[a(_,{"raw-component":r(H)},{title:n(()=>[...e[0]||(e[0]=[o("Default",-1)])]),example:n(()=>[a(v)]),_:1},8,["raw-component"]),a(_,{"raw-component":r(R)},{title:n(()=>[...e[1]||(e[1]=[o("With Ellipsis",-1)])]),example:n(()=>[a(z)]),_:1},8,["raw-component"]),a(_,{"raw-component":r(N)},{title:n(()=>[...e[2]||(e[2]=[o("Custom Separator",-1)])]),example:n(()=>[a(W)]),_:1},8,["raw-component"]),a(_,{"raw-component":r(G)},{title:n(()=>[...e[3]||(e[3]=[o("Ellipsis with Dropdown",-1)])]),example:n(()=>[a(V)]),_:1},8,["raw-component"]),a(_,{"raw-component":r(q)},{title:n(()=>[...e[4]||(e[4]=[o("With Dropdown Menu",-1)])]),example:n(()=>[a(j)]),_:1},8,["raw-component"])]))}});export{mr as default};
