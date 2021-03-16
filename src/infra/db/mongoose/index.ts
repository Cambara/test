import { ConnectionFactory } from './ConnectionFactory'

const connectionFactory = ConnectionFactory.getInstance(process.env.MONGODB_HOST || 'mongodb://localhost:27017/parse_db?maxIdleTimeMS=0')

export { connectionFactory }
