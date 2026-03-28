import{_ as S}from"./ExampleCard.vue_vue_type_script_setup_true_lang-RODFUHo8.js";import{g as I,d as i,aj as L,o as u,a as b,H as t,D as n,u as o,$ as P,a0 as N,a1 as T,I as r,B as h,a2 as U,a3 as $,ag as k,ah as B,Z as O,z as C,T as z,a7 as R,b as y,_ as w,A as d,r as E}from"./DialogTitle.vue_vue_type_script_setup_true_lang-BO6eI9T0.js";import{_,a as G,b as M,c as D,d as x,e as l}from"./index-BbVjXIrp.js";import{_ as V}from"./CommandSeparator.vue_vue_type_script_setup_true_lang-Cgx0EaQk.js";import{U as W,S as A}from"./user-BE1MadrB.js";import{C as F}from"./credit-card-CCVUXLqQ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-JhfpkWUQ.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-BTii5kdN.js";import"./PopperContent-8PHJ-kTl.js";import"./useSize-s3pOCBPt.js";import"./VisuallyHidden-DM3OMqDx.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-ah-oNQF4.js";import"./check-BIt67cX5.js";import"./usePrimitiveElement-DemUCsCM.js";import"./search-Bb27OXKm.js";import"./Collection-CQtsgUCe.js";import"./arrays-0WZrVo_s.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-D15ITBum.js";import"./useKbd-kRIii9yh.js";import"./useTypeahead-ludC2DV3.js";import"./VisuallyHiddenInput-Dl8dlU_z.js";import"./utils-CtSV463Y.js";import"./Separator-D8K0NOqL.js";const H=I("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);const Z=I("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const q=I("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),j=i({__name:"CommandDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean},title:{default:"Command Palette"},description:{default:"Search for a command to run..."},to:{}},emits:["update:open"],setup(p,{emit:m}){const e=p,s=L(e,m);return(g,v)=>(u(),b(o(O),k(B(o(s))),{default:t(c=>[n(o(P),{class:"overflow-hidden p-0",to:e.to},{default:t(()=>[n(o(N),{class:"sr-only"},{default:t(()=>[n(o(T),null,{default:t(()=>[r(h(p.title),1)]),_:1}),n(o(U),null,{default:t(()=>[r(h(p.description),1)]),_:1})]),_:1}),n(_,null,{default:t(()=>[$(g.$slots,"default",k(B(c)))]),_:2},1024)]),_:2},1032,["to"])]),_:3},16))}}),f=i({__name:"CommandShortcut",props:{class:{}},setup(p){const m=p;return(e,a)=>(u(),C("span",{"data-slot":"command-shortcut",class:z(o(R)("text-muted-foreground ml-auto text-xs tracking-widest",m.class))},[$(e.$slots,"default")],2))}}),J={class:"flex flex-col gap-4"},K=i({__name:"CommandBasic",setup(p){const m=E(!1);return(e,a)=>{const s=y("CalendarIcon"),g=y("SmileIcon"),v=y("CalculatorIcon");return u(),C("div",J,[n(o(w),{variant:"outline",class:"w-fit",onClick:a[0]||(a[0]=c=>m.value=!0),"data-component-x-ray-trigger":"Button"},{default:t(()=>[...a[2]||(a[2]=[r(" Open Menu ",-1)])]),_:1}),n(o(j),{open:m.value,"onUpdate:open":a[1]||(a[1]=c=>m.value=c),"data-component-x-ray":"CommandDialog",to:"#examples-container"},{default:t(()=>[n(o(_),{"data-component-x-ray":"Command"},{default:t(()=>[n(o(G),{placeholder:"Type a command or search...","data-component-x-ray-trigger":"CommandInput"}),n(o(M),{"data-component-x-ray":"CommandList"},{default:t(()=>[n(o(D),{"data-component-x-ray":"CommandEmpty"},{default:t(()=>[...a[3]||(a[3]=[r("No results found.",-1)])]),_:1}),n(o(x),{heading:"Suggestions","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"calendar","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(s),a[4]||(a[4]=d("span",null,"Calendar",-1))]),_:1}),n(o(l),{value:"search-emoji","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(g),a[5]||(a[5]=d("span",null,"Search Emoji",-1))]),_:1}),n(o(l),{value:"calculator","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(v),a[6]||(a[6]=d("span",null,"Calculator",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])}}}),Q=`<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const open = ref(false);
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <Button
      variant="outline"
      class="w-fit"
      @click="open = true"
      data-component-x-ray-trigger="Button"
    >
      Open Menu
    </Button>
    <CommandDialog
      v-model:open="open"
      data-component-x-ray="CommandDialog"
      to="#examples-container"
    >
      <Command data-component-x-ray="Command">
        <CommandInput
          placeholder="Type a command or search..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty">No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" data-component-x-ray="CommandGroup">
            <CommandItem value="calendar" data-component-x-ray-trigger="CommandItem">
              <CalendarIcon />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="search-emoji" data-component-x-ray-trigger="CommandItem">
              <SmileIcon />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="calculator" data-component-x-ray-trigger="CommandItem">
              <CalculatorIcon />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  </div>
</template>
`,X={class:"flex flex-col gap-4"},Y=i({__name:"CommandWithGroups",setup(p){const m=E(!1);return(e,a)=>(u(),C("div",X,[n(o(w),{variant:"outline",class:"w-fit",onClick:a[0]||(a[0]=s=>m.value=!0),"data-component-x-ray-trigger":"Button"},{default:t(()=>[...a[2]||(a[2]=[r(" Open Menu ",-1)])]),_:1}),n(o(j),{open:m.value,"onUpdate:open":a[1]||(a[1]=s=>m.value=s),"data-component-x-ray":"CommandDialog",to:"#examples-container"},{default:t(()=>[n(o(_),{"data-component-x-ray":"Command"},{default:t(()=>[n(o(G),{placeholder:"Type a command or search...","data-component-x-ray-trigger":"CommandInput"}),n(o(M),{"data-component-x-ray":"CommandList"},{default:t(()=>[n(o(D),{"data-component-x-ray":"CommandEmpty"},{default:t(()=>[...a[3]||(a[3]=[r(" No results found. ",-1)])]),_:1}),n(o(x),{heading:"Suggestions","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"calendar","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(Z)),a[4]||(a[4]=d("span",null,"Calendar",-1))]),_:1}),n(o(l),{value:"search-emoji","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(q)),a[5]||(a[5]=d("span",null,"Search Emoji",-1))]),_:1}),n(o(l),{value:"calculator","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(H)),a[6]||(a[6]=d("span",null,"Calculator",-1))]),_:1})]),_:1}),n(o(V)),n(o(x),{heading:"Settings","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"profile","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(W)),a[8]||(a[8]=d("span",null,"Profile",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[7]||(a[7]=[r("⌘P",-1)])]),_:1})]),_:1}),n(o(l),{value:"billing"},{default:t(()=>[n(o(F)),a[10]||(a[10]=d("span",null,"Billing",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[9]||(a[9]=[r("⌘B",-1)])]),_:1})]),_:1}),n(o(l),{value:"settings","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(A)),a[12]||(a[12]=d("span",null,"Settings",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[11]||(a[11]=[r("⌘S",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),nn=`<script setup lang="ts">
import { ref } from "vue";
import {
  CalendarIcon,
  SmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const open = ref(false);
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <Button
      variant="outline"
      class="w-fit"
      @click="open = true"
      data-component-x-ray-trigger="Button"
    >
      Open Menu
    </Button>
    <CommandDialog
      v-model:open="open"
      data-component-x-ray="CommandDialog"
      to="#examples-container"
    >
      <Command data-component-x-ray="Command">
        <CommandInput
          placeholder="Type a command or search..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty"> No results found. </CommandEmpty>
          <CommandGroup heading="Suggestions" data-component-x-ray="CommandGroup">
            <CommandItem value="calendar" data-component-x-ray-trigger="CommandItem">
              <CalendarIcon />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="search-emoji" data-component-x-ray-trigger="CommandItem">
              <SmileIcon />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="calculator" data-component-x-ray-trigger="CommandItem">
              <CalculatorIcon />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings" data-component-x-ray="CommandGroup">
            <CommandItem value="profile" data-component-x-ray-trigger="CommandItem">
              <UserIcon />
              <span>Profile</span>
              <CommandShortcut data-component-x-ray-trigger="CommandShortcut">⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem value="billing">
              <CreditCardIcon />
              <span>Billing</span>
              <CommandShortcut data-component-x-ray-trigger="CommandShortcut">⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem value="settings" data-component-x-ray-trigger="CommandItem">
              <SettingsIcon />
              <span>Settings</span>
              <CommandShortcut data-component-x-ray-trigger="CommandShortcut">⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  </div>
</template>
`,an={class:"@container w-250 mx-auto"},on={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Gn=i({__name:"_Examples",setup(p){return(m,e)=>(u(),C("div",an,[d("div",on,[n(S,{"raw-component":o(Q)},{title:t(()=>[...e[0]||(e[0]=[r(" Basic ",-1)])]),example:t(()=>[n(K)]),_:1},8,["raw-component"]),n(S,{"raw-component":o(nn)},{title:t(()=>[...e[1]||(e[1]=[r(" With Groups ",-1)])]),example:t(()=>[n(Y)]),_:1},8,["raw-component"])])]))}});export{Gn as default};
