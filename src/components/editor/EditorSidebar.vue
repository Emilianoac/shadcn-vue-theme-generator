<script lang="ts" setup>
import { Sidebar } from "@/components/ui/sidebar";
import SidebarTabs from "@/components/editor/sidebar/SidebarTabs.vue";
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<template>
  <Sidebar side="right">
    <div class="relative flex h-full flex-1 flex-col bg-background">
      <div class="flex min-h-0 w-full flex-1 flex-col">
        <div class="flex min-h-0 flex-1 flex-col space-y-4 mb-3">
          <ScrollArea class=" ">
            <SidebarTabs />
          </ScrollArea>
        </div>
      </div>
    </div>
  </Sidebar>
</template>

<style lang="postcss" scoped></style>
