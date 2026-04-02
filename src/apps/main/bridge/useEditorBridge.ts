import { onMounted, onUnmounted } from "vue";

type EditorBridgeHandlers = {
  onFocusThemeColor?: (themeKey: string) => void;
};

export function useEditorBridge(handlers: EditorBridgeHandlers) {
  function onMessage(event: MessageEvent) {
    const data = event.data;
    if (!data?.type) return;

    switch (data.type) {
      case "xray:focus-theme-color":
        if (typeof data.themeKey === "string") {
          handlers.onFocusThemeColor?.(data.themeKey);
        }
        break;
    }
  }

  onMounted(() => {
    window.addEventListener("message", onMessage);
  });

  onUnmounted(() => {
    window.removeEventListener("message", onMessage);
  });
}
