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
    class="rounded-lg border"
    data-component-x-ray-trigger="ResizablePanelGroup"
  >
    <ResizablePanel :default-size="50" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-50 items-center justify-center p-6">
        <span class="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle data-component-x-ray-trigger="ResizableHandle" />
    <ResizablePanel :default-size="50" data-component-x-ray-trigger="ResizablePanel">
      <ResizablePanelGroup direction="vertical" data-component-x-ray-trigger="ResizablePanelGroup">
        <ResizablePanel :default-size="25" data-component-x-ray-trigger="ResizablePanel">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Two</span>
          </div>
        </ResizablePanel>
        <ResizableHandle data-component-x-ray-trigger="ResizableHandle" />
        <ResizablePanel :default-size="75" data-component-x-ray-trigger="ResizablePanel">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style lang="postcss" scoped></style>
