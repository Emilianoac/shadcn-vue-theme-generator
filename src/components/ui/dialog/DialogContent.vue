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

// Optional zIndex prop allows customization of dialog content stacking order
// Default: 50 (standard for most dialogs)
// Use higher values (e.g., 2147483647) for critical dialogs that must stay on top
const props = withDefaults(
  defineProps<
    DialogContentProps & {
      class?: HTMLAttributes["class"];
      showCloseButton?: boolean;
      zIndex?: number;
      // Optional prop to specify portal target, allowing dialog to render within a specific container instead of body.
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

// CHANGE 1: Track local overlay state so only the currently open dialog instance renders a dimmer.
const isOverlayVisible = ref(false);

function handleOpenAutoFocus(event: Event): void {
  // CHANGE 2: When dialog opens, enable local overlay for this instance.
  isOverlayVisible.value = true;
  emits("openAutoFocus", event);
}

function handleCloseAutoFocus(event: Event): void {
  // CHANGE 3: When dialog closes, hide local overlay to avoid stacked/inactive overlays.
  isOverlayVisible.value = false;
  emits("closeAutoFocus", event);
}
</script>

<template>
  <!--
    SHADCN-VUE THEME GENERATOR CUSTOMIZATION:
    Portal to #examples-container instead of body to scope dialog rendering to the preview area.
    This allows ComponentXRay dialog to coexist with example dialogs, enabling live color preview
    while inspecting dialog components without closing the source dialog.

    Changed:
    - AlertDialogPortal: added to="#examples-container"
    - Overlay: fixed → absolute (positioned relative to container)
    - Content: fixed → absolute (positioned relative to container)
    - Custom local overlay only when content is open
  -->
  <!-- CHANGE 4: Render portal inside examples container instead of body. -->
  <DialogPortal :to="props.to || undefined">
    <!-- CHANGE 5: Dialog content is positioned absolute so it is scoped to examples container. -->
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
    <!-- CHANGE 6: Local overlay is custom, blocks clicks behind it, and is only visible while open. -->
    <div
      v-if="isOverlayVisible"
      data-slot="alert-dialog-overlay"
      class="pointer-events-auto absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"
    />
  </DialogPortal>
</template>
