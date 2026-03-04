import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "@/assets/css/styles.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

hljs.registerLanguage("css", css);
const app = createApp(App);

app.use(hljsVuePlugin);
app.use(router);

app.mount("#app");
