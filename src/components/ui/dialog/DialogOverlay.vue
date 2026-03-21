<script setup lang="ts">
import type { DialogOverlayProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DialogOverlay } from "reka-ui";
import { cn } from "@/lib/utils";

// Optional zIndex prop allows customization of overlay stacking order
// Default: 50 (standard for most overlays)
// Use higher values (e.g., 2147483646) for critical overlays that must stay on top
const props = withDefaults(
  defineProps<DialogOverlayProps & { class?: HTMLAttributes["class"]; zIndex?: number }>(),
  {
    zIndex: 50,
  },
);

const delegatedProps = reactiveOmit(props, "class", "zIndex");
</script>

<template>
  <DialogOverlay
    data-slot="dialog-overlay"
    v-bind="delegatedProps"
    :class="
      cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
        props.class,
      )
    "
    :style="{ zIndex: props.zIndex }"
  >
    <slot />
  </DialogOverlay>
</template>
