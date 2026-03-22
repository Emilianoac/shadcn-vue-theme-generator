<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ref } from "vue";
import { useForwardPropsEmits } from "reka-ui";
import { DrawerContent, DrawerPortal } from "vaul-vue";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes["class"];
    to?: string;
  }
>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);

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
  <DrawerPortal :to="props.to || undefined">
    <DrawerContent
      data-slot="drawer-content"
      v-bind="{ ...$attrs, ...forwarded }"
      @open-auto-focus="handleOpenAutoFocus"
      @close-auto-focus="handleCloseAutoFocus"
      :class="
        cn(
          'group/drawer-content bg-background absolute z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm',
          props.class,
        )
      "
    >
      <div
        class="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
      />
      <slot />
    </DrawerContent>
    <div
      v-if="isOverlayVisible"
      data-slot="alert-dialog-overlay"
      class="pointer-events-auto absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"
    />
  </DrawerPortal>
</template>
