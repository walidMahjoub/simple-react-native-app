import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import Icon from 'components/Icon/Icon'
import sendMessageIcon from 'assets/send-message.png'
import TextInputField from 'components/TextInputField/TextInputField'
import styles from './MessageFormStyles'

const validate = ({ messageContent }) => {
  const errors = {}
  if (!messageContent) {
    errors.messageContent = 'Required'
  }
  return errors
}

const MessageForm = ({ handleSubmit, submitMessage }) => {
  const submitForm = ({ messageContent }) => {
    submitMessage(messageContent)
  }
  return (
    <View style={styles.sendMessageWrapper}>
      <View style={styles.messageSenderContainer}>
        <Field name="messageContent" component={TextInputField} />
        <TouchableOpacity onPress={handleSubmit(submitForm)}>
          <View style={styles.inputIconWrapper}>
            <Icon source={sendMessageIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

MessageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'message',
  validate,
})(MessageForm)
