import { ValidatorProvider } from '../../../providers/validator/ValidatorProvider'
import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { ExampleListCase } from './ExampleListCase'
import { ExampleListController } from './ExampleListController'

const validatorProvider = ValidatorProvider.getInstance()
const exampleRepository = ExampleRepository.getInstance()
const exampleListCase = new ExampleListCase(exampleRepository)
const exampleListController = new ExampleListController(exampleListCase, validatorProvider)

export { exampleListCase, exampleListController }
