export interface HttpRequest {
  body: any
  query: any
  params: any
  staff?: {
    id: string
    name: string
  }
}

export interface HttpResponse {
  statusCode: number
  body: {
    data?: unknown
    status: boolean
    message: string
    errors?: unknown
    errorMessage?: string
  }
}

export interface IControllerProtocol {
  handle(httpRequest:HttpRequest):Promise<HttpResponse>
}
