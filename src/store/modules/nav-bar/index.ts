import { NavBarState, TagProps } from "./type";
import { defineStore } from 'pinia';
import { RouteLocationNormalized } from "vue-router";

function getIndex<T>(source: T[], handler: (item: T) => boolean): number {
    let index = -1;

    if (handler) {
        for (let i = 0; i < source.length; i++) {
            if (handler && handler(source[i])) {
                index = i;
                break;
            };
        }
    }

    return index;
}

function formatTab(tab: RouteLocationNormalized) {
    const { name, path, fullPath, meta: { title } } = tab;
    return {
        name: name as string,
        path,
        fullPath,
        title: title as string
    }
}

const useNavBarStore = defineStore('nav-bar', {
    state: (): NavBarState => ({
        tagList: [{
            name: 'workplace',
            path: '/workplace',
            title: '首页',
            fullPath: '/workplace',
        }]
    }),

    actions: {
        updatetagList(tab: RouteLocationNormalized) {
            if (!this.tagList.some((t: TagProps) => t.name === tab.name)) {
                this.tagList.push(formatTab(tab));
            }
        },
        removeTag(tab: TagProps) {
            const index = getIndex(this.tagList, (item) => item.name === tab.name);
            if (index !== -1) this.tagList.splice(index, 1);
        }
    },

    getters: {
        getTagList(): TagProps[] {
            return this.tagList;
        }
    }
})

export default useNavBarStore;