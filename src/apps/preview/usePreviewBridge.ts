import { onMounted, onUnmounted } from "vue";
import type { AppSyncMessage } from "./usePreviewSync";

type Handler = (msg: AppSyncMessage) => void;

export function usePreviewBridge(handler: Handler) {
  function onMessage(event: MessageEvent) {
    const data = event.data as AppSyncMessage;

    if (data?.type === "APP_SYNC") {
      handler(data);
    }
  }

  function onXRayEvent(event: Event) {
    const customEvent = event as CustomEvent;
    window.parent.postMessage(
      {
        type: "xray:focus-theme-color",
        themeKey: customEvent.detail.themeKey,
      },
      "*",
    );
  }

  onMounted(() => {
    window.addEventListener("message", onMessage);
    window.addEventListener("xray:focus-theme-color", onXRayEvent);
  });

  onUnmounted(() => {
    window.removeEventListener("message", onMessage);
    window.removeEventListener("xray:focus-theme-color", onXRayEvent);
  });
}
