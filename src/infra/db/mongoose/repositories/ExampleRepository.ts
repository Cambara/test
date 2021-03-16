import { IExample } from '../../../../shared/models/example'
import { IExampleDocument, Example } from '../schemas/Example'
import { AbstractRepository, IAbstractRepository } from './AbstractRepository'

export type IExampleRepository = IAbstractRepository<IExampleDocument, IExample>

export class ExampleRepository extends AbstractRepository<IExampleDocument, IExample> implements IExampleRepository {
  private static instance: ExampleRepository
  private constructor () {
    super(Example)
  }

  static getInstance = ():ExampleRepository => {
    if (!ExampleRepository.instance) ExampleRepository.instance = new ExampleRepository()
    return ExampleRepository.instance
  }
}
