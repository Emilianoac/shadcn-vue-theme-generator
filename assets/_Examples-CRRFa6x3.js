import{_ as u}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Dv0Lwgv7.js";import{d,o as l,a as _,H as s,A as t,z as c,L as m,M as h,B as g,D as e,u as n,S as x,I as p,bI as w}from"./DialogTitle.vue_vue_type_script_setup_true_lang-CaMH5FGq.js";import{_ as b}from"./Separator.vue_vue_type_script_setup_true_lang-CWPIV9Fz.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-DIiXhJ1v.js";import"./Separator-D195gmUo.js";const y={class:"p-4"},v={class:"text-sm"},S=d({__name:"ScrollAreaVertical",setup(f){const i=Array.from({length:50}).map((o,r,a)=>`v1.2.0-beta.${a.length-r}`);return(o,r)=>(l(),_(n(x),{class:"mx-auto h-72 w-48 rounded-md border","data-component-x-ray":"ScrollArea"},{default:s(()=>[t("div",y,[r[0]||(r[0]=t("h4",{class:"mb-4 text-sm leading-none font-medium"},"Tags",-1)),(l(!0),c(m,null,h(n(i),a=>(l(),c(m,{key:a},[t("div",v,g(a),1),e(n(b),{class:"my-2","data-component-x-ray":"Separator"})],64))),128))])]),_:1}))}}),A=`<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i, a) => \`v1.2.0-beta.\${a.length - i}\`);
<\/script>

<template>
  <ScrollArea class="mx-auto h-72 w-48 rounded-md border" data-component-x-ray="ScrollArea">
    <div class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      <template v-for="tag in tags" :key="tag">
        <div class="text-sm">
          {{ tag }}
        </div>
        <Separator class="my-2" data-component-x-ray="Separator" />
      </template>
    </div>
  </ScrollArea>
</template>
`,k={class:"flex gap-4"},$={class:"overflow-hidden rounded-md"},B=["src","alt"],V={class:"text-muted-foreground pt-2 text-xs"},q={class:"text-foreground font-semibold"},z=d({__name:"ScrollAreaHorizontal",setup(f){const i=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyav",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}];return(o,r)=>(l(),_(n(x),{class:"mx-auto w-full max-w-96 rounded-md border p-4","data-component-x-ray":"ScrollArea"},{default:s(()=>[t("div",k,[(l(),c(m,null,h(i,a=>t("figure",{key:a.artist,class:"shrink-0"},[t("div",$,[t("img",{src:a.art,alt:`Photo by ${a.artist}`,class:"aspect-3/4 h-fit w-fit object-cover",width:"300",height:"400"},null,8,B)]),t("figcaption",V,[r[0]||(r[0]=p(" Photo by ",-1)),t("span",q,g(a.artist),1)])])),64))]),e(n(w),{orientation:"horizontal","data-component-x-ray-trigger":"ScrollBar"})]),_:1}))}}),T=`<script setup lang="ts">
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyav",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];
<\/script>

<template>
  <ScrollArea
    class="mx-auto w-full max-w-96 rounded-md border p-4"
    data-component-x-ray="ScrollArea"
  >
    <div class="flex gap-4">
      <figure v-for="artwork in works" :key="artwork.artist" class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <img
            :src="artwork.art"
            :alt="\`Photo by \${artwork.artist}\`"
            class="aspect-3/4 h-fit w-fit object-cover"
            width="300"
            height="400"
          />
        </div>
        <figcaption class="text-muted-foreground pt-2 text-xs">
          Photo by
          <span class="text-foreground font-semibold">
            {{ artwork.artist }}
          </span>
        </figcaption>
      </figure>
    </div>
    <ScrollBar orientation="horizontal" data-component-x-ray-trigger="ScrollBar" />
  </ScrollArea>
</template>
`,H={class:"@container max-w-200 mx-auto"},P={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},E=d({__name:"_Examples",setup(f){return(i,o)=>(l(),c("div",H,[t("div",P,[e(u,{"raw-component":n(A)},{title:s(()=>[...o[0]||(o[0]=[p(" Vertical ",-1)])]),example:s(()=>[e(S)]),_:1},8,["raw-component"]),e(u,{"raw-component":n(T)},{title:s(()=>[...o[1]||(o[1]=[p(" Horizontal ",-1)])]),example:s(()=>[e(z)]),_:1},8,["raw-component"])])]))}});export{E as default};
