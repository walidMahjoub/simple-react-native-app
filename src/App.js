/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from 'store/store'
import { PersistGate } from 'redux-persist/integration/react'
import MessagesScreenContainer from 'screens/Messages/MessagesScreenContainer'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MessagesScreenContainer />
    </PersistGate>
  </Provider>
)

export default App
