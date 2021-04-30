import { takeLatest, takeEvery } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { getMessagesSaga, createMessageSaga } from './chatSagas'

export default function * rootSaga () {
  yield takeEvery(ACTIONS.CREATE_MESSAGE_REQUEST, createMessageSaga)
  yield takeEvery(ACTIONS.GET_MESSAGE_REQUEST, getMessagesSaga)
}
