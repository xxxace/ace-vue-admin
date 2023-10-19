<template>
    <div class="ace-layout">
        <header class="header-wrapper">
            <AceHeader />
        </header>
        <div class="container">
            <aside v-if="isDesktop" class="left-side">
                <AceMenu />
            </aside>
            <a-drawer v-else v-model:visible="drawerVisible" width="252px" placement="left" :header="false"
                :footer="false" :closable="false">
                <AceMenu />
            </a-drawer>
            <main class="main">
                <AceNavMenu />
                <router-view v-slot="{ Component, route }">
                    <transition mode="out-in">
                        <component :is="Component" :key="route.fullPath" />
                    </transition>
                </router-view>
                <AceFooter />
            </main>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, provide } from 'vue'
import { useAppStore } from '@/store';
import useResponsive from '@/hooks/responsive';
import AceHeader from '@/components/Header/index.vue';
import AceMenu from '@/components/Menu/index.vue';
import AceNavMenu from '@/components/NavBar/index.vue';
import AceFooter from '@/components/Footer/index.vue';

useResponsive(true);
const appStore = useAppStore();
const drawerVisible = ref(false);
const isDesktop = computed(() => appStore.appDevice === 'desktop');

provide('toggleDrawerMenu', () => {
    drawerVisible.value = !drawerVisible.value;
})
</script>
<style lang="less" scoped>
.ace-layout {
    height: 100vh;

    .header-wrapper {
        height: 60px;
        background-color: var(--color-bg-2);
    }

    .container {
        display: flex;
        height: calc(100vh - 60px);
        background-color: var(--color-fill-1);

        .left-side {
            border-right: 1px solid var(--color-border);
        }

        .main {
            position: relative;
            flex: 1;
        }
    }
}
</style>