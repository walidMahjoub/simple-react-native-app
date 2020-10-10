import { ADD_MESSAGE } from './messagesActions'
import { initialState } from './messagesSelectors'

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        list: [...state.list, { id: Date.now(), content: action.payload }],
      }
    default:
      return state
  }
}

export default messagesReducer
