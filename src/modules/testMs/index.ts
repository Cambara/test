import { AxiosHttpClientProvider } from '../../providers/httpClient/AxiosHttpClientProvider'
import { TestMsController } from './TestMsController'

const httpProvider = AxiosHttpClientProvider.getInstance()
const testMsController = new TestMsController(httpProvider)

export { testMsController }
