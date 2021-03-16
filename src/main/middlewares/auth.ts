import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { ISessionObject } from '../../providers/session/ISessionObject'

const authMiddleware = async (request:Request, response:Response, next:NextFunction):Promise<unknown> => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'Token não enviado' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = (await promisify(jwt.verify)(token, process.env.APP_SECRET || 'secret')) as unknown as ISessionObject
    request.user = decoded.user
    request.staff = decoded.staff

    return next()
  } catch (err) {
    return response.status(401).json({ error: 'Token invalid' })
  }
}

export { authMiddleware }
