import { getMenuList, login } from '@/api/user';
import { Router, LocationQueryRaw } from "vue-router";
import NProgress from 'nprogress';
import { isLogin } from "@/utils/auth";
import { useRouterStore } from "@/store";
import getIndexRouter from './utils/getIndexRouter'
const whiteList: string[] = ['login'];
import { removeToken } from '@/utils/auth';
import { setRouteEmitter } from './route-listener';

export default function setupPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        setRouteEmitter(to);
        NProgress.start();
        const routerStore = useRouterStore();
        const documentTitle = (to.meta.title || '') as string;
        document.title = documentTitle;

        if (isLogin()) {
            if (to.name === 'login') {
                NProgress.done();
                next();
            } else {
                if (routerStore.MenuList?.length === 0) {
                    try {
                        const { data } = await getMenuList() as { data: any };
                        const indexRouter = getIndexRouter(data);

                        routerStore.updateMenuList(data);
                        routerStore.setAppMenu(indexRouter);
                        router.addRoute(indexRouter);
                        NProgress.done();

                        const redirect = decodeURIComponent((from.query.redirect as string) || to.path);

                        if (to.path === redirect) {
                            next({ ...to, replace: true });
                        } else {
                            delete to.query.redirect;
                            next({ path: redirect, query: { ...to.query as any } } as LocationQueryRaw);
                        }
                    } catch (e) {
                        console.log(e)
                        removeToken();
                        window.location.reload();
                    }
                } else {
                    NProgress.done();
                    next();
                }
            }
        } else {
            if (whiteList.includes(to.name as string)) {
                next();
            } else {
                next({
                    name: 'login',
                    query: {
                        redirect: to.fullPath,
                        ...to.query
                    } as LocationQueryRaw
                });
            }
            NProgress.done();
        }
    })
}