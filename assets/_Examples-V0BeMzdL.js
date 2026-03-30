import{_ as v}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{d as i,af as _,o as u,a as d,H as a,a3 as c,ag as f,ah as y,u as e,as as S,ae as L,a5 as D,n as W,N as P,at as j,r as N,an as V,j as I,au as K,av as U,aw as G,aj as k,ax as J,ay as Q,g as X,ai as C,a6 as x,az as E,D as o,z as O,T as z,_ as w,I as r,A as Y}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{D as Z}from"./DialogTrigger-issNhd-E.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";var tt=i({__name:"AlertDialogAction",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n;return _(),(t,s)=>(u(),d(e(S),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),et=tt;const[at,ot]=V("AlertDialogContent");var lt=i({__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:l}){const t=n,p=L(l);_();const m=N();return ot({onCancelElementChange:A=>{m.value=A}}),(A,g)=>(u(),d(e(j),D({...t,...e(p)},{role:"alertdialog",onPointerDownOutside:g[0]||(g[0]=P(()=>{},["prevent"])),onInteractOutside:g[1]||(g[1]=P(()=>{},["prevent"])),onOpenAutoFocus:g[2]||(g[2]=()=>{W(()=>{m.value?.focus({preventScroll:!0})})})}),{default:a(()=>[c(A.$slots,"default")]),_:3},16))}}),nt=lt,rt=i({__name:"AlertDialogCancel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n,t=at(),{forwardRef:s,currentElement:p}=_();return I(()=>{t.onCancelElementChange(p.value)}),(m,A)=>(u(),d(e(S),D(l,{ref:e(s)}),{default:a(()=>[c(m.$slots,"default")]),_:3},16))}}),st=rt,it=i({__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(n){const l=n;return _(),(t,s)=>(u(),d(e(K),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),ut=it,dt=i({__name:"AlertDialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const l=n;return _(),(t,s)=>(u(),d(e(U),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),ct=dt,pt=i({__name:"AlertDialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const l=n;return(t,s)=>(u(),d(e(G),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),gt=pt,mt=i({__name:"AlertDialogRoot",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(n,{emit:l}){const p=k(n,l);return _(),(m,A)=>(u(),d(e(J),D(e(p),{modal:!0}),{default:a(g=>[c(m.$slots,"default",f(y(g)))]),_:3},16))}}),Dt=mt,At=i({__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(n){const l=n;return _(),(t,s)=>(u(),d(e(Q),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),_t=At,ft=i({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const l=n;return _(),(t,s)=>(u(),d(e(Z),f(y(l)),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),yt=ft;const R=X("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]),T=i({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(n,{emit:l}){const p=k(n,l);return(m,A)=>(u(),d(e(Dt),D({"data-slot":"alert-dialog"},e(p)),{default:a(g=>[c(m.$slots,"default",f(y(g)))]),_:3},16))}}),B=i({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=C(l,"class");return(s,p)=>(u(),d(e(et),D(e(t),{class:e(x)(e(E)(),l.class)}),{default:a(()=>[c(s.$slots,"default")]),_:3},16,["class"]))}}),b=i({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=C(l,"class");return(s,p)=>(u(),d(e(st),D(e(t),{class:e(x)(e(E)({variant:"outline"}),"mt-2 sm:mt-0",l.class)}),{default:a(()=>[c(s.$slots,"default")]),_:3},16,["class"]))}}),$=i({inheritAttrs:!1,__name:"AlertDialogContent",props:{forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:l}){const t=n,s=l,p=C(t,"class"),m=k(p,s);return(A,g)=>(u(),d(e(gt),null,{default:a(()=>[o(e(ct),{"data-slot":"alert-dialog-overlay",class:"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"}),o(e(nt),D({"data-slot":"alert-dialog-content"},{...A.$attrs,...e(m)},{class:e(x)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t.class)}),{default:a(()=>[c(A.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),h=i({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=C(l,"class");return(s,p)=>(u(),d(e(ut),D({"data-slot":"alert-dialog-description"},e(t),{class:e(x)("text-muted-foreground text-sm",l.class)}),{default:a(()=>[c(s.$slots,"default")]),_:3},16,["class"]))}}),F=i({__name:"AlertDialogFooter",props:{class:{}},setup(n){const l=n;return(t,s)=>(u(),O("div",{"data-slot":"alert-dialog-footer",class:z(e(x)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",l.class))},[c(t.$slots,"default")],2))}}),q=i({__name:"AlertDialogHeader",props:{class:{}},setup(n){const l=n;return(t,s)=>(u(),O("div",{"data-slot":"alert-dialog-header",class:z(e(x)("flex flex-col gap-2 text-center sm:text-left",l.class))},[c(t.$slots,"default")],2))}}),H=i({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const l=n,t=C(l,"class");return(s,p)=>(u(),d(e(_t),D({"data-slot":"alert-dialog-title"},e(t),{class:e(x)("text-lg font-semibold",l.class)}),{default:a(()=>[c(s.$slots,"default")]),_:3},16,["class"]))}}),M=i({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(n){const l=n;return(t,s)=>(u(),d(e(yt),D({"data-slot":"alert-dialog-trigger"},l),{default:a(()=>[c(t.$slots,"default")]),_:3},16))}}),xt=i({__name:"AlertDialogBasic",setup(n){return(l,t)=>(u(),d(e(T),null,{default:a(()=>[o(e(M),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(w),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[r(" Default ",-1)])]),_:1})]),_:1}),o(e($),{"data-component-x-ray":"AlertDialogContent"},{default:a(()=>[o(e(q),{"data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(H),{"data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Are you absolutely sure? ",-1)])]),_:1}),o(e(h),{"data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(F),{"data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e(b),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[r(" Cancel ",-1)])]),_:1}),o(e(B),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[r(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ct=`<script lang="ts" setup>
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
`,vt=i({__name:"AlertDialogSmall",setup(n){return(l,t)=>(u(),d(e(T),null,{default:a(()=>[o(e(M),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(w),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[r(" Small ",-1)])]),_:1})]),_:1}),o(e($),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent"},{default:a(()=>[o(e(q),{"data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(H),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Allow accessory to connect? ",-1)])]),_:1}),o(e(h),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" Do you want to allow the USB accessory to connect to this device? ",-1)])]),_:1})]),_:1}),o(e(F),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e(b),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[r(" Cancel ",-1)])]),_:1}),o(e(B),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[r(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),wt=`<script lang="ts" setup>
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
`,Tt=i({__name:"AlertDialogWithMedia",setup(n){return(l,t)=>(u(),d(e(T),null,{default:a(()=>[o(e(M),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(w),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[r(" Default (Media) ",-1)])]),_:1})]),_:1}),o(e($),{class:"max-w-xs md:max-w-md","data-component-x-ray":"AlertDialogContent"},{default:a(()=>[o(e(q),{class:"md:grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-4","data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(R),{class:"col-span-1 row-span-2 mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(e(H),{class:"col-start-2","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Are you absolutely sure? ",-1)])]),_:1}),o(e(h),{class:"col-start-2","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(F),{"data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e(b),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[r(" Cancel ",-1)])]),_:1}),o(e(B),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[r(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Bt=`<script lang="ts" setup>
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
`,bt=i({__name:"AlertDialogWithMediaSmall",setup(n){return(l,t)=>(u(),d(e(T),null,{default:a(()=>[o(e(M),{"as-child":"",class:"mx-auto block"},{default:a(()=>[o(e(w),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:a(()=>[...t[0]||(t[0]=[r(" Small (Media) ",-1)])]),_:1})]),_:1}),o(e($),{class:"max-w-xs sm:max-w-xs","data-component-x-ray":"AlertDialogContent"},{default:a(()=>[o(e(q),{class:"items-center","data-component-x-ray":"AlertDialogHeader"},{default:a(()=>[o(e(R),{class:"mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"}),o(e(H),{class:"text-center","data-component-x-ray":"AlertDialogTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Are you absolutely sure? ",-1)])]),_:1}),o(e(h),{class:"text-center","data-component-x-ray":"AlertDialogDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ",-1)])]),_:1})]),_:1}),o(e(F),{class:"sm:grid grid-cols-2","data-component-x-ray":"AlertDialogFooter"},{default:a(()=>[o(e(b),{"data-component-x-ray-trigger":"AlertDialogCancel"},{default:a(()=>[...t[3]||(t[3]=[r(" Cancel ",-1)])]),_:1}),o(e(B),{"data-component-x-ray-trigger":"AlertDialogAction"},{default:a(()=>[...t[4]||(t[4]=[r(" Continue ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$t=`<script lang="ts" setup>
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
`,ht={class:"@container"},Ft={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 max-w-200 mx-auto"},Ot=i({__name:"_Examples",setup(n){return(l,t)=>(u(),O("div",ht,[Y("div",Ft,[o(v,{"raw-component":e(Ct)},{title:a(()=>[...t[0]||(t[0]=[r("Basic",-1)])]),example:a(()=>[o(xt)]),_:1},8,["raw-component"]),o(v,{"raw-component":e(wt)},{title:a(()=>[...t[1]||(t[1]=[r("Small",-1)])]),example:a(()=>[o(vt)]),_:1},8,["raw-component"]),o(v,{"raw-component":e(Bt)},{title:a(()=>[...t[2]||(t[2]=[r("With Media",-1)])]),example:a(()=>[o(Tt)]),_:1},8,["raw-component"]),o(v,{"raw-component":e($t)},{title:a(()=>[...t[3]||(t[3]=[r("With Media Small",-1)])]),example:a(()=>[o(bt)]),_:1},8,["raw-component"])])]))}});export{Ot as default};
