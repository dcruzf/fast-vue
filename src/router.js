import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";
import Art from "./components/Art.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/article", component: Article },
  { path: "/art/:id", component: Article },
  { path: "/:pathMatch(.*)*", component: Home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router as default };
