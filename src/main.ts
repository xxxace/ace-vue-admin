import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import './assets/style/less/common.less'
import '@arco-design/web-vue/dist/arco.css'
import './api/interceptor'
// 开发环境下引入mock
if (import.meta.env.VITE_MODE === 'devlopment') {
    import(`./mock`).then((res) => {
        const { mock } = res.default
        mock()
    })
}

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)
app.use(store)
app.use(router)
app.mount('#app')
