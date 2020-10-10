import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import messagesReducer from './messages/messagesReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  form: formReducer,
})

export default rootReducer
