<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, defineAsyncComponent, watch, nextTick } from "vue";
import examples from "@/shared/data/examples";
import { objectToCssVariables } from "@/shared/services/theme/themeCode.utils";
import type { AppSyncMessage } from "./usePreviewSync";
import { usePreviewBridge } from "./usePreviewBridge";
import "vue-sonner/style.css";
import { Toaster } from "@/shared/components/ui/sonner";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import ComponentXRay from "@/apps/preview/components/component-xray/ComponentXRay.vue";
import { useComponentXRay } from "@/shared/composables/useComponentXRay";

const { activate, deactivate, isActive } = useComponentXRay();

const exampleId = ref<string | null>(null);

window.addEventListener("message", (event) => {
  const data = event.data;

  if (data.type === "LOAD_EXAMPLE") {
    exampleId.value = data.exampleId;
  }
});

const allExamples = [...examples.blocks.items, ...examples.components.items];

const activeExample = computed(
  () => allExamples.find((item) => item.id === exampleId.value) ?? null,
);
const AsyncRender = computed(() => {
  if (!activeExample.value) return null;
  return defineAsyncComponent({
    loader: activeExample.value.component,
    delay: 200,
    timeout: 3000,
  });
});

const styleEl = ref<HTMLStyleElement | null>(null);
function applyThemeVars(msg: AppSyncMessage) {
  if (!styleEl.value) {
    styleEl.value = document.createElement("style");
    styleEl.value.id = "preview-theme-vars";
    document.head.appendChild(styleEl.value);
  }

  styleEl.value.textContent = `
    :root {
      ${objectToCssVariables(msg.theme.light)}
    }
    :root.dark {
      ${objectToCssVariables(msg.theme.dark)}
    }
  `;
  isActive.value = msg.componentXRayActive;
}

onMounted(() => {
  activate();
});

onUnmounted(() => {
  deactivate();
});

usePreviewBridge((msg) => {
  applyThemeVars(msg);
});

watch(activeExample, async () => {
  await nextTick();

  window.parent.postMessage(
    {
      type: "EXAMPLE_LOADED",
    },
    "*",
  );
});
</script>

<template>
  <ScrollArea class="h-screen w-full">
    <ComponentXRay />
    <div
      v-if="activeExample && AsyncRender"
      class="w-full min-h-screen flex items-start justify-center p-4 md:p-8 bg-background text-foreground"
    >
      <div
        id="examples-container"
        class="w-full max-w-full min-h-0"
        :class="[
          'previewLayout' in activeExample &&
            activeExample.previewLayout === 'full-height' &&
            'min-h-screen',
        ]"
      >
        <KeepAlive>
          <component :is="AsyncRender" />
        </KeepAlive>
      </div>
      <Toaster position="top-center" />
    </div>

    <div v-else class="flex items-center justify-center min-h-screen text-muted-foreground text-sm">
      Component not found
    </div>
  </ScrollArea>
</template>
