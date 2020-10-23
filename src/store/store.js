import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { middleware } from './middleware'

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

export const store = createStoreWithMiddleware(rootReducer)
