import{_ as d}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{f as w,d as s,o as i,z as B,T as C,u as n,a7 as G,a4 as b,as as S,e as f,H as o,D as t,_ as r,I as a,B as _,L as k,M as $,A as x,b as T}from"./highlight-DV_B57Hj.js";import{_ as v}from"./Input.vue_vue_type_script_setup_true_lang-C1xib6QG.js";import{_ as z,a as R,b as A,c as m}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-pkv2Iy8o.js";import{_ as h}from"./DropdownMenuGroup.vue_vue_type_script_setup_true_lang-N6I89193.js";import{_ as V}from"./DropdownMenuSeparator.vue_vue_type_script_setup_true_lang-D20gxq4F.js";import{C as W}from"./chevron-down-JNXQNw9A.js";import{C as g,e as I}from"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import{T as M}from"./triangle-alert-4MYuFCcg.js";import{T as E}from"./trash-BYvSRVKz.js";import{_ as U,a as N,b as P,c as j}from"./SelectTrigger.vue_vue_type_script_setup_true_lang-G5k2kf8Q.js";import{A as F}from"./arrow-right-C-4Q7eQn.js";import{B as L}from"./bot-DNyy5-mu.js";import{P as O}from"./plus-B8Ib1j-W.js";import{M as X}from"./minus-D26zpJX8.js";import"./MenuPortal-B81PyJ2s.js";import"./Collection-BzhLJ3ey.js";import"./usePrimitiveElement-CC4NqMuD.js";import"./useArrowNavigation-D-pctMGk.js";import"./useFocusGuards-DdFmJ8Gi.js";import"./useTypeahead-Bn0kdJV0.js";import"./RovingFocusGroup-BkcohOEU.js";import"./utils-B1vU7hCd.js";import"./MenuGroup-RwCigA1C.js";import"./MenuSeparator-D9XgIlrh.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-Dw7qtzdV.js";const q=w("share",[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]]);const H=w("user-round-x",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);const J=w("volume-off",[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]]),K=["data-orientation"],l=s({__name:"ButtonGroup",props:{class:{},orientation:{}},setup(p){const u=p;return(e,D)=>(i(),B("div",{role:"group","data-slot":"button-group","data-orientation":u.orientation,class:C(n(G)(n(Q)({orientation:u.orientation}),u.class))},[b(e.$slots,"default")],10,K))}}),Q=S("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}}),Y=s({__name:"ButtonGroupDefault",setup(p){return(u,e)=>(i(),f(n(l),null,{default:o(()=>[t(n(r),{variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[...e[0]||(e[0]=[a("Button",-1)])]),_:1}),t(n(r),{variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[...e[1]||(e[1]=[a("Another Button",-1)])]),_:1})]),_:1}))}}),Z=`<script lang="ts" setup>
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
<\/script>

<template>
  <ButtonGroup>
    <Button variant="outline" data-component-x-ray="Button">Button</Button>
    <Button variant="outline" data-component-x-ray="Button">Another Button</Button>
  </ButtonGroup>
</template>

<style lang="postcss" scoped></style>
`,nn={class:"space-y-4"},tn=s({__name:"ButtonGroupWithInput",setup(p){return(u,e)=>(i(),B("div",nn,[t(n(l),{class:"w-full max-w-sm"},{default:o(()=>[t(n(r),{variant:"outline","aria-label":"Search","data-component-x-ray":"Button"},{default:o(()=>[...e[0]||(e[0]=[a(" Button ",-1)])]),_:1}),t(n(v),{placeholder:"Type something here...","data-component-x-ray":"Input"})]),_:1}),t(n(l),{class:"w-full max-w-sm"},{default:o(()=>[t(n(v),{placeholder:"Type something here...","data-component-x-ray":"Input"}),t(n(r),{variant:"outline","aria-label":"Search","data-component-x-ray":"Button"},{default:o(()=>[...e[1]||(e[1]=[a(" Button ",-1)])]),_:1})]),_:1})]))}}),on=`<script lang="ts" setup>
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
<\/script>

<template>
  <div class="space-y-4">
    <ButtonGroup class="w-full max-w-sm">
      <Button variant="outline" aria-label="Search" data-component-x-ray="Button"> Button </Button>
      <Input placeholder="Type something here..." data-component-x-ray="Input" />
    </ButtonGroup>

    <ButtonGroup class="w-full max-w-sm">
      <Input placeholder="Type something here..." data-component-x-ray="Input" />
      <Button variant="outline" aria-label="Search" data-component-x-ray="Button"> Button </Button>
    </ButtonGroup>
  </div>
</template>

<style lang="postcss" scoped></style>
`,en=s({__name:"ButtonGroupWithDropdown",setup(p){return(u,e)=>(i(),f(n(l),null,{default:o(()=>[t(n(r),{variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[...e[0]||(e[0]=[a(" Follow ",-1)])]),_:1}),t(n(z),null,{default:o(()=>[t(n(R),{"as-child":""},{default:o(()=>[t(n(r),{variant:"outline",size:"icon","data-component-x-ray-trigger":"Button"},{default:o(()=>[t(n(W))]),_:1})]),_:1}),t(n(A),{align:"end","data-component-x-ray":"DropdownMenuContent"},{default:o(()=>[t(n(h),null,{default:o(()=>[t(n(m),null,{default:o(()=>[t(n(J)),e[1]||(e[1]=a(" Mute Conversation ",-1))]),_:1}),t(n(m),null,{default:o(()=>[t(n(g)),e[2]||(e[2]=a(" Mark as Read ",-1))]),_:1}),t(n(m),null,{default:o(()=>[t(n(M)),e[3]||(e[3]=a(" Report Conversation ",-1))]),_:1}),t(n(m),null,{default:o(()=>[t(n(H)),e[4]||(e[4]=a(" Block User ",-1))]),_:1}),t(n(m),null,{default:o(()=>[t(n(q)),e[5]||(e[5]=a(" Share Conversation ",-1))]),_:1}),t(n(m),null,{default:o(()=>[t(n(I)),e[6]||(e[6]=a(" Copy Conversation ",-1))]),_:1})]),_:1}),t(n(V)),t(n(h),null,{default:o(()=>[t(n(m),{variant:"destructive"},{default:o(()=>[t(n(E)),e[7]||(e[7]=a(" Delete Conversation ",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),an=`<script setup lang="ts">
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
<\/script>

<template>
  <ButtonGroup>
    <Button variant="outline" data-component-x-ray="Button"> Follow </Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" size="icon" data-component-x-ray-trigger="Button">
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <VolumeOffIcon />
            Mute Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CheckIcon />
            Mark as Read
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AlertTriangleIcon />
            Report Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRoundXIcon />
            Block User
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>
`,rn={class:"text-muted-foreground"},un=s({__name:"ButtonGroupWithSelect",setup(p){const u=[{value:"$",label:"US Dollar"},{value:"€",label:"Euro"},{value:"£",label:"British Pound"}],e=T("$");return(D,y)=>(i(),f(n(l),null,{default:o(()=>[t(n(l),null,{default:o(()=>[t(n(U),{modelValue:e.value,"onUpdate:modelValue":y[0]||(y[0]=c=>e.value=c)},{default:o(()=>[t(n(N),{class:"font-mono w-14","data-component-x-ray-trigger":"SelectTrigger"},{default:o(()=>[a(_(e.value),1)]),_:1}),t(n(P),{class:"min-w-24","data-component-x-ray":"SelectContent"},{default:o(()=>[(i(),B(k,null,$(u,c=>t(n(j),{key:c.value,value:c.value,"data-component-x-ray":"SelectItem"},{default:o(()=>[a(_(c.value)+" ",1),x("span",rn,_(c.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1},8,["modelValue"]),t(n(v),{placeholder:"10.00",pattern:"[0-9]*","data-component-x-ray":"Input"}),t(n(r),{"aria-label":"Send",size:"icon",variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[t(n(F))]),_:1})]),_:1})]),_:1}))}}),ln=`<script setup lang="ts">
import { ArrowRightIcon } from "lucide-vue-next";
import { ref } from "vue";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];
const currency = ref("$");
<\/script>

<template>
  <ButtonGroup>
    <ButtonGroup>
      <Select v-model="currency">
        <SelectTrigger class="font-mono w-14" data-component-x-ray-trigger="SelectTrigger">
          {{ currency }}
        </SelectTrigger>
        <SelectContent class="min-w-24" data-component-x-ray="SelectContent">
          <SelectItem
            v-for="item in CURRENCIES"
            :key="item.value"
            :value="item.value"
            data-component-x-ray="SelectItem"
          >
            {{ item.value }}
            <span class="text-muted-foreground">{{ item.label }}</span>
          </SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="10.00" pattern="[0-9]*" data-component-x-ray="Input" />
      <Button aria-label="Send" size="icon" variant="outline" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
`,pn=s({__name:"ButtonGroupWithIcons",setup(p){return(u,e)=>(i(),f(n(l),null,{default:o(()=>[t(n(l),null,{default:o(()=>[t(n(r),{size:"icon",variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[t(n(L))]),_:1}),t(n(r),{size:"icon",variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[t(n(M))]),_:1}),t(n(r),{size:"icon",variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[t(n(g))]),_:1}),t(n(r),{size:"icon",variant:"outline","data-component-x-ray":"Button"},{default:o(()=>[t(n(I))]),_:1})]),_:1})]),_:1}))}}),sn=`<script setup lang="ts">
import { BotIcon, AlertTriangleIcon, CheckIcon, CopyIcon } from "lucide-vue-next";

import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
<\/script>

<template>
  <ButtonGroup>
    <ButtonGroup>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <BotIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <AlertTriangleIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <CheckIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <CopyIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
`,mn=s({__name:"ButtonGroupVertical",setup(p){return(u,e)=>(i(),f(n(l),{orientation:"vertical","aria-label":"Media controls",class:"h-fit"},{default:o(()=>[t(n(r),{variant:"outline",size:"icon","data-component-x-ray":"Button"},{default:o(()=>[t(n(O))]),_:1}),t(n(r),{variant:"outline",size:"icon","data-component-x-ray":"Button"},{default:o(()=>[t(n(X))]),_:1})]),_:1}))}}),cn=`<script setup lang="ts">
import { MinusIcon, PlusIcon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
<\/script>

<template>
  <ButtonGroup orientation="vertical" aria-label="Media controls" class="h-fit">
    <Button variant="outline" size="icon" data-component-x-ray="Button">
      <PlusIcon />
    </Button>
    <Button variant="outline" size="icon" data-component-x-ray="Button">
      <MinusIcon />
    </Button>
  </ButtonGroup>
</template>
`,dn={class:"@container max-w-200 mx-auto"},fn={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},jn=s({name:"ButtonGroupExamples",__name:"_Examples",setup(p){return(u,e)=>(i(),B("div",dn,[x("div",fn,[t(d,{"raw-component":n(Z)},{title:o(()=>[...e[0]||(e[0]=[a("Default",-1)])]),example:o(()=>[t(Y)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(on)},{title:o(()=>[...e[1]||(e[1]=[a("With Input",-1)])]),example:o(()=>[t(tn)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(an)},{title:o(()=>[...e[2]||(e[2]=[a("With Dropdown",-1)])]),example:o(()=>[t(en)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(ln)},{title:o(()=>[...e[3]||(e[3]=[a("With Select",-1)])]),example:o(()=>[t(un)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(sn)},{title:o(()=>[...e[4]||(e[4]=[a("With Icons",-1)])]),example:o(()=>[t(pn)]),_:1},8,["raw-component"]),t(d,{"raw-component":n(cn)},{title:o(()=>[...e[5]||(e[5]=[a("Vertical",-1)])]),example:o(()=>[t(mn)]),_:1},8,["raw-component"])])]))}});export{jn as default};
