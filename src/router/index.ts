import { createRouter, createWebHistory } from 'vue-router'
import appRouters from './routers/index'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const defaultRouter = {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
        requiresAuth: true
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        appRouters,
        defaultRouter
    ]
})

export default router