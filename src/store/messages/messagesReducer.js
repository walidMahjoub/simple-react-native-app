import { ADD_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGES } from './messagesActions'
import { initialState } from './messagesSelectors'

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE.SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case DELETE_MESSAGE.SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      }
    case FETCH_MESSAGES.SUCCESS:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default messagesReducer
