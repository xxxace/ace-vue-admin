import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/index.vue";

const routers: RouteRecordRaw[] = [];
const modules = import.meta.globEager('./modules/*.ts');

Object.keys(modules).forEach(key => {
    const defaultModule = modules[key].default;
    if (defaultModule) routers.push(...defaultModule);
});

export default {
    name: 'base',
    path: '/',
    redirect: '/workplace',
    component: Layout,
    children: routers
}