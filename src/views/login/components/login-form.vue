<template>
    <div class="login-form">
        <div class="title">登录 Ace admin vue</div>
        <div class="sub-title">登录 Ace admin vue</div>
        <div class="error-msg">账号或密码错误</div>

        <a-form ref="formRef" :model="form" :style="{ width: '600px' }">
            <a-form-item field="name" label="Username" :rules="rules">
                <a-input v-model="form.name" placeholder="please enter your username..." />
            </a-form-item>
            <a-form-item field="post" label="Post">
                <a-input v-model="form.post" placeholder="please enter your post..." />
            </a-form-item>
            <a-form-item field="isRead">
                <a-checkbox v-model="form.isRead">
                    I have read the manual
                </a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button @click="handleClick">Set Status</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" scope></script>

<style lang="less" scoped>
.login-form {
    width: 380px;
    margin: 0 auto;

    .title {
        color: var(--color-text-1);
        font-size: 26px;
        font-weight: 500;
        line-height: 34px;
    }

    .sub-title {
        color: var(--color-text-3);
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 10px;
    }

    .error-msg {
        color: rgba(var(--red-6));
        font-size: 14px;
        line-height: 22px;
    }
}
</style>