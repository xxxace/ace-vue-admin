export default [{
    name:'Workplace',
    path:'workplace',
    component:()=>import('@/views/dashboard/workplace/index.vue')
},{
    name:'test',
    path:'test',
    component:()=>import('@/components/Layout/PageView.vue'),
    children:[{
        name:'Monitor',
        path:'/monitor',
        component:()=>import('@/views/dashboard/monitor/index.vue')
    }]
}]