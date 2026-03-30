import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DM92uT3q.js";import{t as m}from"./index-lvVkakCB.js";import{g as w,d as i,o as c,a as l,H as o,I as e,u as a,_ as d,z as f,A as _,D as s}from"./DialogTitle.vue_vue_type_script_setup_true_lang-C_9FSQhf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-C44kN4yO.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-CxLZ1jLL.js";import"./VisuallyHidden-CLlRR9c8.js";const g=w("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),B=i({__name:"SonnerBasic",setup(u){function r(){m("This is a basic toast message!")}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Toast ",-1)])]),_:1}))}}),v=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

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
`,x=i({__name:"SonnerWithDescription",setup(u){function r(){m("Event has been created",{description:"Monday, January 3rd at 6:00pm"})}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Toast ",-1)])]),_:1}))}}),T=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

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
`,S=i({__name:"SonnerSuccess",setup(u){function r(){m.success("Event has been created")}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Success Toast ",-1)])]),_:1}))}}),h=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

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
`,y=i({__name:"SonnerError",setup(u){function r(){m.error("Something went wrong")}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Error Toast ",-1)])]),_:1}))}}),b=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

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
`,k=i({__name:"SonnerLoading",setup(u){function r(){const t=new Promise(n=>{setTimeout(n,2e3)});m.promise(t,{loading:"Loading...",success:"Data loaded successfully!",error:"Failed to load data.",duration:1e3})}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Loading Toast ",-1)])]),_:1}))}}),C=`<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

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
`,E=i({__name:"SonnerCustom",setup(u){function r(){m("This is a custom toast!",{position:"bottom-center",icon:g,style:{background:"var(--popover)",color:"var(--destructive)",border:"1px solid var(--border)"}})}return(t,n)=>(c(),l(a(d),{variant:"outline",class:"w-fit",onClick:r,"data-component-x-ray-trigger":"Button"},{default:o(()=>[...n[0]||(n[0]=[e(" Show Custom Toast ",-1)])]),_:1}))}}),D=`<script setup lang="ts">\r
import { XCircleIcon } from "lucide-vue-next";\r
import { toast } from "vue-sonner";\r
import { Button } from "@/components/ui/button";\r
\r
function showBasicToast() {\r
  toast("This is a custom toast!", {\r
    position: "bottom-center",\r
    icon: XCircleIcon,\r
    style: {\r
      background: "var(--popover)",\r
      color: "var(--destructive)",\r
      border: "1px solid var(--border)",\r
    },\r
  });\r
}\r
<\/script>\r
\r
<template>\r
  <Button\r
    variant="outline"\r
    class="w-fit"\r
    @click="showBasicToast"\r
    data-component-x-ray-trigger="Button"\r
  >\r
    Show Custom Toast\r
  </Button>\r
</template>\r
`,L={class:"@container max-w-200 mx-auto"},$={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},X=i({__name:"_Examples",setup(u){return(r,t)=>(c(),f("div",L,[_("div",$,[s(p,{"raw-component":a(v)},{title:o(()=>[...t[0]||(t[0]=[e(" Basic ",-1)])]),example:o(()=>[s(B)]),_:1},8,["raw-component"]),s(p,{"raw-component":a(T)},{title:o(()=>[...t[1]||(t[1]=[e(" With Description ",-1)])]),example:o(()=>[s(x)]),_:1},8,["raw-component"]),s(p,{"raw-component":a(h)},{title:o(()=>[...t[2]||(t[2]=[e(" Success ",-1)])]),example:o(()=>[s(S)]),_:1},8,["raw-component"]),s(p,{"raw-component":a(b)},{title:o(()=>[...t[3]||(t[3]=[e(" Error ",-1)])]),example:o(()=>[s(y)]),_:1},8,["raw-component"]),s(p,{"raw-component":a(C)},{title:o(()=>[...t[4]||(t[4]=[e(" Loading ",-1)])]),example:o(()=>[s(k)]),_:1},8,["raw-component"]),s(p,{"raw-component":a(D)},{title:o(()=>[...t[5]||(t[5]=[e(" Custom ",-1)])]),example:o(()=>[s(E)]),_:1},8,["raw-component"])])]))}});export{X as default};
