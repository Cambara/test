import { successRequest, internalErrorRequest, notFoundRequest, NotFoundMessageEnum } from '../../../shared/helpers'
import { IControllerProtocol, HttpRequest, HttpResponse } from '../../../shared/controller/IControllerProtocol'
import { ExampleDeleteByIdCase } from './ExampleDeleteByIdCase'

export class ExampleDeleteByIdController implements IControllerProtocol {
  private exampleDeleteByIdCase:ExampleDeleteByIdCase

  constructor (exampleDeleteByIdCase:ExampleDeleteByIdCase) {
    this.exampleDeleteByIdCase = exampleDeleteByIdCase
  }

  handle = async (httpRequest:HttpRequest): Promise<HttpResponse> => {
    const id = httpRequest.params.id
    try {
      const example = await this.exampleDeleteByIdCase.execute(id)

      if (!example) {
        return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND)
      }

      return successRequest({ example })
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
