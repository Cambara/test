import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { ExampleDeleteByIdCase } from './ExampleDeleteByIdCase'
import { ExampleDeleteByIdController } from './ExampleDeleteByIdController'

const exampleRepository = ExampleRepository.getInstance()
const exampleDeleteByIdCase = new ExampleDeleteByIdCase(exampleRepository)
const exampleDeleteByIdController = new ExampleDeleteByIdController(exampleDeleteByIdCase)

export { exampleDeleteByIdCase, exampleDeleteByIdController }
