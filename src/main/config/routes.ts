import { Router } from 'express'
import { authParseMiddleware } from '../middlewares/authParse'
import {
  exampleAddController,
  exampleGetByIdController,
  exampleListController,
  exampleUpdateController,
  exampleDeleteByIdController,
  testMsController
} from '../../modules'
import { adaptRoute } from '../adapters/expressRouteAdapter'

const router = Router()

router.get('/health', (request, response) => response.status(200).send())

router.get('/api/test', adaptRoute(testMsController))
router.get('/api/examples', adaptRoute(exampleListController, [authParseMiddleware]))
router.post('/api/examples', adaptRoute(exampleAddController))
router.get('/api/examples/:id', adaptRoute(exampleGetByIdController))
router.put('/api/examples/:id', adaptRoute(exampleUpdateController))
router.delete('/api/examples/:id', adaptRoute(exampleDeleteByIdController))

export { router }
