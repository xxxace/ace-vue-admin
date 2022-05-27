<template>
    <div class="search-modal">
        <a-button class="search-btn" @click="handleClick">
            <template #icon>
                <icon-search style="color:var(--color-text-1)" />
            </template>
            搜索
        </a-button>
        <a-modal v-model:visible="visible" top="12vh" :closable="false" :footer="false" modal-class="my-modal"
            :align-center="false">
            <template #title>
                <icon-search size="20" style="color: rgb(var(--primary-6));" />
                <input ref="input" class="search-input" type="text" autofocus placeholder="输入关键词搜索">
            </template>
            <div>
            </div>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref<HTMLInputElement | null>(null)
const visible = ref(false);

const handleClick = () => {
    visible.value = true;
    setTimeout(() => input.value?.focus())
};
const handleOk = () => {
    visible.value = false;
};
const handleCancel = () => {
    visible.value = false;
}

</script>

<style lang="less">
.arco-modal.my-modal {

    // background-color: aqua !important;
    .arco-modal-header {
        height: 60px !important;

        .arco-modal-title {
            justify-content: flex-start !important;
        }
    }
}

.title-body {
    width: 100%;
    padding: 0 20px;
    text-align: left;
}

.search-input {
    flex: 1;
    margin-left: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-text-1);

    &::-webkit-input-placeholder {
        color: var(--color-text-1);
    }
}
</style>