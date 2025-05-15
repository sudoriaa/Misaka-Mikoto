import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomeView.vue";
import ArticleView from "../views/main/ArticleView.vue";
import ToaruLogoCreator from "../views/ToaruLogoCreator.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/toaruLogoCreator',
        name: 'toaruLogoCreator',
        component: ToaruLogoCreator
    },
    {
        path: '/article/:id',
        name: 'article',
        component: ArticleView,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes
})

export default router