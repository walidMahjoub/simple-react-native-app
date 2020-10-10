export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const addMessage = messageContent => ({
  type: ADD_MESSAGE,
  payload: messageContent,
})
export const deleteMessage = messageId => ({
  type: DELETE_MESSAGE,
  payload: messageId,
})
