import { IExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { IExampleDocument } from '../../../infra/db/mongoose/schemas/Example'

export class ExampleGetByIdCase {
  private exampleRepository: IExampleRepository

  constructor (exampleRepository: IExampleRepository) {
    this.exampleRepository = exampleRepository
  }

  execute = async (id:string):Promise<IExampleDocument | null> => {
    return this.exampleRepository.findOne({ _id: id })
  }
}
