import { RouteRecordRaw } from "vue-router";
export interface RouterRaw {
    title: string;
    name?: string;
    icon?: string;
    path: string;
    component: string;
    children?: RouterRaw[];
}
export interface RouterState {
    appMenu: RouteRecordRaw | null;
    menuList: RouterRaw[] | null;
    [key: string]: any
}