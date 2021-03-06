import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DiscoveryProcess from "../views/DiscoveryProcess";
import News from "../views/News";
import Future from "../views/Future";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/discovery_process',
        name: 'DiscoveryProcess',
        component: DiscoveryProcess
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/future',
        name: 'Future',
        component: Future
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
];

const router = new VueRouter({
    routes
});

export default router
