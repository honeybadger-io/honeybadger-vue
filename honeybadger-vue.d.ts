// Type definitions for honeybadger.js vue integration
// Project: https://github.com/honeybadger-io/honeybadger-vue

import { App } from 'vue';
import * as Honeybadger from '@honeybadger-io/js'

declare module '@vue/runtime-core' {
  interface App {
    $honeybadger: typeof Honeybadger
  }
}

declare var HoneybadgerVue: {
  install(app: App, options?: any): void
}

export default HoneybadgerVue
