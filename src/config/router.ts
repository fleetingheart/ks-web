import { RouterOptions, createRouter, createWebHistory, createWebHashHistory } from "vue-router";

export type vRoute = RouterOptions["routes"][number];

export const routes: vRoute[] = [
    { path: "/", name: "Main", component: () => import("@/views/Home.vue") },
    { path: "/characters", name: "Characters", component: () => import("@/views/Characters.vue") },
    { path: "/about", name: "About", component: () => import("@/views/About.vue") },
    { path: "/download", name: "Download", component: () => import("@/views/Download.vue") },
    { path: "/samples", name: "Samples", component: () => import("@/views/Samples.vue") },
    { path: "/staff", name: "Staff", component: () => import("@/views/Staff.vue") },
    { path: '/pxt', name: "pxt", beforeEnter() { window.location.href = '/pxt/pxt.html'; }} as any,
    { path: "/the_answer", name: "The Answer", beforeEnter() { window.location.href = '/theanswer/the_answer.html'; }} as any,
    { path: "/secret/santa", name: "Secret Santa '10", beforeEnter() { window.location.href = '/secret/santa/santa.html'; }} as any,
    { path: "/secret/santa12", name: "Secret Santa '12", beforeEnter() {window.location.href = '/secret/santa12/1.html'; }} as any,
    { path: "/paritytime", name: "Parity Time", beforeEnter() { window.location.href= 'https://www.youtube.com/watch?v=Oqf36ReTrDU'; }} as any,
];

export const router = createRouter({
    history: createWebHistory('/'),
    routes,
});