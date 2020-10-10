import { createSelector } from 'reselect'

export const initialState = {
  list: [],
}

const messagesSelector = state => state.messages

export const getMessages = createSelector(messagesSelector, state => state.list)
