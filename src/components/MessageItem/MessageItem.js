import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'components/Icon/Icon'
import CloseIcon from 'assets/BlackCross.png'
import styles from './MessageItemStyles'

const MessageItem = ({ message, deleteMessage }) => {
  const onDeletePress = () => {
    const { id: messageId } = message
    deleteMessage(messageId)
  }
  return (
    <View style={styles.wrapper}>
      <Text>{message.content}</Text>
      <TouchableOpacity onPress={onDeletePress}>
        <View style={styles.inputIconWrapper}>
          <Icon source={CloseIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  deleteMessage: PropTypes.func.isRequired,
}

export default MessageItem
