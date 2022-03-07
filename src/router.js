import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/tag/:tagName", component: Home },
  { path: "/about", component: Home },
  { path: "/article/:id", component: Article },
  { path: "/:pathMatch(.*)*", component: Home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router as default };
