import { ExampleRepository } from '../../../infra/db/mongoose/repositories/ExampleRepository'
import { ExampleGetByIdCase } from './ExampleGetByIdCase'
import { ExampleGetByIdController } from './ExampleGetByIdController'

const exampleRepository = ExampleRepository.getInstance()
const exampleGetByIdCase = new ExampleGetByIdCase(exampleRepository)
const exampleGetByIdController = new ExampleGetByIdController(exampleGetByIdCase)

export { exampleGetByIdCase, exampleGetByIdController }
