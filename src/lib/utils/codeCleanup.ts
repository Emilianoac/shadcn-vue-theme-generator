/**
 * Remove X-Ray inspection attributes from component source code
 * before copying to ensure clean code for users
 */
export function removeXRayAttributes(code: string): string {
  let cleaned = code
    .replace(/\s*data-component-x-ray="[^"]*"/g, "")
    .replace(/\s*data-component-x-ray-trigger="[^"]*"/g, "")
    .replace(/\s*data-component-x-ray\s*/g, " ")
    .replace(/\s*data-component-x-ray-trigger\s*/g, " ");

  while (cleaned.includes("\n\n\n")) {
    cleaned = cleaned.replace(/\n\n\n/g, "\n\n");
  }

  return cleaned.trim();
}
