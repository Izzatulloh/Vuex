import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home }
  ],
});
export default routers;
