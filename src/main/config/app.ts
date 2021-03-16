import './elasticApmConfig'
import express from 'express'
import { applyExpressPlugins } from './expressConfig'
import { Parse } from '../../infra/db/parse'
import { router } from './routes'

global.Parse = Parse
const app = applyExpressPlugins(express())

app.use(express.json())
app.use(router)

export default app
