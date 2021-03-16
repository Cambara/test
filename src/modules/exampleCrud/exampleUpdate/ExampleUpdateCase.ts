import { IExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { IExampleUpdateDTO } from './ExampleUpdateDTO'

export class ExampleUpdateCase {
  private exampleRepository: IExampleRepository

  constructor (exampleRepository: IExampleRepository) {
    this.exampleRepository = exampleRepository
  }

  execute = async ({ id, example }: IExampleUpdateDTO): Promise<boolean> => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const params = example as object
    return this.exampleRepository.updateOne({
      _id: id
    },
    {
      $set: params
    })
  }
}
