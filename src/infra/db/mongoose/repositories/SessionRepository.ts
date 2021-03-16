import { ISession } from '../../../../shared/models/Session'
import { ISessionDocument, Session } from '../schemas/SessionSchema'
import { AbstractRepository, IAbstractRepository } from './AbstractRepository'

export type ISessionRepository = IAbstractRepository<ISessionDocument, ISession>

export class SessionRepository extends AbstractRepository<ISessionDocument, ISession> implements ISessionRepository {
  private static instance: SessionRepository
  private constructor () {
    super(Session)
  }

  static getInstance = ():SessionRepository => {
    if (!SessionRepository.instance) SessionRepository.instance = new SessionRepository()
    return SessionRepository.instance
  }
}
