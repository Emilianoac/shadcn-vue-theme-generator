import{_ as S}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{f as I,d as i,ak as j,o as u,e as b,H as t,D as n,u as o,a0 as P,a1 as N,a2 as T,I as e,B as h,a3 as U,a4 as $,ah as k,ai as B,$ as O,z as C,T as z,a7 as R,aM as y,_ as w,A as r,b as E}from"./highlight-DV_B57Hj.js";import{_,a as G,b as M,c as D,d as x,e as l}from"./index-CroXCrED.js";import{_ as V}from"./CommandSeparator.vue_vue_type_script_setup_true_lang-Bmh_dhgi.js";import{U as W}from"./user-DLjMFrhl.js";import{C as A}from"./credit-card-C9cu9rrJ.js";import{S as F}from"./settings-DIzT1sx9.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import"./usePrimitiveElement-CC4NqMuD.js";import"./search-BvoBUmMj.js";import"./Collection-BzhLJ3ey.js";import"./arrays-0WZrVo_s.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-Dw7qtzdV.js";import"./useKbd-kRIii9yh.js";import"./useTypeahead-Bn0kdJV0.js";import"./VisuallyHiddenInput-b5QhEy_5.js";import"./utils-B1vU7hCd.js";import"./Separator-Buwk1k0T.js";const H=I("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);const q=I("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const J=I("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),L=i({__name:"CommandDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean},title:{default:"Command Palette"},description:{default:"Search for a command to run..."}},emits:["update:open"],setup(s,{emit:m}){const p=j(s,m);return(g,v)=>(u(),b(o(O),k(B(o(p))),{default:t(c=>[n(o(P),{class:"overflow-hidden p-0"},{default:t(()=>[n(o(N),{class:"sr-only"},{default:t(()=>[n(o(T),null,{default:t(()=>[e(h(s.title),1)]),_:1}),n(o(U),null,{default:t(()=>[e(h(s.description),1)]),_:1})]),_:1}),n(_,null,{default:t(()=>[$(g.$slots,"default",k(B(c)))]),_:2},1024)]),_:2},1024)]),_:3},16))}}),f=i({__name:"CommandShortcut",props:{class:{}},setup(s){const m=s;return(d,a)=>(u(),C("span",{"data-slot":"command-shortcut",class:z(o(R)("text-muted-foreground ml-auto text-xs tracking-widest",m.class))},[$(d.$slots,"default")],2))}}),K={class:"flex flex-col gap-4"},Q=i({__name:"CommandBasic",setup(s){const m=E(!1);return(d,a)=>{const p=y("CalendarIcon"),g=y("SmileIcon"),v=y("CalculatorIcon");return u(),C("div",K,[n(o(w),{variant:"outline",class:"w-fit",onClick:a[0]||(a[0]=c=>m.value=!0),"data-component-x-ray-trigger":"Button"},{default:t(()=>[...a[2]||(a[2]=[e(" Open Menu ",-1)])]),_:1}),n(o(L),{open:m.value,"onUpdate:open":a[1]||(a[1]=c=>m.value=c),"data-component-x-ray":"CommandDialog"},{default:t(()=>[n(o(_),{"data-component-x-ray":"Command"},{default:t(()=>[n(o(G),{placeholder:"Type a command or search...","data-component-x-ray-trigger":"CommandInput"}),n(o(M),{"data-component-x-ray":"CommandList"},{default:t(()=>[n(o(D),{"data-component-x-ray":"CommandEmpty"},{default:t(()=>[...a[3]||(a[3]=[e("No results found.",-1)])]),_:1}),n(o(x),{heading:"Suggestions","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"calendar","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(p),a[4]||(a[4]=r("span",null,"Calendar",-1))]),_:1}),n(o(l),{value:"search-emoji","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(g),a[5]||(a[5]=r("span",null,"Search Emoji",-1))]),_:1}),n(o(l),{value:"calculator","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(v),a[6]||(a[6]=r("span",null,"Calculator",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])}}}),X=`<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";

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
    <CommandDialog v-model:open="open" data-component-x-ray="CommandDialog">
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
`,Y={class:"flex flex-col gap-4"},Z=i({__name:"CommandWithGroups",setup(s){const m=E(!1);return(d,a)=>(u(),C("div",Y,[n(o(w),{variant:"outline",class:"w-fit",onClick:a[0]||(a[0]=p=>m.value=!0),"data-component-x-ray-trigger":"Button"},{default:t(()=>[...a[2]||(a[2]=[e(" Open Menu ",-1)])]),_:1}),n(o(L),{open:m.value,"onUpdate:open":a[1]||(a[1]=p=>m.value=p),"data-component-x-ray":"CommandDialog"},{default:t(()=>[n(o(_),{"data-component-x-ray":"Command"},{default:t(()=>[n(o(G),{placeholder:"Type a command or search...","data-component-x-ray-trigger":"CommandInput"}),n(o(M),{"data-component-x-ray":"CommandList"},{default:t(()=>[n(o(D),{"data-component-x-ray":"CommandEmpty"},{default:t(()=>[...a[3]||(a[3]=[e(" No results found. ",-1)])]),_:1}),n(o(x),{heading:"Suggestions","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"calendar","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(q)),a[4]||(a[4]=r("span",null,"Calendar",-1))]),_:1}),n(o(l),{value:"search-emoji","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(J)),a[5]||(a[5]=r("span",null,"Search Emoji",-1))]),_:1}),n(o(l),{value:"calculator","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(H)),a[6]||(a[6]=r("span",null,"Calculator",-1))]),_:1})]),_:1}),n(o(V)),n(o(x),{heading:"Settings","data-component-x-ray":"CommandGroup"},{default:t(()=>[n(o(l),{value:"profile","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(W)),a[8]||(a[8]=r("span",null,"Profile",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[7]||(a[7]=[e("⌘P",-1)])]),_:1})]),_:1}),n(o(l),{value:"billing"},{default:t(()=>[n(o(A)),a[10]||(a[10]=r("span",null,"Billing",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[9]||(a[9]=[e("⌘B",-1)])]),_:1})]),_:1}),n(o(l),{value:"settings","data-component-x-ray-trigger":"CommandItem"},{default:t(()=>[n(o(F)),a[12]||(a[12]=r("span",null,"Settings",-1)),n(o(f),{"data-component-x-ray-trigger":"CommandShortcut"},{default:t(()=>[...a[11]||(a[11]=[e("⌘S",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}}),nn=`<script setup lang="ts">
import { ref } from "vue";
import {
  CalendarIcon,
  SmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
} from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
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
} from "@/shared/components/ui/command";

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
    <CommandDialog v-model:open="open" data-component-x-ray="CommandDialog">
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
`,an={class:"@container max-w-200 mx-auto"},on={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},hn=i({__name:"_Examples",setup(s){return(m,d)=>(u(),C("div",an,[r("div",on,[n(S,{"raw-component":o(X)},{title:t(()=>[...d[0]||(d[0]=[e(" Basic ",-1)])]),example:t(()=>[n(Q)]),_:1},8,["raw-component"]),n(S,{"raw-component":o(nn)},{title:t(()=>[...d[1]||(d[1]=[e(" With Groups ",-1)])]),example:t(()=>[n(Z)]),_:1},8,["raw-component"])])]))}});export{hn as default};
