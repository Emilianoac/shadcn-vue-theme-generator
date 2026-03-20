<script setup lang="ts">
import type { AlertDialogContentEmits, AlertDialogContentProps } from "reka-ui";
import { ref } from "vue";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AlertDialogContent, AlertDialogPortal, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  AlertDialogContentProps & {
    class?: HTMLAttributes["class"];
    // SHADCN-VUE THEME GENERATOR CUSTOMIZATION: Allow optional "to" prop for portal target, defaulting to body if not provided.
    to?: string;
  }
>();
const emits = defineEmits<AlertDialogContentEmits>();

const delegatedProps = reactiveOmit(props, "class");

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
  <!-- CHANGE 4: Portal target is examples container to scope dialog and overlay within preview area. -->
  <AlertDialogPortal :to="props.to || undefined">
    <!-- CHANGE 5: Dialog content is positioned absolute so it is scoped to examples container. -->
    <AlertDialogContent
      data-slot="alert-dialog-content"
      v-bind="{ ...$attrs, ...forwarded }"
      @open-auto-focus="handleOpenAutoFocus"
      @close-auto-focus="handleCloseAutoFocus"
      :class="
        cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 absolute top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          props.class,
        )
      "
    >
      <slot />
    </AlertDialogContent>
    <!-- CHANGE 6: Local overlay is custom, blocks clicks behind it, and is only visible while open. -->
    <div
      v-if="isOverlayVisible"
      data-slot="alert-dialog-overlay"
      class="pointer-events-auto absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"
    />
  </AlertDialogPortal>
</template>
