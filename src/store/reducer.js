import { combineReducers } from 'redux'
import messagesReducer from './messages/messagesReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
})

export default rootReducer
