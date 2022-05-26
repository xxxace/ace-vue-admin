import { getMenuList, login } from '@/api/user';
import { Router, LocationQueryRaw, LocationQueryValueRaw } from "vue-router";
import NProgress from 'nprogress';
import { isLogin } from "@/utils/auth";
import { useRouterStore } from "@/store";
import getIndexRouter from './utils/getIndexRouter'
const whiteList: string[] = [];
import { removeToken } from '@/utils/auth';

export default function setupPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        NProgress.start();
        const routerStore = useRouterStore();
        const documentTitle = (to.meta.title || '') as string;
        document.title = documentTitle;

        if (to.name === 'login') {
            NProgress.done();
            next();
        }

        if (isLogin()) {
            console.log(routerStore.MenuList?.length)
            if (routerStore.MenuList?.length === 0) {
                try {
                    const { data } = await getMenuList() as { data: any };
                    const indexRouter = getIndexRouter(data);

                    routerStore.updateMenuList(data);
                    routerStore.setAppMenu(indexRouter);
                    router.addRoute(indexRouter);
                    NProgress.done();

                    next({ name: to.name } as LocationQueryRaw);
                } catch (e) {
                    removeToken();
                    window.location.reload();
                }
            } else {
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
                    redirect: to.fullPath,
                    ...to.query
                } as LocationQueryRaw
            });
            NProgress.done();
        }
    })
}