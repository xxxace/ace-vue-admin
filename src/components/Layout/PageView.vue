<template>
    <div class="page-view">
        <router-view />
    </div>
</template>
<style lang="less" scoped>
.page-view {
    margin: 14px 14px 0;
    padding: 14px 14px 0;
    height: calc(100% - 48px);
    border-radius: 6px;
    overflow: auto;
    background-color: var(--color-bg-1);
    box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.05);
}
</style>