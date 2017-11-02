import Raven from 'raven-js';

const sentry_key = '2083c31aa52745038ceb32a32033423f';
const sentry_app = '239281';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
