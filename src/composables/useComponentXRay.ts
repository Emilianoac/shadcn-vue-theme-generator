import { ref, watch } from "vue";
import type {
  MappedColorClass,
  HoveredElementInfo,
} from "@/services/componentXRay/componentXRay.interface";
import { componentXRayService } from "@/services/componentXRay/componentXRayService";

const isActive = ref(false);
const hoveredElement = ref<HoveredElementInfo | null>(null);
const isDialogOpen = ref(false);
const dialogMappedClasses = ref<MappedColorClass[]>([]);
const elementLabel = ref<string>("");
const elementTagName = ref<string>("");
const isInspectingComponent = ref(true);

export function useComponentXRay() {
  watch(isDialogOpen, (newValue) => {
    if (newValue) {
      hoveredElement.value = null;
    }
  });

  function handleScroll(): void {
    hoveredElement.value = null;
  }

  function toggle() {
    isActive.value = !isActive.value;
    if (!isActive.value) {
      hoveredElement.value = null;
    }
  }

  function handleHover(e: MouseEvent): void {
    if (!isActive.value) return;

    const resolved = componentXRayService.resolveMarkedElement(e.target);

    if (!resolved && hoveredElement.value?.isTrigger) {
      const target = e.target as Node | null;
      if (target && hoveredElement.value.element.contains(target)) {
        return;
      }
    }

    if (!resolved) {
      hoveredElement.value = null;
      return;
    }

    let targetElement = resolved.element;
    let elementType: "component" | "trigger" | "internal" = "internal";

    if (resolved.isTrigger) {
      elementType = "trigger";
    } else if (targetElement.hasAttribute("data-component-x-ray")) {
      elementType = "component";
    } else {
      // Check if this is a structural element inside a marked component
      const parentMarked = targetElement.closest("[data-component-x-ray]");
      if (parentMarked instanceof HTMLElement) {
        const tagName = targetElement.tagName.toLowerCase();
        const isStructuralElement = tagName === "div" || tagName === "section";

        if (isStructuralElement) {
          // Use the parent marked component instead
          targetElement = parentMarked;
          elementType = "component";
        }
      }
    }

    hoveredElement.value = {
      element: targetElement,
      rect: targetElement.getBoundingClientRect(),
      isTrigger: resolved.isTrigger,
      elementType,
    };
  }

  function handleLeave(): void {
    if (!isActive.value) return;

    hoveredElement.value = null;
  }

  function inspectElement(selectedElement: HTMLElement): void {
    const colorClasses = componentXRayService.extractColorClasses(selectedElement);
    console.log("🔍 Element:", selectedElement);
    console.log("🎨 Color classes extracted:", colorClasses);
    console.log("📋 Element classList:", Array.from(selectedElement.classList));

    const explicitMapped = colorClasses
      .map((cls) => componentXRayService.mapColorClassToTheme(cls, selectedElement))
      .filter((mapped): mapped is MappedColorClass => mapped !== null);

    console.log("✅ Explicit mapped:", explicitMapped);

    const inferredTokens = componentXRayService.inferBaseTokens(selectedElement, explicitMapped);
    console.log("💡 Inferred tokens:", inferredTokens);

    elementLabel.value = componentXRayService.extractElementLabel(selectedElement);
    elementTagName.value = selectedElement.tagName.toLowerCase();
    isInspectingComponent.value =
      selectedElement.hasAttribute("data-component-x-ray") ||
      selectedElement.hasAttribute("data-component-x-ray-trigger");

    // Sort colors: base state (no variants) first, then variants
    const allMapped = [...explicitMapped, ...inferredTokens];
    const baseColors = allMapped.filter((m) => !m.variants || m.variants.length === 0);
    const variantColors = allMapped.filter((m) => m.variants && m.variants.length > 0);

    dialogMappedClasses.value = [...baseColors, ...variantColors];

    isDialogOpen.value = true;
  }

  function handleClick(e: MouseEvent): void {
    if (!isActive.value) return;

    let sourceElement: Element | null = null;
    if (e.target instanceof Element) {
      sourceElement = e.target;
    } else if (e.target instanceof Node) {
      sourceElement = (e.target as Node).parentElement;
    }

    if (!sourceElement) return;

    const isTrigger =
      sourceElement.closest("[data-component-x-ray-trigger]") instanceof HTMLElement;

    if (isTrigger) {
      if (!e.ctrlKey) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const triggerElement = sourceElement.closest("[data-component-x-ray-trigger]");
      if (triggerElement instanceof HTMLElement) {
        inspectElement(triggerElement);
      }
      return;
    }

    if (componentXRayService.isTextElement(sourceElement)) {
      const markedParent = (sourceElement as HTMLElement).closest(`[data-component-x-ray]`);

      if (markedParent instanceof HTMLElement) {
        e.preventDefault();
        e.stopPropagation();

        if (e.ctrlKey) {
          inspectElement(markedParent);
          return;
        }

        inspectElement(sourceElement as HTMLElement);
      }
      return;
    }

    const resolved = componentXRayService.resolveMarkedElement(e.target);
    if (!resolved) return;

    let { element: target } = resolved;

    // If target is a structural element inside a marked component, use the marked component instead
    if (
      !target.hasAttribute("data-component-x-ray") &&
      !target.hasAttribute("data-component-x-ray-trigger")
    ) {
      const parentMarked = target.closest("[data-component-x-ray]");
      if (parentMarked instanceof HTMLElement) {
        const tagName = target.tagName.toLowerCase();
        const isStructuralElement = tagName === "div" || tagName === "section";

        if (isStructuralElement) {
          target = parentMarked;
        }
      }
    }

    e.preventDefault();
    e.stopPropagation();

    // If the target element itself doesn't have the marker, inspect it directly
    if (
      !target.hasAttribute("data-component-x-ray") &&
      !target.hasAttribute("data-component-x-ray-trigger")
    ) {
      const markedParent = target.closest(`[data-component-x-ray]`);

      if (markedParent instanceof HTMLElement) {
        if (e.ctrlKey) {
          inspectElement(markedParent);
          return;
        }

        inspectElement(target);
      }
      return;
    }

    const markedChain = componentXRayService.getMarkedChain(target);

    if (markedChain.length === 0) {
      const markedParent = target.closest(`[data-component-x-ray]`);

      if (markedParent instanceof HTMLElement) {
        if (e.ctrlKey) {
          inspectElement(markedParent);
          return;
        }

        inspectElement(target);
      }
      return;
    }

    let selectedElement: HTMLElement | null = markedChain[0] ?? null;
    if (e.ctrlKey) {
      selectedElement = markedChain[markedChain.length - 1] ?? selectedElement;
    }

    if (!selectedElement) return;

    inspectElement(selectedElement);
  }

  function activate() {
    document.addEventListener("mousemove", handleHover);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("scroll", handleScroll, true);
  }

  function deactivate() {
    document.removeEventListener("mousemove", handleHover);
    document.removeEventListener("mouseleave", handleLeave);
    document.removeEventListener("click", handleClick, true);
    document.removeEventListener("scroll", handleScroll, true);

    hoveredElement.value = null;
  }

  return {
    isActive,
    hoveredElement,
    isDialogOpen,
    dialogMappedClasses,
    elementLabel,
    elementTagName,
    isInspectingComponent,
    toggle,
    activate,
    deactivate,
  };
}
