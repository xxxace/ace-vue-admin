<template>
    <div class="ace-layout">
        <header class="header">
            <AceHeader />
        </header>
        <div class="container">
            <aside class="left-side">
                <AceMenu />
            </aside>
            <main class="main">
                <AceNavMenu />
                <router-view v-slot="{ Component, route }">
                    <transition mode="out-in">
                        <component :is="Component" :key="route.fullPath" />
                    </transition>
                </router-view>
            </main>
        </div>
    </div>
</template>
<script lang="ts" setup>
import AceHeader from '@/components/Header/index.vue';
import AceMenu from '@/components/Menu/index.vue';
import AceNavMenu from '@/components/NavBar/index.vue';
</script>
<style lang="less" scoped>
.ace-layout {
    height: 100vh;

    .header {
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
            flex: 1;
        }
    }
}
</style>