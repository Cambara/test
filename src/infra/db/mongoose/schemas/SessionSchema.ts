
import mongoose, { Document } from 'mongoose'
import { ISession } from '../../../../shared/models/Session'
import { createWithoutTimestampSchema } from '../helpers/SchemaHelper'

export interface ISessionDocument extends ISession, Document {
  _id: string
}

const SessionSchema = createWithoutTimestampSchema({
  _id: String,
  _session_token: String,
  _p_user: String
})

const Session = mongoose.model<ISessionDocument>('Session', SessionSchema, '_Session')

export { SessionSchema, Session }
