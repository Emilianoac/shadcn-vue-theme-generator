import { describe, it, expect } from "vitest";
import {
  mapColorClassToTheme,
  mapMultipleColorClasses,
} from "@/services/componentXRay/componentXRayMapping.utils";

describe("componentXRayMapping.utils", () => {
  it("maps recognized classes to theme metadata", () => {
    const mapped = mapColorClassToTheme("bg-primary");

    expect(mapped).toEqual(
      expect.objectContaining({
        className: "bg-primary",
        type: "background",
        themeKey: "primary",
        label: "Primary",
      }),
    );
  });

  it("returns null for non-theme classes", () => {
    expect(mapColorClassToTheme("text-red-500")).toBeNull();
    expect(mapColorClassToTheme("p-4")).toBeNull();
  });

  it("keeps arbitrary variant metadata and validates condition", () => {
    const wrappedByLink = document.createElement("span");
    const link = document.createElement("a");
    link.appendChild(wrappedByLink);

    const outsideLink = document.createElement("span");

    const active = mapColorClassToTheme("[a&]:hover:bg-accent", wrappedByLink);
    const inactive = mapColorClassToTheme("[a&]:hover:bg-accent", outsideLink);

    expect(active?.arbitraryVariant).toBe("a&");
    expect(active?.variants).toEqual(["[a&]", "hover"]);
    expect(active?.conditionMet).toBe(true);
    expect(inactive?.conditionMet).toBe(false);
  });

  it("extracts common variant contexts like dark, hover and data-state", () => {
    const mapped = mapColorClassToTheme("dark:data-[state=open]:hover:bg-accent");

    expect(mapped?.variants).toEqual(["dark", "data-[state=open]", "hover"]);
    expect(mapped?.themeKey).toBe("accent");
    expect(mapped?.type).toBe("background");
  });

  it("maps multiple classes and filters null values", () => {
    const mapped = mapMultipleColorClasses([
      "bg-primary",
      "p-4",
      "text-foreground",
      "text-red-500",
      "border-input",
    ]);

    expect(mapped.map((x) => x.themeKey)).toEqual(["primary", "foreground", "input"]);
  });
});
