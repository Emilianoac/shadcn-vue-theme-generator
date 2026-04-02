<script setup lang="ts">
import { computed } from "vue";
import type { HoveredElementInfo } from "@/shared/services/componentXRay/componentXRay.interface";
import { componentXRayService } from "@/shared/services/componentXRay/componentXRayService";

const props = defineProps<{
  isActive: boolean;
  hoveredElement: HoveredElementInfo | null;
}>();

const borderStyle = computed(() => {
  if (!props.hoveredElement || !props.isActive) return { display: "none" };

  const rect = props.hoveredElement.rect;

  const styles = {
    component: {
      border: "2px dotted dodgerblue",
      backgroundColor: "rgba(30, 144, 255, 0.1)",
    },
    trigger: {
      border: "2px dotted orange",
      backgroundColor: "rgba(255, 165, 0, 0.1)",
    },
    internal: {
      border: "2px dotted limegreen",
      backgroundColor: "rgba(50, 205, 50, 0.1)",
    },
  };

  const elementStyle = styles[props.hoveredElement.elementType];

  return {
    position: "fixed" as const,
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    zIndex: 2147483646,
    border: elementStyle.border,
    pointerEvents: "none" as const,
    backgroundColor: elementStyle.backgroundColor,
    borderRadius: "4px",
  };
});

const tooltipStyle = computed(() => {
  if (!props.hoveredElement || !props.isActive) {
    return { display: "none" };
  }

  const rect = props.hoveredElement.rect;
  return {
    position: "fixed" as const,
    left: `${rect.left + rect.width / 2}px`,
    top: `${rect.top - 50}px`,
    transform: "translateX(-50%)",
    zIndex: 2147483647,
    color: "#f3f4f6",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    pointerEvents: "none" as const,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };
});

const hoveredLabel = computed(() => {
  if (!props.hoveredElement) return "";
  return componentXRayService.extractElementLabel(props.hoveredElement.element);
});

const tooltipContent = computed(() => {
  if (!props.hoveredElement) return "";

  if (props.hoveredElement.isTrigger) {
    return `${hoveredLabel.value} (trigger) - Ctrl+Click to inspect`;
  }

  if (props.hoveredElement.elementType === "internal") {
    const tagName = props.hoveredElement.element.tagName.toLowerCase();
    return `Internal element: <${tagName}>`;
  }

  return hoveredLabel.value;
});
</script>

<template>
  <Teleport to="body">
    <div v-if="hoveredElement && isActive" :style="borderStyle" />
    <div
      v-if="hoveredElement && isActive"
      :style="tooltipStyle"
      class="bg-foreground! text-background!"
    >
      {{ tooltipContent }}
    </div>
  </Teleport>
</template>
