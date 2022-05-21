import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: 'login'
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            requiresAuth: true
        }
    }]
})

export default router