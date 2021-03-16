import { IExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { IExampleAddDTO } from './ExampleAddDTO'
import { v4 as uuidv4 } from 'uuid'
import { IExampleDocument } from '../../../infra/db/mongoose/schemas/Example'
import { IExample } from '../../../shared/models/example'

export class ExampleAddCase {
  private exampleRepository:IExampleRepository

  constructor (exampleRepository:IExampleRepository) {
    this.exampleRepository = exampleRepository
  }

  execute = async (params:IExampleAddDTO): Promise<IExampleDocument> => {
    const exampleData:IExample = {
      ...params,
      _id: uuidv4(),
      isDeleted: false
    }
    return this.exampleRepository.create(exampleData)
  }
}
