import { createRouter, createWebHistory } from "vue-router";
import { userStore } from "../stores/user.store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Building.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/transportes",
    name: "Transportes",
    component: () => import("../views/Building.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/new/transporte",
    name: "NewTransporte",
    component: () => import("../views/NewTransporte.vue"),
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("../views/Building.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/new/cliente",
    name: "NewCliente",
    component: () => import("../views/NewCliente.vue"),
  },
  {
    path: "/viajes",
    name: "Viajes",
    component: () => import("../views/Viajes.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/viajes/select/:id",
    name: "Viaje",
    component: () => import("../views/ViajeId.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/viajes/new",
    name: "ViajeNew",
    component: () => import("../views/NewViaje.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const user = userStore();

  if (
    to.matched.some((record) => record.meta.requiresAuth && !user.userToken)
  ) {
    next({
      path: "/login",
    });
  } else if (user.userToken && to.name === "Login") {
    next({
      path: "/",
    });
  } else {
    next();
  }
});

export default router;
