import AsyncStorage from '@react-native-community/async-storage'

const MESSAGES_KEY = 'messages'

export default class MessagesStorageService {
  static async setMessages(messages) {
    const stringifiedMessages = JSON.stringify(messages)
    await AsyncStorage.setItem(MESSAGES_KEY, stringifiedMessages)
  }

  static async getMessages() {
    const stringifiedMessages = await AsyncStorage.getItem(MESSAGES_KEY)
    const messages = JSON.parse(stringifiedMessages)
    return messages
  }

  static async addMessage(message) {
    const prevMessages = await this.getMessages()
    const messages =
      prevMessages && prevMessages.length
        ? [...prevMessages, message]
        : [message]
    await this.setMessages(messages)
  }

  static async deleteMessage(messageId) {
    const prevMessages = await this.getMessages()
    const messages =
      prevMessages && prevMessages.length
        ? prevMessages.filter(message => messageId !== message.id)
        : []
    await this.setMessages(messages)
  }
}
