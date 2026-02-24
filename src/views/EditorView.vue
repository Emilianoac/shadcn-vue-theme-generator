<script setup lang="ts">
import EditorSidebar from "@/components/editor/EditorSidebar.vue";
import EditorExamples from "@/components/editor/EditorExamples.vue";
import EditorHeader from "@/components/editor/EditorHeader.vue";
import EditorThemeSelector from "@/components/editor/EditorThemeSelector.vue";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/composables/useTheme";

const { theme, themeId, setTheme } = useTheme();
</script>

<template>
  <div class="flex flex-col h-screen [--header-height:44px]">
    <EditorHeader class="h-(--header-height) shrink-0 border-b" />
    <SidebarProvider class="flex-1! min-h-0! overflow-hidden! [--sidebar-width:17rem]!">
      <SidebarInset class="flex flex-col min-h-0! overflow-hidden min-w-0!">
        <header class="flex justify-between h-14 items-center gap-2 px-4 border-b shrink-0">
          <EditorThemeSelector
            class="relative"
            :current-theme-name="theme.name"
            :current-theme-id="themeId"
            @select="(id) => setTheme(id)"
          />
          <SidebarTrigger />
        </header>

        <main class="flex-1 overflow-y-hidden p-4">
          <EditorExamples />
        </main>
      </SidebarInset>
      <EditorSidebar class="top-(--header-height)! h-[calc(100svh-var(--header-height))]!" />
    </SidebarProvider>
  </div>
</template>
