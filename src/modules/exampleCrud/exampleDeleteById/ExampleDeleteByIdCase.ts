import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { IExampleDocument } from '../../../infra/db/mongoose/schemas/Example'

export class ExampleDeleteByIdCase {
    private exampleRepository:ExampleRepository

    constructor (exampleRepository:ExampleRepository) {
      this.exampleRepository = exampleRepository
    }

    execute = async (id:string):Promise<IExampleDocument | null> => {
      return this.exampleRepository.deleteById(id)
    }
}
