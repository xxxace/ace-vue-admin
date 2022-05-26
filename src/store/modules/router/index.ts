import { defineStore } from "pinia";
import { RouterState } from "./type";
const useRouterStore = defineStore('router', {
    state: (): RouterState => ({
        appMenu: {},
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
        AppMenu(state: RouterState) {
            return state.appMenu || {}
        },
        MenuList(state: RouterState) {
            return state.menuList?.map(m=>m)
        }
    }
});

export default useRouterStore;