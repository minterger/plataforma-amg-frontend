import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/viajes",
    name: "Viajes",
    component: () => import("../views/Viajes.vue"),
  },
  {
    path: "/viajes/:id",
    name: "Viaje",
    component: () => import("../views/ViajeId.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
