import { RouterOptions, createRouter, createWebHistory } from "vue-router";

export type vRoute = RouterOptions["routes"][number];

export const routes: vRoute[] = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/characters", name: "Characters", component: () => import("@/views/Characters.vue") },
];

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
});
