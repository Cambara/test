import { IExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { IExampleDocument } from '../../../infra/db/mongoose/schemas/Example'
import { IExampleListDTO } from './ExampleListDTO'

export class ExampleListCase {
  private exampleRepository: IExampleRepository

  constructor (exampleRepository: IExampleRepository) {
    this.exampleRepository = exampleRepository
  }

  execute = async (params:IExampleListDTO):Promise<IExampleDocument[]> => {
    const page = parseInt(params.page || '1')
    const limit = parseInt(params.limit || '100')
    const skip = (page - 1) * limit
    return this.exampleRepository.find({}, null, { limit, skip })
  }
}
