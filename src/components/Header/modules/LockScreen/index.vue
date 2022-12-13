<template>
    <Transition name="fade" mode="out-in">
        <div v-if="props.locked" class="lock-screen" @click.self="handleShowUnlock">
            <Transition name="fade" mode="out-in">
                <div v-if="showUnlock" class="unlock-wrap">
                    <div class="unlock">
                        <a-avatar :size="180">
                            <img alt="avatar" src="@/assets/avatar.jpg" />
                        </a-avatar>
                        <div style="font-size: 48px;margin:4px 0 24px 0;">{{ user.name }}</div>
                        <div class="password" ref="passwordWrapper">
                            <a-input-password v-model="password" placeholder="密码 123456" autofocus
                                @focus="() => passwordWrapper?.classList.add('foucs')"
                                @blur="() => passwordWrapper?.classList.remove('foucs')" @press-enter="handleEnter" />
                            <a-button @click="handleEnter">
                                <template #icon>
                                    <icon-arrow-right />
                                </template>
                            </a-button>
                        </div>
                        <div v-if="isError" class="tips">密码错误</div>
                    </div>
                </div>
                <div v-else class="date-time">
                    <div class="timer">{{ time }}</div>
                    <div class="date">{{ date }}，星期{{ weekTrans(week) }}</div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { computed, ref, defineProps, withDefaults, onMounted, onBeforeUnmount } from 'vue'
import { useNow, useToggle, useDateFormat } from '@vueuse/core'
import { useUserStore } from '@/store';

export interface LockScreenPorps {
    locked: boolean
}

const props = withDefaults(defineProps<LockScreenPorps>(), { locked: false })
const emit = defineEmits<{
    (e: 'unlocked'): void
}>()
const isError = ref(false);
const password = ref<string>();
const passwordWrapper = ref<HTMLDivElement>();
const userStore = useUserStore()
const user = computed(() => userStore)
const [showUnlock, toggleShowUnlock] = useToggle(false)
const now = useNow()
const weeks = ['日', '一', '二', '三', '四', '五', '六']
const time = useDateFormat(now, 'HH : mm')
const date = useDateFormat(now, 'MM月DD日')
const week = useDateFormat(now, 'd')
const weekTrans = (i: string | number) => weeks[Number(i)];

const handleShowUnlock = () => toggleShowUnlock()

const handleEnter = () => {
    if (password.value === '123456') {
        isError.value = false
        setTimeout(() => {
            password.value = ''
            emit('unlocked')
            toggleShowUnlock()
        })
    } else {
        console.log('密码错误')
        isError.value = true
    }
}

const storageHanlder = (e: StorageEvent) => {
    if (e.key === 'locked' && e.oldValue === 'true' && e.newValue === null) {
        localStorage.setItem('locked', 'true')
    }
}
onMounted(() => {
    window.addEventListener('storage', storageHanlder)

    const header: HTMLElement = document.querySelector('.ace-header') as HTMLElement
    header[`lock-screen-observer`] = new MutationObserver((e) => {
        setTimeout(() => {
            if (e[0] && e[0].removedNodes && e[0].removedNodes.length) {
                if ((e[0].removedNodes[0] as HTMLElement).className === 'lock-screen') {
                    window.location.reload();
                }
            }
        }, 200)
    })

    header[`lock-screen-observer`].observe(header, {
        childList: true,
        attributes: true,
        subtree: true
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('storage', storageHanlder)
})
</script>

<style lang="less" scoped>
.lock-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.1);
    z-index: 999999;
    backdrop-filter: blur(8px);
    cursor: pointer;
    user-select: none;
    color: var(--color-text-1);

    .unlock-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(51, 51, 51, 0.1);
        z-index: 999999;
        backdrop-filter: blur(4px);
        -webkit-tap-highlight-color: transparent;

        .unlock {
            display: flex;
            flex-flow: column;
            position: absolute;
            top: 24%;
            left: 0;
            width: 100%;
            justify-content: center;
            align-items: center;
            transform: translate(0);
            box-sizing: border-box;

            .password {
                display: flex;
                box-sizing: border-box;
                border: 2px solid rgba(255, 255, 255, 0.3);

                .arco-input-wrapper {
                    border-radius: 0;
                }

                .arco-input-wrapper:focus-within,
                .arco-input-wrapper.arco-input-foucs {
                    border-color: transparent;
                }

                .arco-btn-secondary[type='button'] {
                    color: #fff;
                    background-color: transparent;
                }

                &.foucs {
                    border: 2px solid rgba(255, 255, 255, 0.6);
                }
            }

            .tips {
                margin-top: 6px;
                color: red;
            }
        }
    }

    .date-time {
        position: absolute;
        left: 5%;
        bottom: 10%;

        .timer {
            font-size: 120px;
            font-weight: 400;
        }

        .date {
            // padding-left: 10px;
            font-size: 54px;
            font-weight: 500;
        }
    }

    @media screen and (max-width:490px) {
        .date-time {
            .timer {
                font-size: 80px;
                font-weight: 400;
            }

            .date {
                font-size: 34px;
                font-weight: 500;
            }
        }
    }

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>