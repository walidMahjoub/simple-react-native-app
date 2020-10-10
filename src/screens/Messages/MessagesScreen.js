import React, { useCallback } from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import MessageItem from 'components/MessageItem/MessageItem'
import MessageForm from 'components/MessageForm/MessageForm'
import styles from './MessagesScreenStyles'

const MessagesScreen = ({ messages, addMessage, deleteMessage }) => {
  const onSubmitMessage = messageContent => {
    addMessage(messageContent)
  }

  const onDeleteMessagePress = useCallback(
    message => {
      deleteMessage(message)
    },
    [deleteMessage],
  )

  return (
    <View style={styles.container}>
      <MessageForm submitMessage={onSubmitMessage} />
      <ScrollView>
        <View style={styles.messagesWrapper}>
          {messages.map(message => (
            <MessageItem
              key={message.id}
              message={message}
              deleteMessage={onDeleteMessagePress}
            />
          ))}
        </View>
      </ScrollView>
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
  deleteMessage: PropTypes.func.isRequired,
}

export default MessagesScreen
