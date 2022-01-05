import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Examples from '../views/Examples.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/examples-of-interviews',
        name: 'Examples',
        component: Examples
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
