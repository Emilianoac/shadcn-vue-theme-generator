import{_ as R}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{d as p,ak as U,af as _,al as ee,w as te,o as m,a as x,H as n,a3 as c,u as e,r as q,an as ne,aj as I,a6 as g,ag as S,ah as B,ae as V,az as oe,Q as ae,j as re,z as A,D as o,am as ue,L as se,c as le,n as L,g as H,ai as D,a7 as w,A as K,T as ie,aq as X,I as s,_ as de,$ as pe,a0 as me,a1 as xe,a2 as ce,Z as fe}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{M as Ce,a as ge,b as Me,c as ye,d as _e}from"./MenuPortal-BpueXsdV.js";import{M as ve,a as be}from"./MenuSeparator-CHL-fUgX.js";import{M as he,a as Ie,b as Se,c as Be,d as we}from"./MenuSubTrigger-BP1rX-XD.js";import{C as qe}from"./chevron-right-B1DCKQlb.js";import{_ as De}from"./DialogTrigger.vue_vue_type_script_setup_true_lang-ddNrfB5s.js";import{C as Ge}from"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import{T as Te}from"./trash-BV4e_DVh.js";import{M as ke}from"./MenuLabel-CC9-mgGI.js";import{M as Re}from"./MenuItemIndicator-CPFu17oQ.js";import{C as Pe}from"./circle-f7jcPBtV.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./Collection-_O-VPQsQ.js";import"./usePrimitiveElement-BpSa_wbz.js";import"./useArrowNavigation-D-pctMGk.js";import"./useBodyScrollLock-DgbeSxz5.js";import"./defu-cjemX7BB.js";import"./useFocusGuards-DWoBvhE4.js";import"./useTypeahead-DnSqLn9O.js";import"./RovingFocusGroup-v_WEeGqd.js";import"./utils-CtWPBAxg.js";import"./DialogTrigger-DFJPOMH8.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./VisuallyHidden-fIfXuLIO.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";const[Q,$e]=ne("ContextMenuRoot");var Oe=p({inheritAttrs:!1,__name:"ContextMenuRoot",props:{pressOpenDelay:{type:Number,required:!1,default:700},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(a,{emit:r}){const t=a,i=r,{dir:u,modal:l,pressOpenDelay:d}=U(t);_();const v=ee(u),M=q(!1),y=q();return $e({open:M,onOpenChange:h=>{M.value=h},dir:v,modal:l,triggerElement:y,pressOpenDelay:d}),te(M,h=>{i("update:open",h)}),(h,k)=>(m(),x(e(Ce),{open:M.value,"onUpdate:open":k[0]||(k[0]=z=>M.value=z),dir:e(v),modal:e(l)},{default:n(()=>[c(h.$slots,"default")]),_:3},8,["open","dir","modal"]))}}),ze=Oe,Fe=p({__name:"ContextMenuContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1,default:0},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(a,{emit:r}){const u=I(a,r);_();const l=Q(),d=q(!1);return(v,M)=>(m(),x(e(ge),g(e(u),{side:"right","side-offset":2,align:"start","update-position-strategy":"always",style:{"--reka-context-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-context-menu-content-available-width":"var(--reka-popper-available-width)","--reka-context-menu-content-available-height":"var(--reka-popper-available-height)","--reka-context-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-context-menu-trigger-height":"var(--reka-popper-anchor-height)"},onCloseAutoFocus:M[0]||(M[0]=y=>{!y.defaultPrevented&&d.value&&y.preventDefault(),d.value=!1}),onInteractOutside:M[1]||(M[1]=y=>{y.detail.originalEvent.button===2&&y.target===e(l).triggerElement.value&&y.preventDefault(),!y.defaultPrevented&&!e(l).modal.value&&(d.value=!0)})}),{default:n(()=>[c(v.$slots,"default")]),_:3},16))}}),Le=Fe,Ve=p({__name:"ContextMenuGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const r=a;return _(),(t,i)=>(m(),x(e(ve),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),Ae=Ve,We=p({__name:"ContextMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(a,{emit:r}){const t=a,u=V(r);return _(),(l,d)=>(m(),x(e(Me),S(B({...t,...e(u)})),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),je=We,Ee=p({__name:"ContextMenuItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const r=a;return _(),(t,i)=>(m(),x(e(Re),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),Ne=Ee,Ue=p({__name:"ContextMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const r=a;return _(),(t,i)=>(m(),x(e(ke),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),He=Ue,Ke=p({__name:"ContextMenuPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(a){const r=a;return(t,i)=>(m(),x(e(ye),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),Xe=Ke,Qe=p({__name:"ContextMenuRadioGroup",props:{modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(a,{emit:r}){const t=a,u=V(r);return _(),(l,d)=>(m(),x(e(he),S(B({...t,...e(u)})),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),Ye=Qe,Ze=p({__name:"ContextMenuRadioItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(a,{emit:r}){const t=a,u=V(r);return _(),(l,d)=>(m(),x(e(Ie),S(B({...t,...e(u)})),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),Je=Ze,et=p({__name:"ContextMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const r=a;return _(),(t,i)=>(m(),x(e(be),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),tt=et,nt=p({__name:"ContextMenuSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(a,{emit:r}){const t=a,i=r;_();const u=oe(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0});return(l,d)=>(m(),x(e(Se),{open:e(u),"onUpdate:open":d[0]||(d[0]=v=>ae(u)?u.value=v:null)},{default:n(()=>[c(l.$slots,"default",{open:e(u)})]),_:3},8,["open"]))}}),ot=nt,at=p({__name:"ContextMenuSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(a,{emit:r}){const u=I(a,r);return _(),(l,d)=>(m(),x(e(Be),g(e(u),{style:{"--reka-context-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-context-menu-content-available-width":"var(--reka-popper-available-width)","--reka-context-menu-content-available-height":"var(--reka-popper-available-height)","--reka-context-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-context-menu-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),rt=at,ut=p({__name:"ContextMenuSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const r=a;return _(),(t,i)=>(m(),x(e(we),S(B(r)),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),st=ut;function W(a){return a.pointerType!=="mouse"}var lt=p({inheritAttrs:!1,__name:"ContextMenuTrigger",props:{disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const r=a,{disabled:t}=U(r),{forwardRef:i,currentElement:u}=_(),l=Q(),d=q({x:0,y:0}),v=le(()=>({getBoundingClientRect:()=>({width:0,height:0,left:d.value.x,right:d.value.x,top:d.value.y,bottom:d.value.y,...d.value})})),M=q(0);function y(){window.clearTimeout(M.value)}function h(f){d.value={x:f.clientX,y:f.clientY},l.onOpenChange(!0)}async function k(f){t.value||(await L(),f.defaultPrevented||(y(),h(f),f.preventDefault()))}async function z(f){t.value||(await L(),W(f)&&!f.defaultPrevented&&(y(),M.value=window.setTimeout(()=>h(f),l.pressOpenDelay.value)))}async function F(f){t.value||(await L(),W(f)&&!f.defaultPrevented&&y())}return re(()=>{u.value&&(l.triggerElement.value=u.value)}),(f,ht)=>(m(),A(se,null,[o(e(_e),{as:"template",reference:v.value},null,8,["reference"]),o(e(ue),g({ref:e(i),as:f.as,"as-child":f.asChild,"data-state":e(l).open.value?"open":"closed","data-disabled":e(t)?"":void 0,style:{WebkitTouchCallout:"none",pointerEvents:"auto"}},f.$attrs,{onContextmenu:k,onPointerdown:z,onPointermove:F,onPointercancel:F,onPointerup:F}),{default:n(()=>[c(f.$slots,"default")]),_:3},16,["as","as-child","data-state","data-disabled"])],64))}}),it=lt;const dt=H("clipboard-paste",[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]]);const pt=H("scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]),P=p({__name:"ContextMenu",props:{pressOpenDelay:{},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:r}){const u=I(a,r);return(l,d)=>(m(),x(e(ze),g({"data-slot":"context-menu"},e(u)),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),$=p({inheritAttrs:!1,__name:"ContextMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(a,{emit:r}){const t=a,i=r,u=D(t,"class"),l=I(u,i);return(d,v)=>(m(),x(e(Xe),null,{default:n(()=>[o(e(Le),g({"data-slot":"context-menu-content"},{...d.$attrs,...e(l)},{class:e(w)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-context-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",t.class)}),{default:n(()=>[c(d.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),b=p({__name:"ContextMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(a){const r=a;return(t,i)=>(m(),x(e(Ae),g({"data-slot":"context-menu-group"},r),{default:n(()=>[c(t.$slots,"default")]),_:3},16))}}),C=p({__name:"ContextMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean},variant:{default:"default"}},emits:["select"],setup(a,{emit:r}){const t=a,i=r,u=D(t,"class"),l=I(u,i);return(d,v)=>(m(),x(e(je),g({"data-slot":"context-menu-item","data-inset":a.inset?"":void 0,"data-variant":a.variant},e(l),{class:e(w)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t.class)}),{default:n(()=>[c(d.$slots,"default")]),_:3},16,["data-inset","data-variant","class"]))}}),j=p({__name:"ContextMenuLabel",props:{asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(a){const r=a,t=D(r,"class");return(i,u)=>(m(),x(e(He),g({"data-slot":"context-menu-label","data-inset":a.inset?"":void 0},e(t),{class:e(w)("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",r.class)}),{default:n(()=>[c(i.$slots,"default")]),_:3},16,["data-inset","class"]))}}),E=p({__name:"ContextMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(a,{emit:r}){const u=I(a,r);return(l,d)=>(m(),x(e(Ye),g({"data-slot":"context-menu-radio-group"},e(u)),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),mt={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},T=p({__name:"ContextMenuRadioItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},emits:["select"],setup(a,{emit:r}){const t=a,i=r,u=D(t,"class"),l=I(u,i);return(d,v)=>(m(),x(e(Je),g({"data-slot":"context-menu-radio-item"},e(l),{class:e(w)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t.class)}),{default:n(()=>[K("span",mt,[o(e(Ne),null,{default:n(()=>[c(d.$slots,"indicator-icon",{},()=>[o(e(Pe),{class:"size-2 fill-current"})])]),_:3})]),c(d.$slots,"default")]),_:3},16,["class"]))}}),G=p({__name:"ContextMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const r=a,t=D(r,"class");return(i,u)=>(m(),x(e(tt),g({"data-slot":"context-menu-separator"},e(t),{class:e(w)("bg-border -mx-1 my-1 h-px",r.class)}),null,16,["class"]))}}),N=p({__name:"ContextMenuShortcut",props:{class:{}},setup(a){const r=a;return(t,i)=>(m(),A("span",{"data-slot":"context-menu-shortcut",class:ie(e(w)("text-muted-foreground ml-auto text-xs tracking-widest",r.class))},[c(t.$slots,"default")],2))}}),Y=p({__name:"ContextMenuSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(a,{emit:r}){const u=I(a,r);return(l,d)=>(m(),x(e(ot),g({"data-slot":"context-menu-sub"},e(u)),{default:n(()=>[c(l.$slots,"default")]),_:3},16))}}),Z=p({__name:"ContextMenuSubContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(a,{emit:r}){const t=a,i=r,u=D(t,"class"),l=I(u,i);return(d,v)=>(m(),x(e(rt),g({"data-slot":"context-menu-sub-content"},e(l),{class:e(w)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",t.class)}),{default:n(()=>[c(d.$slots,"default")]),_:3},16,["class"]))}}),J=p({__name:"ContextMenuSubTrigger",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(a){const r=a,t=D(r,"class"),i=X(t);return(u,l)=>(m(),x(e(st),g({"data-slot":"context-menu-sub-trigger","data-inset":a.inset?"":void 0},e(i),{class:e(w)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r.class)}),{default:n(()=>[c(u.$slots,"default"),o(e(qe),{class:"ml-auto"})]),_:3},16,["data-inset","class"]))}}),O=p({__name:"ContextMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(a){const t=X(a);return(i,u)=>(m(),x(e(it),g({"data-slot":"context-menu-trigger"},e(t)),{default:n(()=>[c(i.$slots,"default")]),_:3},16))}}),xt=p({__name:"ContextMenuBasic",setup(a){return(r,t)=>(m(),x(e(P),null,{default:n(()=>[o(e(O),{class:"flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm","data-component-x-ray":"ContextMenuTrigger"},{default:n(()=>[...t[0]||(t[0]=[s(" Right click here ",-1)])]),_:1}),o(e($),{"data-component-x-ray":"ContextMenuContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[1]||(t[1]=[s(" Back ",-1)])]),_:1}),o(e(C),{disabled:""},{default:n(()=>[...t[2]||(t[2]=[s(" Forward ",-1)])]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[3]||(t[3]=[s("Reload",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ct=`<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
<\/script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
      data-component-x-ray="ContextMenuTrigger"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"> Back </ContextMenuItem>
        <ContextMenuItem disabled> Forward </ContextMenuItem>
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">Reload</ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
</template>
`,ft=p({__name:"ContextMenuInDialog",setup(a){return(r,t)=>(m(),x(e(fe),null,{default:n(()=>[o(e(De),{"as-child":!0},{default:n(()=>[o(e(de),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[0]||(t[0]=[s(" Open Dialog ",-1)])]),_:1})]),_:1}),o(e(pe),{to:"#examples-container","data-component-x-ray":"DialogContent"},{default:n(()=>[o(e(me),{"data-component-x-ray":"DialogHeader"},{default:n(()=>[o(e(xe),{"data-component-x-ray":"DialogTitle"},{default:n(()=>[...t[1]||(t[1]=[s("Context Menu in Dialog",-1)])]),_:1}),o(e(ce),{"data-component-x-ray":"DialogDescription"},{default:n(()=>[...t[2]||(t[2]=[s(" Right click on the area below to see the context menu. ",-1)])]),_:1})]),_:1}),o(e(P),{"data-component-x-ray":"ContextMenu"},{default:n(()=>[o(e(O),{class:"flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm","data-component-x-ray":"ContextMenuTrigger"},{default:n(()=>[...t[3]||(t[3]=[s(" Right click here ",-1)])]),_:1}),o(e($),{"data-component-x-ray":"ContextMenuContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[o(e(Ge)),t[4]||(t[4]=s(" Copy ",-1))]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[o(e(pt)),t[5]||(t[5]=s(" Cut ",-1))]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[o(e(dt),{size:30}),t[6]||(t[6]=s(" Paste ",-1))]),_:1})]),_:1}),o(e(G)),o(e(Y),{"data-component-x-ray":"ContextMenuSub"},{default:n(()=>[o(e(J),{"data-component-x-ray-trigger":"ContextMenuSubTrigger"},{default:n(()=>[...t[7]||(t[7]=[s(" More Options ",-1)])]),_:1}),o(e(Z),{"data-component-x-ray":"ContextMenuSubContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[8]||(t[8]=[s("Save Page...",-1)])]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[9]||(t[9]=[s("Create Shortcut...",-1)])]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[10]||(t[10]=[s("Name Window...",-1)])]),_:1})]),_:1}),o(e(G)),o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[11]||(t[11]=[s("Developer Tools",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),o(e(G)),o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{variant:"destructive","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[o(e(Te)),t[12]||(t[12]=s(" Delete ",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ct=`<script setup lang="ts">
import { CopyIcon, ScissorsIcon, ClipboardPasteIcon, TrashIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
<\/script>

<template>
  <Dialog>
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open Dialog </Button>
    </DialogTrigger>
    <DialogContent to="#examples-container" data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Context Menu in Dialog</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          Right click on the area below to see the context menu.
        </DialogDescription>
      </DialogHeader>
      <ContextMenu data-component-x-ray="ContextMenu">
        <ContextMenuTrigger
          class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
          data-component-x-ray="ContextMenuTrigger"
        >
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent data-component-x-ray="ContextMenuContent">
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
              <ScissorsIcon />
              Cut
            </ContextMenuItem>
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
              <ClipboardPasteIcon :size="30" />
              Paste
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuSub data-component-x-ray="ContextMenuSub">
            <ContextMenuSubTrigger data-component-x-ray-trigger="ContextMenuSubTrigger">
              More Options
            </ContextMenuSubTrigger>
            <ContextMenuSubContent data-component-x-ray="ContextMenuSubContent">
              <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
                <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
                  >Save Page...</ContextMenuItem
                >
                <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
                  >Create Shortcut...</ContextMenuItem
                >
                <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
                  >Name Window...</ContextMenuItem
                >
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
                <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
                  >Developer Tools</ContextMenuItem
                >
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem variant="destructive" data-component-x-ray-trigger="ContextMenuItem">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DialogContent>
  </Dialog>
</template>
`,gt=p({__name:"ContextMenuWithRadio",setup(a){const r=q("pedro"),t=q("light");return(i,u)=>(m(),x(e(P),{"data-component-x-ray":"ContextMenuWithRadio"},{default:n(()=>[o(e(O),{class:"flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"},{default:n(()=>[...u[2]||(u[2]=[s(" Right click here ",-1)])]),_:1}),o(e($),{"data-component-x-ray":"ContextMenuContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(j),{"data-component-x-ray":"ContextMenuLabel"},{default:n(()=>[...u[3]||(u[3]=[s("People",-1)])]),_:1}),o(e(E),{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=l=>r.value=l),"data-component-x-ray":"ContextMenuRadioGroup"},{default:n(()=>[o(e(T),{value:"pedro","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...u[4]||(u[4]=[s(" Pedro Duarte ",-1)])]),_:1}),o(e(T),{value:"colm","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...u[5]||(u[5]=[s(" Colm Tuite ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(e(G)),o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(j),{"data-component-x-ray":"ContextMenuLabel"},{default:n(()=>[...u[6]||(u[6]=[s("Theme",-1)])]),_:1}),o(e(E),{modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=l=>t.value=l),"data-component-x-ray":"ContextMenuRadioGroup"},{default:n(()=>[o(e(T),{value:"light","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...u[7]||(u[7]=[s(" Light ",-1)])]),_:1}),o(e(T),{value:"dark","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...u[8]||(u[8]=[s(" Dark ",-1)])]),_:1}),o(e(T),{value:"system","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...u[9]||(u[9]=[s(" System ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),Mt=`<script setup lang="ts">
import { ref } from "vue";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const user = ref("pedro");
const theme = ref("light");
<\/script>

<template>
  <ContextMenu data-component-x-ray="ContextMenuWithRadio">
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuLabel data-component-x-ray="ContextMenuLabel">People</ContextMenuLabel>
        <ContextMenuRadioGroup v-model="user" data-component-x-ray="ContextMenuRadioGroup">
          <ContextMenuRadioItem value="pedro" data-component-x-ray-trigger="ContextMenuItem">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm" data-component-x-ray-trigger="ContextMenuItem">
            Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuLabel data-component-x-ray="ContextMenuLabel">Theme</ContextMenuLabel>
        <ContextMenuRadioGroup v-model="theme" data-component-x-ray="ContextMenuRadioGroup">
          <ContextMenuRadioItem value="light" data-component-x-ray-trigger="ContextMenuItem">
            Light
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark" data-component-x-ray-trigger="ContextMenuItem">
            Dark
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="system" data-component-x-ray-trigger="ContextMenuItem">
            System
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
</template>
`,yt=p({__name:"ContextMenuWithSubMenu",setup(a){return(r,t)=>(m(),x(e(P),{"data-component-x-ray":"ContextMenu"},{default:n(()=>[o(e(O),{class:"flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm","data-component-x-ray":"ContextMenuTrigger"},{default:n(()=>[...t[0]||(t[0]=[s(" Right click here ",-1)])]),_:1}),o(e($),{"data-component-x-ray":"ContextMenuContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[t[2]||(t[2]=s(" Copy ",-1)),o(e(N),{"data-component-x-ray-trigger":"ContextMenuShortCut"},{default:n(()=>[...t[1]||(t[1]=[s("⌘C",-1)])]),_:1})]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[t[4]||(t[4]=s(" Cut ",-1)),o(e(N),{"data-component-x-ray-trigger":"ContextMenuShortCut"},{default:n(()=>[...t[3]||(t[3]=[s("⌘X",-1)])]),_:1})]),_:1})]),_:1}),o(e(Y),{"data-component-x-ray":"ContextMenuSub"},{default:n(()=>[o(e(J),{"data-component-x-ray-trigger":"ContextMenuSubTrigger"},{default:n(()=>[...t[5]||(t[5]=[s("More Tools",-1)])]),_:1}),o(e(Z),{"data-component-x-ray":"ContextMenuSubContent"},{default:n(()=>[o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[6]||(t[6]=[s("Save Page...",-1)])]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[7]||(t[7]=[s("Create Shortcut...",-1)])]),_:1}),o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[8]||(t[8]=[s("Name Window...",-1)])]),_:1})]),_:1}),o(e(G)),o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{"data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[9]||(t[9]=[s("Developer Tools",-1)])]),_:1})]),_:1}),o(e(G)),o(e(b),{"data-component-x-ray":"ContextMenuGroup"},{default:n(()=>[o(e(C),{variant:"destructive","data-component-x-ray-trigger":"ContextMenuItem"},{default:n(()=>[...t[10]||(t[10]=[s(" Delete ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),_t=`<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
<\/script>

<template>
  <ContextMenu data-component-x-ray="ContextMenu">
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
      data-component-x-ray="ContextMenuTrigger"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
          Copy
          <ContextMenuShortcut data-component-x-ray-trigger="ContextMenuShortCut"
            >⌘C</ContextMenuShortcut
          >
        </ContextMenuItem>
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
          Cut
          <ContextMenuShortcut data-component-x-ray-trigger="ContextMenuShortCut"
            >⌘X</ContextMenuShortcut
          >
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSub data-component-x-ray="ContextMenuSub">
        <ContextMenuSubTrigger data-component-x-ray-trigger="ContextMenuSubTrigger"
          >More Tools</ContextMenuSubTrigger
        >
        <ContextMenuSubContent data-component-x-ray="ContextMenuSubContent">
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Save Page...</ContextMenuItem
            >
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Create Shortcut...</ContextMenuItem
            >
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Name Window...</ContextMenuItem
            >
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Developer Tools</ContextMenuItem
            >
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem variant="destructive" data-component-x-ray-trigger="ContextMenuItem">
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  </ContextMenu>
</template>
`,vt={class:"@container max-w-200 mx-auto"},bt={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Zt=p({__name:"_Examples",setup(a){return(r,t)=>(m(),A("div",vt,[K("div",bt,[o(R,{"raw-component":e(ct)},{title:n(()=>[...t[0]||(t[0]=[s(" Basic ",-1)])]),example:n(()=>[o(xt)]),_:1},8,["raw-component"]),o(R,{"raw-component":e(_t)},{title:n(()=>[...t[1]||(t[1]=[s(" With Sub Menu ",-1)])]),example:n(()=>[o(yt)]),_:1},8,["raw-component"]),o(R,{"raw-component":e(Mt)},{title:n(()=>[...t[2]||(t[2]=[s(" With Radio Group ",-1)])]),example:n(()=>[o(gt)]),_:1},8,["raw-component"]),o(R,{"raw-component":e(Ct)},{title:n(()=>[...t[3]||(t[3]=[s(" In Dialog ",-1)])]),example:n(()=>[o(ft)]),_:1},8,["raw-component"])])]))}});export{Zt as default};
