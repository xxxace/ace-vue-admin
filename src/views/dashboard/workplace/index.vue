<template>
    <h1 style="margin-bottom:12px">欢迎回来！{{ user.name }}</h1>
    <a-grid class="grid" :cols="{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }" :colGap="12" :rowGap="12">
        <template v-for="(item, i) in itemList" :key="i">
            <a-grid-item>
                <a-card :bordered="false">{{ item.title }}</a-card>
            </a-grid-item>
        </template>
    </a-grid>

    <a-row class="grid2" :gutter="[12, 12]">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14" :xxl="14">
            <a-card :bordered="false">
                <div style="height:340px">

                </div>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10" :xxl="10">
            <a-carousel :style="{
                height: '370px',
                borderRadius: '4px',
                overflow: 'hidden'
            }" :default-current="2" auto-play>
                <a-carousel-item v-for="image in images">
                    <img :src="image" :style="{
                        width: '100%',
                    }" />
                </a-carousel-item>
            </a-carousel>
        </a-col>
    </a-row>

    <a-row class="grid2" :gutter="[12, 12]">
        <a-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14" :xxl="14">
            <a-card :bordered="false">
                <div style="height:340px">

                </div>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10" :xxl="10">
            <a-card :bordered="false">
                <div style="height:340px">
                    workplace
                    <br />
                    <router-link :to="{ name: 'monitor' }">monitor</router-link>
                    <br />
                    <router-link :to="{ name: '404' }">404</router-link>
                    <br />
                    <router-link :to="{ name: '403' }">403</router-link>
                    <br />
                    <router-link :to="{ path: '/noFound1111' }">noFound</router-link>
                </div>
            </a-card>
        </a-col>
    </a-row>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { computed, ref } from 'vue'

const userStore = useUserStore()
const user = computed(() => userStore)
const itemList = ref<{ icon: string, title: string | number, value: string | number | undefined, unit: string, isUp: boolean }[]>([{
    title: '测试',
    icon: '',
    value: 1000,
    isUp: true,
    unit: '个'
}, {
    title: '测试',
    icon: '',
    value: 1000,
    isUp: true,
    unit: '个'
}, {
    title: '测试',
    icon: '',
    value: 1000,
    isUp: true,
    unit: '个'
}, {
    title: '测试',
    icon: '',
    value: 1000,
    isUp: true,
    unit: '个'
}])
const images = ref<string[]>([
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
])
</script>

<style lang="less" scoped>
.arco-card {
    border-radius: 4px;
}

.grid {
    margin-bottom: 12px;
}

.grid2 {
    margin-bottom: 6px !important;
}

.arco-carousel {
    img {
        height: 100%;
        object-fit: cover;
    }
}
</style>