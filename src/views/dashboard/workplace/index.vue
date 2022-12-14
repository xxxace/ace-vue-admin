<template>
    <h1 style="margin-bottom:12px">欢迎回来！{{ user.name }}</h1>
    <a-grid class="grid" :cols="{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }" :colGap="12" :rowGap="12">
        <template v-for="(item, i) in itemList" :key="i">
            <a-grid-item>
                <a-card :bordered="false">
                    <div>{{ item.title }}</div>
                    <div class="analysis-content">
                        {{ item.value }}
                    </div>
                    <i v-if="item.increase" :class="['increase', { isDown: item.increase < 0 }]">
                        <icon-caret-up v-if="item.increase > 0" size="12" />
                        <icon-caret-down v-else size="12" />
                        {{ Math.abs(item.increase) }}
                    </i>
                </a-card>
            </a-grid-item>
        </template>
    </a-grid>

    <a-row class="grid2" :gutter="[12, 12]">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14" :xxl="14">
            <a-card :bordered="false">
                <div style="height:340px">
                    <div class="card-title">近一周的BUG修复总览</div>
                    <line-chart></line-chart>
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
                <a-list>
                    <a-list-item v-for="idx in 4" :key="idx">
                        <a-list-item-meta title="Ace Technology Co., Ltd."
                            description="Ace Technology Co., Ltd. is an enterprise located in China.">
                            <template #avatar>
                                <a-avatar shape="square">
                                    <img alt="avatar" src="@/assets/avatar.jpg" />
                                </a-avatar>
                            </template>
                        </a-list-item-meta>
                        <template #actions>
                            <icon-edit />
                            <icon-delete />
                        </template>
                    </a-list-item>
                </a-list>
            </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10" :xxl="10">
            <a-card :bordered="false">
                <div style="height:280px">
                    <div class="card-title" style="margin-bottom: 20px;">演示页</div>
                    <QuickLinks />
                    <br />
                </div>
            </a-card>
        </a-col>
    </a-row>
</template>

<script lang="ts" setup>
import avatar from '@/assets/avatar.jpg'
import { useUserStore } from '@/store'
import { computed, ref } from 'vue'
import LineChart from './lineChart.vue'
import QuickLinks from './quickLinks.vue'

const userStore = useUserStore()
const user = computed(() => userStore)
const itemList = ref<{ icon: string, title: string | number, value: string | number | undefined, unit: string, increase?: number }[]>([{
    title: '昨日BUG数',
    icon: '',
    value: 1000,
    increase: 50,
    unit: '个'
}, {
    title: '当月累计BUG数',
    icon: '',
    value: 9999,
    increase: -300,
    unit: '个'
}, {
    title: '已修复BUG数',
    icon: '',
    value: 999,
    increase: 513,
    unit: '个'
}, {
    title: '未修复BUG数',
    icon: '',
    value: 9000,
    increase: 6,
    unit: '个'
}])

const images = ref<string[]>([avatar, avatar, avatar])
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

.analysis-content {
    margin-top: 6px;
    font-size: 38px;
    font-weight: bold;
    color: var(--color-text-1);
}

.increase {
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: #F70031;
    align-items: center;

    &.isDown {
        color: #20D470;
    }
}

.card-title {
    font-size: 20px;
    font-weight: 500;
    color: var(--color-text-3);
}
</style>