import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Viajes.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
