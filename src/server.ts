import 'dotenv/config'

import { connectionFactory } from './infra/db/mongoose'

connectionFactory.connect()
  .then(async () => {
    const app = (await import('./main/config/app')).default
    const port = parseInt(process.env.PORT || '3000')

    app.listen(port, () => {
      console.log(`server is running on PORT ${port}`)
    })
  })
  .catch(console.error)
