import { start } from 'elastic-apm-node'
import { serverURL } from 'parse'
if (process.env.NODE_ENV === 'production') {
  try {
    const serviceName = process.env.ELASTIC_APM_SERVICE_NAME || 'ms-logs-dev'
    const serverUrl = process.env.ELASTIC_APM_SERVER_URL || 'http://apm-server-apm-server.monitoring.svc.cluster.local:8200'
    const apm = start({
      serviceName,
      serverUrl
    })
    const isStarted = apm.isStarted() ? 'started' : 'doesn\'t started'
    console.log(`${isStarted} Elastic APM Name: ${serviceName}, Url: ${serverURL}`)
  } catch (error) {
    console.log(error)
  }
}
