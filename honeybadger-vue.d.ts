// Type definitions for honeybadger.js vue integration
// Project: https://github.com/honeybadger-io/honeybadger-vue

import Vue from 'vue'
import * as Honeybadger from '@honeybadger-io/js'

declare module 'vue/types/vue' {
  interface Vue {
    $honeybadger: typeof Honeybadger
  }
}

declare const HoneybadgerVue: {
  install(app: typeof Vue, options?: any): void
}

export default HoneybadgerVue