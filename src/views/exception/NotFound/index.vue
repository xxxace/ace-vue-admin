<template>
    <div class="no-found">
        <div>(ｷ｀ﾟДﾟ´)!!! 找不到该页面。</div>
        <div>
            <a-button type="primary" @click="$router.push({ path: '/' })">回到首页</a-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.no-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    font-size: 50px;
    font-weight: 500;
    color: var(--color-text-1);
}

@media screen and (max-width: 400px) {
    .no-found {
        font-size: 28px;

        &>div:first-child {
            margin-bottom: 10px;
        }
    }
}
</style>