<template>
    <div class="login-form">
        <div class="title">登录 Ace admin vue</div>
        <div class="sub-title">登录 Ace admin vue</div>
        <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>

        <a-form ref="formRef" :model="form" :style="{ width: '100%' }" :rules="rules" @submit="(handleSubmit as any)">
            <a-form-item field="username" hide-label>
                <a-input v-model="form.username" placeholder="账号" allow-clear>
                    <template #prefix>
                        <icon-user />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item field="password" hide-label>
                <a-input-password v-model="form.password" placeholder="密码" allow-clear>
                    <template #prefix>
                        <icon-lock />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item field="isRead" hide-label>
                <a-checkbox v-model="form.isRemember" @change="(setisRemember as any)">
                    记住密码
                </a-checkbox>
            </a-form-item>
            <a-form-item hide-label>
                <a-button type="primary" html-type="submit" long :loading="loading">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';
import { LoginData } from '@/api/user';
import useLoading from '@/hooks/loading';
import { Notification } from '@arco-design/web-vue';
import type { FieldRule, ValidatedError } from '@arco-design/web-vue/es/form/interface';

const errorMsg = ref('')
const { loading, setLoading } = useLoading()
const router = useRouter()
const userStore = useUserStore()
const loginConfig = useStorage('login-config', { username: '', password: '', isRemember: false })
const rules = reactive<Record<string, FieldRule | FieldRule[]>>({
    'username': [{ required: true, message: '账号不能为空' }],
    'password': [{ required: true, message: '密码不能为空' }]
})

const form = reactive({
    username: loginConfig.value.username,
    password: loginConfig.value.isRemember ? loginConfig.value.password : '',
    isRemember: loginConfig.value.isRemember
})

const handleSubmit = async ({ values, errors }: {
    values: LoginData;
    errors: Record<string, ValidatedError> | undefined;
}) => {
    if (!errors) {
        setLoading(true)
        try {
            await userStore.login(values);
            Notification.success({
                title: '登录成功',
                content: '欢迎回来!'
            });

            const { username, password } = values;
            const { isRemember } = loginConfig.value;
            errorMsg.value = '';
            loginConfig.value.username = username;
            loginConfig.value.password = isRemember ? password : '';
            if (router.currentRoute.value.query) {
                setTimeout(() => router.push({ path: '/' }), 300)
            } else {
                setTimeout(() => router.push({ path: router.currentRoute.value.query as any }), 300)
            }

        } catch (e) {
            errorMsg.value = (e as Error).message
        } finally {
            setLoading(false)
        }
    }
}

const setisRemember = (value: boolean) => {
    loginConfig.value.isRemember = value
}
</script>

<style lang="less" scoped>
.login-form {
    width: 340px;
    margin: 0 auto;
    padding-top: 24vh;

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