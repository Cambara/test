import { successRequest, internalErrorRequest, notFoundRequest, NotFoundMessageEnum, badRequest } from '../../../shared/helpers'
import { IControllerProtocol, HttpRequest, HttpResponse } from '../../../shared/controller/IControllerProtocol'
import { ExampleUpdateCase } from './ExampleUpdateCase'
import * as yup from 'yup'
import { IValidatorProvider } from '../../../providers/validator/ValidatorProvider'
import { IExampleUpdateDTO } from './ExampleUpdateDTO'
import { TypeEnum } from '../../../shared/models/example/ExampleMeta'

export class ExampleUpdateController implements IControllerProtocol {
  private exampleUpdateCase: ExampleUpdateCase
  private validatorProvider: IValidatorProvider

  constructor (exampleUpdateCase:ExampleUpdateCase, validatorProvider:IValidatorProvider) {
    this.exampleUpdateCase = exampleUpdateCase
    this.validatorProvider = validatorProvider
  }

  handle = async (httpRequest:HttpRequest): Promise<HttpResponse> => {
    const params = {
      example: { ...httpRequest.body },
      id: httpRequest.params.id
    }

    const schema = yup.object().shape({
      id: yup.string(),
      example: yup.object().shape({
        name: yup.string().required(),
        key: yup.string().required(),
        metaData: yup.object({
          type: yup.mixed().oneOf(Object.values(TypeEnum)),
          description: yup.string().required()
        })
      })
    })

    const validatedParams = await this.validatorProvider.validate(schema, params)

    if (typeof validatedParams !== 'object' || Array.isArray(validatedParams)) {
      return badRequest(validatedParams)
    }

    try {
      const isUpdated = await this.exampleUpdateCase.execute(validatedParams as IExampleUpdateDTO)

      if (!isUpdated) {
        return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND)
      }

      return successRequest({})
    } catch (error) {
      return internalErrorRequest(error)
    }
  }
}
