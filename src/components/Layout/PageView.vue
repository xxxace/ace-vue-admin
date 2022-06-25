<template>
    <div class="page-view">
        <router-view />
    </div>
</template>
<style lang="less" scoped>
.page-view {
    margin: 10px 10px 0;
    padding: 10px 10px 0;
    height: calc(100% - 44px);
    border-radius: 6px 6px 0 0;
    overflow: auto;
    color: var(--color-text-1);
    // background-color: var(--color-bg-1);
    // box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.05);
}
</style>
