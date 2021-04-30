import ACTIONS from './'

export const createMessageRequest = message => ({
  type: ACTIONS.CREATE_MESSAGE_REQUEST,
  payload: { message }
})

export const createMessageSuccess = message => ({
  type: ACTIONS.CREATE_MESSAGE_SUCCESS,
  payload: { message }
})

export const createMessageError = error => ({
  type: ACTIONS.CREATE_MESSAGE_ERROR,
  payload: { error }
})

export const getMessageRequest = () => ({
  type: ACTIONS.GET_MESSAGE_REQUEST
})

export const getMessageSuccess = messages => ({
  type: ACTIONS.GET_MESSAGE_SUCCESS,
  payload: { messages }
})

export const getMessageError = error => ({
  type: ACTIONS.GET_MESSAGE_ERROR,
  payload: { error }
})
