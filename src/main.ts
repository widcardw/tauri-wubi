import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'
import App from './App.vue'

const routes = [
  { path: '/', redirect: '/common/Home' },
  {
    path: '/common',
    component: () => import('./layouts/CommonPage.vue'),
    children: [
      { path: '/common/Home', component: () => import('./pages/common/Home.vue') },
      { path: '/common/First', component: () => import('./pages/common/First.vue') },
      { path: '/common/Second', component: () => import('./pages/common/Second.vue') },
    ],
  },
  { path: '/kbd', component: () => import('./pages/kbd/KeyboardPage.vue') },
]

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.mount('#app')
