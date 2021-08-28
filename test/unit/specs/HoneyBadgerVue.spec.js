import HoneybadgerVue from '@/index.js'
import Honeybadger from '@honeybadger-io/js'
import Miniwolf from '../../../demo/components/Miniwolf'
import TestCanvasForProps from '../TestCanvasForProps.vue'
import sinon from 'sinon'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

describe('HoneybadgerVue', () => {
  let requests, xhr
  let sandbox

  function getConfig () {
    return {
      apiKey: 'FFAACCCC00',
      enableUncaught: false
    }
  }

  function factory (rootComponent = {}, debug = false) {
    const app = createApp(rootComponent)
    if (debug) {
      app.config.debug = true
    }
    return app.use(HoneybadgerVue, getConfig())
  }

  function factoryMount (rootComponent = {}) {
    return mount(rootComponent, {
      global: {
        plugins: [
          [HoneybadgerVue, getConfig()]
        ]
      }
    })
  }

  beforeEach(function () {
    jest.resetModules()

    global.console = {
      log: jest.fn(),
      warn: jest.fn()
    }

    sandbox = sinon.createSandbox()

    // Refresh singleton state.
    // Honeybadger.reset()

    // Stub HTTP requests.
    requests = []
    xhr = sandbox.useFakeXMLHttpRequest()

    xhr.onCreate = function (xhr) {
      return requests.push(xhr)
    }
  })

  afterEach(function () {
    // xhr.restore()
    sandbox.restore()
  })

  function afterNotify (done, run) {
    setTimeout(function () {
      run()
      done()
    }, 50)
  }

  it('should bind the Honeybadger component to an app instance', () => {
    const app = factory()
    expect(app.$honeybadger).toBe(Honeybadger)
  })

  it('Should output debug information', () => {
    factory({}, true)
    expect(global.console.log).toHaveBeenCalledWith('Honeybadger configured with FFAACCCC00')
  })

  it('Should not output debug information', () => {
    factory()
    expect(global.console.log).not.toHaveBeenCalled()
  })

  it('should add an errorHandler', () => {
    const app = factory()

    // Until we .use the plugin, the Vue errorHandler is of type "object."
    expect(typeof app.config.errorHandler).toEqual('function')
  })

  // The following two tests are failing because of a quirk of how the Sinon XmlHttpRequest constructor works. Because
  // that behavior is just different enough to throw an unexpected error when a string is passed to the constructor,
  // our options are:
  //   1) test only that Honeybadger's api is invoked
  //   2) patch Honeybadger-js to invoke the constructor differently
  //   3) patch Sinon to igore a string parameter in the constructor.
  //   4) use a different XmlHttpRequest Spy method instead of Sinon.
  // As long as we trust that Honeybadger-js works as expected we can punt for now.
  // it('should notify through Honeybadger', (done) => {
  //   Honeybadger.notify("don't care")
  //   afterNotify(done, function () {
  //     expect(requests.length).toEqual(1)
  //   })
  // })
  // it('should post an error to the configured destination and API key', (done) => {
  //   constructor.config.errorHandler(new Error('oops'), { $root: true, $options: {} }, 'some descriptive context')
  //   afterNotify(done, function () {
  //     expect(requests.length).toEqual(1)
  //   })
  // })

  it("should invoke Honeybadger's notify", (done) => {
    const app = factory()

    sandbox.spy(app.$honeybadger, 'notify')
    const err = new Error('oops')
    app.config.errorHandler(err, { $root: true, $options: {} }, 'some descriptive context')
    afterNotify(done, function () {
      expect(app.$honeybadger.notify.called).toBeTruthy()
    })
  })

  it('Should bubble up a rendering error to errorHandler', (done) => {
    const wrapper = factoryMount(Miniwolf)
    sandbox.spy(wrapper.vm.$honeybadger, 'notify')
    wrapper.vm.makeSomethingUnrenderable()

    afterNotify(done, function () {
      expect(wrapper.vm.$honeybadger.notify.called).toBeTruthy()
      expect(wrapper.vm.$honeybadger.notify.calledOnce).toBeTruthy()
    })
  })
  describe('when a component has props', () => {
    it('should pass the props in the error notification', (done) => {
      const wrapper = factoryMount(TestCanvasForProps)
      sandbox.spy(wrapper.vm.$honeybadger, 'notify')

      // need to mount component with valid data, so that we can call sandbox.spy
      // when that is done, we set the invalid data which will trigger the error
      wrapper.setData({ total: -1 })

      afterNotify(done, function () {
        expect(wrapper.vm.$honeybadger.notify.called).toBeTruthy()
        sandbox.assert.calledWith(wrapper.vm.$honeybadger.notify, sandbox.match.any, sandbox.match(
          { context: { vm: { props: { count: -1, title: 'Component 1' } } } })
        )
      })
    })
  })
})
