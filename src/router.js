import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";
import About from "./components/About.vue";
const routes = [
  { path: "/", name: "homeComp", component: Home },
  { path: "/tags/:tagName", name: 'tagsComp', component: Home },
  { path: "/about", name:  'aboutComp',  component: About },
  { path: "/articles/:id", name: 'articleComp', component: Article },
  { path: "/:pathMatch(.*)*", component: Home },
];

export const router = createRouter({
  history: createWebHistory('fast-vue'),
  routes: routes,
});

export { router as default };
