import express from 'express'
import { applyExpressPlugins } from './expressConfig'

const app = applyExpressPlugins(express())

app.use(express.json())

app.get('/api/test', (req, res) => {
  console.log('chamou si.')
  return res.json({name: 'tiago'})
})

export default app
