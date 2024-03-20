import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18nInstance } from "./i18n/provider";

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
app.use(i18nInstance);

// -- Mount app
app.mount("#app");

// -- Measure app start time
console.log(`App mounted in ${Date.now() - appStart}ms`);