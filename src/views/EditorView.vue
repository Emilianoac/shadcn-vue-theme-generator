<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import EditorSidebar from "@/components/editor/EditorSidebar.vue";
import EditorExamples from "@/components/editor/EditorExamples.vue";
import EditorHeader from "@/components/editor/EditorHeader.vue";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import EditorActions from "@/components/editor/EditorActions.vue";
import ComponentXRay from "@/components/global/component-xray/ComponentXRay.vue";
import { useComponentXRay } from "@/composables/useComponentXRay";

const { activate, deactivate } = useComponentXRay();

onMounted(() => {
  activate();
});

onUnmounted(() => {
  deactivate();
});
</script>

<template>
  <div class="flex flex-col h-auto md:h-screen [--header-height:44px]">
    <ComponentXRay />
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
