/**
 * Remove lines that are used only for the live preview environment, such as data attributes for x-ray and portal targets,
 * before copying to ensure clean code for users
 */
export function removeXRayAttributes(code: string): string {
  let cleaned = code
    // JS object keys
    .replace(/["']data-component-x-ray(-trigger)?["']\s*:\s*["'][^"']*["'],?/g, "")

    // HTML attributes
    .replace(/\s*data-component-x-ray(-trigger)?="[^"]*"/g, "")

    .replace(/,\s*,/g, ",")
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]")

    // remove to="#examples-container" to prevent confusion in user code, as this is only needed for the live preview environment
    .replace(/\s*to="#examples-container"/g, "");

  while (cleaned.includes("\n\n\n")) {
    cleaned = cleaned.replace(/\n\n\n/g, "\n\n");
  }

  return cleaned.trim();
}
