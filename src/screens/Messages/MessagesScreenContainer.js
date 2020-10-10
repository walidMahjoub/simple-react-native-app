import { connect } from 'react-redux'
import { getMessages } from 'store/messages/messagesSelectors'
import { addMessage } from 'store/messages/messagesActions'
import MessagesScreen from './MessagesScreen'

const mapStateToProps = state => ({
  messages: getMessages(state),
})

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)
