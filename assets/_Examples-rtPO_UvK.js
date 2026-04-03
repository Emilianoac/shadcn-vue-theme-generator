import{_ as M}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{u as N,_ as w,c as G,d as z,b as $,a as C}from"./_plugin-vue_export-helper-C5tAFbzd.js";import{f as O,d as c,o as s,z as u,T as f,u as e,a7 as m,a4 as p,e as b,an as J,H as t,a6 as K,aj as Q,ah as U,D as a,ai as W,L as y,I as g,B as _,R as I,as as X,A as n,M as B}from"./highlight-DV_B57Hj.js";import{a as Y,b as Z,c as ee}from"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import{H as k}from"./house-DqZ_ut8d.js";import{S as H}from"./settings-DIzT1sx9.js";import{U as L}from"./user-DLjMFrhl.js";import"./SheetTitle.vue_vue_type_script_setup_true_lang-BbxkFZrp.js";const P=O("gallery-vertical-end",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);const R=O("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),T=c({__name:"SidebarContent",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("div",{"data-slot":"sidebar-content","data-sidebar":"content",class:f(e(m)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",d.class))},[p(i.$slots,"default")],2))}}),D=c({__name:"SidebarFooter",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("div",{"data-slot":"sidebar-footer","data-sidebar":"footer",class:f(e(m)("flex flex-col gap-2 p-2",d.class))},[p(i.$slots,"default")],2))}}),E=c({__name:"SidebarGroup",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("div",{"data-slot":"sidebar-group","data-sidebar":"group",class:f(e(m)("relative flex w-full min-w-0 flex-col p-2",d.class))},[p(i.$slots,"default")],2))}}),F=c({__name:"SidebarGroupContent",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("div",{"data-slot":"sidebar-group-content","data-sidebar":"group-content",class:f(e(m)("w-full text-sm",d.class))},[p(i.$slots,"default")],2))}}),j=c({__name:"SidebarGroupLabel",props:{asChild:{type:Boolean},as:{},class:{}},setup(r){const d=r;return(i,o)=>(s(),b(e(J),{"data-slot":"sidebar-group-label","data-sidebar":"group-label",as:r.as,"as-child":r.asChild,class:f(e(m)("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",d.class))},{default:t(()=>[p(i.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),V=c({__name:"SidebarHeader",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("div",{"data-slot":"sidebar-header","data-sidebar":"header",class:f(e(m)("flex flex-col gap-2 p-2",d.class))},[p(i.$slots,"default")],2))}}),S=c({__name:"SidebarMenu",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("ul",{"data-slot":"sidebar-menu","data-sidebar":"menu",class:f(e(m)("flex w-full min-w-0 flex-col gap-1",d.class))},[p(i.$slots,"default")],2))}}),q=c({__name:"SidebarMenuButtonChild",props:{variant:{default:"default"},size:{default:"default"},isActive:{type:Boolean},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(r){const d=r;return(i,o)=>(s(),b(e(J),K({"data-slot":"sidebar-menu-button","data-sidebar":"menu-button","data-size":r.size,"data-active":r.isActive,class:e(m)(e(ae)({variant:r.variant,size:r.size}),d.class),as:r.as,"as-child":r.asChild},i.$attrs),{default:t(()=>[p(i.$slots,"default")]),_:3},16,["data-size","data-active","class","as","as-child"]))}}),h=c({inheritAttrs:!1,__name:"SidebarMenuButton",props:{variant:{default:"default"},size:{default:"default"},isActive:{type:Boolean},class:{},asChild:{type:Boolean},as:{default:"button"},tooltip:{}},setup(r){const d=r,{isMobile:i,state:o}=N(),l=Q(d,"tooltip");return(x,we)=>r.tooltip?(s(),b(e(Y),{key:1},{default:t(()=>[a(e(Z),{"as-child":""},{default:t(()=>[a(q,U(W({...e(l),...x.$attrs})),{default:t(()=>[p(x.$slots,"default")]),_:3},16)]),_:3}),a(e(ee),{side:"right",align:"center",hidden:e(o)!=="collapsed"||e(i)},{default:t(()=>[typeof r.tooltip=="string"?(s(),u(y,{key:0},[g(_(r.tooltip),1)],64)):(s(),b(I(r.tooltip),{key:1}))]),_:1},8,["hidden"])]),_:3})):(s(),b(q,U(K({key:0},{...e(l),...x.$attrs})),{default:t(()=>[p(x.$slots,"default")]),_:3},16))}}),v=c({__name:"SidebarMenuItem",props:{class:{}},setup(r){const d=r;return(i,o)=>(s(),u("li",{"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",class:f(e(m)("group/menu-item relative",d.class))},[p(i.$slots,"default")],2))}}),A=c({__name:"SidebarRail",props:{class:{}},setup(r){const d=r,{toggleSidebar:i}=N();return(o,l)=>(s(),u("button",{"data-sidebar":"rail","data-slot":"sidebar-rail","aria-label":"Toggle Sidebar",tabindex:-1,title:"Toggle Sidebar",class:f(e(m)("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex","in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",d.class)),onClick:l[0]||(l[0]=(...x)=>e(i)&&e(i)(...x))},[p(o.$slots,"default")],2))}}),ae=X("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}}),te={class:"flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"},ne={class:"flex items-center gap-2"},re={class:"flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"},ie={class:"flex items-center gap-2 px-4"},oe=c({__name:"SidebarBasic",setup(r){const d=[{title:"Home",icon:k,url:"#"},{title:"Dashboard",icon:R,url:"#"},{title:"Settings",icon:H,url:"#"},{title:"Profile",icon:L,url:"#"}];return(i,o)=>(s(),b(e($),{"cookie-name":"component-sidebar-demo",class:"component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"},{default:t(()=>[a(e(w),{"data-component-x-ray":"Sidebar"},{default:t(()=>[a(e(V),{"data-component-x-ray":"SidebarHeader"},{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[a(e(v),{"data-component-x-ray":"SidebarMenuItem"},{default:t(()=>[a(e(h),{size:"lg","data-component-x-ray":"SidebarMenuButton"},{default:t(()=>[n("div",te,[a(e(P),{class:"size-4"})]),o[0]||(o[0]=n("div",{class:"grid flex-1 text-left text-sm leading-tight"},[n("span",{class:"truncate font-semibold"},"Acme Inc"),n("span",{class:"truncate text-xs"},"Enterprise")],-1))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(T),{"data-component-x-ray":"SidebarContent"},{default:t(()=>[a(e(E),{"data-component-x-ray":"SidebarGroup"},{default:t(()=>[a(e(j),{"data-component-x-ray":"SidebarLabel"},{default:t(()=>[...o[1]||(o[1]=[g("Platform",-1)])]),_:1}),a(e(F),{"data-component-x-ray":"SidebarGroupContent"},{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[(s(),u(y,null,B(d,l=>a(e(v),{key:l.title,"data-component-x-ray-trigger":"SidebarMenuItem"},{default:t(()=>[a(e(h),{"as-child":!0,"data-component-x-ray-trigger":"SidebarMenuButton"},{default:t(()=>[n("div",ne,[(s(),b(I(l.icon),{class:"size-4"})),n("span",null,_(l.title),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(D),{"data-component-x-ray":"SidebarFooter"}),a(e(A),{"data-component-x-ray-trigger":"SidebarRail"})]),_:1}),a(e(G),{class:"min-h-0 overflow-hidden","data-component-x-ray":"SidebarInset"},{default:t(()=>[n("header",re,[n("div",ie,[a(e(z),{class:"-ml-1","data-component-x-ray-trigger":"SidebarTrigger"})])]),o[2]||(o[2]=n("div",{class:"flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0"},[n("div",{class:"grid auto-rows-min gap-4 md:grid-cols-3"},[n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"})]),n("div",{class:"min-h-0 flex-1 rounded-xl bg-muted/50"})],-1))]),_:1})]),_:1}))}}),de=C(oe,[["__scopeId","data-v-a0e9a7fd"]]),se=`<script setup lang="ts">
import {
  GalleryVerticalEndIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: HomeIcon, url: "#" },
  { title: "Dashboard", icon: LayoutDashboardIcon, url: "#" },
  { title: "Settings", icon: SettingsIcon, url: "#" },
  { title: "Profile", icon: UserIcon, url: "#" },
];
<\/script>

<template>
  <SidebarProvider
    cookie-name="component-sidebar-demo"
    class="component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"
  >
    <Sidebar data-component-x-ray="Sidebar">
      <SidebarHeader data-component-x-ray="SidebarHeader">
        <SidebarMenu data-component-x-ray="SidebarMenu">
          <SidebarMenuItem data-component-x-ray="SidebarMenuItem">
            <SidebarMenuButton size="lg" data-component-x-ray="SidebarMenuButton">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEndIcon class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Acme Inc</span>
                <span class="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent data-component-x-ray="SidebarContent">
        <SidebarGroup data-component-x-ray="SidebarGroup">
          <SidebarGroupLabel data-component-x-ray="SidebarLabel">Platform</SidebarGroupLabel>
          <SidebarGroupContent data-component-x-ray="SidebarGroupContent">
            <SidebarMenu data-component-x-ray="SidebarMenu">
              <SidebarMenuItem
                v-for="item in menuItems"
                :key="item.title"
                data-component-x-ray-trigger="SidebarMenuItem"
              >
                <SidebarMenuButton
                  :as-child="true"
                  data-component-x-ray-trigger="SidebarMenuButton"
                >
                  <div class="flex items-center gap-2">
                    <component :is="item.icon" class="size-4" />
                    <span>{{ item.title }}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter data-component-x-ray="SidebarFooter" />
      <SidebarRail data-component-x-ray-trigger="SidebarRail" />
    </Sidebar>
    <SidebarInset class="min-h-0 overflow-hidden" data-component-x-ray="SidebarInset">
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" data-component-x-ray-trigger="SidebarTrigger" />
        </div>
      </header>
      <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-0 flex-1 rounded-xl bg-muted/50" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>
/**
This is only for demo purposes to ensure the sidebar's fixed position doesn't cause it to overflow the parent container.
In a real application, you would typically use the sidebar in a layout where it can be fixed to the viewport without issues.

you can remove this style when using the sidebar in your application, or adjust it as needed to fit your layout.
*/
:global(.component-sidebar-demo [data-slot="sidebar"] > .fixed) {
  position: absolute;
  height: 100% !important;
}
</style>
`,le={class:"flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"},ce={class:"flex items-center gap-2 px-4 justify-end w-full"},ue={class:"flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"},pe={class:"flex items-center gap-2"},be=c({__name:"SidebarRight",setup(r){const d=[{title:"Home",icon:k,url:"#"},{title:"Dashboard",icon:R,url:"#"},{title:"Settings",icon:H,url:"#"},{title:"Profile",icon:L,url:"#"}];return(i,o)=>(s(),b(e($),{"cookie-name":"component-sidebar-demo",class:"component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"},{default:t(()=>[a(e(G),{class:"min-h-0 overflow-hidden","data-component-x-ray":"SidebarInset"},{default:t(()=>[n("header",le,[n("div",ce,[a(e(z),{class:"-ml-1","data-component-x-ray-trigger":"SidebarTrigger"})])]),o[0]||(o[0]=n("div",{class:"flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0"},[n("div",{class:"grid auto-rows-min gap-4 md:grid-cols-3"},[n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"})]),n("div",{class:"min-h-0 flex-1 rounded-xl bg-muted/50"})],-1))]),_:1}),a(e(w),{"data-component-x-ray":"Sidebar",side:"right"},{default:t(()=>[a(e(V),{"data-component-x-ray":"SidebarHeader"},{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[a(e(v),{"data-component-x-ray":"SidebarMenuItem"},{default:t(()=>[a(e(h),{size:"lg","data-component-x-ray":"SidebarMenuButton"},{default:t(()=>[n("div",ue,[a(e(P),{class:"size-4"})]),o[1]||(o[1]=n("div",{class:"grid flex-1 text-left text-sm leading-tight"},[n("span",{class:"truncate font-semibold"},"Acme Inc"),n("span",{class:"truncate text-xs"},"Enterprise")],-1))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(T),{"data-component-x-ray":"SidebarContent"},{default:t(()=>[a(e(E),{"data-component-x-ray":"SidebarGroup"},{default:t(()=>[a(e(j),{"data-component-x-ray":"SidebarLabel"},{default:t(()=>[...o[2]||(o[2]=[g("Platform",-1)])]),_:1}),a(e(F),{"data-component-x-ray":"SidebarGroupContent"},{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[(s(),u(y,null,B(d,l=>a(e(v),{key:l.title,"data-component-x-ray-trigger":"SidebarMenuItem"},{default:t(()=>[a(e(h),{"as-child":!0,"data-component-x-ray-trigger":"SidebarMenuButton"},{default:t(()=>[n("div",pe,[(s(),b(I(l.icon),{class:"size-4"})),n("span",null,_(l.title),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(D),{"data-component-x-ray":"SidebarFooter"}),a(e(A),{"data-component-x-ray-trigger":"SidebarRail"})]),_:1})]),_:1}))}}),me=C(be,[["__scopeId","data-v-465104dc"]]),fe=`<script setup lang="ts">
import {
  GalleryVerticalEndIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: HomeIcon, url: "#" },
  { title: "Dashboard", icon: LayoutDashboardIcon, url: "#" },
  { title: "Settings", icon: SettingsIcon, url: "#" },
  { title: "Profile", icon: UserIcon, url: "#" },
];
<\/script>

<template>
  <SidebarProvider
    cookie-name="component-sidebar-demo"
    class="component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"
  >
    <SidebarInset class="min-h-0 overflow-hidden" data-component-x-ray="SidebarInset">
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4 justify-end w-full">
          <SidebarTrigger class="-ml-1" data-component-x-ray-trigger="SidebarTrigger" />
        </div>
      </header>
      <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-0 flex-1 rounded-xl bg-muted/50" />
      </div>
    </SidebarInset>
    <Sidebar data-component-x-ray="Sidebar" side="right">
      <SidebarHeader data-component-x-ray="SidebarHeader">
        <SidebarMenu data-component-x-ray="SidebarMenu">
          <SidebarMenuItem data-component-x-ray="SidebarMenuItem">
            <SidebarMenuButton size="lg" data-component-x-ray="SidebarMenuButton">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEndIcon class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Acme Inc</span>
                <span class="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent data-component-x-ray="SidebarContent">
        <SidebarGroup data-component-x-ray="SidebarGroup">
          <SidebarGroupLabel data-component-x-ray="SidebarLabel">Platform</SidebarGroupLabel>
          <SidebarGroupContent data-component-x-ray="SidebarGroupContent">
            <SidebarMenu data-component-x-ray="SidebarMenu">
              <SidebarMenuItem
                v-for="item in menuItems"
                :key="item.title"
                data-component-x-ray-trigger="SidebarMenuItem"
              >
                <SidebarMenuButton
                  :as-child="true"
                  data-component-x-ray-trigger="SidebarMenuButton"
                >
                  <div class="flex items-center gap-2">
                    <component :is="item.icon" class="size-4" />
                    <span>{{ item.title }}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter data-component-x-ray="SidebarFooter" />
      <SidebarRail data-component-x-ray-trigger="SidebarRail" />
    </Sidebar>
  </SidebarProvider>
</template>

<style scoped>
/**
This is only for demo purposes to ensure the sidebar's fixed position doesn't cause it to overflow the parent container.
In a real application, you would typically use the sidebar in a layout where it can be fixed to the viewport without issues.

you can remove this style when using the sidebar in your application, or adjust it as needed to fit your layout.
*/
:global(.component-sidebar-demo [data-slot="sidebar"] > .fixed) {
  position: absolute;
  height: 100% !important;
}
</style>
`,ge={class:"flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"},xe={class:"flex items-center gap-2"},Se={class:"flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"},he={class:"flex items-center gap-2 px-4"},ve=c({__name:"SidebarCollapsible",setup(r){const d=[{title:"Home",icon:k,url:"#"},{title:"Dashboard",icon:R,url:"#"},{title:"Settings",icon:H,url:"#"},{title:"Profile",icon:L,url:"#"}];return(i,o)=>(s(),b(e($),{"cookie-name":"component-sidebar-demo",class:"component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"},{default:t(()=>[a(e(w),{collapsible:"icon","data-component-x-ray":"Sidebar"},{default:t(()=>[a(e(V),{"data-component-x-ray":"SidebarHeader"},{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[a(e(v),{"data-component-x-ray":"SidebarMenuItem"},{default:t(()=>[a(e(h),{size:"lg","data-component-x-ray":"SidebarMenuButton",class:"group-data-[collapsible=icon]:data-[size=lg]:p-0!"},{default:t(()=>[n("div",ge,[a(e(P),{class:"size-4"})]),o[0]||(o[0]=n("div",{class:"grid flex-1 text-left text-sm leading-tight"},[n("span",{class:"truncate font-semibold"},"Acme Inc"),n("span",{class:"truncate text-xs"},"Enterprise")],-1))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(T),{"data-component-x-ray":"SidebarContent"},{default:t(()=>[a(e(E),{"data-component-x-ray":"SidebarGroup"},{default:t(()=>[a(e(j),{"data-component-x-ray":"SidebarGroupLabel"},{default:t(()=>[...o[1]||(o[1]=[g("Platform",-1)])]),_:1}),a(e(F),null,{default:t(()=>[a(e(S),{"data-component-x-ray":"SidebarMenu"},{default:t(()=>[(s(),u(y,null,B(d,l=>a(e(v),{key:l.title,"data-component-x-ray-trigger":"SidebarMenuItem"},{default:t(()=>[a(e(h),{"as-child":!0,"data-component-x-ray-trigger":"SidebarMenuButton"},{default:t(()=>[n("div",xe,[(s(),b(I(l.icon),{class:"size-4"})),n("span",null,_(l.title),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),a(e(D),{"data-component-x-ray":"SidebarFooter"}),a(e(A),{"data-component-x-ray-trigger":"SidebarRail"})]),_:1}),a(e(G),{class:"min-h-0 overflow-hidden","data-component-x-ray":"SidebarInset"},{default:t(()=>[n("header",Se,[n("div",he,[a(e(z),{class:"-ml-1","data-component-x-ray-trigger":"SidebarTrigger"})])]),o[2]||(o[2]=n("div",{class:"flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0"},[n("div",{class:"grid auto-rows-min gap-4 md:grid-cols-3"},[n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"}),n("div",{class:"aspect-video rounded-xl bg-muted/50"})]),n("div",{class:"min-h-0 flex-1 rounded-xl bg-muted/50"})],-1))]),_:1})]),_:1}))}}),ye=C(ve,[["__scopeId","data-v-eb880167"]]),_e=`<script setup lang="ts">
import {
  GalleryVerticalEndIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: HomeIcon, url: "#" },
  { title: "Dashboard", icon: LayoutDashboardIcon, url: "#" },
  { title: "Settings", icon: SettingsIcon, url: "#" },
  { title: "Profile", icon: UserIcon, url: "#" },
];
<\/script>

<template>
  <SidebarProvider
    cookie-name="component-sidebar-demo"
    class="component-sidebar-demo relative h-full overflow-hidden rounded-[10px] border"
  >
    <Sidebar collapsible="icon" data-component-x-ray="Sidebar">
      <SidebarHeader data-component-x-ray="SidebarHeader">
        <SidebarMenu data-component-x-ray="SidebarMenu">
          <SidebarMenuItem data-component-x-ray="SidebarMenuItem">
            <SidebarMenuButton
              size="lg"
              data-component-x-ray="SidebarMenuButton"
              class="group-data-[collapsible=icon]:data-[size=lg]:p-0!"
            >
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEndIcon class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Acme Inc</span>
                <span class="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent data-component-x-ray="SidebarContent">
        <SidebarGroup data-component-x-ray="SidebarGroup">
          <SidebarGroupLabel data-component-x-ray="SidebarGroupLabel">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu data-component-x-ray="SidebarMenu">
              <SidebarMenuItem
                v-for="item in menuItems"
                :key="item.title"
                data-component-x-ray-trigger="SidebarMenuItem"
              >
                <SidebarMenuButton
                  :as-child="true"
                  data-component-x-ray-trigger="SidebarMenuButton"
                >
                  <div class="flex items-center gap-2">
                    <component :is="item.icon" class="size-4" />
                    <span>{{ item.title }}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter data-component-x-ray="SidebarFooter" />
      <SidebarRail data-component-x-ray-trigger="SidebarRail" />
    </Sidebar>
    <SidebarInset class="min-h-0 overflow-hidden" data-component-x-ray="SidebarInset">
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" data-component-x-ray-trigger="SidebarTrigger" />
        </div>
      </header>
      <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-0 flex-1 rounded-xl bg-muted/50" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>
/**
This is only for demo purposes to ensure the sidebar's fixed position doesn't cause it to overflow the parent container.
In a real application, you would typically use the sidebar in a layout where it can be fixed to the viewport without issues.

you can remove this style when using the sidebar in your application, or adjust it as needed to fit your layout.
*/
:global(.component-sidebar-demo [data-slot="sidebar"] > .fixed) {
  position: absolute;
  height: 100% !important;
}
</style>
`,Ie={class:"@container max-w-full mx-auto"},Me={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},Pe=c({__name:"_Examples",setup(r){return(d,i)=>(s(),u("div",Ie,[n("div",Me,[a(M,{"raw-component":e(se),class:"col-span-1 @xl:col-span-2"},{title:t(()=>[...i[0]||(i[0]=[g(" Basic ",-1)])]),example:t(()=>[a(de)]),_:1},8,["raw-component"]),a(M,{"raw-component":e(fe),class:"col-span-1 @xl:col-span-2"},{title:t(()=>[...i[1]||(i[1]=[g(" Right-aligned ",-1)])]),example:t(()=>[a(me)]),_:1},8,["raw-component"]),a(M,{"raw-component":e(_e),class:"col-span-1 @xl:col-span-2"},{title:t(()=>[...i[2]||(i[2]=[g(" Collapsible ",-1)])]),example:t(()=>[a(ye)]),_:1},8,["raw-component"])])]))}});export{Pe as default};
