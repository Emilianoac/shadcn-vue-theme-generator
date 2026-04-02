<script setup lang="ts">
import EditorSidebar from "@/apps/main/components/editor/EditorSidebar.vue";
import EditorExamples from "@/apps/main/components/editor/EditorExamples.vue";
import EditorHeader from "@/apps/main/components/editor/EditorHeader.vue";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import EditorActions from "@/apps/main/components/editor/EditorActions.vue";
</script>

<template>
  <div class="flex flex-col h-auto md:h-screen [--header-height:44px]">
    <EditorHeader class="h-(--header-height) shrink-0 border-b" />
    <SidebarProvider class="flex-1! min-h-0! overflow-hidden! [--sidebar-width:17rem]!">
      <SidebarInset class="flex flex-col min-h-0! overflow-hidden min-w-0!">
        <EditorActions>
          <template #sidebar-trigger>
            <SidebarTrigger />
          </template>
        </EditorActions>
        <main class="flex-1 overflow-y-hidden p-4">
          <EditorExamples />
        </main>
      </SidebarInset>
      <EditorSidebar class="top-(--header-height)! h-[calc(100svh-var(--header-height))]!" />
    </SidebarProvider>
  </div>
</template>
