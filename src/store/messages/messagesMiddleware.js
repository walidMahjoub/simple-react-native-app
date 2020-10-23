import MessagesStorageService from 'services/MessagesStorageService'
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  addMessage,
  deleteMessage,
  FETCH_MESSAGES,
  fetchMessages,
} from './messagesActions'

const handleAddMessage = async (payload, dispatch) => {
  try {
    const message = { id: Date.now(), content: payload }
    await MessagesStorageService.addMessage(message)
    dispatch(addMessage.success(message))
  } catch (e) {
    dispatch(addMessage.failure(payload))
  }
}

const handleDeleteMessage = async (payload, dispatch) => {
  try {
    await MessagesStorageService.deleteMessage(payload)
    dispatch(deleteMessage.success(payload))
  } catch (e) {
    dispatch(deleteMessage.failure(payload))
  }
}

const handleFetchMessage = async (payload, dispatch) => {
  try {
    const messages = await MessagesStorageService.getMessages()
    dispatch(fetchMessages.success(messages))
  } catch (e) {
    dispatch(fetchMessages.failure())
  }
}

export default async (action, dispatch) => {
  switch (action.type) {
    case ADD_MESSAGE.REQUEST:
      handleAddMessage(action.payload, dispatch)
      break
    case DELETE_MESSAGE.REQUEST:
      handleDeleteMessage(action.payload, dispatch)
      break
    case FETCH_MESSAGES.REQUEST:
      handleFetchMessage(action.payload, dispatch)
      break
    default:
      break
  }
}
