import { createReduxMiddleware } from 'helpers/MiddlewareHelper'
import messagesMiddleware from './messages/messagesMiddleware'

const middlewares = [messagesMiddleware]

export const middleware = createReduxMiddleware(middlewares)
