import { Model, MongooseFilterQuery, QueryFindOptions, Document, CreateQuery, MongooseUpdateQuery } from 'mongoose'

export interface IAbstractRepository<T extends Document, J> {
  find(
    cond:MongooseFilterQuery<T>,
    project:MongooseFilterQuery<T> | null,
    options: QueryFindOptions
    ):Promise<T[]>

  findOne(cond:MongooseFilterQuery<T>):Promise<T | null>
  create(obj:J):Promise<T>
  deleteById(id:string):Promise<T | null>
  updateOne(cond:MongooseFilterQuery<T>, update:MongooseUpdateQuery<T>):Promise<boolean>
  updateMany(cond:MongooseFilterQuery<T>, update:MongooseUpdateQuery<T>):Promise<boolean>
}

export abstract class AbstractRepository<T extends Document, J> implements IAbstractRepository<T, J> {
  constructor (protected model:Model<T>) {}

  find = async (cond: MongooseFilterQuery<T>, project: MongooseFilterQuery<T> | null, options: QueryFindOptions): Promise<T[]> => {
    return this.model.find(cond, project, options)
  }

  findOne = async (cond: MongooseFilterQuery<T>): Promise<T | null> => {
    return this.model.findOne(cond)
  }

  create = async (obj: J): Promise<T> => {
    const data = obj as CreateQuery<T>
    return this.model.create(data)
  }

  deleteById = async (id:string): Promise<T | null> => {
    return this.model.findByIdAndDelete(id)
  }

  updateOne = async (cond:MongooseFilterQuery<T>, update:MongooseUpdateQuery<T>):Promise<boolean> => {
    const response = await this.model.updateOne(cond, update)
    return response.nModified > 0
  }

  updateMany = async (cond:MongooseFilterQuery<T>, update:MongooseUpdateQuery<T>):Promise<boolean> => {
    const response = await this.model.updateMany(cond, update)
    return response.nModified > 0
  }
}
