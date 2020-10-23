import messagesMiddleware from './messages/messagesMiddleware'

const middlewares = [messagesMiddleware]

export const middleware = store => next => action => {
  middlewares.map(middlewareItem => middlewareItem(action, store.dispatch))
  next(action)
}
