import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomePage,
        },
      ],
    },
  ],
});

export default router;
