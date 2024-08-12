import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import ResponsiveImage from '../src/components/media/ResponsiveImage.vue'

createApp(App).component('ResponsiveImage', ResponsiveImage).mount('#app')
