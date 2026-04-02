import { computed, ref } from "vue";
import { useComponentXRay } from "@/shared/composables/useComponentXRay";
import type { MappedColorClass } from "@/shared/services/componentXRay/componentXRay.interface";

type ColorType = "background" | "text" | "border" | "ring" | "placeholder" | "other";

const typeLabels: Record<ColorType, string> = {
  background: "Background",
  text: "Text",
  border: "Border",
  ring: "Ring",
  placeholder: "Placeholder",
  other: "Other",
};

export function useComponentXRayUi() {
  const {
    isActive,
    hoveredElement,
    isDialogOpen,
    dialogMappedClasses,
    elementLabel,
    elementTagName,
    isInspectingComponent,
  } = useComponentXRay();

  const isNavigatingToInput = ref(false);

  function handleCloseAutoFocus(event: Event): void {
    if (!isNavigatingToInput.value) return;

    event.preventDefault();
    isNavigatingToInput.value = false;
  }

  function navigateToThemeInput(themeKey: string): void {
    isNavigatingToInput.value = true;
    isDialogOpen.value = false;

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("xray:focus-theme-color", {
          detail: { themeKey },
        }),
      );
    }, 0);
  }

  const groupedClasses = computed(() => {
    const groups: Record<ColorType, MappedColorClass[]> = {
      background: [],
      text: [],
      border: [],
      ring: [],
      placeholder: [],
      other: [],
    };

    dialogMappedClasses.value.forEach((mapped) => {
      if (mapped.conditionMet !== false) {
        const colorType = mapped.type as ColorType;
        if (groups[colorType]) {
          groups[colorType].push(mapped);
        }
      }
    });

    return groups;
  });

  const inactiveClasses = computed(() => {
    return dialogMappedClasses.value.filter((mapped) => mapped.conditionMet === false);
  });

  return {
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
  };
}
