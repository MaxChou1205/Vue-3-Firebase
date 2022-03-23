import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { projectAuth } from "@/firebase/config";

import "@/assets/main.css";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
