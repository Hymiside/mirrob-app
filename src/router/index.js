import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Examples from '../views/Examples.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Create from "../views/Create.vue";
import Articles from "@/views/Articles";


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
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/articles/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
