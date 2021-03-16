
import { HttpResponse } from '../controller/IControllerProtocol'
import { showVerboseLog } from './logHelper'

export enum NotFoundMessageEnum {
  PATIENT_NOT_FOUND = 'Paciente não encontrado no sistema',
  OBJECT_NOT_FOUND = 'Objeto não encontrado'
}

export enum UnauthorizedMessageEnum {
 TOKEN_NOT_SENT = 'Token não enviado',
 INVALID_TOKEN = 'Token invalid'
}

export const successRequest = (data: unknown): HttpResponse => {
  return {
    body: {
      data,
      status: true,
      message: 'Sucesso!'
    },
    statusCode: 200
  }
}

export const badRequest = (errors: unknown): HttpResponse => {
  return {
    body: {
      status: false,
      message: 'Erro ao enviar requisição',
      errors
    },
    statusCode: 400
  }
}

export const unauthorizedRequest = (message: UnauthorizedMessageEnum): HttpResponse => {
  return {
    body: {
      status: false,
      message
    },
    statusCode: 401
  }
}

export const notFoundRequest = (message: NotFoundMessageEnum): HttpResponse => {
  return {
    body: {
      status: false,
      message
    },
    statusCode: 404
  }
}

export const internalErrorRequest = (error:Error): HttpResponse => {
  let errorMessage

  console.log(error)

  if (showVerboseLog()) {
    errorMessage = error.message
  }

  return {
    body: {
      status: false,
      message: 'Erro no sistema. Por favor tente novamente ou entre em contato com o nosso suporte',
      errorMessage
    },
    statusCode: 500
  }
}
