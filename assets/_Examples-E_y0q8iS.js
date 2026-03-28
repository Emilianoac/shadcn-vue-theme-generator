import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CektplR4.js";import{d,o as l,a as m,u as o,as as H,a6 as $,H as t,a3 as q,A as g,D as a,_ as i,I as e,$ as c,a0 as D,a1 as f,a2 as x,Z as y,S,z as C,L as h,M as w}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B2bF6yJp.js";import{_ as b}from"./DialogFooter.vue_vue_type_script_setup_true_lang-DU1rLZDu.js";import{_}from"./DialogTrigger.vue_vue_type_script_setup_true_lang-CvUZAYza.js";import{_ as F}from"./index-DTwIhbC-.js";import{_ as k}from"./FieldGroup.vue_vue_type_script_setup_true_lang-9n8Me9iY.js";import{_ as v}from"./FieldLabel.vue_vue_type_script_setup_true_lang-BtYeNvCx.js";import{_ as T}from"./Input.vue_vue_type_script_setup_true_lang-DSvFTCEM.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C1pM5_TW.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxR4ko84.js";import"./PopperContent-DBKASWQU.js";import"./useSize-LcE3Exvp.js";import"./VisuallyHidden-Bq1HL2Ws.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-1awyB38b.js";import"./check-B2r-rQIB.js";import"./DialogTrigger-LdtPvXOs.js";import"./Label.vue_vue_type_script_setup_true_lang-WzEBDtOn.js";const B=d({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(r){const u=r;return(n,s)=>(l(),m(o(H),$({"data-slot":"dialog-close"},u),{default:t(()=>[q(n.$slots,"default")]),_:3},16))}}),L=d({__name:"DialogWithForm",setup(r){return(u,n)=>(l(),m(o(y),{"data-component-x-ray":"Dialog"},{default:t(()=>[g("form",null,[a(o(_),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[0]||(n[0]=[e(" Edit Profile ",-1)])]),_:1})]),_:1}),a(o(c),{"data-component-x-ray":"DialogContent"},{default:t(()=>[a(o(D),{"data-component-x-ray":"DialogHeader"},{default:t(()=>[a(o(f),{"data-component-x-ray":"DialogTitle"},{default:t(()=>[...n[1]||(n[1]=[e("Edit profile",-1)])]),_:1}),a(o(x),{"data-component-x-ray":"DialogDescription"},{default:t(()=>[...n[2]||(n[2]=[e(" Make changes to your profile here. Click save when you're done. Your profile will be updated immediately. ",-1)])]),_:1})]),_:1}),a(o(k),{"data-component-x-ray-field":"FieldGroup"},{default:t(()=>[a(o(F),{"data-component-x-ray-field":"Field"},{default:t(()=>[a(o(v),{"html-for":"name-1","data-component-x-ray":"FieldLabel"},{default:t(()=>[...n[3]||(n[3]=[e(" Name ",-1)])]),_:1}),a(o(T),{id:"name-1",name:"name","default-value":"Pedro Duarte","data-component-x-ray-trigger":"Input"})]),_:1}),a(o(F),{"data-component-x-ray-field":"Field"},{default:t(()=>[a(o(v),{"html-for":"username-1","data-component-x-ray":"FieldLabel"},{default:t(()=>[...n[4]||(n[4]=[e(" Username ",-1)])]),_:1}),a(o(T),{id:"username-1",name:"username","default-value":"@peduarte","data-component-x-ray-trigger":"Input"})]),_:1})]),_:1}),a(o(b),{"data-component-x-ray":"DialogFooter"},{default:t(()=>[a(o(B),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[5]||(n[5]=[e(" Cancel ",-1)])]),_:1})]),_:1}),a(o(i),{type:"submit","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[6]||(n[6]=[e(" Save ",-1)])]),_:1})]),_:1})]),_:1})])]),_:1}))}}),N=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <form>
      <DialogTrigger :as-child="true">
        <Button variant="outline" data-component-x-ray-trigger="Button"> Edit Profile </Button>
      </DialogTrigger>
      <DialogContent data-component-x-ray="DialogContent">
        <DialogHeader data-component-x-ray="DialogHeader">
          <DialogTitle data-component-x-ray="DialogTitle">Edit profile</DialogTitle>
          <DialogDescription data-component-x-ray="DialogDescription">
            Make changes to your profile here. Click save when you're done. Your profile will be
            updated immediately.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup data-component-x-ray-field="FieldGroup">
          <Field data-component-x-ray-field="Field">
            <FieldLabel html-for="name-1" data-component-x-ray="FieldLabel"> Name </FieldLabel>
            <Input
              id="name-1"
              name="name"
              default-value="Pedro Duarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
          <Field data-component-x-ray-field="Field">
            <FieldLabel html-for="username-1" data-component-x-ray="FieldLabel">
              Username
            </FieldLabel>
            <Input
              id="username-1"
              name="username"
              default-value="@peduarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
        </FieldGroup>
        <DialogFooter data-component-x-ray="DialogFooter">
          <DialogClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </DialogClose>
          <Button type="submit" data-component-x-ray-trigger="Button"> Save </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
`,A=d({__name:"DialogScrollableContent",setup(r){return(u,n)=>(l(),m(o(y),{"data-component-x-ray":"Dialog"},{default:t(()=>[a(o(_),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[0]||(n[0]=[e(" Scrollable Content ",-1)])]),_:1})]),_:1}),a(o(c),{"data-component-x-ray":"DialogContent"},{default:t(()=>[a(o(D),{"data-component-x-ray":"DialogHeader"},{default:t(()=>[a(o(f),{"data-component-x-ray":"DialogTitle"},{default:t(()=>[...n[1]||(n[1]=[e("Scrollable Content",-1)])]),_:1}),a(o(x),{"data-component-x-ray":"DialogDescription"},{default:t(()=>[...n[2]||(n[2]=[e(" This dialog has a scrollable area in the content. ",-1)])]),_:1})]),_:1}),a(o(S),{class:"h-[40vh] pr-4","data-component-x-ray":"ScrollArea"},{default:t(()=>[(l(),C(h,null,w(10,s=>g("p",{key:s,class:"mb-4 last-of-type:mb-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),_:1})]),_:1})]),_:1}))}}),E=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
<\/script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Scrollable Content </Button>
    </DialogTrigger>
    <DialogContent data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Scrollable Content</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          This dialog has a scrollable area in the content.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea class="h-[40vh] pr-4" data-component-x-ray="ScrollArea">
        <p v-for="index in 10" :key="index" class="mb-4 last-of-type:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>
`,I=d({__name:"DialogWithStickyFooter",setup(r){return(u,n)=>(l(),m(o(y),{"data-component-x-ray":"Dialog"},{default:t(()=>[a(o(_),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[0]||(n[0]=[e(" Sticky Footer ",-1)])]),_:1})]),_:1}),a(o(c),{"data-component-x-ray":"DialogContent"},{default:t(()=>[a(o(D),{"data-component-x-ray":"DialogHeader"},{default:t(()=>[a(o(f),{"data-component-x-ray":"DialogTitle"},{default:t(()=>[...n[1]||(n[1]=[e("Scrollable Content",-1)])]),_:1}),a(o(x),{"data-component-x-ray":"DialogDescription"},{default:t(()=>[...n[2]||(n[2]=[e(" This is a dialog with scrollable content. ",-1)])]),_:1})]),_:1}),a(o(S),{class:"h-[40vh] pr-4","data-component-x-ray":"ScrollArea"},{default:t(()=>[(l(),C(h,null,w(10,s=>g("p",{key:s,class:"mb-4 last-of-type:mb-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),64))]),_:1}),a(o(b),{"data-component-x-ray":"DialogFooter"},{default:t(()=>[a(o(B),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[3]||(n[3]=[e(" Close ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),U=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
<\/script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Sticky Footer </Button>
    </DialogTrigger>
    <DialogContent data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Scrollable Content</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          This is a dialog with scrollable content.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea class="h-[40vh] pr-4" data-component-x-ray="ScrollArea">
        <p v-for="index in 10" :key="index" class="mb-4 last-of-type:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </ScrollArea>
      <DialogFooter data-component-x-ray="DialogFooter">
        <DialogClose :as-child="true">
          <Button variant="outline" data-component-x-ray-trigger="Button"> Close </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
`,G=d({__name:"DialogNoCloseButton",setup(r){return(u,n)=>(l(),m(o(y),{"data-component-x-ray":"Dialog"},{default:t(()=>[a(o(_),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[0]||(n[0]=[e(" No Close Button ",-1)])]),_:1})]),_:1}),a(o(c),{"show-close-button":!1,"data-component-x-ray":"DialogContent"},{default:t(()=>[a(o(D),{"data-component-x-ray":"DialogHeader"},{default:t(()=>[a(o(f),{"data-component-x-ray":"DialogTitle"},{default:t(()=>[...n[1]||(n[1]=[e("No Close Button",-1)])]),_:1}),a(o(x),{"data-component-x-ray":"DialogDescription"},{default:t(()=>[...n[2]||(n[2]=[e(" This dialog doesn't have a close button in the top-right corner. ",-1)])]),_:1})]),_:1}),a(o(b),{"data-component-x-ray":"DialogFooter"},{default:t(()=>[a(o(B),{"as-child":!0},{default:t(()=>[a(o(i),{variant:"outline","data-component-x-ray-trigger":"Button"},{default:t(()=>[...n[3]||(n[3]=[e(" Close ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),P=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
<\/script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> No Close Button </Button>
    </DialogTrigger>
    <DialogContent :show-close-button="false" data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">No Close Button</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          This dialog doesn't have a close button in the top-right corner.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter data-component-x-ray="DialogFooter">
        <DialogClose :as-child="true">
          <Button variant="outline" data-component-x-ray-trigger="Button"> Close </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
`,W={class:"@container max-w-200 mx-auto"},R={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},lt=d({__name:"_Examples",setup(r){return(u,n)=>(l(),C("div",W,[g("div",R,[a(p,{"raw-component":o(N)},{title:t(()=>[...n[0]||(n[0]=[e(" With Form ",-1)])]),example:t(()=>[a(L)]),_:1},8,["raw-component"]),a(p,{"raw-component":o(E)},{title:t(()=>[...n[1]||(n[1]=[e(" Scrollable Content ",-1)])]),example:t(()=>[a(A)]),_:1},8,["raw-component"]),a(p,{"raw-component":o(U)},{title:t(()=>[...n[2]||(n[2]=[e(" Sticky Footer ",-1)])]),example:t(()=>[a(I)]),_:1},8,["raw-component"]),a(p,{"raw-component":o(P)},{title:t(()=>[...n[3]||(n[3]=[e(" No Close Button ",-1)])]),example:t(()=>[a(G)]),_:1},8,["raw-component"])])]))}});export{lt as default};
