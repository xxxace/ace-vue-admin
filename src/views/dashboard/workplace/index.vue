<template>
    <div>
        workplace
        <br />
        <router-link :to="{ name: 'monitor' }">monitor</router-link>
        <br />
        <router-link :to="{ name: '404' }">404</router-link>
        <br />
        <router-link :to="{ name: '403' }">403</router-link>
        <br />
        <router-link :to="{ path: '/noFound1111' }">noFound</router-link>
    </div>
</template>