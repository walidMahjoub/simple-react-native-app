import { connect } from 'react-redux'
import { getMessages } from 'store/messages/messagesSelectors'
import {
  addMessage,
  deleteMessage,
  fetchMessages,
} from 'store/messages/messagesActions'
import MessagesScreen from './MessagesScreen'

const mapStateToProps = state => ({
  messages: getMessages(state),
})

const mapDispatchToProps = dispatch => ({
  addMessage: messageContent => dispatch(addMessage.request(messageContent)),
  deleteMessage: messageId => dispatch(deleteMessage.request(messageId)),
  fetchMessages: () => dispatch(fetchMessages.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)
