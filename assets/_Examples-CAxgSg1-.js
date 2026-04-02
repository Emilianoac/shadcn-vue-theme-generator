import{_ as E}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{d as c,al as U,ag as q,aB as M,o as f,e as m,H as a,a4 as _,u as e,b as h,ao as V,ar as k,aV as j,aF as W,g as K,j as G,D as i,a6 as B,N as J,aW as Q,n as X,ak as N,aL as Y,ah as F,ai as I,ax as Z,an as ee,aj as te,a7 as ae,_ as P,I as D,a0 as oe,a1 as re,a2 as ne,a3 as se,A as H,$ as ie,z as T,L as le,M as de,B as $}from"./highlight-mgC1Gizx.js";import{_ as ue}from"./DialogTrigger.vue_vue_type_script_setup_true_lang-CPRXbFNt.js";import{P as pe,u as fe,f as ce,g as ve}from"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";import"./DialogTrigger-8NgV6fPq.js";const[R,me]=V("HoverCardRoot");var ge=c({__name:"HoverCardRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},openDelay:{type:Number,required:!1,default:700},closeDelay:{type:Number,required:!1,default:300}},emits:["update:open"],setup(l,{emit:o}){const t=l,r=o,{openDelay:u,closeDelay:p}=U(t);q();const s=M(t,"open",r,{defaultValue:t.defaultOpen,passive:t.open===void 0}),n=h(0),C=h(0),x=h(!1),g=h(!1),w=h(!1),b=h();function y(){clearTimeout(C.value),n.value=window.setTimeout(()=>s.value=!0,u.value)}function d(){clearTimeout(n.value),!x.value&&!g.value&&(C.value=window.setTimeout(()=>s.value=!1,p.value))}function v(){s.value=!1}return me({open:s,onOpenChange(S){s.value=S},onOpen:y,onClose:d,onDismiss:v,hasSelectionRef:x,isPointerDownOnContentRef:g,isPointerInTransitRef:w,triggerElement:b}),(S,Ne)=>(f(),m(e(pe),null,{default:a(()=>[_(S.$slots,"default",{open:e(s)})]),_:3}))}}),ye=ge;function O(l){return o=>o.pointerType==="touch"?void 0:l()}function _e(l){const o=[],t=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;t.nextNode();)o.push(t.currentNode);return o}var Ce=c({__name:"HoverCardContentImpl",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(l,{emit:o}){const t=l,r=o,u=k(t),{forwardRef:p,currentElement:s}=q(),n=R(),{isPointerInTransit:C,onPointerExit:x}=fe(n.triggerElement,s);j(n.isPointerInTransitRef,C,{direction:"rtl"}),x(()=>{n.onClose()});const g=h(!1);let w;W(y=>{if(g.value){const d=document.body;w=d.style.userSelect||d.style.webkitUserSelect,d.style.userSelect="none",d.style.webkitUserSelect="none",y(()=>{d.style.userSelect=w,d.style.webkitUserSelect=w})}});function b(){g.value=!1,n.isPointerDownOnContentRef.value=!1,X(()=>{document.getSelection()?.toString()!==""&&(n.hasSelectionRef.value=!0)})}return K(()=>{s.value&&(document.addEventListener("pointerup",b),_e(s.value).forEach(d=>d.setAttribute("tabindex","-1")))}),G(()=>{document.removeEventListener("pointerup",b),n.hasSelectionRef.value=!1,n.isPointerDownOnContentRef.value=!1}),(y,d)=>(f(),m(e(Q),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[1]||(d[1]=v=>r("escapeKeyDown",v)),onPointerDownOutside:d[2]||(d[2]=v=>r("pointerDownOutside",v)),onFocusOutside:d[3]||(d[3]=J(v=>r("focusOutside",v),["prevent"])),onDismiss:e(n).onDismiss},{default:a(()=>[i(e(ce),B({...e(u),...y.$attrs},{ref:e(p),"data-state":e(n).open.value?"open":"closed",style:{userSelect:g.value?"text":void 0,WebkitUserSelect:g.value?"text":void 0,"--reka-hover-card-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-hover-card-content-available-width":"var(--reka-popper-available-width)","--reka-hover-card-content-available-height":"var(--reka-popper-available-height)","--reka-hover-card-trigger-width":"var(--reka-popper-anchor-width)","--reka-hover-card-trigger-height":"var(--reka-popper-anchor-height)"},onPointerdown:d[0]||(d[0]=v=>{v.currentTarget.contains(v.target)&&(g.value=!0),e(n).hasSelectionRef.value=!1,e(n).isPointerDownOnContentRef.value=!0})}),{default:a(()=>[_(y.$slots,"default")]),_:3},16,["data-state","style"])]),_:3},8,["onDismiss"]))}}),he=Ce,De=c({__name:"HoverCardContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(l,{emit:o}){const u=N(l,o),{forwardRef:p}=q(),s=R();return(n,C)=>(f(),m(e(Y),{present:n.forceMount||e(s).open.value},{default:a(()=>[i(he,B(e(u),{ref:e(p),onPointerenter:C[0]||(C[0]=x=>e(O)(e(s).onOpen)(x))}),{default:a(()=>[_(n.$slots,"default")]),_:3},16)]),_:3},8,["present"]))}}),He=De,xe=c({__name:"HoverCardPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(l){const o=l;return(t,r)=>(f(),m(e(Z),F(I(o)),{default:a(()=>[_(t.$slots,"default")]),_:3},16))}}),we=xe,Be=c({__name:"HoverCardTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"a"}},setup(l){const{forwardRef:o,currentElement:t}=q(),r=R();r.triggerElement=t;function u(){setTimeout(()=>{!r.isPointerInTransitRef.value&&!r.open.value&&r.onClose()},0)}return(p,s)=>(f(),m(e(ve),{"as-child":"",reference:p.reference},{default:a(()=>[i(e(ee),{ref:e(o),"as-child":p.asChild,as:p.as,"data-state":e(r).open.value?"open":"closed","data-grace-area-trigger":"",onPointerenter:s[0]||(s[0]=n=>e(O)(e(r).onOpen)(n)),onPointerleave:s[1]||(s[1]=n=>e(O)(u)(n)),onFocus:s[2]||(s[2]=n=>e(r).onOpen()),onBlur:s[3]||(s[3]=n=>e(r).onClose())},{default:a(()=>[_(p.$slots,"default")]),_:3},8,["as-child","as","data-state"])]),_:3},8,["reference"]))}}),be=Be;const L=c({__name:"HoverCard",props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{}},emits:["update:open"],setup(l,{emit:o}){const u=N(l,o);return(p,s)=>(f(),m(e(ye),B({"data-slot":"hover-card"},e(u)),{default:a(n=>[_(p.$slots,"default",F(I(n)))]),_:3},16))}}),A=c({inheritAttrs:!1,__name:"HoverCardContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},setup(l){const o=l,t=te(o,"class"),r=k(t);return(u,p)=>(f(),m(e(we),null,{default:a(()=>[i(e(He),B({"data-slot":"hover-card-content"},{...u.$attrs,...e(r)},{class:e(ae)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden",o.class)}),{default:a(()=>[_(u.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),z=c({__name:"HoverCardTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(l){const o=l;return(t,r)=>(f(),m(e(be),B({"data-slot":"hover-card-trigger"},o),{default:a(()=>[_(t.$slots,"default")]),_:3},16))}}),qe=c({__name:"HoverCardInDialog",setup(l){return(o,t)=>(f(),m(e(ie),{"data-component-x-ray":"Dialog"},{default:a(()=>[i(e(ue),{"as-child":!0},{default:a(()=>[i(e(P),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[D(" Open Dialog ",-1)])]),_:1})]),_:1}),i(e(oe),{"data-component-x-ray":"DialogContent"},{default:a(()=>[i(e(re),{"data-component-x-ray":"DialogHeader"},{default:a(()=>[i(e(ne),{"data-component-x-ray":"DialogTitle"},{default:a(()=>[...t[1]||(t[1]=[D("Hover Card Example",-1)])]),_:1}),i(e(se),{"data-component-x-ray":"DialogDescription"},{default:a(()=>[...t[2]||(t[2]=[D(" Hover over the button below to see the hover card. ",-1)])]),_:1})]),_:1}),i(e(L),{"open-delay":100,"close-delay":100,"data-component-x-ray":"HoverCard"},{default:a(()=>[i(e(z),{"as-child":!0},{default:a(()=>[i(e(P),{variant:"outline",class:"w-fit","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[3]||(t[3]=[D(" Hover me ",-1)])]),_:1})]),_:1}),i(e(A),{class:"w-64","data-component-x-ray":"HoverCardContent"},{default:a(()=>[...t[4]||(t[4]=[H("div",{class:"flex flex-col gap-1"},[H("h4",{class:"font-medium"},"Hover Card"),H("p",{class:"text-sm"}," This hover card appears inside a dialog. Hover over the button to see it. ")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Se=`<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/ui/hover-card";
<\/script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open Dialog </Button>
    </DialogTrigger>
    <DialogContent data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Hover Card Example</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          Hover over the button below to see the hover card.
        </DialogDescription>
      </DialogHeader>
      <HoverCard :open-delay="100" :close-delay="100" data-component-x-ray="HoverCard">
        <HoverCardTrigger :as-child="true">
          <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button">
            Hover me
          </Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-64" data-component-x-ray="HoverCardContent">
          <div class="flex flex-col gap-1">
            <h4 class="font-medium">Hover Card</h4>
            <p class="text-sm">
              This hover card appears inside a dialog. Hover over the button to see it.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </DialogContent>
  </Dialog>
</template>
`,Pe={class:"flex flex-wrap items-center justify-center gap-4"},Te={class:"flex flex-col gap-1"},Oe={class:"text-sm"},Re=c({__name:"HoverCardSides",setup(l){const o=["top","right","bottom","left"];return(t,r)=>(f(),T("div",Pe,[(f(),T(le,null,de(o,u=>i(e(L),{key:u,"open-delay":100,"close-delay":100,"data-component-x-ray":"HoverCard"},{default:a(()=>[i(e(z),{"as-child":!0},{default:a(()=>[i(e(P),{variant:"outline",class:"capitalize","data-component-x-ray-trigger":"Button"},{default:a(()=>[D($(u),1)]),_:2},1024)]),_:2},1024),i(e(A),{side:u,class:"w-64","data-component-x-ray":"HoverCardContent"},{default:a(()=>[H("div",Te,[r[0]||(r[0]=H("h4",{class:"font-semibold"},"Hover Card",-1)),H("p",Oe,"This hover card appears on the "+$(u)+" side of the trigger.",1)])]),_:2},1032,["side"])]),_:2},1024)),64))]))}}),Ee=`<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/ui/hover-card";

const HOVER_CARD_SIDES = ["top", "right", "bottom", "left"] as const;
<\/script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <HoverCard
      v-for="side in HOVER_CARD_SIDES"
      :key="side"
      :open-delay="100"
      :close-delay="100"
      data-component-x-ray="HoverCard"
    >
      <HoverCardTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          {{ side }}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent :side="side" class="w-64" data-component-x-ray="HoverCardContent">
        <div class="flex flex-col gap-1">
          <h4 class="font-semibold">Hover Card</h4>
          <p class="text-sm">This hover card appears on the {{ side }} side of the trigger.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
`,$e={class:"@container max-w-200 mx-auto"},ke={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Ue=c({__name:"_Examples",setup(l){return(o,t)=>(f(),T("div",$e,[H("div",ke,[i(E,{"raw-component":e(Se)},{title:a(()=>[...t[0]||(t[0]=[D(" In Dialog ",-1)])]),example:a(()=>[i(qe)]),_:1},8,["raw-component"]),i(E,{"raw-component":e(Ee)},{title:a(()=>[...t[1]||(t[1]=[D(" Sides ",-1)])]),example:a(()=>[i(Re)]),_:1},8,["raw-component"])])]))}});export{Ue as default};
