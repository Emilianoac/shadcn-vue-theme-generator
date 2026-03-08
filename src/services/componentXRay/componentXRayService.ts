import type { ComponentXRayService } from "./componentXRay.interface";
import { extractColorClasses } from "./componentXRayClass.utils";
import {
  resolveMarkedElement,
  getMarkedChain,
  extractElementLabel,
  isTextElement,
} from "./componentXRayElement.utils";
import { mapColorClassToTheme } from "./componentXRayMapping.utils";
import { inferBaseTokens } from "./componentXRayInference.utils";

export function createComponentXRayService(): ComponentXRayService {
  return {
    extractColorClasses,
    resolveMarkedElement,
    getMarkedChain,
    extractElementLabel,
    mapColorClassToTheme,
    inferBaseTokens,
    isTextElement,
  };
}

export const componentXRayService = createComponentXRayService();
