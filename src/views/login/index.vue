<template>
    <div class="login">
        <div class="logo">
            <img alt="logo"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" />
            <div class="logo-text">Ace admin vue</div>
        </div>
        <LoginForm />
    </div>
</template>

<script lang="ts" setup>
import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
.login {
    .logo {
        display: flex;
        height: 60px;
        width: 1200px;
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
}
</style>

