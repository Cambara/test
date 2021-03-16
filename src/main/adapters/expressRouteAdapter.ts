import { HttpRequest, IControllerProtocol } from '../../shared/controller/IControllerProtocol'
import { Request, Response } from 'express'
import { IMiddleware } from '../middlewares/IMiddleware'

export const adaptRoute = (controller: IControllerProtocol, middlewares?: IMiddleware[]) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query
    }
    let isToContinue = true
    if (middlewares) {
      for (const middleware of middlewares) {
        const middlewareAnswer = await middleware(req, httpRequest)

        if (middlewareAnswer) {
          res.status(middlewareAnswer.statusCode).json(middlewareAnswer.body)
          isToContinue = false
          break
        }
      }
    }
    if (!isToContinue) return
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
