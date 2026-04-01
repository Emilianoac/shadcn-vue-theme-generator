import { createApp } from "vue";
import PreviewApp from "./PreviewApp.vue";

import "@/assets/css/styles.css";
import "@/lib/highlight";

const app = createApp(PreviewApp);
app.mount("#preview-app");
