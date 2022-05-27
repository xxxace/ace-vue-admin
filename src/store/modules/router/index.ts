import { defineStore } from "pinia";
import { RouterState } from "./type";
import { RouteRecordRaw } from "vue-router";
const useRouterStore = defineStore('router', {
    state: (): RouterState => ({
        appMenu: null,
        menuList: []
    }),

    actions: {
        setAppMenu(menu: any) {
            this.appMenu = menu
        },
        async updateMenuList(list: any) {
            this.menuList?.push(...list)
        }
    },

    getters: {
        AppMenu(state: RouterState): RouteRecordRaw | null {
            return state.appMenu || null
        },
        MenuList(state: RouterState) {
            return state.menuList?.map(m => m)
        }
    }
});

export default useRouterStore;