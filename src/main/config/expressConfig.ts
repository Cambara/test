import * as express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import * as lusca from 'lusca'
import morgan from 'morgan'
import * as useragent from 'express-useragent'
import helmet from 'helmet'
import { IStaffSession, IUserSession } from '../../providers/session/ISessionObject'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: IUserSession,
      staff?: IStaffSession
    }
  }
}

function applyExpressPlugins (api: express.Express): express.Express {
  api.use(bodyParser.json({ limit: '5mb' }))
  api.use(bodyParser.urlencoded({ extended: true }))
  api.use(lusca.xframe('SAMEORIGIN'))
  api.use(lusca.xssProtection(true))
  api.use(morgan('dev'))
  api.disable('x-powered-by')
  api.use(helmet())
  api.use(cors())
  api.set('trust proxy', true)
  api.use(useragent.express())
  return api
}

export { applyExpressPlugins }
