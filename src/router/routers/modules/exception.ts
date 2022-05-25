export default [{
    name: '403',
    path: '403',
    component: () => import('@/views/exception/403/index.vue')
}, {
    name: '404',
    path: '404',
    component: () => import('@/views/exception/404/index.vue')
}]