import { createApp } from "vue";
import App from "./App.vue";

// Route import
import routers from "@/router";

// Route vuex
import store from "@/store/index";

const app = createApp(App);
app.use(routers);
app.use(store);
app.mount("#app");
