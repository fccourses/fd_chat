const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    max: 1024,
    min: 1
  },
  name: {
    type: String,
    required: true,
    max: 1024,
    min: 1
  }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
