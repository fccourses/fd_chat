const http = require('http')
const { Chat } = require('./models')
const { port, SOCKET_EVENTS } = require('./configs')
const app = require('./app')

const httpServer = http.createServer(app)

const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  console.log('connection succesfull')

  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async message => {
    try {
      console.log(message)
      const parsedMsg = JSON.parse(message)
      const savedMessage = await Chat.create(parsedMsg)
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage)
    } catch (err) {
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, err)
    }
  })
})

httpServer.listen(port, () => {
  console.log(`Server started on ${port}!`)
})
