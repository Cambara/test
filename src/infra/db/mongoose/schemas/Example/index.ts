
import mongoose, { Document } from 'mongoose'
import { IExample } from '../../../../../shared/models/example'
import { createDefaultSchema } from '../../helpers/SchemaHelper'
import { ExampleMetaSchema } from './ExampleMeta'

export interface IExampleDocument extends IExample, Document {
  _id: string
}

const ExampleSchema = createDefaultSchema({
  _id: String,
  key: String,
  name: String,
  metaData: ExampleMetaSchema,
  isDeleted: Boolean
})

const Example = mongoose.model<IExampleDocument>('Example', ExampleSchema, 'Example')

export { ExampleSchema, Example }
