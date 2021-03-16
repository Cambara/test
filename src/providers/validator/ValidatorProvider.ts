/* eslint-disable no-useless-constructor */
import * as yup from 'yup'

export interface IValidatorProvider {
  // eslint-disable-next-line @typescript-eslint/ban-types
  validate(schema: yup.ObjectSchema, params: object): Promise<object | object[]>
}

export class ValidatorProvider implements IValidatorProvider {
  private static instance: ValidatorProvider
  // eslint-disable-next-line no-useless-constructor
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor () {}

  static getInstance = ():ValidatorProvider => {
    if (!ValidatorProvider.instance) ValidatorProvider.instance = new ValidatorProvider()
    return ValidatorProvider.instance
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  validate = async (schema: yup.ObjectSchema, params: object): Promise<object | object[]> => {
    try {
      const validatedParams = await schema.validate(params, {
        abortEarly: false,
        stripUnknown: true
      })
      if (!validatedParams) throw new Error('Invalid object')

      return validatedParams
    } catch ({ errors: errorsSchema }) {
      return errorsSchema
    }
  }
}
