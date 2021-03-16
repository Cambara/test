import 'dotenv/config'

import app from './app'


const port = parseInt(process.env.QUEUE_PORT || '3001')

app.listen(port, '0.0.0.0', () => {
  console.log(`server is running on PORT ${port}`)
})
