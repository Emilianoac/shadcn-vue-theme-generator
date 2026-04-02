import { createApp } from "vue";
import PreviewApp from "./PreviewApp.vue";

import "@/shared/assets/css/styles.css";
import "@/shared/lib/highlight";

const app = createApp(PreviewApp);
app.mount("#preview-app");
