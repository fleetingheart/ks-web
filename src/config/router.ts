import { RouterOptions, createRouter, createWebHistory, createWebHashHistory } from "vue-router";

export type vRoute = RouterOptions["routes"][number];

export const routes: vRoute[] = [
    { path: "/", name: "Main", component: () => import("@/views/Home.vue") },
    { path: "/characters", name: "Characters", component: () => import("@/views/Characters.vue") },
    { path: "/about", name: "About", component: () => import("@/views/About.vue") },
    { path: "/download", name: "Download", component: () => import("@/views/Download.vue") },
    { path: "/samples", name: "Samples", component: () => import("@/views/Samples.vue") },
    { path: "/staff", name: "Staff", component: () => import("@/views/Staff.vue") },
];

export const router = createRouter({
    history: createWebHistory('/'),
    routes,
});