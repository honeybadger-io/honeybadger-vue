// As declared in https://github.com/vuejs/core/blob/main/packages/runtime-core/src/errorHandling.ts
const ErrorCodes = {
  SETUP_FUNCTION: 0,
  RENDER_FUNCTION: 1,
  WATCH_GETTER: 2,
  WATCH_CALLBACK: 3,
  WATCH_CLEANUP: 4,
  NATIVE_EVENT_HANDLER: 5,
  COMPONENT_EVENT_HANDLER: 6,
  VNODE_HOOK: 7,
  DIRECTIVE_HOOK: 8,
  TRANSITION_HOOK: 9,
  APP_ERROR_HANDLER: 10,
  APP_WARN_HANDLER: 11,
  FUNCTION_REF: 12,
  ASYNC_COMPONENT_LOADER: 13,
  SCHEDULER: 14
}

// As declared in https://github.com/vuejs/core/blob/main/packages/runtime-core/src/component.ts
const LifecycleHooks = {
  BEFORE_CREATE: 'bc',
  CREATED: 'c',
  BEFORE_MOUNT: 'bm',
  MOUNTED: 'm',
  BEFORE_UPDATE: 'bu',
  UPDATED: 'u',
  BEFORE_UNMOUNT: 'bum',
  UNMOUNTED: 'um',
  DEACTIVATED: 'da',
  ACTIVATED: 'a',
  RENDER_TRIGGERED: 'rtg',
  RENDER_TRACKED: 'rtc',
  ERROR_CAPTURED: 'ec',
  SERVER_PREFETCH: 'sp'
}

// Mapped from ErrorTypeStrings in https://github.com/vuejs/core/blob/main/packages/runtime-core/src/errorHandling.ts
export const ErrorTypesMap = {
  'serverPrefetch hook': LifecycleHooks.SERVER_PREFETCH,
  'beforeCreate hook': LifecycleHooks.BEFORE_CREATE,
  'created hook': LifecycleHooks.CREATED,
  'beforeMount hook': LifecycleHooks.BEFORE_MOUNT,
  'mounted hook': LifecycleHooks.MOUNTED,
  'beforeUpdate hook': LifecycleHooks.BEFORE_UPDATE,
  updated: LifecycleHooks.UPDATED,
  'beforeUnmount hook': LifecycleHooks.BEFORE_UNMOUNT,
  'unmounted hook': LifecycleHooks.UNMOUNTED,
  'activated hook': LifecycleHooks.ACTIVATED,
  'deactivated hook': LifecycleHooks.DEACTIVATED,
  'errorCaptured hook': LifecycleHooks.ERROR_CAPTURED,
  'renderTracked hook': LifecycleHooks.RENDER_TRACKED,
  'renderTriggered hook': LifecycleHooks.RENDER_TRIGGERED,
  'setup function': ErrorCodes.SETUP_FUNCTION,
  'render function': ErrorCodes.RENDER_FUNCTION,
  'watcher getter': ErrorCodes.WATCH_GETTER,
  'watcher callback': ErrorCodes.WATCH_CALLBACK,
  'watcher cleanup function': ErrorCodes.WATCH_CLEANUP,
  'native event handler': ErrorCodes.NATIVE_EVENT_HANDLER,
  'component event handler': ErrorCodes.COMPONENT_EVENT_HANDLER,
  'vnode hook': ErrorCodes.VNODE_HOOK,
  'directive hook': ErrorCodes.DIRECTIVE_HOOK,
  'transition hook': ErrorCodes.TRANSITION_HOOK,
  'app errorHandler': ErrorCodes.APP_ERROR_HANDLER,
  'app warnHandler': ErrorCodes.APP_WARN_HANDLER,
  'ref function': ErrorCodes.FUNCTION_REF,
  'async component loader': ErrorCodes.ASYNC_COMPONENT_LOADER,
  'scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core': ErrorCodes.SCHEDULER
}
