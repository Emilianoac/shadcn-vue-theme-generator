<script lang="ts" setup>
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/components/ui/resizable";
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="min-h-50 rounded-lg border"
    data-component-x-ray-trigger="ResizablePanelGroup"
  >
    <ResizablePanel :default-size="25" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Sidebar</span>
      </div>
    </ResizablePanel>
    <ResizableHandle :with-handle="true" data-component-x-ray-trigger="ResizableHandle" />
    <ResizablePanel :default-size="75" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Content</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style lang="postcss" scoped></style>
