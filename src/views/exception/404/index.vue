<template>
   <a-result class="result" status="404" subtitle="挖趣！找不到该页面.">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="goback">Back</a-button>
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