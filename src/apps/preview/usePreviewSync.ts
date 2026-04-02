import { watch } from "vue";
import { useTheme } from "@/shared/composables/useTheme";
import { useDark } from "@vueuse/core";
import { useComponentXRay } from "@/shared/composables/useComponentXRay";

export type AppSyncMessage = {
  type: "APP_SYNC";
  theme: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  componentXRayActive: boolean;
};

export function usePreviewSync() {
  const { theme } = useTheme();
  const isDark = useDark();
  const { isActive } = useComponentXRay();

  function buildMessage(): AppSyncMessage {
    return {
      type: "APP_SYNC",
      theme: {
        light: { ...theme.value.data.light } as Record<string, string>,
        dark: { ...theme.value.data.dark } as Record<string, string>,
      },
      componentXRayActive: isActive.value,
    };
  }

  function sendToIframe(iframe: HTMLIFrameElement) {
    iframe.contentWindow?.postMessage(buildMessage(), "*");
    iframe.contentDocument?.documentElement.classList.toggle("dark", isDark.value);
  }

  function startSync(getIframe: () => HTMLIFrameElement | null) {
    watch(
      () => [isDark, theme, isActive],
      () => {
        const iframe = getIframe();
        if (iframe) {
          sendToIframe(iframe);
        }
      },
      { deep: true },
    );
  }

  return { startSync, sendToIframe };
}
