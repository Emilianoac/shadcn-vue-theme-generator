<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ref } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { X } from "lucide-vue-next";
import { DialogClose, DialogContent, DialogPortal, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

/**
 * [SHADCN-VUE THEME GENERATOR CUSTOMIZATION]
 * Added zIndex prop to DialogContent for better control over stacking order in complex UIs.
 * This allows dialogs to be layered appropriately, especially when multiple dialogs or overlays are present.
 * Default zIndex is set to 50, which is standard for most dialogs, but can be increased for critical dialogs that must stay on top (e.g., zIndex: 2147483647).
 *
 * Additionally, added support for a "to" prop to specify a portal target, allowing dialogs to render within a specific container (like #examples-container) instead of the body. This is particularly useful in scenarios like ComponentXRay where you want the dialog to coexist with other UI elements without blocking interactions.
 *
 * The component also manages a local overlay state to ensure that only the currently open dialog instance renders a dimmer, preventing issues with stacked/inactive overlays when multiple dialogs are used in the same context.
 *
 * CHANGE LOG:
 * 1. Added zIndex prop with default value of 50 for dialog content.
 * 2. Implemented local overlay state to control visibility of the dimmer only for the active dialog instance.
 * 3. Added event handlers for openAutoFocus and closeAutoFocus to manage overlay visibility when the dialog opens and closes.
 * 4. Updated the template to render the portal inside a specified container (e.g., #examples-container) instead of the body, and adjusted
 */

const props = withDefaults(
  defineProps<
    DialogContentProps & {
      class?: HTMLAttributes["class"];
      showCloseButton?: boolean;
      zIndex?: number;
      to?: string;
    }
  >(),
  {
    showCloseButton: true,
    zIndex: 50,
  },
);
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = reactiveOmit(props, "class", "zIndex");

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// Custom changes from SHADCN-VUE THEME GENERATOR:
const isOverlayVisible = ref(false);
function handleOpenAutoFocus(event: Event): void {
  isOverlayVisible.value = true;
  emits("openAutoFocus", event);
}

function handleCloseAutoFocus(event: Event): void {
  isOverlayVisible.value = false;
  emits("closeAutoFocus", event);
}
</script>

<template>
  <DialogPortal :to="props.to || undefined">
    <DialogContent
      data-slot="dialog-content"
      v-bind="{ ...$attrs, ...forwarded }"
      @open-auto-focus="handleOpenAutoFocus"
      @close-auto-focus="handleCloseAutoFocus"
      :class="
        cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 absolute top-[50%] left-[50%] grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          props.class,
        )
      "
      :style="{ zIndex: props.zIndex }"
    >
      <slot />

      <DialogClose
        v-if="showCloseButton"
        data-slot="dialog-close"
        class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        <X />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
    <div
      v-if="isOverlayVisible"
      data-slot="alert-dialog-overlay"
      class="pointer-events-auto absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"
    />
  </DialogPortal>
</template>
