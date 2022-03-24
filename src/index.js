import express from 'express'
import config from './utils/config'
import logger from './utils/logger'

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send({ msg: 'Hello There' })
})

app.listen(port)