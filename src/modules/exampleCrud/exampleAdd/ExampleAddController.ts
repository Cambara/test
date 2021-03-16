import { successRequest, internalErrorRequest, badRequest } from '../../../shared/helpers'
import { IControllerProtocol, HttpRequest, HttpResponse } from '../../../shared/controller/IControllerProtocol'
import { ExampleAddCase } from './ExampleAddCase'
import * as yup from 'yup'
import { IValidatorProvider } from '../../../providers/validator/ValidatorProvider'
import { IExampleAddDTO } from './ExampleAddDTO'
import { TypeEnum } from '../../../shared/models/example/ExampleMeta'

export class ExampleAddController implements IControllerProtocol {
  private exampleAddCase: ExampleAddCase
  private validatorProvider: IValidatorProvider

  constructor (exampleAddCase: ExampleAddCase, validatorProvider: IValidatorProvider) {
    this.exampleAddCase = exampleAddCase
    this.validatorProvider = validatorProvider
  }

  handle = async (httpRequest:HttpRequest): Promise<HttpResponse> => {
    const schema = yup.object({
      name: yup.string().required(),
      key: yup.string().required(),
      metaData: yup.object({
        type: yup.mixed().oneOf(Object.values(TypeEnum)),
        description: yup.string().required()
      })
    })

    const params = { ...httpRequest.body }

    const validatedParams = await this.validatorProvider.validate(schema, params)

    if (typeof validatedParams !== 'object' || Array.isArray(validatedParams)) {
      return badRequest(validatedParams)
    }

    try {
      const example = await this.exampleAddCase.execute(validatedParams as IExampleAddDTO)
      return successRequest({ example })
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
