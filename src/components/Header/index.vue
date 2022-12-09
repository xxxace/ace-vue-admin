<template>
    <header class="ace-header">
        <div class="left-size">
            <i class="icon"></i>
            <h1 class="title">Ace admin vue</h1>
            <icon-menu-unfold v-if="!isDeskTop" class="toggle-icon" size="26px" @click="toggleDrawerMenu" />
        </div>
        <ul class="right-side">
            <li v-if="isDeskTop">
                <SearchModal />
            </li>
            <li>
                <a-tooltip :content="`点击锁屏`">
                    <a-button class="nav-btn" type="outline" shape="circle" @click="handleLockScreen">
                        <template #icon>
                            <icon-lock />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-tooltip :content="`点击切换为${isDark ? '亮色' : '暗黑'}模式`">
                    <a-button class="nav-btn" type="outline" shape="circle" @click="handleToggleTheme">
                        <template #icon>
                            <icon-sun-fill v-if="isDark" />
                            <icon-moon-fill v-else />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li v-if="isDeskTop">
                <a-tooltip :content="`点击${isFullscreen ? '退出' : '切换'}全屏模式`">
                    <a-button class="nav-btn" type="outline" shape="circle" @click="toggleFullScreen">
                        <template #icon>
                            <icon-fullscreen-exit v-if="isFullscreen" />
                            <icon-fullscreen v-else />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-dropdown position="br" :trigger="['hover', 'click']">
                    <div class="avatar-wrap">
                        <a-avatar :size="32" shape="square">
                            <img alt="avatar" src="@/assets/avatar.jpg" />
                        </a-avatar>
                    </div>
                    <template #content>
                        <a-doption>
                            <template #icon>
                                <icon-user />
                            </template>
                            {{ user.name }}
                        </a-doption>
                        <a-doption>
                            <template #icon>
                                <icon-settings />
                            </template>
                            设置
                        </a-doption>
                        <a-divider style="margin:0" />
                        <a-doption @click="logout">
                            <template #icon>
                                <icon-export />
                            </template>
                            退出登录
                        </a-doption>
                    </template>
                </a-dropdown>
            </li>
        </ul>

        <LockScreen :locked="isLockScreen" @unlocked="() => (isLockScreen = false)" />
    </header>
</template>
<script lang="ts" setup>
import { ref, computed, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore, useUserStore } from '@/store';
import LockScreen from './modules/LockScreen/index.vue';
import SearchModal from './modules/SearchModal/index.vue';
import { Modal } from '@arco-design/web-vue';
import { useToggle, useFullscreen } from '@vueuse/core';
import useDarkByDefault from '@/hooks/useDarkByDefault'

const router = useRouter();
const appStore = useAppStore();
const userStore = useUserStore();
const locked = localStorage.getItem('locked')
const user = computed(() => userStore)
const isDeskTop = computed(() => appStore.appDevice === 'desktop')

const isDark = useDarkByDefault();

const toggleDark = useToggle(isDark);

const isLockScreen = ref(locked ? Boolean(locked) : false);

const handleToggleTheme = () => {
    toggleDark();
}

const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

const logout = () => {
    Modal.warning({
        top: '300px',
        title: '提示',
        content: '是否要退出登录？',
        alignCenter: false,
        hideCancel: false,
        onOk() {
            userStore.logout();
            setTimeout(() => router.push({ name: 'login' }), 300);
        }
    })
}

const handleLockScreen = () => {
    isLockScreen.value = true
}

const toggleDrawerMenu = inject('toggleDrawerMenu');
</script>
<style lang="less" scoped>
.ace-header {
    display: flex;
    height: 100%;
    border-bottom: 1px solid var(--color-border);
    justify-content: space-between;

    .left-size {
        display: flex;
        align-items: center;
        margin-left: 14px;

        .icon {
            display: inline-block;
            width: 32px;
            height: 32px;
            background-color: rgb(196, 196, 196);
        }

        .title {
            margin: 0 10px;
            color: var(--color-text-1);
            font-size: 20px;
            font-weight: 500;
            white-space: nowrap;
        }

        .toggle-icon {
            cursor: pointer;
        }
    }

    .right-side {
        display: flex;
        list-style: none;

        padding-right: 20px;

        li {
            display: flex;
            align-items: center;
            padding: 0 10px;

            .nav-btn {
                border-color: rgb(var(--gray-2));
                color: rgb(var(--gray-8));
                font-size: 16px;
            }

            .avatar-wrap {
                padding: 2px;
                border-radius: var(--border-radius-medium);
                background-color: var(--color-fill-4);
                box-sizing: content-box;
                cursor: pointer;
            }
        }

    }
}

.arco-modal .arco-modal-simple {
    :dee(.arco-modal-body) {
        font-size: 30px;
    }
}
</style>
