import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ColorPickerField from "@/apps/main/components/editor/sidebar/tabs/colors/ColorPickerField.vue";

describe("ColorPickerField - Core Functionality", () => {
  it("should render with label and color picker", () => {
    const wrapper = mount(ColorPickerField, {
      props: {
        label: "Primary Color",
        modelValue: "#ff0000",
      },
    });

    expect(wrapper.find("label").text()).toBe("Primary Color");
    expect(wrapper.find('input[type="color"]').exists()).toBe(true);
  });

  it("should convert OKLCH to hex for visual swatch only", async () => {
    const wrapper = mount(ColorPickerField, {
      props: {
        label: "Primary",
        modelValue: "oklch(0.85 0.15 170)",
      },
    });

    const colorInput = wrapper.find<HTMLInputElement>('input[type="color"]');
    expect(colorInput.element.value).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
