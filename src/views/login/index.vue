<template>
    <div class="login">
        <div class="logo">
            <img alt="logo" src="@/assets/avatar.jpg" />
            <div class="logo-text">Ace admin vue</div>
        </div>
        <div class="container">
            <LoginForm />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts" setup>
import LoginForm from './components/login-form.vue';
import Footer from '@/components/Footer/index.vue';
</script>

<style lang="less" scoped>
.login {
    padding: 0;
    margin: 0;

    .logo {
        display: flex;
        height: 48px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4px;
        box-sizing: border-box;

        img {
            width: 40px;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(0, 0, 0, .4);
        }

        .logo-text {
            margin-left: 10px;
            line-height: 40px;
            color: var(--color-text-1);
            font-size: 20px;
        }
    }

    .container {
        position: relative;
        height: calc(100vh - 48px);
        padding: 0;
        margin: 0;
    }
}
</style>

