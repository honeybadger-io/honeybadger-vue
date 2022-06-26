import Vue from 'vue'
import App from './App.vue'
import HoneybadgerVue from '../../../src/index'

const config = { apiKey: prompt('Enter the API key for your Honeybadger project:') }
HoneybadgerVue.init(Vue, config)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
