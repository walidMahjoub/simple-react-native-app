import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './MessagesScreenStyles'

const MessagesScreen = ({ messages, addMessage }) => {
  const onAddPress = () => {
    addMessage('azerty')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress}>
        <Text>add text to store</Text>
      </TouchableOpacity>
      {messages.map(item => (
        <Text key={item.id}>{item.content}</Text>
      ))}
    </View>
  )
}

MessagesScreen.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addMessage: PropTypes.func.isRequired,
}

export default MessagesScreen
