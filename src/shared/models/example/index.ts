import { IExampleMeta } from './ExampleMeta'

export interface IExample {
  _id: string
  key: string
  name: string
  metaData: IExampleMeta
  isDeleted: boolean
}
