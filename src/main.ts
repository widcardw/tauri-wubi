import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.mount('#app')
