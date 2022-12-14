import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import './assets/style/less/common.less'
import '@arco-design/web-vue/dist/arco.css'
import './api/interceptor'
import './mock'
import echarts from '@/utils/echartsRegistry'

const app = createApp(App)

app.use(echarts)
app.use(ArcoVue, {})
app.use(ArcoVueIcon)
app.use(store)
app.use(router)
app.mount('#app')
