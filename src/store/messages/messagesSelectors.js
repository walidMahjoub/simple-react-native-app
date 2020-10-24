import { createSelector } from 'reselect'

export const initialState = {
  list: [],
  loading: false,
}

const messagesSelector = state => state.messages

export const getMessages = createSelector(messagesSelector, state => state.list)
export const isLoading = createSelector(
  messagesSelector,
  state => state.loading,
)
