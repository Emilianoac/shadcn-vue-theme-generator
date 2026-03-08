export function extractArbitraryVariant(className: string): string | null {
  const match = className.match(/\[([^\]]+)\]/);
  return match ? match[1] || null : null;
}

export function validateArbitraryVariant(selector: string, element: HTMLElement): boolean {
  if (!selector || !selector.includes("&")) {
    return true;
  }

  try {
    if (selector === "a&") {
      return element.closest("a") !== null;
    }

    if (selector === "&>*") {
      return element.children.length > 0;
    }

    if (selector.includes(":checked")) {
      return element.matches(":checked");
    }

    if (selector.includes(":has")) {
      try {
        return element.matches(selector.replace("&", "").slice(0, -1));
      } catch {
        return true;
      }
    }

    try {
      const selectorTest = selector.replace("&", "");
      return element.matches(selectorTest);
    } catch {
      return true;
    }
  } catch {
    return true;
  }
}
