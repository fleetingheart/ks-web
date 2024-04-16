import { createApp } from "vue";
import VueViewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
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

// -- i18n
app.use(i18nInstance);

// -- Viewer
app.use(VueViewer);

// -- Mount app
app.mount("#app");

// -- Measure app start time
console.log(`[main] Vue App mounted in ${Date.now() - appStart}ms`);