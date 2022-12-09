<template>
    <a-result class="result" status="403" subtitle="没有权限访问，请联系管理员。">
        <template #extra>
            <a-space>
                <a-button type="primary" @click="goback">返回</a-button>
            </a-space>
        </template>
    </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goback = () => router.back();
</script>

<style lang="less" scoped>
.result {
    margin-top: 20%;
    height: 100%;
}
</style>