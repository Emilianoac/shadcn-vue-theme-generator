import{_ as F}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Dv0Lwgv7.js";import{d as p,o as u,a as C,u as e,as as w,a5 as k,H as n,a3 as b,z as m,T as H,a6 as L,D as a,_ as i,I as o,A as l,L as _,M as B}from"./DialogTitle.vue_vue_type_script_setup_true_lang-CaMH5FGq.js";import{_ as T}from"./index-CZXqQDT0.js";import{_ as $}from"./FieldGroup.vue_vue_type_script_setup_true_lang-mNvxT6mY.js";import{_ as q}from"./FieldLabel.vue_vue_type_script_setup_true_lang-BkJ7885f.js";import{_ as D}from"./Input.vue_vue_type_script_setup_true_lang-DZCLBpe2.js";import{a as c,b as h,c as S,d as f,_ as g}from"./SheetTitle.vue_vue_type_script_setup_true_lang-ChCbPdCu.js";import{D as E}from"./DialogTrigger-CsUoi7U7.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-DIiXhJ1v.js";import"./Label.vue_vue_type_script_setup_true_lang-BUWdD9R3.js";const x=p({__name:"SheetClose",props:{asChild:{type:Boolean},as:{}},setup(d){const s=d;return(t,r)=>(u(),C(e(w),k({"data-slot":"sheet-close"},s),{default:n(()=>[b(t.$slots,"default")]),_:3},16))}}),y=p({__name:"SheetFooter",props:{class:{}},setup(d){const s=d;return(t,r)=>(u(),m("div",{"data-slot":"sheet-footer",class:H(e(L)("mt-auto flex flex-col gap-2 p-4",s.class))},[b(t.$slots,"default")],2))}}),v=p({__name:"SheetTrigger",props:{asChild:{type:Boolean},as:{}},setup(d){const s=d;return(t,r)=>(u(),C(e(E),k({"data-slot":"sheet-trigger"},s),{default:n(()=>[b(t.$slots,"default")]),_:3},16))}}),M={class:"px-4"},z=p({__name:"SheetWithForm",setup(d){return(s,t)=>(u(),C(e(g),{"data-component-x-ray":"Sheet"},{default:n(()=>[a(e(v),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[0]||(t[0]=[o(" Open ",-1)])]),_:1})]),_:1}),a(e(c),{"data-component-x-ray":"SheetContent"},{default:n(()=>[a(e(h),{"data-component-x-ray":"SheetHeader"},{default:n(()=>[a(e(S),{"data-component-x-ray":"SheetTitle"},{default:n(()=>[...t[1]||(t[1]=[o("Edit profile",-1)])]),_:1}),a(e(f),{"data-component-x-ray":"SheetDescription"},{default:n(()=>[...t[2]||(t[2]=[o(" Make changes to your profile here. Click save when you're done. ",-1)])]),_:1})]),_:1}),l("div",M,[a(e($),{"data-component-x-ray":"FieldGroup"},{default:n(()=>[a(e(T),{"data-component-x-ray":"Field"},{default:n(()=>[a(e(q),{for:"sheet-demo-name","data-component-x-ray":"FieldLabel"},{default:n(()=>[...t[3]||(t[3]=[o(" Name ",-1)])]),_:1}),a(e(D),{id:"sheet-demo-name","default-value":"Pedro Duarte","data-component-x-ray-trigger":"Input"})]),_:1}),a(e(T),{"data-component-x-ray":"Field"},{default:n(()=>[a(e(q),{for:"sheet-demo-username","data-component-x-ray":"FieldLabel"},{default:n(()=>[...t[4]||(t[4]=[o(" Username ",-1)])]),_:1}),a(e(D),{id:"sheet-demo-username","default-value":"@peduarte","data-component-x-ray-trigger":"Input"})]),_:1})]),_:1})]),a(e(y),{"data-component-x-ray":"SheetFooter"},{default:n(()=>[a(e(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[5]||(t[5]=[o(" Save changes ",-1)])]),_:1}),a(e(x),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[6]||(t[6]=[o(" Close ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),U=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
<\/script>

<template>
  <Sheet data-component-x-ray="Sheet">
    <SheetTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open </Button>
    </SheetTrigger>
    <SheetContent data-component-x-ray="SheetContent">
      <SheetHeader data-component-x-ray="SheetHeader">
        <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
        <SheetDescription data-component-x-ray="SheetDescription">
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="px-4">
        <FieldGroup data-component-x-ray="FieldGroup">
          <Field data-component-x-ray="Field">
            <FieldLabel for="sheet-demo-name" data-component-x-ray="FieldLabel"> Name </FieldLabel>
            <Input
              id="sheet-demo-name"
              default-value="Pedro Duarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
          <Field data-component-x-ray="Field">
            <FieldLabel for="sheet-demo-username" data-component-x-ray="FieldLabel">
              Username
            </FieldLabel>
            <Input
              id="sheet-demo-username"
              default-value="@peduarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
        </FieldGroup>
      </div>
      <SheetFooter data-component-x-ray="SheetFooter">
        <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
        <SheetClose :as-child="true">
          <Button variant="outline" data-component-x-ray-trigger="Button"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
`,I={class:"flex flex-wrap gap-2"},W={class:"px-4 overflow-y-auto"},G={class:"px-4 overflow-y-auto"},N={class:"px-4 overflow-y-auto"},R={class:"px-4 overflow-y-auto"},P=p({__name:"SheetWithSides",setup(d){return(s,t)=>(u(),m("div",I,[a(e(g),{"data-component-x-ray":"Sheet"},{default:n(()=>[a(e(v),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline",class:"capitalize","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[0]||(t[0]=[o(" Top ",-1)])]),_:1})]),_:1}),a(e(c),{side:"top",class:"max-h-[60vh]","data-component-x-ray":"SheetContent"},{default:n(()=>[a(e(h),{"data-component-x-ray":"SheetHeader"},{default:n(()=>[a(e(S),{"data-component-x-ray":"SheetTitle"},{default:n(()=>[...t[1]||(t[1]=[o("Edit profile",-1)])]),_:1}),a(e(f),{"data-component-x-ray":"SheetDescription"},{default:n(()=>[...t[2]||(t[2]=[o(" Make changes to your profile here. Click save when you're done. ",-1)])]),_:1})]),_:1}),l("div",W,[(u(),m(_,null,B(10,r=>l("p",{key:r,class:"mb-4 leading-normal"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),a(e(y),{"data-component-x-ray":"SheetFooter"},{default:n(()=>[a(e(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[3]||(t[3]=[o(" Save changes ",-1)])]),_:1}),a(e(x),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[4]||(t[4]=[o(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(g),{"data-component-x-ray":"Sheet"},{default:n(()=>[a(e(v),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline",class:"capitalize","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[5]||(t[5]=[o(" Right ",-1)])]),_:1})]),_:1}),a(e(c),{side:"right","data-component-x-ray":"SheetContent"},{default:n(()=>[a(e(h),{"data-component-x-ray":"SheetHeader"},{default:n(()=>[a(e(S),{"data-component-x-ray":"SheetTitle"},{default:n(()=>[...t[6]||(t[6]=[o("Edit profile",-1)])]),_:1}),a(e(f),{"data-component-x-ray":"SheetDescription"},{default:n(()=>[...t[7]||(t[7]=[o(" Make changes to your profile here. Click save when you're done. ",-1)])]),_:1})]),_:1}),l("div",G,[(u(),m(_,null,B(10,r=>l("p",{key:r,class:"mb-4 leading-normal"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),a(e(y),{"data-component-x-ray":"SheetFooter"},{default:n(()=>[a(e(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[8]||(t[8]=[o(" Save changes ",-1)])]),_:1}),a(e(x),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[9]||(t[9]=[o(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(g),{"data-component-x-ray":"Sheet"},{default:n(()=>[a(e(v),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline",class:"capitalize","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[10]||(t[10]=[o(" Bottom ",-1)])]),_:1})]),_:1}),a(e(c),{side:"bottom",class:"max-h-[60vh]","data-component-x-ray":"SheetContent"},{default:n(()=>[a(e(h),{"data-component-x-ray":"SheetHeader"},{default:n(()=>[a(e(S),{"data-component-x-ray-trigger":"SheetTitle"},{default:n(()=>[...t[11]||(t[11]=[o("Edit profile",-1)])]),_:1}),a(e(f),{"data-component-x-ray-trigger":"SheetDescription"},{default:n(()=>[...t[12]||(t[12]=[o(" Make changes to your profile here. Click save when you're done. ",-1)])]),_:1})]),_:1}),l("div",N,[(u(),m(_,null,B(10,r=>l("p",{key:r,class:"mb-4 leading-normal"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),a(e(y),{"data-component-x-ray":"SheetFooter"},{default:n(()=>[a(e(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[13]||(t[13]=[o(" Save changes ",-1)])]),_:1}),a(e(x),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[14]||(t[14]=[o(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(g),{"data-component-x-ray":"Sheet"},{default:n(()=>[a(e(v),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline",class:"capitalize","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[15]||(t[15]=[o(" Left ",-1)])]),_:1})]),_:1}),a(e(c),{side:"left","data-component-x-ray":"SheetContent"},{default:n(()=>[a(e(h),{"data-component-x-ray":"SheetHeader"},{default:n(()=>[a(e(S),{"data-component-x-ray":"SheetTitle"},{default:n(()=>[...t[16]||(t[16]=[o("Edit profile",-1)])]),_:1}),a(e(f),{"data-component-x-ray":"SheetDescription"},{default:n(()=>[...t[17]||(t[17]=[o(" Make changes to your profile here. Click save when you're done. ",-1)])]),_:1})]),_:1}),l("div",R,[(u(),m(_,null,B(10,r=>l("p",{key:r,class:"mb-4 leading-normal"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),a(e(y),{"data-component-x-ray":"SheetFooter"},{default:n(()=>[a(e(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[18]||(t[18]=[o(" Save changes ",-1)])]),_:1}),a(e(x),{"as-child":!0},{default:n(()=>[a(e(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:n(()=>[...t[19]||(t[19]=[o(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}}),V=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
<\/script>

<template>
  <div class="flex flex-wrap gap-2">
    <!-- Top -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Top
        </Button>
      </SheetTrigger>
      <SheetContent side="top" class="max-h-[60vh]" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Right -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Right
        </Button>
      </SheetTrigger>
      <SheetContent side="right" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Bottom -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Bottom
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="max-h-[60vh]" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray-trigger="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray-trigger="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Left -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Left
        </Button>
      </SheetTrigger>
      <SheetContent side="left" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>
`,O={class:"@container max-w-200 mx-auto"},A={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},ae=p({__name:"_Examples",setup(d){return(s,t)=>(u(),m("div",O,[l("div",A,[a(F,{"raw-component":e(U)},{title:n(()=>[...t[0]||(t[0]=[o(" With form ",-1)])]),example:n(()=>[a(z)]),_:1},8,["raw-component"]),a(F,{"raw-component":e(V)},{title:n(()=>[...t[1]||(t[1]=[o(" With sides ",-1)])]),example:n(()=>[a(P)]),_:1},8,["raw-component"])])]))}});export{ae as default};
