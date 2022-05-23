<template>
    <div class="login">
        <div class="logo">
            <img alt="logo"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" />
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
        height: 60px;
        max-width: 1200px;
        margin: 0 auto;

        img {
            width: 60px;
        }

        .logo-text {
            margin-left: 10px;
            line-height: 60px;
            color: var(--color-text-1);
            font-size: 20px;
        }
    }

    .container {
        position: relative;
        height: calc(100vh - 60px);
        padding: 0;
        margin: 0;
    }
}
</style>

