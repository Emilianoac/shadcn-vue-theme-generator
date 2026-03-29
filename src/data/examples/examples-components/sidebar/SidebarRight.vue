<script setup lang="ts">
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
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: HomeIcon, url: "#" },
  { title: "Dashboard", icon: LayoutDashboardIcon, url: "#" },
  { title: "Settings", icon: SettingsIcon, url: "#" },
  { title: "Profile", icon: UserIcon, url: "#" },
];
</script>

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
