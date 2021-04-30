const express = require('express')
const cors = require('cors')
const { Chat } = require('./models')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res, next) => {
  try {
    const messages = await Chat.find().sort({ createdAt: -1 })
    res.send({ data: messages })
  } catch (error) {
    next(error)
  }
})

app.use((err, req, res, next) => {
  res.status(500).send(err) // bad error handler
})

module.exports = app
