import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['messages'], // only messages will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
