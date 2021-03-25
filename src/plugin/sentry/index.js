import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

export default {
  install(Vue) {
    if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_SENTRY_DSN) {
      Sentry.init(
        Vue,
        dsn: process.env.VUE_APP_SENTRY_DSN,
        autoSessionTracking: true,
        integrations: [new Integrations.BrowserTracing()],

        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0
      })
    }
  }
}
