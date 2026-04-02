import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/shared/assets/css/styles.css";
import "@/shared/lib/highlight";

const app = createApp(App);
app.use(router);

app.mount("#app");
