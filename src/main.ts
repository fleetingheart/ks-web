import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as VueI18n from "vue-i18n";
import i18nStrings from "./i18n/provider";

// -- Disable console logs in production
// if (import.meta.env.PROD) {
//   console.log = function () {};
//   console.debug = function () {};
// }

// -- Measure app start time
const appStart = Date.now();

// -- Create app
const app = createApp(App);

// -- Routing
import { router } from "./config/router";
app.use(router);

// -- Sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import '@sweetalert2/theme-dark/dark.min.css';
app.use(VueSweetalert2);

// -- i18n
const i18n = VueI18n.createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: i18nStrings,
});

app.use(i18n);

// -- Mount app
app.mount("#app");

// -- Measure app start time
console.log(`App mounted in ${Date.now() - appStart}ms`);