import Honeybadger from '@honeybadger-io/js'
import { logError } from './error-logging'

const HoneybadgerVue = {
  install (Vue, options) {
    if (Vue.config.debug) {
      console.log(`Honeybadger configured with ${options.apiKey}`)
    }
    const honeybadger = Honeybadger.configure(options)
    Vue.$honeybadger = honeybadger
    Vue.prototype.$honeybadger = Vue.$honeybadger
    const chainedErrorHandler = Vue.config.errorHandler
    const extractContext = function (vm) {
      const options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options ||
        vm.constructor.options
          : vm || {}
      const name = options.name || options._componentTag
      const file = options.__file
      return {
        isRoot: vm.$root === vm,
        name: name,
        props: options.propsData,
        parentVnodeTag: options._parentVnode ? options._parentVnode.tag : undefined,
        file: file
      }
    }
    const shouldLogError = () => {
      if (Vue.config.warnHandler) {
        return true
      }

      const hasConsole = typeof console !== 'undefined'
      const isDebug = Vue.config.debug || process.env.NODE_ENV !== 'production'
      return hasConsole && isDebug
    }

    Vue.config.errorHandler = (error, vm, info) => {
      honeybadger.notify(error, { context: { vm: extractContext(vm), info: info } })
      if (typeof chainedErrorHandler === 'function') {
        chainedErrorHandler.call(this.Vue, error, vm, info)
      }

      if (shouldLogError()) {
        logError(Vue, error, vm, info)
      }
    }
  }
}

export default HoneybadgerVue
