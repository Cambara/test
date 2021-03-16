import { TypeEnum } from '../../../shared/models/example/ExampleMeta'

export interface IExampleUpdateDTO {
    id: string,
    example: {
        key: string | undefined,
        name: string | undefined,
        metaData: {
            description: string | undefined,
            type: TypeEnum | undefined
        }
    }
}
