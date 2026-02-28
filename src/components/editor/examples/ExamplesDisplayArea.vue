<script lang="ts" setup>
import type { ComponentExample } from "@/data/examples";
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";

defineProps<{
  currentComponent: ComponentExample | null;
}>();
</script>

<template>
  <!-- Example Display Area -->
  <div class="flex gap-4 flex-col overflow-hidden" v-if="currentComponent">
    <div>
      <h2 class="font-bold mb-1">{{ currentComponent.name }}</h2>
      <p class="max-w-150 text-muted-foreground text-sm" v-if="currentComponent.description">
        {{ currentComponent.description }}
      </p>
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
