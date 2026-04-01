<script setup lang="ts">
import { computed } from "vue";
import CoppyButton from "@/components/global/CoppyButton.vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import HighlightCode from "@/components/global/HighlightCode.vue";
import { themeService } from "@/services/theme/themeService";
import { useTheme } from "@/composables/useTheme";

const { theme } = useTheme();

const themeCode = computed(() => themeService.generateThemeCssCode(theme.value));
</script>

<template>
  <div class="border rounded-md overflow-hidden">
    <div
      class="flex items-center justify-between bg-muted/50 pl-4 pr-2 py-1 rounded-tl-md rounded-tr-md"
    >
      <span class="text-muted-foreground">Index.css</span>
      <CoppyButton :text-to-copy="themeCode" />
    </div>

    <ScrollArea class="h-[40vh] w-full">
      <HighlightCode lang="css" :code="themeCode" />
    </ScrollArea>
  </div>
</template>
