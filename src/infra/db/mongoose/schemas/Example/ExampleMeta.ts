
import { Document } from 'mongoose'
import { IExampleMeta } from '../../../../../shared/models/example/ExampleMeta'
import { createDefaultSchema } from '../../helpers/SchemaHelper'

export interface IExampleMetaDocument extends IExampleMeta, Document {
  id: string
}

const ExampleMetaSchema = createDefaultSchema({
  type: String,
  description: String
})

export { ExampleMetaSchema }
