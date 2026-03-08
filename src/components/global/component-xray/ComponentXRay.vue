<script setup lang="ts">
import { useComponentXRayUi } from "./useComponentXRayUi";
import ComponentXRayOverlay from "./ComponentXRayOverlay.vue";
import ComponentXRayDialog from "./ComponentXRayDialog.vue";

const {
  isActive,
  hoveredElement,
  isDialogOpen,
  dialogMappedClasses,
  elementLabel,
  elementTagName,
  isInspectingComponent,
  groupedClasses,
  inactiveClasses,
  typeLabels,
  handleCloseAutoFocus,
  navigateToThemeInput,
} = useComponentXRayUi();
</script>

<template>
  <div class="component-xray">
    <ComponentXRayOverlay :is-active="isActive" :hovered-element="hoveredElement" />

    <ComponentXRayDialog
      v-model:is-open="isDialogOpen"
      :element-label="elementLabel"
      :element-tag-name="elementTagName"
      :is-component="isInspectingComponent"
      :dialog-mapped-classes="dialogMappedClasses"
      :grouped-classes="groupedClasses"
      :inactive-classes="inactiveClasses"
      :type-labels="typeLabels"
      @close-auto-focus="handleCloseAutoFocus"
      @navigate="navigateToThemeInput"
    />
  </div>
</template>
