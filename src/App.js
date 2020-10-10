/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import store from 'store/store'
import MessagesScreenContainer from 'screens/Messages/MessagesScreenContainer'

const App = () => (
  <Provider store={store}>
    <MessagesScreenContainer />
  </Provider>
)

export default App
