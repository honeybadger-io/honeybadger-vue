import { warn } from 'vue'

export function logError (err, info, throwInDev = true) {
  if (process.env.NODE_ENV !== 'production') {
    warn(`Unhandled error${info ? ` during execution of ${info}` : ''}`)
    // crash in dev by default so it's more noticeable
    if (throwInDev) {
      throw err
    } else if (process.env.NODE_ENV !== 'test') {
      console.error(err)
    }
  } else {
    // recover in prod to reduce the impact on end-user
    console.error(err)
  }
}
