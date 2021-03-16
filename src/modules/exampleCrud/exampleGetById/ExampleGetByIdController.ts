import { successRequest, internalErrorRequest, notFoundRequest, NotFoundMessageEnum } from '../../../shared/helpers'
import { IControllerProtocol, HttpRequest, HttpResponse } from '../../../shared/controller/IControllerProtocol'
import { ExampleGetByIdCase } from './ExampleGetByIdCase'

export class ExampleGetByIdController implements IControllerProtocol {
  private exampleGetByIdCase: ExampleGetByIdCase

  constructor (exampleGetByIdCase: ExampleGetByIdCase) {
    this.exampleGetByIdCase = exampleGetByIdCase
  }

  handle = async (httpRequest:HttpRequest): Promise<HttpResponse> => {
    const { id } = httpRequest.params

    try {
      const example = await this.exampleGetByIdCase.execute(id)

      if (!example) {
        return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND)
      }
      return successRequest({ example })
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
