import { IHttpClientProvider, IHttpClientRequestParameters } from './IHttpClientProvider'
import axios from 'axios'
import qs from 'qs'
export class AxiosHttpClientProvider implements IHttpClientProvider {
  private static instance: AxiosHttpClientProvider
  // eslint-disable-next-line @typescript-eslint/ban-types
  private defaultHeaders: object;

  private constructor () {
    this.defaultHeaders = {
      Accept: 'application/json'
    }
  }

  static getInstance = (): AxiosHttpClientProvider => {
    if (!AxiosHttpClientProvider.instance) AxiosHttpClientProvider.instance = new AxiosHttpClientProvider()
    return AxiosHttpClientProvider.instance
  }

  post = async <T>(parameters: IHttpClientRequestParameters): Promise<T> => {
    const config = parameters.config ? parameters.config : {}

    config.headers = parameters.config?.headers ? Object.assign(this.defaultHeaders, parameters.config.headers) : this.defaultHeaders

    const body = config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8' ? qs.stringify(parameters.body) : parameters.body

    return axios.post(parameters.url, body, config)
  }

  get = async <T> ({ url, config }: IHttpClientRequestParameters): Promise<T> => {
    const configuration = config || {}

    configuration.headers = config?.headers ? Object.assign(this.defaultHeaders, config.headers) : this.defaultHeaders
    return axios.get(url, configuration)
  }
}
