<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import ComponentXRayColorItem from "./ComponentXRayColorItem.vue";
import ComponentXRayInactiveClasses from "./ComponentXRayInactiveClasses.vue";
import type { MappedColorClass } from "@/shared/services/componentXRay/componentXRay.interface";

type ColorType = "background" | "text" | "border" | "ring" | "placeholder" | "other";

defineProps<{
  isOpen: boolean;
  elementLabel: string;
  elementTagName: string;
  isComponent: boolean;
  dialogMappedClasses: MappedColorClass[];
  groupedClasses: Record<ColorType, MappedColorClass[]>;
  inactiveClasses: MappedColorClass[];
  typeLabels: Record<ColorType, string>;
}>();

const emit = defineEmits<{
  "update:isOpen": [value: boolean];
  "closeAutoFocus": [event: Event];
  "navigate": [themeKey: string];
}>();
</script>

<template>
  <Dialog :open="isOpen" @update:open="emit('update:isOpen', $event)">
    <DialogContent class="z-2147483647" @close-auto-focus="emit('closeAutoFocus', $event)">
      <DialogHeader>
        <DialogTitle>
          <template v-if="isComponent">{{ elementLabel }} Component</template>
          <template v-else>&lt;{{ elementTagName }}&gt; Element</template>
        </DialogTitle>
        <DialogDescription>
          {{ dialogMappedClasses.length }} variable{{
            dialogMappedClasses.length !== 1 ? "s" : ""
          }}
          of color detected in this {{ isComponent ? "component" : "element" }}.
          <br class="mt-2" />
        </DialogDescription>
      </DialogHeader>
      <ScrollArea class="max-h-[40vh] w-full">
        <div class="space-y-6 pr-4">
          <div
            v-for="(items, type) in groupedClasses"
            :key="type"
            v-show="items.length > 0"
            class="space-y-3"
          >
            <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {{ typeLabels[type as keyof typeof typeLabels] }}
            </h3>
            <div class="space-y-2">
              <ComponentXRayColorItem
                v-for="(mapped, idx) in items"
                :key="idx"
                :mapped="mapped"
                @navigate="emit('navigate', $event)"
              />
            </div>
          </div>

          <ComponentXRayInactiveClasses :inactive-classes="inactiveClasses" />

          <div v-if="dialogMappedClasses.length === 0" class="text-center py-8">
            <p class="text-muted-foreground">No theme variables found</p>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>
