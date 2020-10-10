import { connect } from 'react-redux'
import { getMessages } from 'store/messages/messagesSelectors'
import { addMessage, deleteMessage } from 'store/messages/messagesActions'
import MessagesScreen from './MessagesScreen'

const mapStateToProps = state => ({
  messages: getMessages(state),
})

const mapDispatchToProps = dispatch => ({
  addMessage: messageContent => dispatch(addMessage(messageContent)),
  deleteMessage: messageId => dispatch(deleteMessage(messageId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)
