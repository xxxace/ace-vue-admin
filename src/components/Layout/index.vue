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
                <router-view v-slot="{ Component, route }">
                    <transition>
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
</script>
<style lang="less" scoped>
.ace-layout {
    height: 100vh;

    .header {
        height: 60px;
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
            padding: 18px 18px 0;
        }
    }
}
</style>