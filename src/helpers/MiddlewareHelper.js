export const createReduxMiddleware = middlewares => {
  const reduxMiddleware = store => next => action => {
    middlewares.map(middlewareItem => middlewareItem(action, store.dispatch))
    next(action)
  }
  return reduxMiddleware
}

export const listenToAction = params => (action, dispatch) => {
  if (params[action.type]) {
    params[action.type](action.payload, dispatch)
  }
}
