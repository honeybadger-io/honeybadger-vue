import Vue from 'vue';
import Honeybadger from 'honeybadger-js';

interface HoneybadgerVue {
    notify(...args: any[]): any;
    setContext<T extends object>(context: T): Honeybadger;
    resetContext(): Honeybadger;
}

declare module 'vue/types/vue' {
    interface Vue {
        $honeybadger: HoneybadgerVue;
    }
}
