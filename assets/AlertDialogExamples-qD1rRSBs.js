import{_ as w}from"./ExampleCard.vue_vue_type_script_setup_true_lang-RODFUHo8.js";import{d as u,af as f,o as i,a as c,H as a,a3 as d,ag as _,ah as y,u as e,as as R,ae as j,a6 as D,n as N,N as E,at as I,r as z,an as K,j as U,au as J,av as G,aj as S,aw as Q,ax as X,g as Y,ai as v,a7 as x,ay as L,D as o,z as T,J as Z,T as V,_ as b,I as s,A as tt}from"./DialogTitle.vue_vue_type_script_setup_true_lang-BO6eI9T0.js";import{D as et}from"./DialogTrigger-fa8NnW98.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-JhfpkWUQ.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-BTii5kdN.js";import"./PopperContent-8PHJ-kTl.js";import"./useSize-s3pOCBPt.js";import"./VisuallyHidden-DM3OMqDx.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-ah-oNQF4.js";import"./check-BIt67cX5.js";var at=u({__name:"AlertDialogAction",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n;return f(),(t,r)=>(i(),c(e(R),_(y(l)),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),ot=at;const[lt,nt]=K("AlertDialogContent");var rt=u({__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:l}){const t=n,p=j(l);f();const A=z();return nt({onCancelElementChange:g=>{A.value=g}}),(g,m)=>(i(),c(e(I),D({...t,...e(p)},{role:"alertdialog",onPointerDownOutside:m[0]||(m[0]=E(()=>{},["prevent"])),onInteractOutside:m[1]||(m[1]=E(()=>{},["prevent"])),onOpenAutoFocus:m[2]||(m[2]=()=>{N(()=>{A.value?.focus({preventScroll:!0})})})}),{default:a(()=>[d(g.$slots,"default")]),_:3},16))}}),st=rt,it=u({__name:"AlertDialogCancel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n,t=lt(),{forwardRef:r,currentElement:p}=f();return U(()=>{t.onCancelElementChange(p.value)}),(A,g)=>(i(),c(e(R),D(l,{ref:e(r)}),{default:a(()=>[d(A.$slots,"default")]),_:3},16))}}),ut=it,ct=u({__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(n){const l=n;return f(),(t,r)=>(i(),c(e(J),_(y(l)),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),dt=ct,pt=u({__name:"AlertDialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const l=n;return(t,r)=>(i(),c(e(G),_(y(l)),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),gt=pt,mt=u({__name:"AlertDialogRoot",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(n,{emit:l}){const p=S(n,l);return f(),(A,g)=>(i(),c(e(Q),D(e(p),{modal:!0}),{default:a(m=>[d(A.$slots,"default",_(y(m)))]),_:3},16))}}),At=mt,Dt=u({__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(n){const l=n;return f(),(t,r)=>(i(),c(e(X),_(y(l)),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),ft=Dt,_t=u({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n;return f(),(t,r)=>(i(),c(e(et),_(y(l)),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),yt=_t;const W=Y("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),B=u({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean,default:!1}},emits:["update:open"],setup(n,{emit:l}){const t=n,r=l,p=v(t,"modal"),A=S(p,r);return(g,m)=>(i(),c(e(At),D({"data-slot":"alert-dialog",modal:t.modal},e(A)),{default:a(O=>[d(g.$slots,"default",_(y(O)))]),_:3},16,["modal"]))}}),F=u({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=v(l,"class");return(r,p)=>(i(),c(e(ot),D(e(t),{class:e(x)(e(L)(),l.class)}),{default:a(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}}),$=u({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=v(l,"class");return(r,p)=>(i(),c(e(ut),D(e(t),{class:e(x)(e(L)({variant:"outline"}),"mt-2 sm:mt-0",l.class)}),{default:a(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}}),xt={key:0,"data-slot":"alert-dialog-overlay",class:"pointer-events-auto absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"},h=u({inheritAttrs:!1,__name:"AlertDialogContent",props:{forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{},to:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:l}){const t=n,r=l,p=v(t,"class"),A=S(p,r),g=z(!1);function m(C){g.value=!0,r("openAutoFocus",C)}function O(C){g.value=!1,r("closeAutoFocus",C)}return(C,Ht)=>(i(),c(e(gt),{to:t.to||void 0},{default:a(()=>[o(e(st),D({"data-slot":"alert-dialog-content"},{...C.$attrs,...e(A)},{onOpenAutoFocus:m,onCloseAutoFocus:O,class:e(x)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 absolute top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t.class)}),{default:a(()=>[d(C.$slots,"default")]),_:3},16,["class"]),g.value?(i(),T("div",xt)):Z("",!0)]),_:3},8,["to"]))}}),q=u({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=v(l,"class");return(r,p)=>(i(),c(e(dt),D({"data-slot":"alert-dialog-description"},e(t),{class:e(x)("text-muted-foreground text-sm",l.class)}),{default:a(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}}),H=u({__name:"AlertDialogFooter",props:{class:{}},setup(n){const l=n;return(t,r)=>(i(),T("div",{"data-slot":"alert-dialog-footer",class:V(e(x)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",l.class))},[d(t.$slots,"default")],2))}}),k=u({__name:"AlertDialogHeader",props:{class:{}},setup(n){const l=n;return(t,r)=>(i(),T("div",{"data-slot":"alert-dialog-header",class:V(e(x)("flex flex-col gap-2 text-center sm:text-left",l.class))},[d(t.$slots,"default")],2))}}),M=u({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=v(l,"class");return(r,p)=>(i(),c(e(ft),D({"data-slot":"alert-dialog-title"},e(t),{class:e(x)("text-lg font-semibold",l.class)}),{default:a(()=>[d(r.$slots,"default")]),_:3},16,["class"]))}}),P=u({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(n){const l=n;return(t,r)=>(i(),c(e(yt),D({"data-slot":"alert-dialog-trigger"},l),{default:a(()=>[d(t.$slots,"default")]),_:3},16))}}),Ct=u({__name:"AlertDialogBasic",setup(n){return(l,t)=>(i(),c(e(B),null,{default:a(()=>[o(e(P),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(b),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[s(" Default ",-1)])]),_:1})]),_:1}),o(e(h),{"data-component-x-ray":"AlertDialogContent",to:"#examples-container"},{default:a(()=>[o(e(k),{"data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(M),{"data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[s(" Are you absolutely sure? ",-1)])]),_:1}),o(e(q),{"data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[s(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(H),{"data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e($),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[s(" Cancel ",-1)])]),_:1}),o(e(F),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[s(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),vt=`<script lang="ts" setup>
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default </Button>
    </AlertDialogTrigger>
    <AlertDialogContent data-component-x-ray="AlertDialogContent" to="#examples-container">
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
`,wt=u({__name:"AlertDialogSmall",setup(n){return(l,t)=>(i(),c(e(B),null,{default:a(()=>[o(e(P),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(b),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[s(" Small ",-1)])]),_:1})]),_:1}),o(e(h),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent",to:"#examples-container"},{default:a(()=>[o(e(k),{"data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(M),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[s(" Allow accessory to connect? ",-1)])]),_:1}),o(e(q),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[s(" Do you want to allow the USB accessory to connect to this device? ",-1)])]),_:1})]),_:1}),o(e(H),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e($),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[s(" Cancel ",-1)])]),_:1}),o(e(F),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[s(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Tt=`<script lang="ts" setup>
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Small </Button>
    </AlertDialogTrigger>
    <AlertDialogContent
      class="max-w-xs sm:max-w-xs"
      data-component-x-ray="AlertDialogContent"
      to="#examples-container"
    >
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
`,bt=u({__name:"AlertDialogWithMedia",setup(n){return(l,t)=>(i(),c(e(B),null,{default:a(()=>[o(e(P),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(b),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[s(" Default (Media) ",-1)])]),_:1})]),_:1}),o(e(h),{class:"max-w-xs md:max-w-md","data-component-x-ray":"AlertDialogContent",to:"#examples-container"},{default:a(()=>[o(e(k),{class:"md:grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-4","data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(W),{class:"col-span-1 row-span-2 mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(e(M),{class:"col-start-2","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[s(" Are you absolutely sure? ",-1)])]),_:1}),o(e(q),{class:"col-start-2","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[s(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(H),{"data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e($),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[s(" Cancel ",-1)])]),_:1}),o(e(F),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[s(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Bt=`<script lang="ts" setup>
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-vue-next";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default (Media) </Button>
    </AlertDialogTrigger>
    <AlertDialogContent
      class="max-w-xs md:max-w-md"
      data-component-x-ray="AlertDialogContent"
      to="#examples-container"
    >
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
`,Ft=u({__name:"AlertDialogWithMediaSmall",setup(n){return(l,t)=>(i(),c(e(B),null,{default:a(()=>[o(e(P),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(b),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[s(" Small (Media) ",-1)])]),_:1})]),_:1}),o(e(h),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent",to:"#examples-container"},{default:a(()=>[o(e(k),{class:"items-center","data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(W),{class:"mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(e(M),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[s(" Are you absolutely sure? ",-1)])]),_:1}),o(e(q),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[s(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(H),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e($),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[s(" Cancel ",-1)])]),_:1}),o(e(F),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[s(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$t=`<script lang="ts" setup>
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-vue-next";
<\/script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Small (Media) </Button>
    </AlertDialogTrigger>
    <AlertDialogContent
      class="max-w-xs sm:max-w-xs"
      data-component-x-ray="AlertDialogContent"
      to="#examples-container"
    >
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
`,ht={class:"@container"},qt={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 max-w-200 mx-auto"},jt=u({__name:"AlertDialogExamples",setup(n){return(l,t)=>(i(),T("div",ht,[tt("div",qt,[o(w,{"raw-component":e(vt)},{title:a(()=>[...t[0]||(t[0]=[s("Basic",-1)])]),example:a(()=>[o(Ct)]),_:1},8,["raw-component"]),o(w,{"raw-component":e(Tt)},{title:a(()=>[...t[1]||(t[1]=[s("Small",-1)])]),example:a(()=>[o(wt)]),_:1},8,["raw-component"]),o(w,{"raw-component":e(Bt)},{title:a(()=>[...t[2]||(t[2]=[s("With Media",-1)])]),example:a(()=>[o(bt)]),_:1},8,["raw-component"]),o(w,{"raw-component":e($t)},{title:a(()=>[...t[3]||(t[3]=[s("With Media Small",-1)])]),example:a(()=>[o(Ft)]),_:1},8,["raw-component"])])]))}});export{jt as default};
