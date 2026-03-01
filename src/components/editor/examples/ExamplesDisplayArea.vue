<script lang="ts" setup>
import type { ComponentExample } from "@/data/examples";
import "vue-sonner/style.css";
import { ExternalLink } from "lucide-vue-next";
import { Toaster } from "@/components/ui/sonner";

defineProps<{
  currentComponent: ComponentExample | null;
}>();
</script>

<template>
  <!-- Example Display Area -->
  <div class="flex gap-4 flex-col overflow-hidden" v-if="currentComponent">
    <div class="flex justify-between items-center flex-wrap gap-2 p-1">
      <div>
        <h2 class="font-bold mb-1">{{ currentComponent.name }}</h2>
        <p class="max-w-150 text-muted-foreground text-sm" v-if="currentComponent.description">
          {{ currentComponent.description }}
        </p>
      </div>

      <a
        v-if="currentComponent.componentSourceCodeUrl"
        :href="currentComponent.componentSourceCodeUrl"
        target="_blank"
        class="text-sm hover:underline inline-block rounded-sm"
      >
        Component Source Code <ExternalLink class="inline-block ml-1" :size="16" />
      </a>
    </div>
    <div
      id="examples-container"
      class="p-4 md:p-8 border rounded-lg overflow-y-auto overflow-x-hidden w-full min-h-0 flex justify-center items-start flex-1 relative"
    >
      <div
        :class="[
          'w-full max-w-full min-h-0',
          'previewLayout' in currentComponent &&
            currentComponent.previewLayout === 'full-height' &&
            'h-full',
        ]"
      >
        <component :is="currentComponent.component" :key="currentComponent.id" />
      </div>
      <Toaster position="top-center" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
:global(#examples-container [data-sonner-toaster]) {
  position: absolute !important;
  z-index: 60;
}
</style>
