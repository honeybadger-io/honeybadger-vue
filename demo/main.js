// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App'
import HoneybadgerVue from '@/index.js'

const app = createApp(App)
app.mount('#app')

const config = { apiKey: (process.env.HONEYBADGER_API_KEY || prompt('Enter the API key for your Honeybadger project:')) }
app.use(HoneybadgerVue, config)
