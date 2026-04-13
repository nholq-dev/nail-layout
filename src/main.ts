import { createApp } from 'vue'
import './assets/style-theme.css'
import './assets/style-animation.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')