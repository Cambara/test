import { ValidatorProvider } from '../../../providers/validator/ValidatorProvider'
import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { ExampleAddCase } from './ExampleAddCase'
import { ExampleAddController } from './ExampleAddController'

const validatorProvider = ValidatorProvider.getInstance()
const exampleRepository = ExampleRepository.getInstance()
const exampleAddCase = new ExampleAddCase(exampleRepository)
const exampleAddController = new ExampleAddController(exampleAddCase, validatorProvider)

export { exampleAddCase, exampleAddController }
