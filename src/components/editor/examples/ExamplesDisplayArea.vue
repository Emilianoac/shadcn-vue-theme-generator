<script lang="ts" setup>
import type { Example } from "@/data/examples";
import { ExternalLink } from "lucide-vue-next";
import { ref, watch, onMounted } from "vue";
import { usePreviewSync } from "@/apps/preview/usePreviewSync";
import { Spinner } from "@/components/ui/spinner";

const props = defineProps<{
  currentExample: Example | null;
}>();

const isLoading = ref(true);
const iframeRef = ref<HTMLIFrameElement | null>(null);
const iframeURL = `${import.meta.env.BASE_URL}/preview.html`;
const { startSync, sendToIframe } = usePreviewSync();
startSync(() => iframeRef.value);

function onIframeLoad() {
  if (iframeRef.value) {
    sendToIframe(iframeRef.value);
    iframeRef.value?.contentWindow?.postMessage(
      {
        type: "LOAD_EXAMPLE",
        exampleId: props.currentExample?.id,
      },
      "*",
    );
  }
}

watch(
  () => props.currentExample?.id,
  () => {
    if (!iframeRef.value) return;
    isLoading.value = true;

    iframeRef.value.contentWindow?.postMessage(
      {
        type: "LOAD_EXAMPLE",
        exampleId: props.currentExample?.id,
      },
      "*",
    );
  },
);

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data?.type === "EXAMPLE_LOADED") {
      console.log("Example loaded in iframe");
      isLoading.value = false;
    }
  });
});
</script>

<template>
  <!-- Example Display Area -->
  <div class="flex gap-4 flex-col overflow-hidden" v-if="currentExample">
    <div class="flex justify-between items-center flex-wrap gap-4 p-1">
      <div class="space-y-1">
        <h2 class="font-bold text-sm">{{ currentExample.name }}</h2>
        <p class="max-w-200 text-muted-foreground text-sm" v-if="currentExample.description">
          {{ currentExample.description }}
        </p>
      </div>

      <a
        v-if="currentExample.componentSourceCodeUrl"
        :href="currentExample.componentSourceCodeUrl"
        target="_blank"
        class="text-sm hover:underline inline-block rounded-sm"
      >
        Component Source Code <ExternalLink class="inline-block ml-1" :size="16" />
      </a>
    </div>

    <div
      id="examples-container"
      class="relative border rounded-lg w-full min-h-0 flex flex-col flex-1 overflow-hidden"
    >
      <iframe
        ref="iframeRef"
        :src="iframeURL"
        class="w-full flex-1 border-none"
        @load="onIframeLoad"
      />

      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-background/40 z-10 backdrop-blur-lg"
      >
        <Spinner />
        <span>Loading Example...</span>
      </div>
    </div>
  </div>
</template>
