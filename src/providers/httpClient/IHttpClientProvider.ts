
export interface IHttpClientRequestParameters {
    url: string
    token?: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: object
    config?: {
        headers?: {
            'Authorization'?: string
            'user_key'?:string
            'Accept'?:string
            'Access-Control-Allow-Origin'?:string
            'Content-Type'?:string
        }
    }
}

export interface IHttpClientProvider {
    post<T>(parameters:IHttpClientRequestParameters): Promise<T>
    get<T>({ url, config }:IHttpClientRequestParameters): Promise<T>
}
