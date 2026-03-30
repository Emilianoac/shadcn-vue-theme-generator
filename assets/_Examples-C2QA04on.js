import{_ as h}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DM92uT3q.js";import{d as l,ae as W,af as B,o as m,a as c,H as t,a3 as g,ag as G,ah as A,u as n,aj as D,aA as U,Q as j,a5 as f,g as y,ai as $,a6 as q,A as _,D as e,z as T,T as H,aq as E,_ as I,I as r,r as K}from"./DialogTitle.vue_vue_type_script_setup_true_lang-C_9FSQhf.js";import{a as v,b,c as s,_ as C}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-B52KGbaR.js";import{_ as M}from"./DropdownMenuGroup.vue_vue_type_script_setup_true_lang-BGy866e8.js";import{D as Q,_ as N}from"./DropdownMenuLabel.vue_vue_type_script_setup_true_lang-sux2WxoG.js";import{_ as S}from"./DropdownMenuSeparator.vue_vue_type_script_setup_true_lang-BEhj0cOU.js";import{U as J,S as X}from"./user-Ci1nL5qo.js";import{C as k}from"./credit-card-Cezm_2X9.js";import{C as Y}from"./code-CpT3KP2F.js";import{M as Z,a as nn,b as en,c as on,d as tn}from"./MenuSubTrigger-BN3tODED.js";import{C as rn}from"./chevron-right-iRhPDQPF.js";import{C as an}from"./circle-B9oB6zjS.js";import{_ as P,a as O,b as F}from"./AvatarImage.vue_vue_type_script_setup_true_lang-B3xOYe-_.js";import{C as dn}from"./chevrons-up-down-CUuAmlL2.js";import{B as V}from"./badge-check-BgTOsgZE.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C44kN4yO.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxLZ1jLL.js";import"./VisuallyHidden-CLlRR9c8.js";import"./MenuPortal-Crc-SKMM.js";import"./Collection-zSMwjtqR.js";import"./usePrimitiveElement-BHBbwdEN.js";import"./useArrowNavigation-D-pctMGk.js";import"./useFocusGuards-abd0v7d9.js";import"./useTypeahead-1LlzmhXp.js";import"./RovingFocusGroup-DAfsBAJO.js";import"./utils-4m1nVd7-.js";import"./MenuSeparator-C31dAboI.js";import"./MenuItemIndicator-BdqggrtE.js";import"./MenuLabel-UMryxxaw.js";var pn=l({__name:"DropdownMenuRadioGroup",props:{modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(d,{emit:a}){const o=d,u=W(a);return B(),(i,w)=>(m(),c(n(Z),G(A({...o,...n(u)})),{default:t(()=>[g(i.$slots,"default")]),_:3},16))}}),un=pn,sn=l({__name:"DropdownMenuRadioItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(d,{emit:a}){const u=D(d,a);return B(),(i,w)=>(m(),c(n(nn),G(A(n(u))),{default:t(()=>[g(i.$slots,"default")]),_:3},16))}}),ln=sn,mn=l({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(d,{emit:a}){const o=d,u=U(o,"open",a,{passive:o.open===void 0,defaultValue:o.defaultOpen??!1});return B(),(i,w)=>(m(),c(n(en),{open:n(u),"onUpdate:open":w[0]||(w[0]=x=>j(u)?u.value=x:null)},{default:t(()=>[g(i.$slots,"default",{open:n(u)})]),_:3},8,["open"]))}}),cn=mn,wn=l({__name:"DropdownMenuSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(d,{emit:a}){const u=D(d,a);return B(),(i,w)=>(m(),c(n(on),f(n(u),{style:{"--reka-dropdown-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-dropdown-menu-content-available-width":"var(--reka-popper-available-width)","--reka-dropdown-menu-content-available-height":"var(--reka-popper-available-height)","--reka-dropdown-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-dropdown-menu-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:t(()=>[g(i.$slots,"default")]),_:3},16))}}),gn=wn,Mn=l({__name:"DropdownMenuSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(d){const a=d;return B(),(o,p)=>(m(),c(n(tn),G(A(a)),{default:t(()=>[g(o.$slots,"default")]),_:3},16))}}),Dn=Mn;const z=y("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);const fn=y("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);const yn=y("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const xn=y("git-branch",[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]);const L=y("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);const _n=y("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),In=l({__name:"DropdownMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(d,{emit:a}){const u=D(d,a);return(i,w)=>(m(),c(n(un),f({"data-slot":"dropdown-menu-radio-group"},n(u)),{default:t(()=>[g(i.$slots,"default")]),_:3},16))}}),vn={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},R=l({__name:"DropdownMenuRadioItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},emits:["select"],setup(d,{emit:a}){const o=d,p=a,u=$(o,"class"),i=D(u,p);return(w,x)=>(m(),c(n(ln),f({"data-slot":"dropdown-menu-radio-item"},n(i),{class:n(q)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",o.class)}),{default:t(()=>[_("span",vn,[e(n(Q),null,{default:t(()=>[g(w.$slots,"indicator-icon",{},()=>[e(n(an),{class:"size-2 fill-current"})])]),_:3})]),g(w.$slots,"default")]),_:3},16,["class"]))}}),bn=l({__name:"DropdownMenuShortcut",props:{class:{}},setup(d){const a=d;return(o,p)=>(m(),T("span",{"data-slot":"dropdown-menu-shortcut",class:H(n(q)("text-muted-foreground ml-auto text-xs tracking-widest",a.class))},[g(o.$slots,"default")],2))}}),Cn=l({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(d,{emit:a}){const u=D(d,a);return(i,w)=>(m(),c(n(cn),f({"data-slot":"dropdown-menu-sub"},n(u)),{default:t(x=>[g(i.$slots,"default",G(A(x)))]),_:3},16))}}),Bn=l({__name:"DropdownMenuSubContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(d,{emit:a}){const o=d,p=a,u=$(o,"class"),i=D(u,p);return(w,x)=>(m(),c(n(gn),f({"data-slot":"dropdown-menu-sub-content"},n(i),{class:n(q)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",o.class)}),{default:t(()=>[g(w.$slots,"default")]),_:3},16,["class"]))}}),hn=l({__name:"DropdownMenuSubTrigger",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(d){const a=d,o=$(a,"class","inset"),p=E(o);return(u,i)=>(m(),c(n(Dn),f({"data-slot":"dropdown-menu-sub-trigger"},n(p),{"data-inset":d.inset?"":void 0,class:n(q)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",a.class)}),{default:t(()=>[g(u.$slots,"default"),e(n(rn),{class:"ml-auto size-4"})]),_:3},16,["data-inset","class"]))}}),Sn=l({__name:"DropdownMenuBasic",setup(d){return(a,o)=>(m(),c(n(C),{"data-component-x-ray":"DropdownMenu"},{default:t(()=>[e(n(v),{"as-child":!0},{default:t(()=>[e(n(I),{variant:"outline",class:"w-fit","data-component-x-ray-trigger":"Button"},{default:t(()=>[...o[0]||(o[0]=[r(" Open ",-1)])]),_:1})]),_:1}),e(n(b),{"data-component-x-ray":"DropdownMenuContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(N),{"data-component-x-ray":"DropdownMenuLabel"},{default:t(()=>[...o[1]||(o[1]=[r("My Account",-1)])]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(J)),o[2]||(o[2]=r(" Profile ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(k)),o[3]||(o[3]=r(" Billing ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(X)),o[4]||(o[4]=r(" Settings ",-1))]),_:1})]),_:1}),e(n(S),{"data-component-x-ray":"DropdownMenuSeparator"}),e(n(M),null,{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(xn)),o[5]||(o[5]=r(" GitHub ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(yn)),o[6]||(o[6]=r(" Support ",-1))]),_:1}),e(n(s),{disabled:!0,"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(Y)),o[7]||(o[7]=r(" API ",-1))]),_:1})]),_:1})]),_:1})]),_:1}))}}),kn=`<script setup lang="ts">
import {
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
  GitBranchIcon,
  HelpCircleIcon,
  CodeIcon,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<\/script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button"> Open </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuLabel data-component-x-ray="DropdownMenuLabel">My Account</DropdownMenuLabel>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
      <DropdownMenuGroup>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <GitBranchIcon />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <HelpCircleIcon />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem :disabled="true" data-component-x-ray-trigger="DropdownMenuItem">
          <CodeIcon />
          API
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
`,Gn=l({__name:"DropdownMenuWithSubmenu",setup(d){return(a,o)=>(m(),c(n(C),{"data-component-x-ray":"DropdownMenu"},{default:t(()=>[e(n(v),{"as-child":!0},{default:t(()=>[e(n(I),{variant:"outline",class:"w-fit","data-component-x-ray-trigger":"Button"},{default:t(()=>[...o[0]||(o[0]=[r(" Open ",-1)])]),_:1})]),_:1}),e(n(b),{"data-component-x-ray":"DropdownMenuContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[...o[1]||(o[1]=[r("Team",-1)])]),_:1}),e(n(Cn),{"data-component-x-ray":"DropdownMenuSub"},{default:t(()=>[e(n(hn),{"data-component-x-ray":"DropdownMenuSubTrigger"},{default:t(()=>[...o[2]||(o[2]=[r(" Invite users ",-1)])]),_:1}),e(n(Bn),{"data-component-x-ray":"DropdownMenuSubContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[...o[3]||(o[3]=[r(" Email ",-1)])]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[...o[4]||(o[4]=[r(" Message ",-1)])]),_:1})]),_:1}),e(n(S),{"data-component-x-ray":"DropdownMenuSeparator"}),e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[...o[5]||(o[5]=[r(" More... ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[o[7]||(o[7]=r(" New Team ",-1)),e(n(bn),{"data-component-x-ray-trigger":"DropdownMenuShortcut"},{default:t(()=>[...o[6]||(o[6]=[r(" ⌘+T ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),An=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<\/script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button"> Open </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">Team</DropdownMenuItem>
        <DropdownMenuSub data-component-x-ray="DropdownMenuSub">
          <DropdownMenuSubTrigger data-component-x-ray="DropdownMenuSubTrigger">
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent data-component-x-ray="DropdownMenuSubContent">
            <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Email
              </DropdownMenuItem>
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Message
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
            <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                More...
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          New Team
          <DropdownMenuShortcut data-component-x-ray-trigger="DropdownMenuShortcut">
            ⌘+T
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
`,qn=l({__name:"DropdownMenuWithRadioIcons",setup(d){const a=K("card");return(o,p)=>(m(),c(n(C),{"data-component-x-ray":"DropdownMenu"},{default:t(()=>[e(n(v),{"as-child":!0},{default:t(()=>[e(n(I),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...p[1]||(p[1]=[r(" Payment Method ",-1)])]),_:1})]),_:1}),e(n(b),{class:"min-w-56","data-component-x-ray":"DropdownMenuContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(N),{"data-component-x-ray":"DropdownMenuLabel"},{default:t(()=>[...p[2]||(p[2]=[r("Select Payment Method",-1)])]),_:1}),e(n(In),{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=u=>a.value=u),"data-component-x-ray":"DropdownMenuRadioGroup"},{default:t(()=>[e(n(R),{value:"card","data-component-x-ray-trigger":"DropdownMenuRadioItem"},{default:t(()=>[e(n(k)),p[3]||(p[3]=r(" Credit Card ",-1))]),_:1}),e(n(R),{value:"paypal","data-component-x-ray-trigger":"DropdownMenuRadioItem"},{default:t(()=>[e(n(_n)),p[4]||(p[4]=r(" PayPal ",-1))]),_:1}),e(n(R),{value:"bank","data-component-x-ray-trigger":"DropdownMenuRadioItem"},{default:t(()=>[e(n(fn)),p[5]||(p[5]=r(" Bank Transfer ",-1))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),Rn=`<script setup lang="ts">
import { ref } from "vue";
import { CreditCardIcon, WalletIcon, Building2Icon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const paymentMethod = ref("card");
<\/script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Payment Method </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-56" data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuLabel data-component-x-ray="DropdownMenuLabel"
          >Select Payment Method</DropdownMenuLabel
        >
        <DropdownMenuRadioGroup
          v-model="paymentMethod"
          data-component-x-ray="DropdownMenuRadioGroup"
        >
          <DropdownMenuRadioItem value="card" data-component-x-ray-trigger="DropdownMenuRadioItem">
            <CreditCardIcon />
            Credit Card
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="paypal"
            data-component-x-ray-trigger="DropdownMenuRadioItem"
          >
            <WalletIcon />
            PayPal
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bank" data-component-x-ray-trigger="DropdownMenuRadioItem">
            <Building2Icon />
            Bank Transfer
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
`,$n={class:"flex items-center justify-between gap-4"},Tn=l({__name:"DropdownMenuWithAvatar",setup(d){return(a,o)=>(m(),T("div",$n,[e(n(C),{"data-component-x-ray-trigger":"DropdownMenu"},{default:t(()=>[e(n(v),{"as-child":!0},{default:t(()=>[e(n(I),{variant:"outline",class:"h-12 justify-start px-2 md:max-w-50","data-component-x-ray-trigger":"Button"},{default:t(()=>[e(n(P),{"data-component-x-ray":"Avatar"},{default:t(()=>[e(n(O),{src:"https://github.com/shadcn.png",alt:"Shadcn","data-component-x-ray-trigger":"AvatarImage"}),e(n(F),{class:"rounded-lg","data-component-x-ray-trigger":"AvatarFallback"},{default:t(()=>[...o[0]||(o[0]=[r(" CN ",-1)])]),_:1})]),_:1}),o[1]||(o[1]=_("div",{class:"grid flex-1 text-left text-sm leading-tight"},[_("span",{class:"truncate font-semibold"},"shadcn"),_("span",{class:"truncate text-xs text-muted-foreground"}," shadcn@example.com ")],-1)),e(n(dn))]),_:1})]),_:1}),e(n(b),{class:"min-w-56","data-component-x-ray":"DropdownMenuContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(V)),o[2]||(o[2]=r(" Account ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(k)),o[3]||(o[3]=r(" Billing ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(z)),o[4]||(o[4]=r(" Notifications ",-1))]),_:1})]),_:1}),e(n(S),{"data-component-x-ray":"DropdownMenuSeparator"}),e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(L)),o[5]||(o[5]=r(" Sign Out ",-1))]),_:1})]),_:1})]),_:1})]),_:1}),e(n(C),{"data-component-x-ray-trigger":"DropdownMenu"},{default:t(()=>[e(n(v),{"as-child":!0},{default:t(()=>[e(n(I),{variant:"ghost",size:"icon",class:"rounded-full","data-component-x-ray-trigger":"Button"},{default:t(()=>[e(n(P),{"data-component-x-ray":"Avatar"},{default:t(()=>[e(n(O),{src:"https://github.com/shadcn.png",alt:"shadcn","data-component-x-ray-trigger":"AvatarImage"}),e(n(F),{"data-component-x-ray-trigger":"AvatarFallback"},{default:t(()=>[...o[6]||(o[6]=[r("CN",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(n(b),{align:"end",side:"top","data-component-x-ray":"DropdownMenuContent"},{default:t(()=>[e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(V)),o[7]||(o[7]=r(" Account ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(k)),o[8]||(o[8]=r(" Billing ",-1))]),_:1}),e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(z)),o[9]||(o[9]=r(" Notifications ",-1))]),_:1})]),_:1}),e(n(S),{"data-component-x-ray":"DropdownMenuSeparator"}),e(n(M),{"data-component-x-ray":"DropdownMenuGroup"},{default:t(()=>[e(n(s),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:t(()=>[e(n(L)),o[10]||(o[10]=r(" Sign Out ",-1))]),_:1})]),_:1})]),_:1})]),_:1})]))}}),Pn=`<script setup lang="ts">
import {
  ChevronsUpDownIcon,
  BadgeCheckIcon,
  CreditCardIcon,
  BellIcon,
  LogOutIcon,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<\/script>

<template>
  <div class="flex items-center justify-between gap-4">
    <DropdownMenu data-component-x-ray-trigger="DropdownMenu">
      <DropdownMenuTrigger :as-child="true">
        <Button
          variant="outline"
          class="h-12 justify-start px-2 md:max-w-50"
          data-component-x-ray-trigger="Button"
        >
          <Avatar data-component-x-ray="Avatar">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              data-component-x-ray-trigger="AvatarImage"
            />
            <AvatarFallback class="rounded-lg" data-component-x-ray-trigger="AvatarFallback">
              CN
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">shadcn</span>
            <span class="truncate text-xs text-muted-foreground"> shadcn@example.com </span>
          </div>
          <ChevronsUpDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-56" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu data-component-x-ray-trigger="DropdownMenu">
      <DropdownMenuTrigger :as-child="true">
        <Button
          variant="ghost"
          size="icon"
          class="rounded-full"
          data-component-x-ray-trigger="Button"
        >
          <Avatar data-component-x-ray="Avatar">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="shadcn"
              data-component-x-ray-trigger="AvatarImage"
            />
            <AvatarFallback data-component-x-ray-trigger="AvatarFallback">CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
`,On={class:"@container max-w-200 mx-auto"},Fn={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},we=l({__name:"_Examples",setup(d){return(a,o)=>(m(),T("div",On,[_("div",Fn,[e(h,{"raw-component":n(kn)},{title:t(()=>[...o[0]||(o[0]=[r(" Basic ",-1)])]),example:t(()=>[e(Sn)]),_:1},8,["raw-component"]),e(h,{"raw-component":n(An)},{title:t(()=>[...o[1]||(o[1]=[r(" With Submenu ",-1)])]),example:t(()=>[e(Gn)]),_:1},8,["raw-component"]),e(h,{"raw-component":n(Rn)},{title:t(()=>[...o[2]||(o[2]=[r(" With Radio Icons ",-1)])]),example:t(()=>[e(qn)]),_:1},8,["raw-component"]),e(h,{"raw-component":n(Pn)},{title:t(()=>[...o[3]||(o[3]=[r(" With Avatar ",-1)])]),example:t(()=>[e(Tn)]),_:1},8,["raw-component"])])]))}});export{we as default};
