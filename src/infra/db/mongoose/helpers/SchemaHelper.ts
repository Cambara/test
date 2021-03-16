import { Schema } from 'mongoose'

export const createDefaultSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { _id: false, timestamps: true, versionKey: false })

export const createWithoutTimestampSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { _id: false, versionKey: false })
