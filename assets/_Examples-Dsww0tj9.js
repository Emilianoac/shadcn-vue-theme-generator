import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{t as m}from"./index-EMLBxhIg.js";import{f as w,d as i,o as c,e as l,H as o,I as a,u as r,_ as d,z as f,A as _,D as e}from"./highlight-mgC1Gizx.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";const g=w("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),B=i({__name:"SonnerBasic",setup(u){function s(){m("This is a basic toast message!")}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Toast ",-1)])]),_:1}))}}),h=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showBasicToast() {
  toast("This is a basic toast message!");
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showBasicToast"
    data-component-x-ray-trigger="Button"
  >
    Show Toast
  </Button>
</template>
`,v=i({__name:"SonnerWithDescription",setup(u){function s(){m("Event has been created",{description:"Monday, January 3rd at 6:00pm"})}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Toast ",-1)])]),_:1}))}}),x=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showDescriptionToast() {
  toast("Event has been created", {
    description: "Monday, January 3rd at 6:00pm",
  });
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showDescriptionToast"
    data-component-x-ray-trigger="Button"
  >
    Show Toast
  </Button>
</template>
`,T=i({__name:"SonnerSuccess",setup(u){function s(){m.success("Event has been created")}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Success Toast ",-1)])]),_:1}))}}),S=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showSuccessToast() {
  toast.success("Event has been created");
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showSuccessToast"
    data-component-x-ray-trigger="Button"
  >
    Show Success Toast
  </Button>
</template>
`,y=i({__name:"SonnerError",setup(u){function s(){m.error("Something went wrong")}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Error Toast ",-1)])]),_:1}))}}),b=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showErrorToast() {
  toast.error("Something went wrong");
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showErrorToast"
    data-component-x-ray-trigger="Button"
  >
    Show Error Toast
  </Button>
</template>
`,k=i({__name:"SonnerLoading",setup(u){function s(){const t=new Promise(n=>{setTimeout(n,2e3)});m.promise(t,{loading:"Loading...",success:"Data loaded successfully!",error:"Failed to load data.",duration:1e3})}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Loading Toast ",-1)])]),_:1}))}}),C=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showBasicToast() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  toast.promise(promise, {
    loading: "Loading...",
    success: "Data loaded successfully!",
    error: "Failed to load data.",
    duration: 1000,
  });
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showBasicToast"
    data-component-x-ray-trigger="Button"
  >
    Show Loading Toast
  </Button>
</template>
`,E=i({__name:"SonnerCustom",setup(u){function s(){m("This is a custom toast!",{position:"bottom-center",icon:g,style:{background:"var(--popover)",color:"var(--destructive)",border:"1px solid var(--border)"}})}return(t,n)=>(c(),l(r(d),{variant:"outline",class:"w-fit",onClick:s,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[a(" Show Custom Toast ",-1)])]),_:1}))}}),D=`<script setup lang="ts">
import { XCircleIcon } from "lucide-vue-next";
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showBasicToast() {
  toast("This is a custom toast!", {
    position: "bottom-center",
    icon: XCircleIcon,
    style: {
      background: "var(--popover)",
      color: "var(--destructive)",
      border: "1px solid var(--border)",
    },
  });
}
<\/script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showBasicToast"
    data-component-x-ray-trigger="Button"
  >
    Show Custom Toast
  </Button>
</template>
`,L={class:"@container max-w-200 mx-auto"},$={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},V=i({__name:"_Examples",setup(u){return(s,t)=>(c(),f("div",L,[_("div",$,[e(p,{"raw-component":r(h)},{title:o(()=>[...t[0]||(t[0]=[a(" Basic ",-1)])]),example:o(()=>[e(B)]),_:1},8,["raw-component"]),e(p,{"raw-component":r(x)},{title:o(()=>[...t[1]||(t[1]=[a(" With Description ",-1)])]),example:o(()=>[e(v)]),_:1},8,["raw-component"]),e(p,{"raw-component":r(S)},{title:o(()=>[...t[2]||(t[2]=[a(" Success ",-1)])]),example:o(()=>[e(T)]),_:1},8,["raw-component"]),e(p,{"raw-component":r(b)},{title:o(()=>[...t[3]||(t[3]=[a(" Error ",-1)])]),example:o(()=>[e(y)]),_:1},8,["raw-component"]),e(p,{"raw-component":r(C)},{title:o(()=>[...t[4]||(t[4]=[a(" Loading ",-1)])]),example:o(()=>[e(k)]),_:1},8,["raw-component"]),e(p,{"raw-component":r(D)},{title:o(()=>[...t[5]||(t[5]=[a(" Custom ",-1)])]),example:o(()=>[e(E)]),_:1},8,["raw-component"])])]))}});export{V as default};
