import{_ as G}from"./ExampleCard.vue_vue_type_script_setup_true_lang-C8cUG3aI.js";import{d as _,o as s,e as y,H as o,D as e,u as n,_ as w,I as i,B as v,z as d,L as c,M as g,T as b,a8 as k,b as f,c as M,A as D}from"./highlight-CeYIOz-i.js";import{_ as h,a as I,b as S,c as P,d as B,e as z}from"./index-BLV6LALe.js";import{_ as L,a as E,b as $}from"./PopoverTrigger.vue_vue_type_script_setup_true_lang-BQlvgmju.js";import{C as N}from"./chevrons-up-down-Dos0hqU2.js";import{C as j}from"./CoppyButton.vue_vue_type_script_setup_true_lang-z5jP3Qrf.js";import{_ as V}from"./CommandSeparator.vue_vue_type_script_setup_true_lang-BBz_SwTZ.js";import"./usePrimitiveElement-Dlrrz1fa.js";import"./search-BG25OO5f.js";import"./Collection-Dc-yvEeD.js";import"./arrays-0WZrVo_s.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-Clq6Ktd4.js";import"./useKbd-kRIii9yh.js";import"./useTypeahead-gkj3uEV6.js";import"./VisuallyHiddenInput-DcXNHEL3.js";import"./utils-CCozNIA-.js";import"./useFocusGuards-DUCWodhg.js";import"./Separator-eYMbsyu1.js";const F=_({__name:"ComboboxBasic",setup(T){const u=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],t=f(!1),l=f(""),C=M(()=>u.find(r=>r.value===l.value));function x(r){l.value=r===l.value?"":r,t.value=!1}return(r,a)=>(s(),y(n($),{open:t.value,"onUpdate:open":a[1]||(a[1]=m=>t.value=m)},{default:o(()=>[e(n(L),{"as-child":""},{default:o(()=>[e(n(w),{variant:"outline",role:"combobox","aria-expanded":t.value,class:"w-50 justify-between","data-component-x-ray-trigger":"Button"},{default:o(()=>[i(v(C.value?.label||"Select framework...")+" ",1),e(n(N),{class:"opacity-50"})]),_:1},8,["aria-expanded"])]),_:1}),e(n(E),{class:"w-50 p-0"},{default:o(()=>[e(n(h),{"data-component-x-ray":"Command"},{default:o(()=>[e(n(I),{class:"h-9",placeholder:"Search framework...","data-component-x-ray-trigger":"CommandInput"}),e(n(S),{"data-component-x-ray":"CommandList"},{default:o(()=>[e(n(P),{"data-component-x-ray":"CommandEmpty"},{default:o(()=>[...a[2]||(a[2]=[i(" No framework found. ",-1)])]),_:1}),e(n(B),{"data-component-x-ray":"CommandGroup"},{default:o(()=>[(s(),d(c,null,g(u,m=>e(n(z),{key:m.value,value:m.value,onSelect:a[0]||(a[0]=p=>{x(p.detail.value)}),"data-component-x-ray-trigger":"CommandItem"},{default:o(()=>[i(v(m.label)+" ",1),e(n(j),{class:b(n(k)("ml-auto",l.value===m.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]))}}),U=`<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed, ref } from "vue";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const open = ref(false);
const value = ref("");

const selectedFramework = computed(() =>
  frameworks.find((framework) => framework.value === value.value),
);

function selectFramework(selectedValue: string) {
  value.value = selectedValue === value.value ? "" : selectedValue;
  open.value = false;
}
<\/script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-50 justify-between"
        data-component-x-ray-trigger="Button"
      >
        {{ selectedFramework?.label || "Select framework..." }}
        <ChevronsUpDownIcon class="opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-50 p-0">
      <Command data-component-x-ray="Command">
        <CommandInput
          class="h-9"
          placeholder="Search framework..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty"> No framework found. </CommandEmpty>
          <CommandGroup data-component-x-ray="CommandGroup">
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="
                (ev) => {
                  selectFramework(ev.detail.value as string);
                }
              "
              data-component-x-ray-trigger="CommandItem"
            >
              {{ framework.label }}
              <CheckIcon
                :class="cn('ml-auto', value === framework.value ? 'opacity-100' : 'opacity-0')"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
`,R=_({__name:"ComboboxGroups",setup(T){const u=[{value:"Americas",items:["(GMT-5) New York","(GMT-8) Los Angeles","(GMT-6) Chicago","(GMT-5) Toronto","(GMT-8) Vancouver","(GMT-3) São Paulo"]},{value:"Europe",items:["(GMT+0) London","(GMT+1) Paris","(GMT+1) Berlin","(GMT+1) Rome","(GMT+1) Madrid","(GMT+1) Amsterdam"]},{value:"Asia/Pacific",items:["(GMT+9) Tokyo","(GMT+8) Shanghai","(GMT+8) Singapore","(GMT+4) Dubai","(GMT+11) Sydney","(GMT+9) Seoul"]}],t=f(!1),l=f(""),C=M(()=>{for(const r of u){const a=r.items.find(m=>m===l.value);if(a)return a}return null});function x(r){l.value=r===l.value?"":r,t.value=!1}return(r,a)=>(s(),y(n($),{open:t.value,"onUpdate:open":a[1]||(a[1]=m=>t.value=m)},{default:o(()=>[e(n(L),{"as-child":""},{default:o(()=>[e(n(w),{variant:"outline",role:"combobox","aria-expanded":t.value,class:"w-50 justify-between","data-component-x-ray-trigger":"Button"},{default:o(()=>[i(v(C.value||"Select timezone...")+" ",1),e(n(N),{class:"opacity-50"})]),_:1},8,["aria-expanded"])]),_:1}),e(n(E),{class:"w-50 p-0"},{default:o(()=>[e(n(h),{"data-component-x-ray":"Command"},{default:o(()=>[e(n(I),{class:"h-9",placeholder:"Search timezone...","data-component-x-ray-trigger":"CommandInput"}),e(n(S),{"data-component-x-ray":"CommandList"},{default:o(()=>[e(n(P),{"data-component-x-ray":"CommandEmpty"},{default:o(()=>[...a[2]||(a[2]=[i(" No timezone found. ",-1)])]),_:1}),(s(),d(c,null,g(u,m=>(s(),d(c,{key:m.value},[e(n(B),{heading:m.value,"data-component-x-ray":"CommandGroup"},{default:o(()=>[(s(!0),d(c,null,g(m.items,p=>(s(),y(n(z),{key:p,value:p,onSelect:a[0]||(a[0]=A=>{x(A.detail.value)}),"data-component-x-ray-trigger":"CommandItem"},{default:o(()=>[i(v(p)+" ",1),e(n(j),{class:b(n(k)("ml-auto",l.value===p?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value"]))),128))]),_:2},1032,["heading"]),e(n(V))],64))),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]))}}),K=`<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed, ref } from "vue";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const;

const open = ref(false);
const value = ref("");

const selectedTimezone = computed(() => {
  for (const group of timezones) {
    const found = group.items.find((item) => item === value.value);
    if (found) {
      return found;
    }
  }
  return null;
});

function selectTimezone(selectedValue: string) {
  value.value = selectedValue === value.value ? "" : selectedValue;
  open.value = false;
}
<\/script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-50 justify-between"
        data-component-x-ray-trigger="Button"
      >
        {{ selectedTimezone || "Select timezone..." }}
        <ChevronsUpDownIcon class="opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-50 p-0">
      <Command data-component-x-ray="Command">
        <CommandInput
          class="h-9"
          placeholder="Search timezone..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty"> No timezone found. </CommandEmpty>
          <template v-for="group in timezones" :key="group.value">
            <CommandGroup :heading="group.value" data-component-x-ray="CommandGroup">
              <CommandItem
                v-for="item in group.items"
                :key="item"
                :value="item"
                @select="
                  (ev) => {
                    selectTimezone(ev.detail.value as string);
                  }
                "
                data-component-x-ray-trigger="CommandItem"
              >
                {{ item }}
                <CheckIcon :class="cn('ml-auto', value === item ? 'opacity-100' : 'opacity-0')" />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </template>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
`,Y={class:"@container max-w-200 mx-auto"},H={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},cn=_({__name:"_Examples",setup(T){return(u,t)=>(s(),d("div",Y,[D("div",H,[e(G,{"raw-component":n(U)},{title:o(()=>[...t[0]||(t[0]=[i(" Basic ",-1)])]),example:o(()=>[e(F)]),_:1},8,["raw-component"]),e(G,{"raw-component":n(K)},{title:o(()=>[...t[1]||(t[1]=[i(" Groups ",-1)])]),example:o(()=>[e(R)]),_:1},8,["raw-component"])])]))}});export{cn as default};
