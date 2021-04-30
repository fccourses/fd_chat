import { put } from 'redux-saga/effects'
import * as ChatActionCreators from '../actions/chatActionCreators'
import * as API from '../api'

export function * getMessagesSaga (action) {
  try {
    const {
      data: { data: messages }
    } = yield API.getMessages()
    yield put(ChatActionCreators.getMessageSuccess(messages))
  } catch (error) {
    yield put(ChatActionCreators.getMessageError(error))
  }
}

export function * createMessageSaga (action) {
  try {
    yield API.createMessage(action.payload.message)
  } catch (error) {
    yield put(ChatActionCreators.createMessageError(error))
  }
}
