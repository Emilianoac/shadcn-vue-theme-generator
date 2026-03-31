<script setup lang="ts">
import { computed } from "vue";
import { checkContrast, formatContrastRatio, WCAGLevel } from "@/lib/utils/wcagContrast";
import { Badge } from "@/components/ui/badge";

interface Props {
  background: string;
  foreground: string;
}

const props = defineProps<Props>();

const contrastResult = computed(() => checkContrast(props.background, props.foreground));

const badgeVariant = computed(() => {
  if (!contrastResult.value) return "secondary";

  switch (contrastResult.value.level) {
    case WCAGLevel.AAA:
      return "default";
    case WCAGLevel.AA:
      return "secondary";
    case WCAGLevel.FAIL:
      return "destructive";
    default:
      return "secondary";
  }
});

const ratioText = computed(() => {
  return contrastResult.value ? formatContrastRatio(contrastResult.value.ratio) : "N/A";
});

const accessibilityText = computed(() => {
  return contrastResult.value?.passAA ? "Accessible" : "Not Accessible";
});
</script>

<template>
  <div class="rounded-sm border bg-muted/30 p-3 space-y-2">
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs font-medium text-muted-foreground">WCAG Contrast</span>
      <Badge
        v-if="contrastResult"
        :variant="badgeVariant"
        class="h-5 px-1.5 text-[10px] font-semibold"
      >
        {{ contrastResult.level }}
      </Badge>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
          class="h-4 w-4 rounded border border-border/50"
          :style="{ backgroundColor: background }"
        />
        <span class="text-[10px] text-muted-foreground">-</span>
        <div
          class="h-4 w-4 rounded border border-border/50"
          :style="{ backgroundColor: foreground }"
        />
      </div>

      <div class="text-right">
        <div class="text-xs font-semibold">{{ ratioText }}</div>
        <div class="text-xs">{{ accessibilityText }}</div>
      </div>
    </div>
  </div>
</template>
