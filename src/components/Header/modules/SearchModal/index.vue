<template>
    <div class="search-modal">
        <a-button class="search-btn" @click="handleClick">
            <template #icon>
                <icon-search style="color:var(--color-text-1)" />
            </template>
            搜索
        </a-button>
        <a-modal v-model:visible="visible" top="12vh" :closable="false" :footer="false" modal-class="my-modal"
            :align-center="false">
            <template #title>
                <icon-search size="20" style="color: rgb(var(--primary-6));" />
                <input ref="input" class="search-input" type="text" autofocus placeholder="输入关键词搜索"
                    @input="handleSearch">
            </template>
            <div v-if="recentList.length" class="recent-wrap">
                <div class="title">
                    <span>
                        <icon-history /> 最近
                    </span>
                    <a-button size="mini" type="text" status="danger" @click="clearRecent('all')">清空</a-button>
                </div>
                <div class="recent-body">
                    <template v-for="(item, i) in recentList">
                        <a-tag closable @click="goto(item)" @close="clearRecent(i)">{{ item.title }}</a-tag>
                    </template>
                </div>
            </div>
            <div class="result-wrap">
                <template v-for="(item, index) in routeList" :key="item">
                    <div class="result-item" @click="goto(item)">
                        <a-avatar class="icon">{{ index + 1 }}</a-avatar>
                        <span class="label" :title="item.title">{{ item.title }}</span>
                    </div>
                </template>
            </div>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, unref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterRaw } from '@/store/modules/router/type';
import { useRouterStore } from '@/store';
import { useStorage, useDebounceFn } from '@vueuse/core';

const recentList = useStorage<RouterRaw[]>('recent-list', []);
const router = useRouter();
const routerStore = useRouterStore();
const baseRouteList = reactive<RouterRaw[]>([]);
let routeList = reactive<RouterRaw[]>([]);
const flatMenu = (menu: RouterRaw[] | undefined) => {
    menu?.forEach(m => {
        if (m.children?.length) {
            flatMenu(m.children);
        } else {
            baseRouteList.push(m);
        }
    })
}

const input = ref<HTMLInputElement | null>(null)
const visible = ref(false);

const handleClick = () => {
    visible.value = true;
    setTimeout(() => input.value?.focus())
};

const goto = (item: RouterRaw) => {
    visible.value = false;
    router.push({ path: item.path });

    if (!recentList.value.some(r => r.name === item.name)) {
        recentList.value.push(item);
    }
}

flatMenu(routerStore.MenuList);
routeList = reactive(JSON.parse(JSON.stringify(unref(baseRouteList))));

const handleSearch = useDebounceFn((e) => {
    routeList.length = 0;
    const res = baseRouteList.filter(b => b.title.indexOf(e.target.value) !== -1);
    routeList.push(...JSON.parse(JSON.stringify(unref(res))));
}, 500)

const clearRecent = (index: 'all' | number) => {
    if (index === 'all') {
        recentList.value.length = 0
    } else {
        recentList.value.splice(index, 1)
    }
}
</script>

<style lang="less">
.arco-modal.my-modal {
    border-radius: 8px !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, .1) !important;

    // background-color: aqua !important;
    .arco-modal-header {
        height: 60px !important;

        .arco-modal-title {
            justify-content: flex-start !important;
        }
    }

    .arco-modal-body {
        padding-top: 8px;
    }
}

.title-body {
    width: 100%;
    padding: 0 20px;
    text-align: left;
}

.search-input {
    flex: 1;
    height: 24px;
    margin-left: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-text-1);

    &::-webkit-input-placeholder {
        color: var(--color-text-1);
    }
}

.result-wrap {
    display: grid;
    grid-template-columns: repeat(2, 50%);
}

.result-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    transition: all .2s;
    cursor: pointer;
    color: var(--color-text-1);

    .icon {
        min-width: 40px;
    }

    .label {
        display: inline-block;
        margin-left: 14px;
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    &:hover,
    &:active {
        color: rgb(var(--primary-6));
        background-color: var(--color-fill-2);

        .icon {
            background-color: rgb(var(--primary-6));
        }
    }
}

.recent-wrap {
    margin-bottom: 8px;

    .title {
        display: flex;
        margin-bottom: 3px;
        color: var(--color-text-2);
        justify-content: space-between;
    }

    .recent-body {
        .arco-tag {
            margin-right: 6px;
            margin-bottom: 6px;
            cursor: pointer;
        }
    }
}
</style>