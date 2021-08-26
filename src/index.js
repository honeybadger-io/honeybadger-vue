import Honeybadger from '@honeybadger-io/js'

const HoneybadgerVue = {
  install (app, options) {
    if (app.config.debug) {
      console.log(`Honeybadger configured with ${options.apiKey}`)
    }
    const honeybadger = Honeybadger.configure(options)
    app.$honeybadger = honeybadger
    app.config.globalProperties.$honeybadger = honeybadger
    const chainedErrorHandler = app.config.errorHandler
    app.config.errorHandler = (error, vm, info) => {
      honeybadger.notify(error, { context: { vm: extractContext(vm), info: info } })
      if (typeof chainedErrorHandler === 'function') {
        chainedErrorHandler.call(app, error, vm, info)
      }
    }
  }
}

function extractContext (vm) {
  const options = vm.$options
  const name = options.name || options._componentTag
  const file = options.__file
  const parentVNodeTag = vm.$options.parent.$vnode.type.name
  return {
    isRoot: vm.$root === vm,
    name: name,
    props: options.propsData,
    parentVnodeTag: parentVNodeTag,
    file: file
  }
}

export default HoneybadgerVue
