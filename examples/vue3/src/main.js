import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import HoneybadgerVue from '../../../src/index'

const config = { apiKey: prompt('Enter the API key for your Honeybadger project:') }
HoneybadgerVue.init(app, config)

app.mount('#app')
