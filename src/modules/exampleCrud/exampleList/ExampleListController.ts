import { successRequest, internalErrorRequest, badRequest } from '../../../shared/helpers'
import { IControllerProtocol, HttpRequest, HttpResponse } from '../../../shared/controller/IControllerProtocol'
import { ExampleListCase } from './ExampleListCase'
import * as yup from 'yup'
import { IExampleListDTO } from './ExampleListDTO'
import { IValidatorProvider } from '../../../providers/validator/ValidatorProvider'

export class ExampleListController implements IControllerProtocol {
  private exampleListCase:ExampleListCase
  private validatorProvider: IValidatorProvider

  constructor (exampleListCase:ExampleListCase, validatorProvider: IValidatorProvider) {
    this.exampleListCase = exampleListCase
    this.validatorProvider = validatorProvider
  }

  handle = async (httpRequest:HttpRequest): Promise<HttpResponse> => {
    const query = { ...httpRequest.query } as unknown as IExampleListDTO

    const schema = yup.object({
      page: yup.number(),
      limit: yup.number()
    })

    const validatedParams = await this.validatorProvider.validate(schema, query)

    if (typeof validatedParams !== 'object' || Array.isArray(validatedParams)) {
      return badRequest(validatedParams)
    }

    try {
      const examples = await this.exampleListCase.execute(validatedParams as IExampleListDTO)
      return successRequest({ examples })
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
