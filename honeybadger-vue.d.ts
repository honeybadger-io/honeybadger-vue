// This is required for Vue 3 createApp support
import { App } from '@vue/runtime-core'
import _Vue from 'vue'
import Honeybadger from '@honeybadger-io/js';

interface HoneybadgerVue {
  notify(...args: any[]): any;
  setContext<T extends object>(context: T): typeof Honeybadger;
  resetContext(): typeof Honeybadger;
}

declare module '@honeybadger-io/vue' {
  const HoneybadgerVue: {
    install(app: App | typeof _Vue, options?: any): void
  }

  export default HoneybadgerVue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $honeybadger: HoneybadgerVue;
  }
}
