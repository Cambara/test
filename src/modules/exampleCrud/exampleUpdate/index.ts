import { ValidatorProvider } from '../../../providers/validator/ValidatorProvider'
import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { ExampleUpdateCase } from './ExampleUpdateCase'
import { ExampleUpdateController } from './ExampleUpdateController'

const validatorProvider = ValidatorProvider.getInstance()
const exampleRepository = ExampleRepository.getInstance()
const exampleUpdateCase = new ExampleUpdateCase(exampleRepository)
const exampleUpdateController = new ExampleUpdateController(exampleUpdateCase, validatorProvider)

export { exampleUpdateCase, exampleUpdateController }
