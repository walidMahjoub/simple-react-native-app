import { ADD_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGES } from './messagesActions'
import { initialState } from './messagesSelectors'

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE.SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      }
    case DELETE_MESSAGE.SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false,
      }
    case FETCH_MESSAGES.SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      }
    case ADD_MESSAGE.REQUEST:
    case DELETE_MESSAGE.REQUEST:
    case FETCH_MESSAGES.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_MESSAGE.FAILURE:
    case DELETE_MESSAGE.FAILURE:
    case FETCH_MESSAGES.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default messagesReducer
