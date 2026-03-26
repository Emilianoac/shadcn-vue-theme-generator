<script lang="ts" setup>
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
</script>

<template>
  <ResizablePanelGroup
    direction="vertical"
    class="min-h-50 rounded-lg border"
    data-component-x-ray-trigger="ResizablePanelGroup"
  >
    <ResizablePanel :default-size="25" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Header</span>
      </div>
    </ResizablePanel>
    <ResizableHandle data-component-x-ray-trigger="ResizableHandle" />
    <ResizablePanel :default-size="75" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Content</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style lang="postcss" scoped></style>
