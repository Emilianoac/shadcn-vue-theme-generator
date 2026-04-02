<script lang="ts" setup>
import { ref } from "vue";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/components/ui/resizable";

const sizes = ref([30, 70]);
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="min-h-50 rounded-lg border"
    @layout="
      (newSizes) => {
        sizes = newSizes;
      }
    "
    data-component-x-ray-trigger="ResizablePanelGroup"
  >
    <ResizablePanel :default-size="30" :min-size="20" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
        <span class="font-semibold">{{ Math.round(sizes[0] ?? 30) }}%</span>
      </div>
    </ResizablePanel>
    <ResizableHandle data-component-x-ray-trigger="ResizableHandle" />
    <ResizablePanel :default-size="70" :min-size="30" data-component-x-ray-trigger="ResizablePanel">
      <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
        <span class="font-semibold">{{ Math.round(sizes[1] ?? 70) }}%</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style lang="postcss" scoped></style>
