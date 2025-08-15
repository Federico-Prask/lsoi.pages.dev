import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

// 正确初始化方式
const app = createApp(App)
app.use(router)
app.mount('#app')

// 删除原来错误的 mount 方式