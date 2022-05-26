<template>
    <div>
        monitor
        <a-button @click="getMenu">点击</a-button>
    </div>
</template>

<script lang="ts" setup>
import { getMenuList, login } from '@/api/user';

const getMenu = async () => {
    try {
        console.log(await login({username:'admin',password:'123456'}))
    } catch (e) {
        console.log(e)
    }
}
getMenu()
</script>