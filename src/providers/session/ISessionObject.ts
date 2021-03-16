export interface IUserSession {
  id: string,
  cpf: string
}

export interface IStaffSession {
  id: string,
  name: string,
  mainRole: string,
  job: string,
  roles: string[],
  isBlocked: boolean
}

export interface ISessionObject {
  user: IUserSession,
  staff: IStaffSession
}
