const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const REQUEST_ACTIONS = {
  [REQUEST]: 'request',
  [SUCCESS]: 'success',
  [FAILURE]: 'failure',
}

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const newAcc = acc
    newAcc[type] = `${base}_${type}`
    return newAcc
  }, {})

export const generateSimpleAction = type => payload => {
  return {
    payload,
    type,
  }
}

export const generateRequestActions = key =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const newAcc = acc
    newAcc[REQUEST_ACTIONS[type]] = payload =>
      generateSimpleAction(key[type])(payload)
    return newAcc
  }, {})
