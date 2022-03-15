import Honeybadger from '@honeybadger-io/js'
import { handleError } from 'vue'
import { ErrorTypesMap } from './vue-error-types'

const HoneybadgerVue = {
  install (app, options) {
    if (app.config.debug) {
      console.log(`Honeybadger configured with ${options.apiKey}`)
    }
    const honeybadger = Honeybadger.configure(options)
    app.$honeybadger = honeybadger
    app.config.globalProperties.$honeybadger = honeybadger
    const chainedErrorHandler = app.config.errorHandler
    const hbErrorHandler = (error, instance, info) => {
      honeybadger.notify(error, { context: { vm: extractContext(instance), info: info } })
      if (typeof chainedErrorHandler === 'function') {
        chainedErrorHandler.call(app, error, instance, info)
      }

      if (app.config.debug) {
        app.config.errorHandler = undefined
        handleError(error, instance.appContext ? instance : instance._, ErrorTypesMap[info] || info, false)
        app.config.errorHandler = hbErrorHandler
      }
    }
    app.config.errorHandler = hbErrorHandler
  }
}

function extractContext (vm) {
  const options = vm.$options || {}
  const name = options.name || options._componentTag
  const file = options.__file
  const parentName = vm.$parent && vm.$parent.$options ? vm.$parent.$options.name : undefined
  return {
    isRoot: vm.$root === vm,
    name: name,
    props: vm.$props,
    parentName: parentName,
    file: file
  }
}

export default HoneybadgerVue
