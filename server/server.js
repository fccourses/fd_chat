const http = require('http')
const { Chat } = require('./models')
const { port, SOCKET_EVENTS } = require('./configs')
const app = require('./app')

const httpServer = http.createServer(app)

const cors = {
  origin: 'http://localhost:3000'
}

const io = require('socket.io')(httpServer, { cors })

io.on('connection', socket => {
  console.log('connection succesfull')

  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async message => {
    try {
      const savedMessage = await Chat.create(message)
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage)
    } catch (err) {
      console.log(err)
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, err)
    }
  })
})

httpServer.listen(port, () => {
  console.log(`Server started on ${port}!`)
})
