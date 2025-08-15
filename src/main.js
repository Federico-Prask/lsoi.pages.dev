import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

createApp(App)
  .use(router)
  .mount('#app')

router.afterEach((to) => {
  document.title = to.meta.title || 'LSOI Pages' // 默认标题
})

app.use(router)