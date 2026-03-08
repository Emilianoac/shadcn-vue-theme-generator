<script setup lang="ts">
import type { MappedColorClass } from "@/services/componentXRay/componentXRay.interface";

defineProps<{
  inactiveClasses: MappedColorClass[];
}>();
</script>

<template>
  <div v-if="inactiveClasses.length > 0" class="border-t pt-6 mt-6">
    <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
      Inactive Classes
    </h3>
    <div class="space-y-2">
      <div
        v-for="(mapped, idx) in inactiveClasses"
        :key="`inactive-${idx}`"
        class="flex items-center justify-between gap-4 bg-muted/30 px-4 py-3 rounded-lg opacity-60"
      >
        <div class="flex-1 min-w-0">
          <p class="font-medium text-sm mb-1 text-muted-foreground">
            {{ mapped.label }}
          </p>
          <code class="text-xs text-muted-foreground/70 font-mono select-text break-all">
            {{ mapped.className }}
          </code>
          <p v-if="mapped.arbitraryVariant" class="text-xs text-muted-foreground/60 mt-1">
            Condition: <strong>[{{ mapped.arbitraryVariant }}]</strong> is not active
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
