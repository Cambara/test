import { Request } from 'express'

import { SessionRepository } from '../../infra/db/mongoose/repositories/SessionRepository'
import { HttpRequest, HttpResponse } from '../../shared/controller/IControllerProtocol'
import { unauthorizedRequest, UnauthorizedMessageEnum } from '../../shared/helpers'
import { IMiddleware } from './IMiddleware'

const authParseMiddleware:IMiddleware = async (request: Request, httpRequest: HttpRequest): Promise<HttpResponse | undefined> => {
  const authHeader = request.headers['x-parse-session-token']

  if (!authHeader && typeof authHeader !== 'string') {
    return unauthorizedRequest(UnauthorizedMessageEnum.TOKEN_NOT_SENT)
  }

  const token = authHeader as string

  try {
    const sessionRepository = SessionRepository.getInstance()
    const session = await sessionRepository.findOne({
      _session_token: token
    })

    if (!session) throw new Error('Doesn\'t find the session')

    // request.user = decoded.user
    // request.staff = decoded.staff
    httpRequest.staff = {
      id: 'a1',
      name: 'staff test'
    }

    return
  } catch (err) {
    return unauthorizedRequest(UnauthorizedMessageEnum.INVALID_TOKEN)
  }
}

export { authParseMiddleware }
