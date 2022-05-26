import { defineStore } from "pinia";
import { RouterState } from "./type";
const useRouterStore = defineStore('router', {
    state: (): RouterState => ({
        count: 0,
        appMenu: {},
        menuList: []
    }),

    actions: {
        setAppMenu(menu: any) {
            this.appMenu = menu
        },
        async updateMenuList(list: any) {
            this.count += 1
            this.menuList?.push(...list)
        }
    },

    getters: {
        menuList(state: RouterState) {
            console.log('xxxx', state.menuList)
            return state.menuList || [];
        }
    }
});

export default useRouterStore;