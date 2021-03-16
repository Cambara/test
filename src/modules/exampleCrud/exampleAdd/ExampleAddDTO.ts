import { TypeEnum } from '../../../shared/models/example/ExampleMeta'

export interface IExampleAddDTO {
    key: string,
    name: string,
    metaData: {
        description: string,
        type: TypeEnum
    }
}
