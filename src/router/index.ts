import { createRouter, createWebHashHistory } from 'vue-router'
import setupRouterGuard from './guard';
// import appRouters from './routers/index'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const defaultRouters = [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
        title: '登录',
        requiresAuth: true,
        noAffix: true
    }
}]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_MODE === 'production' ? '/ace-vue-admin/' : ''),
    routes: [
        ...defaultRouters
    ]
})

setupRouterGuard(router);
export default router