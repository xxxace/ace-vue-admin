import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

app.use(ArcoVue,{})
app.use(store)
app.use(router)
app.mount('#app')
