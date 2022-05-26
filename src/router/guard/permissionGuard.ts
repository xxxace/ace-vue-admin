import { menuList } from '@/mock/user';
import { getMenuList, login } from '@/api/user';
import { Router, LocationQueryRaw } from "vue-router";
import NProgress from 'nprogress';
import { isLogin } from "@/utils/auth";
import { useRouterStore } from "@/store";
import getIndexRouter from './utils/getIndexRouter'
const whiteList = ['login'];
import { removeToken } from '@/utils/auth';

export default function setupPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        NProgress.start();
        const routerStore = useRouterStore();
        const documentTitle = (to.meta.title || '') as string;
        document.title = documentTitle;
        if (isLogin()) {
            if(to.name === 'login'){
                NProgress.done();
                next();
            }
            if (routerStore.menuList.length === 0) {
                try {
                    const { data } = await getMenuList() as { data: any };
                    const indexRouter = getIndexRouter(data);

                    routerStore.updateMenuList(data);
                    routerStore.setAppMenu(indexRouter);
                    router.addRoute(indexRouter);
                    NProgress.done();
                    console.log(indexRouter,to.name)
                    next({ name: to.name } as LocationQueryRaw);
                } catch (e) {
                    console.log(e)
                    removeToken();
                    window.location.reload();
                }
            } else {
                console.log(to.name)
                NProgress.done();
                next();
            }
        } else {
            if (whiteList.includes(to.name as string)) {
                NProgress.done();
                next();
                return;
            }

            next({
                name: 'login',
                query: {
                    redirect: to.name,
                    ...to.query
                } as LocationQueryRaw
            });
            NProgress.done();
        }
    })
}