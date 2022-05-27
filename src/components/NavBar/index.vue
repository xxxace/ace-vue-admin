<template>
    <div class="nav-bar">
        <div class="tag-container">
            <template v-for="(tag, index) in tagList" :key="tag.name">
                <a-tag :class="[{ active: tag.fullPath === $route.fullPath }]" :closable="!!index"
                    @close="handleClose(tag, index)" @click="goto(tag)">
                    {{ tag.title }}</a-tag>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { listenRouteChange } from '@/router/guard/route-listener';
import { useRouter, RouteLocationNormalized } from 'vue-router';
import { useNavBarStore } from '@/store'
import { TagProps } from '@/store/modules/nav-bar/type';

const router = useRouter();
const navBarStore = useNavBarStore();
const tagList = computed(() => navBarStore.getTagList);

listenRouteChange((newRoute: RouteLocationNormalized) => {
    navBarStore.updatetagList(newRoute)
})

const handleClose = (tag: TagProps, index: number) => {
    navBarStore.removeTag(tag);
    index -= 1;
    if (index >= 0) {
        const beforeTag = tagList.value[index]
        router.push({ ...beforeTag });
    }
}

const goto = (tag: TagProps) => {
    router.push({ ...tag });
}
</script>
<style lang="less" scoped>
.nav-bar {
    display: flex;
    height: 34px;
    padding: 0 0 0 12px;
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-bg-1);
    justify-content: flex-start;
    align-items: center;

    .arco-tag {
        cursor: pointer;
        margin-right: 8px;

        &.active {
            color: rgb(var(--primary-6));
        }
    }
}
</style>