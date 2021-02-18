// TypeScript definitions test file
// See https://github.com/SamVerschueren/tsd#usage

import Vue from 'vue'
import HoneybadgerVue from '.'

const config = {
  apiKey: 'project api key',
  environment: 'production',
  revision: 'git SHA/project version'
}

Vue.use(HoneybadgerVue, config)

const createApp = () => {
  const app = new Vue({
    // render: h => h(App)
  }).$mount('#app')

  return app
}

const app = createApp()

app.$honeybadger.setContext({
  foo: 'bar'
}).notify('testing')

app.$honeybadger.notify('testing')