import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Admin from './components/admin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router