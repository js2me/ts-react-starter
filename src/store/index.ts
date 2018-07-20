import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export function configureStore(initialState?) {
  const middlewares = compose(applyMiddleware(thunk))

  const store = createStore(reducers, middlewares)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
