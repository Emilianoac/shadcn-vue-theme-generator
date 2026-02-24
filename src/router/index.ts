import { createRouter, createWebHashHistory } from "vue-router";
import EditorView from "@/views/EditorView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/editor",
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
    },
  ],
});

export default router;
