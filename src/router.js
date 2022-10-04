import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About }
  ],
});
export default routers;
