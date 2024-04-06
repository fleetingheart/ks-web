import { type RouteLocationNormalized } from "vue-router";

// TODO: Types here are a mess, fix them without being overly verbose
export function initTitleManager(t, router) {
    let currentRoute: RouteLocationNormalized = null;
    function setTitle(to: RouteLocationNormalized = null) {
        const route = to || currentRoute;
        if (route.name.toString() === 'Main') {
            document.title = `Katawa Shoujo`;
            return;
        }
        document.title = `Katawa Shoujo ◊ ${t('navigation.' + route.name.toString().toLowerCase())}`;
    }

    router.beforeEach((to, from, next) => {
        currentRoute = to;
        setTitle();
        next();
    });

    console.log('[initTitleManager] Title manager initialized');
}