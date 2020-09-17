import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'


export const DD_RUM = () => {
  datadogRum.init({
      applicationId: 'abb92086-a6c4-4a3e-86c4-9c64a0114e58',
      clientToken: 'pub7b5e702721d6937e0e1d56fe37745942',
      site: 'datadoghq.com',
      service: 'local-storage',
      env: 'demo',
      version: '1.0.0',
      sampleRate: 100,
      trackInteractions: true,
      trackSessionAcrossSubdomains: true
      // useCrossSiteSessionCookie: true,
      // useSecureSessionCookie: true
  });
}

function initalizeDDLogs() {
  return new Promise(resolve => {
    datadogLogs.init({
        clientToken: 'pub7b5e702721d6937e0e1d56fe37745942',
        site: 'datadoghq.com',
        forwardErrorsToLogs: true,
        isCollectingError: true,
        silentMultipleInit: true,
        service: 'local-storage',
        env: 'demo',
        version: '1.0.0',
        trackSessionAcrossSubdomains: true,
        sampleRate: 100
        // useSecureSessionCookie: true,
        // useCrossSiteSessionCookie: true,
        // trackSessionAcrossSubdomains: true
      })

  })
}

async function setLogLevel() {
  const result = await initalizeDDLogs()
  if (!!result) {
    datadogLogs.logger.setLevel('debug');
    datadogLogs.addLoggerGlobalContext('referrer', document.referrer);
    datadogLogs.logger.setHandler('console');
  }
}

export const ASYNC_DD_LOGS = () => {
  setLogLevel()
}


export const DD_LOGS = () => {
  datadogLogs.init({
    clientToken: 'pub7b5e702721d6937e0e1d56fe37745942',
    site: 'datadoghq.com',
    forwardErrorsToLogs: true,
    isCollectingError: true,
    silentMultipleInit: true,
    service: 'local-storage',
    env: 'demo',
    version: '1.0.0',
    // trackSessionAcrossSubdomains: true,
    sampleRate: 100
    // useSecureSessionCookie: true,
    // useCrossSiteSessionCookie: true,
    // trackSessionAcrossSubdomains: true
  })
}
