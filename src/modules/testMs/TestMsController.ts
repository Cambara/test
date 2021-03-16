import { IHttpClientProvider } from '../../providers/httpClient/IHttpClientProvider'
import { HttpResponse, IControllerProtocol } from '../../shared/controller/IControllerProtocol'
import { internalErrorRequest, successRequest } from '../../shared/helpers'

export class TestMsController implements IControllerProtocol {
  private httpClientProvider:IHttpClientProvider
  constructor (httpClientProvider:IHttpClientProvider) {
    this.httpClientProvider = httpClientProvider
  }

  handle = async (): Promise<HttpResponse> => {
    try {
      const link = `http://${process.env.QUEUE_SERVICE_HOST}:3001/api/test`
      console.log(link)
      const example = await this.httpClientProvider.get<{data:unknown}>({
        url: link
      })

      return successRequest({ example: example.data })
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
