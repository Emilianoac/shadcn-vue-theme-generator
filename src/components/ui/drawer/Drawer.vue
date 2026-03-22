<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from "vaul-vue";
import { reactiveOmit } from "@vueuse/core";
import { useForwardPropsEmits } from "reka-ui";
import { DrawerRoot } from "vaul-vue";

/**
 * SHADCN-VUE THEME GENERATOR CUSTOMIZATION:
 * - Added `modal` prop to control whether the drawer should be modal or not.
 */
const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
  modal: false,
});

const emits = defineEmits<DrawerRootEmits>();
const delegatedProps = reactiveOmit(props, "modal");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DrawerRoot v-slot="slotProps" data-slot="drawer" v-bind="forwarded" :modal="props.modal">
    <slot v-bind="slotProps" />
  </DrawerRoot>
</template>
