import { RouterRaw } from "@/store/modules/router/type";

export default function getIndexRouter(list: RouterRaw[]) {

    const indexRouter = {
        path: '/',
        name: 'dashboard',
        redirect: '/workplace',
        children: getChildRouters(list),
        meta: {
            title: '仪表盘'
        }
    }

    return indexRouter;
}

const modules = import.meta.globEager('../../../views/**/*.vue');

function getChildRouters(list: RouterRaw[]) {
    const children: any = [];

    list.forEach((e: RouterRaw) => {
        let component;
        if (e.component === '@layout/page-view') {
            component = () => import('../../../components/Layout/PageView.vue')
        }

        if (!component) {
            component = () => import(`../../../views/${e.component}.vue`)
        }
        component().then(res => {
            console.log(res)
        })
        let menu = {
            path: e.path,
            name: e.name || e.title,
            component,
            children: [],
            meta: {
                icon: e.icon,
                title: e.title
            }
        }
        if (e.children && e.children.length) menu.children = getChildRouters(e.children)
        children.push(menu);
    })

    return children;
}