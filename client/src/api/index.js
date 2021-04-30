import axios from 'axios'
import { io } from 'socket.io-client'
import store from '../store'
import * as ChatActionCreators from '../actions/chatActionCreators'

const baseUrl = 'localhost:5000'

const SOCKET_EVENTS = {
  NEW_MESSAGE: 'newMessage',
  NEW_MESSAGE_ERROR: 'newMessageError'
}

const socket = io(`ws://${baseUrl}` /* , { transports: ['websocket'] } */)

socket.on(SOCKET_EVENTS.NEW_MESSAGE, message => {
  console.log(message)
  store.dispatch(ChatActionCreators.createMessageSuccess(message))
})

socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error => {
  store.dispatch(ChatActionCreators.createMessageError(error))
})

const httpClient = axios({
  baseURL: `http://${baseUrl}`
})

export const getMessages = () => httpClient.get('/')
export const createMessage = message =>
  socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message)
