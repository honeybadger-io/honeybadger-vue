
// Type definitions for honeybadger.js vue integration
// Project: https://github.com/honeybadger-io/honeybadger-vue

declare module '@honeybadger-io/vue' {
  // This is required for Vue 3 createApp support
  import { App } from '@vue/runtime-core'
  import Vue from 'vue'

  const HoneybadgerVue: {
    install(app: App | typeof Vue, options?: any): void
  }

  export default HoneybadgerVue;
}

declare module 'vue/types/vue' {
  import Honeybadger from '@honeybadger-io/js';

  interface Vue {
    $honeybadger: typeof Honeybadger;
  }
}