import { createRouter, createWebHashHistory } from "vue-router";
import Home from './components/Home.vue'
import HomeCopy from './components/HomeCopy.vue'

const routes = [
    { path: '/home', component: Home },
    { path: '/', component: HomeCopy },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes})

    export { router as default }