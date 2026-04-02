import{_ as b}from"./ExampleCard.vue_vue_type_script_setup_true_lang-B9Mol2ml.js";import{_ as g,a as _}from"./CardContent.vue_vue_type_script_setup_true_lang-CwsYOZhY.js";import{f as w,d as u,ak as $,o as d,e as p,u as e,a6 as v,H as a,a4 as h,ah as z,ai as H,D as n,_ as c,I as r,A as B,b as S,S as j,z as k,L as A,M as O,h as i}from"./highlight-Dn55r6j6.js";import{C as E,a as U,b as P}from"./CollapsibleTrigger-C9k3rmre.js";import{C as G}from"./chevron-down-DcDyLwHj.js";import{_ as D,a as L}from"./CardTitle.vue_vue_type_script_setup_true_lang-Cz70Btsw.js";import{_ as M}from"./CardHeader.vue_vue_type_script_setup_true_lang-Dpiadp8i.js";import{_ as C}from"./index-D62TNQ8h.js";import{_ as V}from"./FieldGroup.vue_vue_type_script_setup_true_lang-CfueZi5C.js";import{_ as x}from"./FieldLabel.vue_vue_type_script_setup_true_lang-CHS9p14R.js";import{_ as y}from"./Input.vue_vue_type_script_setup_true_lang-24zKFiHB.js";import{C as X}from"./chevron-right-BH5N0hph.js";import{F as Y}from"./folder-Dy8-b3jB.js";import{F as N}from"./file-DUgwjSc5.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BGdXP9nw.js";import"./Label.vue_vue_type_script_setup_true_lang-C3imsLdY.js";const q=w("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);const J=w("minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]),F=u({__name:"Collapsible",props:{defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(m,{emit:l}){const s=$(m,l);return(f,oe)=>(d(),p(e(E),v({"data-slot":"collapsible"},e(s)),{default:a(R=>[h(f.$slots,"default",z(H(R)))]),_:3},16))}}),T=u({__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(m){const l=m;return(o,t)=>(d(),p(e(U),v({"data-slot":"collapsible-content"},l),{default:a(()=>[h(o.$slots,"default")]),_:3},16))}}),I=u({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{}},setup(m){const l=m;return(o,t)=>(d(),p(e(P),v({"data-slot":"collapsible-trigger"},l),{default:a(()=>[h(o.$slots,"default")]),_:3},16))}}),K=u({__name:"CollpasibleBasic",setup(m){return(l,o)=>(d(),p(e(_),{class:"mx-auto w-full max-w-sm","data-component-x-ray":"Card"},{default:a(()=>[n(e(g),{"data-component-x-ray":"CardContent"},{default:a(()=>[n(e(F),{class:"rounded-md data-[state=open]:bg-muted","data-component-x-ray":"Collapsible"},{default:a(()=>[n(e(I),{asChild:""},{default:a(()=>[n(e(c),{variant:"ghost",class:"group w-full","data-component-x-ray-trigger":"Button"},{default:a(()=>[o[0]||(o[0]=r(" Product details ",-1)),n(e(G),{class:"ml-auto group-data-[state=open]:rotate-180"})]),_:1})]),_:1}),n(e(T),{class:"flex flex-col items-start gap-2 p-2.5 pt-0 text-sm","data-component-x-ray":"CollapsibleContent"},{default:a(()=>[o[2]||(o[2]=B("div",null,"This panel can be expanded or collapsed to reveal additional content.",-1)),n(e(c),{size:"sm"},{default:a(()=>[...o[1]||(o[1]=[r("Learn More",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=`<script setup lang="ts">
import { ChevronDownIcon } from "lucide-vue-next";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
<\/script>

<template>
  <Card class="mx-auto w-full max-w-sm" data-component-x-ray="Card">
    <CardContent data-component-x-ray="CardContent">
      <Collapsible class="rounded-md data-[state=open]:bg-muted" data-component-x-ray="Collapsible">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" class="group w-full" data-component-x-ray-trigger="Button">
            Product details
            <ChevronDownIcon class="ml-auto group-data-[state=open]:rotate-180" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm"
          data-component-x-ray="CollapsibleContent"
        >
          <div>This panel can be expanded or collapsed to reveal additional content.</div>
          <Button size="sm">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  </Card>
</template>
`,W=u({__name:"CollapsibleSetting",setup(m){const l=S(!1);return(o,t)=>(d(),p(e(_),{class:"mx-auto w-full max-w-xs","data-component-x-ray":"Card"},{default:a(()=>[n(e(M),{"data-component-x-ray":"CardHeader"},{default:a(()=>[n(e(D),{"data-component-x-ray":"CardTittle"},{default:a(()=>[...t[1]||(t[1]=[r("Radius",-1)])]),_:1}),n(e(L),{"data-component-x-ray":"CardDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" Set the corner radius of the element. ",-1)])]),_:1})]),_:1}),n(e(g),{"data-component-x-ray":"CardContent"},{default:a(()=>[n(e(F),{open:l.value,"onUpdate:open":t[0]||(t[0]=s=>l.value=s),class:"flex items-start gap-2","data-component-x-ray":"Collapsible"},{default:a(()=>[n(e(V),{class:"grid w-full grid-cols-2 gap-2","data-component-x-ray":"FieldGroup"},{default:a(()=>[n(e(C),{"data-component-x-ray":"Field"},{default:a(()=>[n(e(x),{for:"radius-x",class:"sr-only","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[3]||(t[3]=[r(" Radius X ",-1)])]),_:1}),n(e(y),{id:"radius-x",placeholder:"0","default-value":0,"data-component-x-ray":"Input"})]),_:1}),n(e(C),{"data-component-x-ray":"Field"},{default:a(()=>[n(e(x),{for:"radius-y",class:"sr-only","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[4]||(t[4]=[r(" Radius Y ",-1)])]),_:1}),n(e(y),{id:"radius-y",placeholder:"0","default-value":0,"data-component-x-ray":"Input"})]),_:1}),n(e(T),{class:"col-span-full grid grid-cols-subgrid gap-2","data-component-x-ray":"CollapsibleContent"},{default:a(()=>[n(e(C),{"data-component-x-ray":"Field"},{default:a(()=>[n(e(x),{for:"radius-x2",class:"sr-only","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[5]||(t[5]=[r(" Radius X ",-1)])]),_:1}),n(e(y),{id:"radius-x2",placeholder:"0","default-value":0,"data-component-x-ray":"Input"})]),_:1}),n(e(C),{"data-component-x-ray":"Field"},{default:a(()=>[n(e(x),{for:"radius-y2",class:"sr-only","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[6]||(t[6]=[r(" Radius Y ",-1)])]),_:1}),n(e(y),{id:"radius-y2",placeholder:"0","default-value":0,"data-component-x-ray":"Input"})]),_:1})]),_:1})]),_:1}),n(e(I),{"as-child":""},{default:a(()=>[n(e(c),{variant:"outline",size:"icon","data-component-x-ray-trigger":"Button"},{default:a(()=>[l.value?(d(),p(e(J),{key:0})):(d(),p(e(q),{key:1}))]),_:1})]),_:1})]),_:1},8,["open"])]),_:1})]),_:1}))}}),Z=`<script setup lang="ts">
import { ref } from "vue";
import { MaximizeIcon, MinimizeIcon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

const isOpen = ref(false);
<\/script>

<template>
  <Card class="mx-auto w-full max-w-xs" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTittle">Radius</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Set the corner radius of the element.
      </CardDescription>
    </CardHeader>

    <CardContent data-component-x-ray="CardContent">
      <Collapsible
        v-model:open="isOpen"
        class="flex items-start gap-2"
        data-component-x-ray="Collapsible"
      >
        <FieldGroup class="grid w-full grid-cols-2 gap-2" data-component-x-ray="FieldGroup">
          <Field data-component-x-ray="Field">
            <FieldLabel for="radius-x" class="sr-only" data-component-x-ray="FieldLabel">
              Radius X
            </FieldLabel>
            <Input id="radius-x" placeholder="0" :default-value="0" data-component-x-ray="Input" />
          </Field>

          <Field data-component-x-ray="Field">
            <FieldLabel for="radius-y" class="sr-only" data-component-x-ray="FieldLabel">
              Radius Y
            </FieldLabel>
            <Input id="radius-y" placeholder="0" :default-value="0" data-component-x-ray="Input" />
          </Field>

          <CollapsibleContent
            class="col-span-full grid grid-cols-subgrid gap-2"
            data-component-x-ray="CollapsibleContent"
          >
            <Field data-component-x-ray="Field">
              <FieldLabel for="radius-x2" class="sr-only" data-component-x-ray="FieldLabel">
                Radius X
              </FieldLabel>
              <Input
                id="radius-x2"
                placeholder="0"
                :default-value="0"
                data-component-x-ray="Input"
              />
            </Field>

            <Field data-component-x-ray="Field">
              <FieldLabel for="radius-y2" class="sr-only" data-component-x-ray="FieldLabel">
                Radius Y
              </FieldLabel>
              <Input
                id="radius-y2"
                placeholder="0"
                :default-value="0"
                data-component-x-ray="Input"
              />
            </Field>
          </CollapsibleContent>
        </FieldGroup>

        <CollapsibleTrigger as-child>
          <Button variant="outline" size="icon" data-component-x-ray-trigger="Button">
            <MinimizeIcon v-if="isOpen" />
            <MaximizeIcon v-else />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </CardContent>
  </Card>
</template>
\`\`\`
`,ee=u({__name:"CollapasibleFileTree",setup(m){const l=[{name:"public",items:[{name:"favicon.ico"},{name:"index.html"},{name:"robots.txt"},{name:"manifest.json"}]},{name:"src",items:[{name:"components",items:[{name:"ui",items:[{name:"Button.vue"},{name:"Card.vue"},{name:"Dialog.vue"},{name:"Input.vue"},{name:"Select.vue"},{name:"Table.vue"}]},{name:"Header.vue"},{name:"Footer.vue"}]},{name:"lib",items:[{name:"utils.ts"},{name:"cn.ts"},{name:"api.ts"}]},{name:"composables",items:[{name:"UseDate.ts"},{name:"UseDark.ts"},{name:"UseMedia.ts"}]},{name:"App.vue"}]},{name:"package.json"},{name:"README.md"},{name:"vite.config.ts"}],o=u({name:"FileTreeItemComponent",props:{item:{type:Object,required:!0}},setup(t){return()=>t.item.items?i(F,{"data-component-x-ray":"Collapsible"},{default:()=>[i(I,{asChild:!0},{default:()=>i(c,{variant:"ghost",size:"sm",class:"group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground","data-component-x-ray-trigger":"Button"},()=>[i(X,{class:"transition-transform group-data-[state=open]:rotate-90"}),i(Y),t.item.name])}),i(T,{class:"mt-1 ml-5"},()=>i("div",{class:"flex flex-col gap-1"},t.item.items.map(s=>i(o,{key:s.name,item:s}))))]}):i(c,{variant:"link",size:"sm",class:"w-full justify-start gap-2 text-foreground"},()=>[i(N),i("span",t.item.name)])}});return(t,s)=>(d(),p(e(_),{class:"mx-auto w-full max-w-xs","data-component-x-ray":"Card"},{default:a(()=>[n(e(M),{"data-component-x-ray":"CardHeader"},{default:a(()=>[n(e(D),{"data-component-x-ray":"CardTitle"},{default:a(()=>[...s[0]||(s[0]=[r("Collapsible File Tree",-1)])]),_:1}),n(e(L),{"data-component-x-ray":"CardDescription"},{default:a(()=>[...s[1]||(s[1]=[r(" A collapsible file tree example using the Collapsible component. ",-1)])]),_:1})]),_:1}),n(e(g),{"data-component-x-ray":"CardContent"},{default:a(()=>[n(e(j),{class:"h-75"},{default:a(()=>[(d(),k(A,null,O(l,f=>n(e(o),{key:f.name,item:f},null,8,["item"])),64))]),_:1})]),_:1})]),_:1}))}}),ne=`<script lang="ts" setup>
import { defineComponent, h } from "vue";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/shared/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-vue-next";

type FileTreeItem = {
  name: string;
  items?: FileTreeItem[];
};

const fileTree: FileTreeItem[] = [
  {
    name: "public",
    items: [
      { name: "favicon.ico" },
      { name: "index.html" },
      { name: "robots.txt" },
      { name: "manifest.json" },
    ],
  },
  {
    name: "src",
    items: [
      {
        name: "components",
        items: [
          {
            name: "ui",
            items: [
              { name: "Button.vue" },
              { name: "Card.vue" },
              { name: "Dialog.vue" },
              { name: "Input.vue" },
              { name: "Select.vue" },
              { name: "Table.vue" },
            ],
          },
          { name: "Header.vue" },
          { name: "Footer.vue" },
        ],
      },
      {
        name: "lib",
        items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
      },
      {
        name: "composables",
        items: [{ name: "UseDate.ts" }, { name: "UseDark.ts" }, { name: "UseMedia.ts" }],
      },
      { name: "App.vue" },
    ],
  },
  { name: "package.json" },
  { name: "README.md" },
  { name: "vite.config.ts" },
];

// Recursive component to render file tree items for example purposes.
const FileTreeItemComponent = defineComponent({
  name: "FileTreeItemComponent",
  props: {
    item: {
      type: Object as () => FileTreeItem,
      required: true,
    },
  },

  setup(props) {
    return () => {
      if (props.item.items) {
        return h(
          Collapsible,
          {
            "data-component-x-ray": "Collapsible",
          },
          {
            default: () => [
              h(
                CollapsibleTrigger,
                { asChild: true },
                {
                  default: () =>
                    h(
                      Button,
                      {
                        "variant": "ghost",
                        "size": "sm",
                        "class":
                          "group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground",

                        "data-component-x-ray-trigger": "Button",
                      },
                      () => [
                        h(ChevronRightIcon, {
                          class: "transition-transform group-data-[state=open]:rotate-90",
                        }),
                        h(FolderIcon),
                        props.item.name,
                      ],
                    ),
                },
              ),

              h(CollapsibleContent, { class: "mt-1 ml-5" }, () =>
                h(
                  "div",
                  { class: "flex flex-col gap-1" },
                  props.item.items!.map((child) =>
                    h(FileTreeItemComponent, {
                      key: child.name,
                      item: child,
                    }),
                  ),
                ),
              ),
            ],
          },
        );
      }

      return h(
        Button,
        {
          variant: "link",
          size: "sm",
          class: "w-full justify-start gap-2 text-foreground",
        },
        () => [h(FileIcon), h("span", props.item.name)],
      );
    };
  },
});
<\/script>

<template>
  <Card class="mx-auto w-full max-w-xs" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Collapsible File Tree</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        A collapsible file tree example using the Collapsible component.
      </CardDescription>
    </CardHeader>

    <CardContent data-component-x-ray="CardContent">
      <ScrollArea class="h-75">
        <FileTreeItemComponent v-for="item in fileTree" :key="item.name" :item="item" />
      </ScrollArea>
    </CardContent>
  </Card>
</template>
`,ae={class:"@container max-w-200 mx-auto"},te={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},ve=u({__name:"_Examples",setup(m){return(l,o)=>(d(),k("div",ae,[B("div",te,[n(b,{"raw-component":e(Q)},{title:a(()=>[...o[0]||(o[0]=[r(" Basic ",-1)])]),example:a(()=>[n(K)]),_:1},8,["raw-component"]),n(b,{"raw-component":e(Z)},{title:a(()=>[...o[1]||(o[1]=[r("Setting",-1)])]),example:a(()=>[n(W)]),_:1},8,["raw-component"]),n(b,{"raw-component":e(ne)},{title:a(()=>[...o[2]||(o[2]=[r("File Tree",-1)])]),example:a(()=>[n(ee)]),_:1},8,["raw-component"])])]))}});export{ve as default};
