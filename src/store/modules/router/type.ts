export interface RouterRaw {
    title: string;
    name?: string;
    icon?: string;
    path: string;
    component: string;
    children?: RouterRaw[];
}
export interface RouterState {
    appMenu: {};
    menuList: RouterRaw[] | null;
    [key: string]: any
}