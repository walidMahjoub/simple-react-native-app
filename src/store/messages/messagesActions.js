import { createRequestTypes, generateRequestActions } from 'helpers/StoreHelper'

export const ADD_MESSAGE = createRequestTypes('ADD_MESSAGE')
export const DELETE_MESSAGE = createRequestTypes('DELETE_MESSAGE')
export const FETCH_MESSAGES = createRequestTypes('FETCH_MESSAGES')

export const addMessage = generateRequestActions(ADD_MESSAGE)
export const deleteMessage = generateRequestActions(DELETE_MESSAGE)
export const fetchMessages = generateRequestActions(FETCH_MESSAGES)
