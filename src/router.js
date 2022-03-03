import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import Article from './components/Article.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/article', component: Article },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes})

    export { router as default }