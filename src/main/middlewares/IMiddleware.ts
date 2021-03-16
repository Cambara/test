import { HttpRequest, HttpResponse } from '../../shared/controller/IControllerProtocol'
import { Request } from 'express'

export interface IMiddleware {
  (request: Request, httpRequest: HttpRequest): Promise<HttpResponse | undefined>
}
